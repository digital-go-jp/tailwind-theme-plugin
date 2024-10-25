export const RadiusSection = () => {
  return (
    <section className='flex flex-col gap-8'>
      <div>
        <h2 className='text-std-28B-150'>Radius</h2>
      </div>
      <div className='flex flex-wrap gap-8'>
        <div className='flex flex-col gap-2'>
          <div className={'h-14 w-14 bg-solid-gray-400'} />
          <span className='text-dns-14N-130'>none</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className={'h-14 w-14 bg-solid-gray-400 rounded-8'} />
          <span className='text-dns-14N-130'>8px</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className={'h-14 w-14 bg-solid-gray-400 rounded-16'} />
          <span className='text-dns-14N-130'>16px</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className={'h-14 w-14 bg-solid-gray-400 rounded-32'} />
          <span className='text-dns-14N-130'>32px</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className={'h-14 w-14 bg-solid-gray-400 rounded-full'} />
          <span className='text-dns-14N-130'>full</span>
        </div>
      </div>
    </section>
  );
};
