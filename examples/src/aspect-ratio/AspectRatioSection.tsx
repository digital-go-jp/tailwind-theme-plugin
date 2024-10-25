export const AspectRatioSection = () => {
  return (
    <section className='flex flex-col gap-8'>
      <div>
        <h2 className='text-std-28B-150'>Aspect Ratio</h2>
      </div>
      <div className='flex flex-wrap gap-8'>
        <div className='flex flex-col gap-2'>
          <div className='bg-solid-gray-400 aspect-16/9 w-[300px]' />
          <span className='text-dns-14N-130'>16:9</span>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='bg-solid-gray-400 aspect-3/2 w-[300px]' />
          <span className='text-dns-14N-130'>3:2</span>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='bg-solid-gray-400 aspect-1/1 w-[300px]' />
          <span className='text-dns-14N-130'>1:1</span>
        </div>
      </div>
    </section>
  );
};
