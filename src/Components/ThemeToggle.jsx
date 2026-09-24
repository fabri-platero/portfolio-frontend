import { useEffect, useState } from 'react';

function getInitialTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label="Toggle theme"
      className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/40 text-lg shadow-sm backdrop-blur-md transition-colors hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-neutral-800 ${className}`}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;
