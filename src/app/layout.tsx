import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'MDVS Agency - Elite Software Development & IT Outstaffing',
  description:
    'Transform your ideas into digital reality with 11 years of proven expertise. Custom development, staff augmentation, and design services.',
  keywords: [
    'software development',
    'IT outstaffing',
    'web development',
    'React',
    'Next.js',
    'Ruby on Rails',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
