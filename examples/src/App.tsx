import { useEffect } from 'react';
import { ColorSection } from './color/ColorSection';
import { rgb2hex } from './utils';
import { TypographySection } from './typography/TypographySection';
import { SpacingSection } from './spacing/SpacingSection';
import { ElevationSection } from './elevation/ElevationSection';
import { RadiusSection } from './radius/RadiusSection';
import { AspectRatioSection } from './aspect-ratio/AspectRatioSection';

export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.c');
    for (const item of items) {
      const bgColor = getComputedStyle(item.childNodes[0] as HTMLElement).backgroundColor;
      item.childNodes[1].textContent = `#${rgb2hex(bgColor)}`;
    }
  }, []);

  return (
    <main className="p-8 flex flex-col gap-14">
      <ColorSection />

      <TypographySection />

      <AspectRatioSection />

      <RadiusSection />

      <ElevationSection />
    </main>
  );
}
