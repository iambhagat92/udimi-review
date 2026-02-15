import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://udimi-review.vercel.app';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
            images: [`${baseUrl}/dashboard.jpg`, `${baseUrl}/udimi interface.png`],
        },
    ]
}
