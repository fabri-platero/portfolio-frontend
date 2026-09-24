import SectionHeading from './SectionHeading';

function About() {
  return (
    <section id="about" className="scroll-mt-10">
      <SectionHeading number="01" title="About" />
      <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
        I'm a Frontend Developer based in San Juan, Argentina, focused on building responsive,
        accessible web applications
        with <span className="font-medium">React</span> and{' '}
        <span className="font-medium">Next.js</span>. I also work on a mobile app, so I move
        comfortably between web and mobile development, adapting UI and state logic to each
        platform. Currently studying Web Development, always looking for new things to build
        and learn.
      </p>
    </section>
  );
}

export default About;
