import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { getBaseUrl } from '@/lib/config'

const baseUrl = getBaseUrl()

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages that exist in your app structure
  const staticPages = [
    '', // Homepage
    '/contact-us',
  ]

  // Services pages - add your actual service slugs here
  const services = [
    'software-engineering',
    'technical-education', 
    'product-consulting',
    'mvp-development',
    'web-development',
    'mobile-development'
  ]

  // Generate URLs for all locales
  const sitemapEntries: MetadataRoute.Sitemap = []

  routing.locales.forEach((locale) => {
    // Add static pages
    staticPages.forEach((page) => {
      const url = `${baseUrl}/${locale}${page}`

      sitemapEntries.push({
        url: url,
        lastModified: new Date(),
        changeFrequency: getChangeFrequency(page),
        priority: getPriority(page),
        alternates: {
          languages: routing.locales.reduce((acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}${page}`
            return acc
          }, {} as Record<string, string>)
        }
      })
    })

    // Add services index page
    const servicesUrl = `${baseUrl}/${locale}/services`
    sitemapEntries.push({
      url: servicesUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: routing.locales.reduce((acc, loc) => {
          acc[loc] = `${baseUrl}/${loc}/services`
          return acc
        }, {} as Record<string, string>)
      }
    })

    // Add individual service pages
    services.forEach((service) => {
      const serviceUrl = `${baseUrl}/${locale}/services/${service}`
      
      sitemapEntries.push({
        url: serviceUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: routing.locales.reduce((acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}/services/${service}`
            return acc
          }, {} as Record<string, string>)
        }
      })
    })
  })

  return sitemapEntries
}

function getChangeFrequency(page: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  switch (page) {
    case '':
      return 'weekly' // Homepage changes frequently
    case '/services':
      return 'monthly' // Services page updates regularly
    case '/contact-us':
      return 'yearly' // Contact page changes rarely
    default:
      return 'monthly'
  }
}

function getPriority(page: string): number {
  switch (page) {
    case '':
      return 1.0 // Homepage is highest priority
    case '/services':
      return 0.9 // Services page is very important
    case '/contact-us':
      return 0.7 // Contact page is secondary
    default:
      return 0.5
  }
}