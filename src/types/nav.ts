export interface NavLink {
  id: number
  url: string
  name: string
}

export const navLinks: NavLink[] = [
  { id: 0, url: '#about', name: 'About' },
  { id: 1, url: '#experience', name: 'Experience' },
  { id: 2, url: '#work', name: 'Projects' },
  { id: 3, url: '#contact', name: 'Contact' },
]
