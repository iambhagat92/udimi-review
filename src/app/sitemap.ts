import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://udimi-review-2026.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
            images: ['https://udimi-review-2026.vercel.app/dashboard.jpg', 'https://udimi-review-2026.vercel.app/udimi interface.png'],
        },
    ]
}
