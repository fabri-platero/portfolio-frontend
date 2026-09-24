import { useEffect, useState } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function NavBar() {
  const [activeId, setActiveId] = useState(navItems[0].id);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) {
        setActiveId(navItems[navItems.length - 1].id);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[min(90%,_42rem)] -translate-x-1/2 rounded-full border border-black/10 bg-white/40 p-2 text-black shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white">
      <ul className="flex flex-wrap justify-center gap-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block rounded-full px-4 py-2 text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10 ${
                activeId === item.id
                  ? 'font-semibold text-cyan-600 dark:text-cyan-400'
                  : 'text-black/50 dark:text-white/50'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;