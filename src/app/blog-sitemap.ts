import { MetadataRoute } from 'next'
import { getBaseUrl } from '@/lib/config'
import { routing } from '@/i18n/routing'

const baseUrl = getBaseUrl()

// Replace this with your actual blog post fetching logic
async function getAllBlogPosts() {
  // This is a placeholder - replace with your actual blog post fetching
  // You might fetch from a CMS, database, or file system
  try {
    // Example structure - adapt to your data source
    const posts = [
      {
        slug: 'getting-started-with-nextjs',
        lastModified: new Date('2024-01-15'),
        locale: 'en'
      },
      {
        slug: 'software-engineering-best-practices',
        lastModified: new Date('2024-01-20'),
        locale: 'en'
      },
      // Add more posts...
    ]
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export default async function blogSitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts()
  
  const sitemapEntries: MetadataRoute.Sitemap = []

  posts.forEach((post) => {
    routing.locales.forEach((locale) => {
      const url = locale === 'en'
        ? `${baseUrl}/blog/${post.slug}`
        : `${baseUrl}/${locale}/blog/${post.slug}`

      sitemapEntries.push({
        url: url,
        lastModified: post.lastModified,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: routing.locales.reduce((acc, loc) => {
            const altUrl = loc === 'en'
              ? `${baseUrl}/blog/${post.slug}`
              : `${baseUrl}/${loc}/blog/${post.slug}`
            acc[loc] = altUrl
            return acc
          }, {} as Record<string, string>)
        }
      })
    })
  })

  return sitemapEntries
}