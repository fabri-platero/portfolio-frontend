function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-sm text-cyan-500">{number}</span>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
    </div>
  );
}

export default SectionHeading;
