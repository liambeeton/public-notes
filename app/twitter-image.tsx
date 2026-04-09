import { ImageResponse } from 'next/og';
import { SeoImage } from '@/lib/seo-image';

export const alt = "Liam's Public Notes";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <SeoImage
        eyebrow="Liam Beeton"
        title="Public Notes"
        description="Software development, AI, cybersecurity, photography, trail running, and the rest of my evolving interests."
      />
    ),
    size,
  );
}
