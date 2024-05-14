import {
 
  IconChecklist,
  IconLayoutDashboard,

} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Rewards',
    label: '3',
    href: '/rewards',
    icon: <IconChecklist size={18} />,
  },
/*
  {
    title: 'Links',
    label: '',
    href: '/links',
    icon: <IconApps size={18} />,
  },
  
 
*/ 
 
]
