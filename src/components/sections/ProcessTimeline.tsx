import ProcessStep from './ProcessStep'
import {
  FaLightbulb,
  FaPalette,
  FaCode,
  FaCheckCircle,
  FaRocket,
} from 'react-icons/fa'
import styles from './ProcessTimeline.module.css'

export interface ProcessTimelineProps {
  sectionTitle?: string
  sectionSubtitle?: string
}

const processSteps = [
  {
    number: 1,
    icon: <FaLightbulb />,
    title: 'Discovery',
    description: 'We analyze your needs, define goals, and create a detailed project roadmap.',
  },
  {
    number: 2,
    icon: <FaPalette />,
    title: 'Design',
    description: 'Our designers create intuitive interfaces and engaging user experiences.',
  },
  {
    number: 3,
    icon: <FaCode />,
    title: 'Development',
    description: 'Expert developers bring your vision to life using cutting-edge technologies.',
  },
  {
    number: 4,
    icon: <FaCheckCircle />,
    title: 'Testing',
    description: 'Rigorous QA ensures your product is bug-free, secure, and performant.',
  },
  {
    number: 5,
    icon: <FaRocket />,
    title: 'Launch',
    description: 'We deploy your product and provide ongoing support for continuous success.',
  },
]

export default function ProcessTimeline({
  sectionTitle = 'Our Process',
  sectionSubtitle = 'A proven methodology for delivering excellence',
}: ProcessTimelineProps) {
  return (
    <section className={styles.processTimeline}>
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

        {/* Timeline */}
        <div className={styles.timeline}>
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
