import { Moon, Sun } from 'lucide-react';
import { Theme, useTheme } from '@/components/ThemeProvider';

const order: Theme[] = ['light', 'dark'];

const icons: Record<Theme, typeof Sun> = {
  light: Sun,
  dark: Moon,
  system: Sun,
};

const labels: Record<Theme, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'Light',
};

export function ThemeToggle() {
  const { resolved, setTheme } = useTheme();
  const Icon = icons[resolved];
  const next = order[(order.indexOf(resolved) + 1) % order.length];

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Color theme: ${labels[resolved]}. Click to switch to ${labels[next]}.`}
      title={`Theme: ${labels[resolved]} (click for ${labels[next]})`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-subtle bg-surface-muted text-secondary transition-colors duration-300 hover:border-hover hover:text-primary"
    >
      <Icon size={16} />
    </button>
  );
}
