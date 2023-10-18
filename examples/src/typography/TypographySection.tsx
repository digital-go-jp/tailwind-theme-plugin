export const TypographySection = () => {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-bold text-2xl">Typography</h2>

      <div className="flex flex-col gap-4">
        <p className="text-heading-2xl">見出しXXL</p>
        <p className="text-heading-xl">見出しXL</p>
        <p className="text-heading-lg">見出しL</p>
        <p className="text-heading-mobile-lg">見出しLモバイル</p>
        <p className="text-heading-md">見出しM</p>
        <p className="text-heading-mobile-md">見出しMモバイル</p>
        <p className="text-heading-sm">見出しS</p>
        <p className="text-heading-mobile-sm">見出しSモバイル</p>
        <p className="text-heading-xs">見出しXS</p>
        <p className="text-heading-mobile-xs">見出しXSモバイル</p>
        <p className="text-heading-2xs">見出しXXS</p>
        <p className="text-heading-mobile-2xs">見出しXXSモバイル</p>

        <hr></hr>

        <p className="text-body-lg">本文L</p>
        <p className="text-body-md">本文M</p>

        <hr></hr>

        <p className="text-label-lg">ラベルL</p>
        <p className="text-label-md">ラベルM</p>

        <hr></hr>

        <p className="text-caption-lg">補足L</p>
        <p className="text-caption-md">補足M</p>

        <hr></hr>

        <p className="text-button">ボタン</p>
        <p className="text-button-xs">ボタンXS</p>

        <hr></hr>

        <p className="leading-sm">line-height s</p>
        <p className="leading-md">line-height m</p>
        <p className="leading-lg">line-height l</p>

        <hr></hr>

        <p className="tracking-sm">letter spacing s</p>
        <p className="tracking-md">line-height m</p>

        <hr></hr>

        <p className="font-regular">weight regular</p>
        <p className="font-medium">weight medium</p>
        <p className="font-bold">weight bold</p>
      </div>
    </section>
  );
};
