/* Tres blobs de luz (violeta, azul electrico, magenta) fijos detras de todo
   el contenido. Los gradientes ya son difusos: no usa filter blur. */
export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="aurora-blob aurora-1 -right-[18%] -top-[22%] size-[72rem]" />
      <div className="aurora-blob aurora-2 -left-[24%] top-[28%] size-[62rem]" />
      <div className="aurora-blob aurora-3 -bottom-[28%] left-[12%] size-[66rem]" />
    </div>
  );
}
