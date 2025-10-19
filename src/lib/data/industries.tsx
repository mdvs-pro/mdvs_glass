import {
  FaChartLine,
  FaHeartbeat,
  FaBuilding,
  FaRocket,
  FaGraduationCap,
  FaCalendarAlt
} from 'react-icons/fa'

export interface Industry {
  id: string
  name: string
  description: string
  icon: JSX.Element
  projectCount?: number
  technologies: string[]
  href: string
}

export const industries: Industry[] = [
  {
    id: 'fintech',
    name: 'FinTech',
    description: 'Digital banking, payment systems, and financial management platforms with enterprise-grade security.',
    icon: <FaChartLine />,
    projectCount: 15,
    technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL', 'Security'],
    href: '/industries/fintech',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'HIPAA-compliant patient management, telemedicine, and health tracking solutions.',
    icon: <FaHeartbeat />,
    projectCount: 12,
    technologies: ['HIPAA', 'React', 'Ruby on Rails', 'HL7', 'FHIR'],
    href: '/industries/healthcare',
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    description: 'Property listings, virtual tours, CRM integration, and booking systems for real estate.',
    icon: <FaBuilding />,
    projectCount: 18,
    technologies: ['WordPress', 'Interactive Maps', 'Virtual Tours', 'CRM'],
    href: '/industries/real-estate',
  },
  {
    id: 'saas',
    name: 'SaaS',
    description: 'Scalable cloud platforms, subscription management, and enterprise software solutions.',
    icon: <FaRocket />,
    projectCount: 25,
    technologies: ['Next.js', 'AWS', 'Microservices', 'Analytics', 'APIs'],
    href: '/industries/saas',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'E-learning platforms, course management, student portals, and educational tools.',
    icon: <FaGraduationCap />,
    projectCount: 10,
    technologies: ['React', 'LMS', 'Video Streaming', 'Gamification'],
    href: '/industries/education',
  },
  {
    id: 'events',
    name: 'Events',
    description: 'Event management platforms, ticketing systems, live streaming, and attendee engagement.',
    icon: <FaCalendarAlt />,
    projectCount: 14,
    technologies: ['Event Management', 'Live Streaming', 'Ticketing', 'Networking'],
    href: '/industries/events',
  },
]
