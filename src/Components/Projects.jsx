import SectionHeading from './SectionHeading';

// TODO: reemplazá estos datos de ejemplo por tus proyectos reales
const projects = [
  {
    title: 'StudioDNA',
    description:
      'Web dashboard for gyms, part of MyAthleteDNA. Lets gym owners and staff track member ' +
      'activity and studio performance through AI-driven modules like churn alerts, effort ' +
      'trajectory, class energy index, and member upsell suggestions, all from a single ' +
      'overview.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Game Backlog Tracker',
    status: 'Planned',
    description:
      'Fullstack web app to manage your game backlog: connect accounts like Steam, Xbox, and ' +
      'PlayStation to sync your library, rate and comment on games, and fill out a taste ' +
      'profile that gets sent to an LLM for personalized game recommendations.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'SoundWave',
    description:
      'A music sharing web app where users upload tracks, albums, and playlists, and can ' +
      'like and repost music from other users.',
    tags: ['Laravel', 'PHP', 'Blade', 'SQLite'],
    link: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-10">
      <SectionHeading number="05" title="Projects" />
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          const isPlanned = Boolean(project.status);
          const Wrapper = isPlanned ? 'div' : 'a';

          return (
            <Wrapper
              key={project.title}
              {...(!isPlanned && { href: project.link })}
              className="flex flex-col gap-3 rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-cyan-400 dark:border-neutral-700 dark:hover:border-cyan-500"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-medium">{project.title}</h3>
                {isPlanned && (
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                    {project.status}
                  </span>
                )}
              </div>
              <p className="text-base text-neutral-600 dark:text-neutral-300">
                {project.description}
              </p>
              <div className="mt-1 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-700 dark:text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
