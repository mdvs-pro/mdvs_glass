import { FaUsers, FaCode, FaRocket, FaPalette, FaCogs, FaShieldAlt } from 'react-icons/fa'
import { ServiceTabData } from '@/components/sections/ServiceTabs'

export const serviceTabsData: ServiceTabData[] = [
  {
    id: 'staff-augmentation',
    label: 'Staff Augmentation',
    services: [
      {
        icon: <FaUsers />,
        title: 'Dedicated Teams',
        description:
          'Build your extended team with our vetted professionals who seamlessly integrate with your workflow and culture.',
        features: [
          'Pre-vetted senior developers',
          'Fast onboarding (1-2 weeks)',
          'Direct team communication',
          'Flexible engagement models',
          'Monthly or hourly billing',
        ],
        cta: {
          text: 'Hire Developers',
          href: '/services/staff-augmentation',
        },
      },
      {
        icon: <FaRocket />,
        title: 'Quick Scale-Up',
        description:
          'Rapidly expand your development capacity without the overhead of hiring full-time employees.',
        features: [
          'Instant capacity boost',
          'No recruitment costs',
          'Flexible scaling up/down',
          'Multiple expertise areas',
          'Replace or rotate developers',
        ],
        cta: {
          text: 'Scale Your Team',
          href: '/services/staff-augmentation',
        },
      },
      {
        icon: <FaShieldAlt />,
        title: 'Risk Mitigation',
        description:
          'Reduce project risks with experienced professionals who have proven track records in complex projects.',
        features: [
          '11+ years of experience',
          'Enterprise-grade security',
          'NDA & IP protection',
          'Compliance expertise',
          'Quality assurance included',
        ],
        cta: {
          text: 'Learn More',
          href: '/services/staff-augmentation',
        },
      },
    ],
  },
  {
    id: 'custom-development',
    label: 'Custom Development',
    services: [
      {
        icon: <FaCode />,
        title: 'Full-Stack Development',
        description:
          'End-to-end web and mobile application development using modern technologies and best practices.',
        features: [
          'React, Next.js, Vue.js frontend',
          'Ruby on Rails, Node.js backend',
          'PostgreSQL, MongoDB databases',
          'RESTful & GraphQL APIs',
          'AWS, Heroku deployment',
        ],
        cta: {
          text: 'Start Project',
          href: '/services/custom-development',
        },
      },
      {
        icon: <FaPalette />,
        title: 'UI/UX Design',
        description:
          'Beautiful, intuitive interfaces that combine aesthetics with functionality and user-centered design.',
        features: [
          'User research & personas',
          'Wireframing & prototyping',
          'Modern design systems',
          'Responsive & accessible',
          'Figma & Adobe Creative Suite',
        ],
        cta: {
          text: 'View Design Work',
          href: '/services/ui-ux-design',
        },
      },
      {
        icon: <FaCogs />,
        title: 'Product Development',
        description:
          'Transform your idea into a market-ready product with our full-cycle development approach.',
        features: [
          'Discovery & MVP planning',
          'Agile development process',
          'Continuous integration/deployment',
          'Quality assurance & testing',
          'Post-launch support',
        ],
        cta: {
          text: 'Build Your Product',
          href: '/services/custom-development',
        },
      },
    ],
  },
]
