import type { ReactNode } from 'react';
import type { HomeHeroCategoryIconName } from './home-hero.types';

const icons: Record<HomeHeroCategoryIconName, ReactNode> = {
  coffee: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 5h8v4.25A3.75 3.75 0 0 1 7.25 13h-.5A3.75 3.75 0 0 1 3 9.25V5Zm8 1h1.1a1.9 1.9 0 0 1 0 3.8H11M5 2.5c0 .8.8.8.8 1.6M8 2.5c0 .8.8.8.8 1.6" />
    </svg>
  ),
  technology: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2.25" y="2.5" width="11.5" height="8" rx="0.8" />
      <path d="M1.5 13h13l-1-1.5h-11L1.5 13Z" />
    </svg>
  ),
  pets: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <ellipse cx="8" cy="10.5" rx="3.25" ry="2.6" />
      <ellipse cx="3.7" cy="6.2" rx="1.25" ry="1.7" transform="rotate(-25 3.7 6.2)" />
      <ellipse cx="7" cy="4.6" rx="1.2" ry="1.7" />
      <ellipse cx="10.5" cy="4.8" rx="1.2" ry="1.7" transform="rotate(12 10.5 4.8)" />
      <ellipse cx="13" cy="7" rx="1.15" ry="1.55" transform="rotate(28 13 7)" />
    </svg>
  ),
  wellness: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M13.5 2.5C7 2.5 3 5.2 3 9.1A3.4 3.4 0 0 0 6.4 12.5c4 0 6.9-4.3 7.1-10Z" />
      <path d="M2.5 14c1.8-3.1 4.4-5.4 8-7.2" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m1.75 7.2 6.25-5 6.25 5M3.5 6.1v7h9v-7M6.25 13v-4h3.5v4" />
    </svg>
  ),
  baby: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="5.1" r="2.3" />
      <path d="M4 13.5v-1a4 4 0 0 1 8 0v1M5.2 5.4a2.8 2.8 0 0 0 5.6 0" />
    </svg>
  ),
};

export function CategoryIcon({ name }: { name: HomeHeroCategoryIconName }) {
  return icons[name];
}
