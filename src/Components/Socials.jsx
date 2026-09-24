import { FaEnvelope, FaGithub } from 'react-icons/fa';
import Section from './Section';

const email = 'fabriplatero88@gmail.com';
const githubUsername = 'fabri-platero';
const githubUrl = `https://github.com/${githubUsername}`;

function Socials() {
  return (
    <Section id="contact" number="06" title="Contact">
      <p className="text-xl text-neutral-500 dark:text-neutral-400">
        Feel free to reach out, I'm open to new opportunities.
      </p>

      <div className="mt-6 flex flex-col gap-3">
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
    </Section>
  );
}

export default Socials;
