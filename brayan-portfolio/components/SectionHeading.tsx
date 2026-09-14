export function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return (
    <div className="mb-12 max-w-xl">
      <span className="eyebrow">{number} / {eyebrow}</span>
      <h2 className="heading-section">{title}</h2>
    </div>
  );
}
