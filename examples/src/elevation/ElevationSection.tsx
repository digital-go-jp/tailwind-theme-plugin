export const ElevationSection = () => {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="font-bold text-2xl">Elevation</h2>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-14 shadow-1`}></div>
          <span className="text-caption-lg">Style 1</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-14 shadow-2`}></div>
          <span className="text-caption-lg">Style 2</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-14 shadow-3`}></div>
          <span className="text-caption-lg">Style 3</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-14 shadow-4`}></div>
          <span className="text-caption-lg">Style 4</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-14 shadow-5`}></div>
          <span className="text-caption-lg">Style 5</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-14 shadow-6`}></div>
          <span className="text-caption-lg">Style 6</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-14 shadow-7`}></div>
          <span className="text-caption-lg">Style 7</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-14 shadow-8`}></div>
          <span className="text-caption-lg">Style 8</span>
        </div>
      </div>
    </section>
  );
};
