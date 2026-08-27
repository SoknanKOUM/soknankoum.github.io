import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type Theme = 'system' | 'dark' | 'light';
type Resolved = 'dark' | 'light';

type ThemeContextValue = {
  theme: Theme;
  resolved: Resolved;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'portfolio-theme';

function getSystemPreference(): Resolved {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

function applyTheme(resolved: Resolved) {
  const root = document.documentElement;
  root.classList.toggle('light', resolved === 'light');
  root.classList.toggle('dark', resolved === 'dark');
  root.style.colorScheme = resolved;
}

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light' || stored === 'system') {
    return stored;
  }
  return 'system';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme());
  const [systemPref, setSystemPref] = useState<Resolved>(() =>
    getSystemPreference()
  );

  const resolved: Resolved = theme === 'system' ? systemPref : theme;

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = () =>
      setSystemPref(media.matches ? 'light' : 'dark');
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    applyTheme(resolved);
  }, [resolved]);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  const value = useMemo(
    () => ({ theme, resolved, setTheme }),
    [theme, resolved]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
