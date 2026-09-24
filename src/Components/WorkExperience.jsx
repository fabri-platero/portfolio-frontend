import { FaDumbbell } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    company: 'MyAthleteDNA',
    role: 'Frontend / Mobile Developer',
    period: 'June 2026 - Present',
    duration: '4 months',
    icon: FaDumbbell,
    description:
      'Working on two products: a mobile app that uses AI to analyze athletes\' stats and ' +
      'workout data from wearables, returning personalized AI-driven feedback; and a web ' +
      'dashboard for gyms to track member statistics and overall performance.',
  },
];

function WorkExperience() {
  return (
    <section id="experience" className="scroll-mt-10">
      <SectionHeading number="02" title="Work Experience" />
      <div className="mt-6 flex flex-col gap-8">
        {experiences.map((exp) => {
          const Icon = exp.icon;
          return (
            <div key={exp.company} className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-x-4">
                  <div>
                    <span className="text-lg font-medium">{exp.company}</span>
                    <p className="text-base text-neutral-500 dark:text-neutral-400">{exp.role}</p>
                  </div>
                  <div className="text-right text-base text-neutral-500 dark:text-neutral-400">
                    <p>{exp.period}</p>
                    <p>{exp.duration}</p>
                  </div>
                </div>
                <p className="mt-3 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WorkExperience;
