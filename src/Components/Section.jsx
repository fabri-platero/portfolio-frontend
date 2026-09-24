function Section({ id, number, title, children }) {
  return (
    <section
      id={id}
      className="flex h-screen snap-start flex-col justify-center overflow-y-auto py-24"
    >
      <div className="mx-auto w-[min(94%,64rem)] px-4">
        <div className="flex items-center gap-4">
          <span className="font-mono text-lg text-cyan-500">{number}</span>
          <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl">{title}</h2>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default Section;
