import FeatureCard from './FeatureCard'
import {
  FaClock,
  FaShieldAlt,
  FaUsers,
  FaAward,
  FaCog,
  FaHandshake,
} from 'react-icons/fa'
import styles from './WhyChoose.module.css'

export interface WhyChooseProps {
  sectionTitle?: string
  sectionSubtitle?: string
}

const features = [
  {
    icon: <FaClock />,
    title: '11+ Years Experience',
    description: 'Over a decade of delivering successful projects across diverse industries and technologies.',
  },
  {
    icon: <FaAward />,
    title: 'Quality Assurance',
    description: 'Rigorous testing and QA processes ensure bug-free, secure, and performant solutions.',
  },
  {
    icon: <FaUsers />,
    title: 'Expert Team',
    description: '50+ skilled developers, designers, and project managers ready to bring your vision to life.',
  },
  {
    icon: <FaCog />,
    title: 'Agile Methodology',
    description: 'Flexible development process with regular updates, transparency, and quick iterations.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Security First',
    description: 'Enterprise-grade security practices, HIPAA compliance, and data protection built-in.',
  },
  {
    icon: <FaHandshake />,
    title: 'Long-term Partnership',
    description: 'We provide ongoing support and maintenance to ensure your continued success.',
  },
]

export default function WhyChoose({
  sectionTitle = 'Why Choose MDVS',
  sectionSubtitle = 'Your trusted partner for software development excellence',
}: WhyChooseProps) {
  return (
    <section className={styles.whyChoose}>
      <div className="container">
        {/* Section Header */}
        {(sectionTitle || sectionSubtitle) && (
          <div className={styles.header}>
            {sectionTitle && (
              <h2 className={styles.title}>
                {sectionTitle}
                <span className={styles.titleAccent}></span>
              </h2>
            )}
            {sectionSubtitle && <p className={styles.subtitle}>{sectionSubtitle}</p>}
          </div>
        )}

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
