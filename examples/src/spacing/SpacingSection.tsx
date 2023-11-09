export const SpacingSection = () => {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <h2 className="text-std-28B-5">Spacing</h2>
        <p className="my-4">例ではpaddingを使っていますが、margin(m-..., mt-..., mx-....等)やborder等にも使えます。</p>
      </div>
      <div className="flex flex-wrap gap-8">
        <div>
          <div className="bg-solid-grey-400 w-14 p-spacing-4"></div>
          <span className="text-dns-14N-3">4px</span>
        </div>
        <div>
          <div className="bg-solid-grey-400 w-14 p-spacing-8"></div>
          <span className="text-dns-14N-3">8px</span>
        </div>
        <div>
          <div className="bg-solid-grey-400 w-14 p-spacing-16"></div>
          <span className="text-dns-14N-3">16px</span>
        </div>
        <div>
          <div className="bg-solid-grey-400 w-14 p-spacing-24"></div>
          <span className="text-dns-14N-3">24px</span>
        </div>
        <div>
          <div className="bg-solid-grey-400 w-14 p-spacing-40"></div>
          <span className="text-dns-14N-3">40px</span>
        </div>
        <div>
          <div className="bg-solid-grey-400 w-14 p-spacing-64"></div>
          <span className="text-dns-14N-3">64px</span>
        </div>
        <div>
          <div className="bg-solid-grey-400 w-14 p-spacing-104"></div>
          <span className="text-dns-14N-3">104px</span>
        </div>
      </div>
    </section>
  );
};
