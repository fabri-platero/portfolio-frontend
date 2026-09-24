import { useEffect, useState } from 'react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function NavBar() {
  const [activeId, setActiveId] = useState(navItems[0].id);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    let ticking = false;

    const updateActiveSection = () => {
      ticking = false;
      const viewportCenter = window.innerHeight / 2;

      let closest = sections[0];
      let closestDistance = Infinity;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closest = section;
        }
      }

      if (closest) {
        setActiveId(closest.id);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[min(96%,48rem)] -translate-x-1/2 rounded-full border border-black/10 bg-white/40 p-2 text-black shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white">
      <ul className="flex flex-wrap justify-center gap-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block rounded-full px-3 py-2 text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10 ${
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