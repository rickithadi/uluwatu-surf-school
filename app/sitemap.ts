import type { MetadataRoute } from 'next'

const BASE_URL = 'https://uluwatusurfschool.com'

const routes = ['/', '/lessons', '/about', '/book', '/contact'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === '/' || route === '/book' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/book' ? 0.9 : 0.8,
  }))
}
