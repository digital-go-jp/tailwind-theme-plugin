export const AspectRatioSection = () => {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="font-bold text-2xl">Aspect Ratio</h2>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col gap-2">
          <div className="bg-solid-grey-400 aspect-16/9 w-[300px]"></div>
          <span className="text-caption-lg">16:9</span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-solid-grey-400 aspect-3/2 w-[300px]"></div>
          <span className="text-caption-lg">3:2</span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-solid-grey-400 aspect-1/1 w-[300px]"></div>
          <span className="text-caption-lg">1:1</span>
        </div>
      </div>
    </section>
  );
};
