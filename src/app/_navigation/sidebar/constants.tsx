import { BookIcon, CircleUserIcon, LibraryIcon } from 'lucide-react';
import { accountProfilePath, homePath, ticketsPath } from '@/paths';
import { NavItem } from './types';

export const navItems: NavItem[] = [
  {
    title: 'All Tickets',
    icon: <LibraryIcon />,
    href: homePath(),
  },
  {
    title: 'My Tickets',
    icon: <BookIcon />,
    href: ticketsPath(),
  },
  {
    separator: true,
    title: 'Account',
    icon: <CircleUserIcon />,
    href: accountProfilePath(),
  },
];

export const closedClassName =
  'text-background opacity-0 transition-all duration-300 group-hover:z-40 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100';
