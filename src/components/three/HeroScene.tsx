import { useEffect, useMemo, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* Campo de partículas en onda con repulsión por mouse, estilo red neuronal.
   Solo se monta cuando no hay prefers-reduced-motion (lo decide Hero.tsx). */

const VERTEX = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uPixelRatio;
  attribute float aRand;
  varying float vAlpha;
  varying float vRand;

  void main() {
    vec3 pos = position;

    float wave =
      sin(pos.x * 0.5 + uTime * 0.55) * 0.45 +
      cos(pos.z * 0.42 + uTime * 0.38) * 0.4 +
      sin((pos.x + pos.z) * 0.22 + uTime * 0.45) * 0.3;
    pos.y += wave;

    float dist = distance(pos.xz, uMouse);
    float force = smoothstep(3.0, 0.0, dist);
    pos.y += force * 1.1;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    gl_PointSize = (0.9 + aRand * 1.3 + force * 1.6) * uPixelRatio * (16.0 / -mv.z);
    gl_PointSize = max(gl_PointSize, 1.0);

    vAlpha = (0.22 + aRand * 0.4 + force * 0.55) * smoothstep(30.0, 12.0, -mv.z);
    vRand = aRand;
  }
`;

const FRAGMENT = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vAlpha;
  varying float vRand;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float alpha = smoothstep(0.5, 0.12, d) * vAlpha;
    vec3 base = mix(uColorB, uColorA, vRand);
    vec3 color = base * (0.55 + 0.45 * vRand);
    gl_FragColor = vec4(color, alpha);
  }
`;

const PLANE = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

interface ParticlesProps {
  dense: boolean;
  pointerNdc: RefObject<THREE.Vector2>;
}

function Particles({ dense, pointerNdc }: ParticlesProps) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const target = useRef(new THREE.Vector2(99, 99));
  const hit = useRef(new THREE.Vector3());

  const { geometry, material } = useMemo(() => {
    const cols = dense ? 110 : 72;
    const rows = dense ? 62 : 42;
    const spanX = 30;
    const spanZ = 18;
    const count = cols * rows;
    const positions = new Float32Array(count * 3);
    const rand = new Float32Array(count);

    let i = 0;
    for (let cx = 0; cx < cols; cx++) {
      for (let rz = 0; rz < rows; rz++) {
        positions[i * 3] = (cx / (cols - 1) - 0.5) * spanX;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = (rz / (rows - 1) - 0.5) * spanZ;
        rand[i] = Math.random();
        i++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(99, 99) },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 1.5) },
        uColorA: { value: new THREE.Color('#b78cff') },
        uColorB: { value: new THREE.Color('#7a8cff') },
      },
    });

    return { geometry, material };
  }, [dense]);

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useFrame((state, delta) => {
    const mat = matRef.current;
    if (!mat) return;
    mat.uniforms.uTime.value += delta;

    state.raycaster.setFromCamera(pointerNdc.current, state.camera);
    if (state.raycaster.ray.intersectPlane(PLANE, hit.current)) {
      target.current.set(hit.current.x, hit.current.z);
    }
    const mouse = mat.uniforms.uMouse.value as THREE.Vector2;
    mouse.lerp(target.current, Math.min(delta * 5, 1));
  });

  return <points geometry={geometry} material={material} ref={(p) => {
    if (p) matRef.current = p.material as THREE.ShaderMaterial;
  }} />;
}

export default function HeroScene() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  /* NDC del puntero calculado a mano con clientX/clientY globales: el pointer
     de R3F usa offsetX relativo al elemento bajo el cursor y salta al pasar
     sobre el titulo o los botones. */
  const pointerNdc = useRef(new THREE.Vector2(99, 99));
  const dense = useMemo(
    () => window.matchMedia('(min-width: 768px)').matches,
    [],
  );

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    function onMove(e: PointerEvent) {
      const rect = el!.getBoundingClientRect();
      pointerNdc.current.set(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -(((e.clientY - rect.top) / rect.height) * 2 - 1),
      );
    }
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="absolute inset-0"
      style={{
        maskImage: 'linear-gradient(to bottom, black 72%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 100%)',
      }}
    >
      <Canvas
        frameloop={inView ? 'always' : 'never'}
        dpr={[1, 1.5]}
        camera={{ position: [0, 3.4, 8.5], fov: 50 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
        onCreated={({ camera }) => camera.lookAt(0, -0.4, 0)}
        style={{ pointerEvents: 'none' }}
      >
        <Particles dense={dense} pointerNdc={pointerNdc} />
      </Canvas>
    </div>
  );
}
