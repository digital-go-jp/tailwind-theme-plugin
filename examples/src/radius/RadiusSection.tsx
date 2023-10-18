export const RadiusSection = () => {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="font-bold text-2xl">Radius</h2>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-14 bg-solid-grey-400`}></div>
          <span className="text-caption-lg">none</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-14 bg-solid-grey-400 rounded-sm`}></div>
          <span className="text-caption-lg">sm</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-14 bg-solid-grey-400 rounded-md`}></div>
          <span className="text-caption-lg">md</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-14 bg-solid-grey-400 rounded-lg`}></div>
          <span className="text-caption-lg">lg</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-14 bg-solid-grey-400 rounded-full`}></div>
          <span className="text-caption-lg">full</span>
        </div>
      </div>
    </section>
  );
};
