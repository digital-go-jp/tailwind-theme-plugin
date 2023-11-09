import { Colors } from './Colors';

export const ColorSection = () => {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="text-std-28B-5">Colors</h2>
        <p className="my-4">例ではbg-*を利用していますが、text-*やfill-*、border-*等、色関連は全てに適用されます。</p>
      </div>
      <Colors
        title="Blue"
        colorClasses={[
          'bg-blue-50',
          'bg-blue-100',
          'bg-blue-200',
          'bg-blue-300',
          'bg-blue-400',
          'bg-blue-500',
          'bg-blue-600',
          'bg-blue-700',
          'bg-blue-800',
          'bg-blue-900',
          'bg-blue-1000',
          'bg-blue-1100',
          'bg-blue-1200',
        ]}
      />
      <Colors
        title="LightBlue"
        colorClasses={[
          'bg-light-blue-50',
          'bg-light-blue-100',
          'bg-light-blue-200',
          'bg-light-blue-300',
          'bg-light-blue-400',
          'bg-light-blue-500',
          'bg-light-blue-600',
          'bg-light-blue-700',
          'bg-light-blue-800',
          'bg-light-blue-900',
          'bg-light-blue-1000',
          'bg-light-blue-1100',
          'bg-light-blue-1200',
        ]}
      />
      <Colors
        title="Cyan"
        colorClasses={[
          'bg-cyan-50',
          'bg-cyan-100',
          'bg-cyan-200',
          'bg-cyan-300',
          'bg-cyan-400',
          'bg-cyan-500',
          'bg-cyan-600',
          'bg-cyan-700',
          'bg-cyan-800',
          'bg-cyan-900',
          'bg-cyan-1000',
          'bg-cyan-1100',
          'bg-cyan-1200',
        ]}
      />
      <Colors
        title="Green"
        colorClasses={[
          'bg-green-50',
          'bg-green-100',
          'bg-green-200',
          'bg-green-300',
          'bg-green-400',
          'bg-green-500',
          'bg-green-600',
          'bg-green-700',
          'bg-green-800',
          'bg-green-900',
          'bg-green-1000',
          'bg-green-1100',
          'bg-green-1200',
        ]}
      />
      <Colors
        title="Lime"
        colorClasses={[
          'bg-lime-50',
          'bg-lime-100',
          'bg-lime-200',
          'bg-lime-300',
          'bg-lime-400',
          'bg-lime-500',
          'bg-lime-600',
          'bg-lime-700',
          'bg-lime-800',
          'bg-lime-900',
          'bg-lime-1000',
          'bg-lime-1100',
          'bg-lime-1200',
        ]}
      />
      <Colors
        title="Yellow"
        colorClasses={[
          'bg-yellow-50',
          'bg-yellow-100',
          'bg-yellow-200',
          'bg-yellow-300',
          'bg-yellow-400',
          'bg-yellow-500',
          'bg-yellow-600',
          'bg-yellow-700',
          'bg-yellow-800',
          'bg-yellow-900',
          'bg-yellow-1000',
          'bg-yellow-1100',
          'bg-yellow-1200',
        ]}
      />
      <Colors
        title="Orange"
        colorClasses={[
          'bg-orange-50',
          'bg-orange-100',
          'bg-orange-200',
          'bg-orange-300',
          'bg-orange-400',
          'bg-orange-500',
          'bg-orange-600',
          'bg-orange-700',
          'bg-orange-800',
          'bg-orange-900',
          'bg-orange-1000',
          'bg-orange-1100',
          'bg-orange-1200',
        ]}
      />
      <Colors
        title="Red"
        colorClasses={[
          'bg-red-50',
          'bg-red-100',
          'bg-red-200',
          'bg-red-300',
          'bg-red-400',
          'bg-red-500',
          'bg-red-600',
          'bg-red-700',
          'bg-red-800',
          'bg-red-900',
          'bg-red-1000',
          'bg-red-1100',
          'bg-red-1200',
        ]}
      />
      <Colors
        title="Magenta"
        colorClasses={[
          'bg-magenta-50',
          'bg-magenta-100',
          'bg-magenta-200',
          'bg-magenta-300',
          'bg-magenta-400',
          'bg-magenta-500',
          'bg-magenta-600',
          'bg-magenta-700',
          'bg-magenta-800',
          'bg-magenta-900',
          'bg-magenta-1000',
          'bg-magenta-1100',
          'bg-magenta-1200',
        ]}
      />
      <Colors
        title="Purple"
        colorClasses={[
          'bg-purple-50',
          'bg-purple-100',
          'bg-purple-200',
          'bg-purple-300',
          'bg-purple-400',
          'bg-purple-500',
          'bg-purple-600',
          'bg-purple-700',
          'bg-purple-800',
          'bg-purple-900',
          'bg-purple-1000',
          'bg-purple-1100',
          'bg-purple-1200',
        ]}
      />
      <Colors
        title="SolidGrey"
        colorClasses={[
          'bg-solid-grey-50',
          'bg-solid-grey-100',
          'bg-solid-grey-200',
          'bg-solid-grey-300',
          'bg-solid-grey-400',
          'bg-solid-grey-417',
          'bg-solid-grey-500',
          'bg-solid-grey-536',
          'bg-solid-grey-600',
          'bg-solid-grey-700',
          'bg-solid-grey-800',
          'bg-solid-grey-900',
        ]}
      />
      <Colors
        title="OpacityGrey"
        colorClasses={[
          'bg-opacity-grey-50',
          'bg-opacity-grey-100',
          'bg-opacity-grey-200',
          'bg-opacity-grey-300',
          'bg-opacity-grey-400',
          'bg-opacity-grey-417',
          'bg-opacity-grey-500',
          'bg-opacity-grey-536',
          'bg-opacity-grey-600',
          'bg-opacity-grey-700',
          'bg-opacity-grey-800',
          'bg-opacity-grey-900',
        ]}
      />
      <Colors title="Success" colorClasses={['bg-success-1', 'bg-success-2']} />
      <Colors title="Error" colorClasses={['bg-error-1', 'bg-error-2']} />
      <Colors title="Warning（Yellow）" colorClasses={['bg-warning-yellow-1', 'bg-warning-yellow-2']} />
      <Colors title="Warning（Orange）" colorClasses={['bg-warning-orange-1', 'bg-warning-orange-2']} />
      <hr></hr>
      <Colors
        title="Sea"
        colorClasses={[
          'bg-sea-50',
          'bg-sea-100',
          'bg-sea-200',
          'bg-sea-300',
          'bg-sea-400',
          'bg-sea-500',
          'bg-sea-600',
          'bg-sea-700',
          'bg-sea-800',
          'bg-sea-900',
          'bg-sea-1000',
          'bg-sea-1100',
          'bg-sea-1200',
        ]}
      />
      <Colors
        title="Sumi"
        colorClasses={[
          'bg-sumi-50',
          'bg-sumi-100',
          'bg-sumi-200',
          'bg-sumi-300',
          'bg-sumi-400',
          'bg-sumi-500',
          'bg-sumi-600',
          'bg-sumi-700',
          'bg-sumi-800',
          'bg-sumi-900',
          'bg-sumi-1000',
          'bg-sumi-1100',
          'bg-sumi-1200',
        ]}
      />
      <Colors
        title="Forest"
        colorClasses={[
          'bg-forest-50',
          'bg-forest-100',
          'bg-forest-200',
          'bg-forest-300',
          'bg-forest-400',
          'bg-forest-500',
          'bg-forest-600',
          'bg-forest-700',
          'bg-forest-800',
          'bg-forest-900',
          'bg-forest-1000',
          'bg-forest-1100',
          'bg-forest-1200',
        ]}
      />
      <Colors
        title="Wood"
        colorClasses={[
          'bg-wood-50',
          'bg-wood-100',
          'bg-wood-200',
          'bg-wood-300',
          'bg-wood-400',
          'bg-wood-500',
          'bg-wood-600',
          'bg-wood-700',
          'bg-wood-800',
          'bg-wood-900',
          'bg-wood-1000',
          'bg-wood-1100',
          'bg-wood-1200',
        ]}
      />
      <Colors
        title="Sun"
        colorClasses={[
          'bg-sun-50',
          'bg-sun-100',
          'bg-sun-200',
          'bg-sun-300',
          'bg-sun-400',
          'bg-sun-500',
          'bg-sun-600',
          'bg-sun-700',
          'bg-sun-800',
          'bg-sun-900',
          'bg-sun-1000',
          'bg-sun-1100',
          'bg-sun-1200',
        ]}
      />
    </section>
  );
};
