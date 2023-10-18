export const SpacingSection = () => {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="font-bold text-2xl">Spacing</h2>
        <p className="my-4">例ではpaddingを使っていますが、margin(m-..., mt-..., mx-....等)やborder等にも使えます。</p>
      </div>
      <div className="flex flex-wrap gap-8">
        <div>
          <div className="bg-solid-grey-400 w-14 p-xs"></div>
          <span className="text-caption-lg">xs</span>
        </div>
        <div>
          <div className="bg-solid-grey-400 w-14 p-sm"></div>
          <span className="text-caption-lg">sm</span>
        </div>
        <div>
          <div className="bg-solid-grey-400 w-14 p-md"></div>
          <span className="text-caption-lg">md</span>
        </div>
        <div>
          <div className="bg-solid-grey-400 w-14 p-lg"></div>
          <span className="text-caption-lg">lg</span>
        </div>
        <div>
          <div className="bg-solid-grey-400 w-14 p-xl"></div>
          <span className="text-caption-lg">xl</span>
        </div>
        <div>
          <div className="bg-solid-grey-400 w-14 p-2xl"></div>
          <span className="text-caption-lg">2xl</span>
        </div>
        <div>
          <div className="bg-solid-grey-400 w-14 p-3xl"></div>
          <span className="text-caption-lg">3xl</span>
        </div>
      </div>
    </section>
  );
};
