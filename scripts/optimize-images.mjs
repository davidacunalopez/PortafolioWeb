/* Convierte los originales de Images/ a WebP optimizados en src/assets/photos/. */
import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const jobs = [
  ['Images/perfil cv.png', 'src/assets/photos/perfil.webp', 900],
  ['Images/dando conferencia.jpg', 'src/assets/photos/charla-1.webp', 1600],
  ['Images/conferencia 2.jpg', 'src/assets/photos/charla-2.webp', 1600],
  ['Images/evento 1 - Piazza DAO.jpg', 'src/assets/photos/evento-piazza-dao.webp', 1600],
  ['Images/Evento 2 - Dev3pack hackathon.jpg', 'src/assets/photos/evento-dev3pack.webp', 1600],
  ['Images/Enveto 3 - Ticoblockchain.jpg', 'src/assets/photos/evento-ticoblockchain.webp', 1600],
  ['Images/team work.jpg', 'src/assets/photos/team-work.webp', 1600],
];

await mkdir('src/assets/photos', { recursive: true });

for (const [src, out, width] of jobs) {
  const info = await sharp(src)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(out);
  console.log(`${out}  ${Math.round(info.size / 1024)} KB  (${info.width}x${info.height})`);
}
