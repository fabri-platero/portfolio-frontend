import Section from './Section';

function About() {
  return (
    <Section id="about" number="01" title="About">
      <p className="max-w-3xl text-xl leading-relaxed text-neutral-600 dark:text-neutral-300">
        I'm a Frontend Developer based in San Juan, Argentina, focused on building responsive,
        accessible web applications
        with <span className="font-medium">React</span> and{' '}
        <span className="font-medium">Next.js</span>. I also work on a mobile app, so I move
        comfortably between web and mobile development, adapting UI and state logic to each
        platform. Currently studying Web Development, always looking for new things to build
        and learn.
      </p>
    </Section>
  );
}

export default About;
