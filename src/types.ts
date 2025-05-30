import type { ImageMetadata } from 'astro'; // Add this import

export interface ContactItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
  role: string;
  description: string;
  url: string;
}
export interface TeamMember {
  name: string;
  title: string;
  image: ImageMetadata;
  icon: string;
  url: string;
}