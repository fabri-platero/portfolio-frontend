import { FaGraduationCap } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const education = {
  school: 'Web Development',
  degree: 'Associate Degree in Web Development',
  period: '2024 - Present',
  duration: '2 yrs',
};

function Education() {
  return (
    <section id="education" className="scroll-mt-10">
      <SectionHeading number="04" title="Education" />
      <div className="mt-6 flex gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
          <FaGraduationCap className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-x-4">
            <div>
              <span className="inline-flex items-center gap-2 text-lg font-medium">
                {education.school}
              </span>
              <p className="text-base text-neutral-500 dark:text-neutral-400">{education.degree}</p>
            </div>
            <div className="text-right text-base text-neutral-500 dark:text-neutral-400">
              <p>{education.period}</p>
              <p>{education.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
