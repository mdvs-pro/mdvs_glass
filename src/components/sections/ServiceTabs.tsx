'use client'

import { useState } from 'react'
import ServiceCard, { ServiceCardProps } from './ServiceCard'
import styles from './ServiceTabs.module.css'

export interface ServiceTabData {
  id: string
  label: string
  services: Omit<ServiceCardProps, 'variant' | 'backgroundImage'>[]
}

export interface ServiceTabsProps {
  tabs: ServiceTabData[]
  sectionTitle?: string
  sectionSubtitle?: string
}

export default function ServiceTabs({ tabs, sectionTitle, sectionSubtitle }: ServiceTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '')

  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  return (
    <section className={styles.serviceTabs}>
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

        {/* Tab Buttons */}
        <div className={styles.tabButtons}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            >
              <span className={styles.tabLabel}>{tab.label}</span>
              {activeTab === tab.id && <span className={styles.activeIndicator}></span>}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className={styles.servicesGrid}>
          {activeTabData?.services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              variant="default"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
