export interface NavLink {
  label: string;
  href: string;
}

export interface Avatar {
  id: string;
  imageUrl: string;
  alt: string;
}

export interface Company {
  name: string;
  logo: string;
}

export interface Consultant {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface FooterLinkColumn {
  title: string;
  links: string[];
}