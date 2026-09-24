import { FaEnvelope, FaGithub } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const email = 'fabriplatero88@gmail.com';
const githubUsername = 'fabri-platero';
const githubUrl = `https://github.com/${githubUsername}`;

function Socials() {
  return (
    <section id="contact" className="scroll-mt-10">
      <SectionHeading number="06" title="Contact" />
      <p className="mt-3 text-lg text-neutral-500 dark:text-neutral-400">
        Feel free to reach out, I'm open to new opportunities.
      </p>

      <div className="mt-4 flex flex-col gap-3">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-3 text-xl font-medium text-neutral-800 transition-colors hover:text-cyan-500 dark:text-neutral-100 dark:hover:text-cyan-400"
        >
          <FaEnvelope className="h-5 w-5 shrink-0" />
          {email}
        </a>

        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 text-xl font-medium text-neutral-800 transition-colors hover:text-cyan-500 dark:text-neutral-100 dark:hover:text-cyan-400"
        >
          <FaGithub className="h-5 w-5 shrink-0" />
          {githubUsername}
        </a>
      </div>
    </section>
  );
}

export default Socials;
