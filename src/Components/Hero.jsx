function Hero() {
  return (
    <section id="hero" className="flex h-screen snap-start flex-col items-center justify-center text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-600 dark:text-cyan-400">
        <span className="h-2 w-2 rounded-full bg-cyan-500" />
        Available for opportunities
      </span>
      <h1 className="mt-6 text-7xl font-extrabold tracking-tight sm:text-8xl">
        Hi, I'm <span className="text-cyan-500">Fabrizio Platero</span>
      </h1>
      <p className="mt-6 text-2xl text-neutral-500 dark:text-neutral-400">Frontend Developer</p>
    </section>
  );
}

export default Hero;
