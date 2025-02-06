import { PuzzleIcon, LogInIcon, LogOutIcon, SettingsIcon } from 'lucide-react';
const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';
export const UpperNavItems = [
  {
    title: 'Play',
    icon: PuzzleIcon,
    href: '/game/random',
    color: 'text-orange-500',
  },

  {
    title: 'Tournaments',
    icon: PuzzleIcon,
    // href: '',
    color: 'text-orange-500',
  },
  {
    title: 'Random',
    icon: PuzzleIcon,
    // href: '',
    color: 'text-orange-500',
  },
];

export const LowerNavItems = [
  {
    title: 'Login',
    icon: LogInIcon,
    href: '/login',
    color: 'text-orange-500',
  },
  {
    title: 'Logout',
    icon: LogOutIcon,
    href: `${BACKEND_URL}/auth/logout`,
    color: 'text-orange-500',
  },
];
