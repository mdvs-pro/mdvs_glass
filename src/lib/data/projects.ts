export interface Project {
  id: number
  title: string
  description: string
  category: 'saas' | 'ecommerce' | 'realestate' | 'ngo'
  tech: string[]
  url: string
  image: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Offsiter',
    description: 'Comprehensive event management SaaS platform with team planning, vendor coordination, and real-time analytics.',
    category: 'saas',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    url: 'https://offsiter.com/',
    image: '/images/projects/offsiter.png',
  },
  {
    id: 2,
    title: 'Plank Electrotechnic',
    description: 'B2B manufacturing platform with advanced product catalog, ordering system, and CRM integration.',
    category: 'ecommerce',
    tech: ['WordPress', 'WooCommerce', 'Custom Catalog'],
    url: 'https://plank.ua/',
    image: '/images/projects/plank.png',
  },
  {
    id: 3,
    title: 'UDP Development',
    description: 'Premium real estate platform featuring interactive maps, virtual tours, and advanced booking system.',
    category: 'realestate',
    tech: ['WordPress', 'Interactive Maps', 'Virtual Tours'],
    url: 'https://udp.ua/',
    image: '/images/projects/udp.png',
  },
  {
    id: 4,
    title: 'K.Fund',
    description: 'Humanitarian aid platform with donation tracking, Stripe integration, and transparent reporting system.',
    category: 'ngo',
    tech: ['Next.js', 'Stripe', 'Reporting Dashboard'],
    url: 'https://kfund.ua/',
    image: '/images/projects/k_fund.png',
  },
  {
    id: 5,
    title: 'GoLocal Ukraine',
    description: 'Educational platform for grant management, project catalogs, and funding tracking.',
    category: 'ngo',
    tech: ['React', 'Node.js', 'Grant Management'],
    url: 'https://golocal-ukraine.com/',
    image: '/images/projects/golocal.png',
  },
  {
    id: 6,
    title: 'Forum Kyiv',
    description: 'Conference platform with registration system, agenda management, live streaming, and networking tools.',
    category: 'saas',
    tech: ['Event Management', 'Live Streaming', 'Networking'],
    url: 'https://forumkyiv.org/',
    image: '/images/projects/kyiv_forum.png',
  },
  {
    id: 7,
    title: 'Anveran Real Estate',
    description: 'Luxury Mediterranean properties platform with advanced search, virtual tours, and CRM integration.',
    category: 'realestate',
    tech: ['Advanced Search', 'Virtual Tours', 'CRM'],
    url: 'https://anveran.com/',
    image: '/images/projects/anveran.png',
  },
  {
    id: 8,
    title: 'Dr. Pruss Skincare',
    description: 'Premium e-commerce platform with AI-powered skincare recommendations and personalization engine.',
    category: 'ecommerce',
    tech: ['Shopify Plus', 'AI Recommendations', 'Personalization'],
    url: 'https://drpruss.com/',
    image: '/images/projects/pruss.png',
  },
]

// Helper to get featured projects for homepage
export const getFeaturedProjects = (limit: number = 6): Project[] => {
  return projects.slice(0, limit)
}

// Helper to filter by category
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter((project) => project.category === category)
}
