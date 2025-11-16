type SectionLayoutProps = {
  children: React.ReactNode;
};

export function SectionLayout({ children }: SectionLayoutProps) {
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-[632px] w-full mx-auto px-4">{children}</div>
    </section>
  );
}
