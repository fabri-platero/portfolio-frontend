import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiSqlite,
  SiTypescript,
} from 'react-icons/si';
import { TbTemplate } from 'react-icons/tb';
import Section from './Section';

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000', darkColor: '#22D3EE' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', icon: SiExpress, color: '#000000', darkColor: '#22D3EE' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'Blade', icon: TbTemplate, color: '#FF2D20' },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57', darkColor: '#89DDFF' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717', darkColor: '#22D3EE' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ],
  },
];

function Skills() {
  return (
    <Section id="skills" number="03" title="Skills">
      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
              {group.label}
            </h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {group.skills.map(({ name, icon: Icon, color, darkColor }) => (
                <span
                  key={name}
                  style={{ '--skill-color': color, '--skill-color-dark': darkColor ?? color }}
                  className="flex cursor-pointer items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-base text-neutral-700 transition-colors hover:text-(--skill-color) dark:bg-neutral-800 dark:text-neutral-200 dark:hover:text-(--skill-color-dark)"
                >
                  <Icon className="h-5 w-5" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
