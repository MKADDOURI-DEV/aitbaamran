import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1.0 },
    { path: '/rooms', priority: 0.8 },
    { path: '/booking', priority: 0.8 },
    { path: '/about', priority: 0.8 },
    { path: '/discover-f-s', priority: 0.5 },
    { path: '/contact', priority: 0.5 },
  ];
  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    priority: r.priority,
  }));
}