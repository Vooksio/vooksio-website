import { getBaseUrl } from '@/lib/config'

const baseUrl = getBaseUrl()

export default function sitemapIndex() {
  return [
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog-sitemap.xml`,
      lastModified: new Date(),
    },
  ]
}