type Props = {
  title: string;
  colorClasses: string[];
};

export const Colors = (props: Props) => {
  const { title, colorClasses } = props;

  return (
    <section className='flex flex-col gap-4'>
      <h3 className='text-std-24B-5'>{title}</h3>
      <div className='flex flex-wrap gap-8'>
        {colorClasses.map(colorClass => {
          return (
            <div className='flex flex-col gap-2 c' key={colorClass}>
              <div className={`h-14 w-14 ${colorClass}`} />
              <span className='text-dns-14N-3' />
            </div>
          );
        })}
      </div>
    </section>
  );
};
