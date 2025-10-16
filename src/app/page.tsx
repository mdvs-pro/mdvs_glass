'use client'

import { useState } from 'react'
import GlassCard from '@/components/glass/GlassCard'

type Palette = 'pure' | 'frost' | 'smoke' | 'accent'

export default function HomePage() {
  const [palette, setPalette] = useState<Palette>('pure')

  const palettes: { value: Palette; label: string; description: string }[] = [
    { value: 'pure', label: 'Pure Glass', description: 'Clean & minimal white glass' },
    { value: 'frost', label: 'Frost', description: 'Cool blue tinted glass' },
    { value: 'smoke', label: 'Smoke', description: 'Warm gray tinted glass' },
    { value: 'accent', label: 'Accent', description: 'Yellow branded glass' },
  ]

  return (
    <div data-palette={palette}>
      <main className="container min-h-screen py-8">
        {/* Hero Section */}
        <section className="py-6 text-center">
          <h1 className="heading-hero animate-fade-in-up mb-3">Liquid Glass Design</h1>
          <p className="text-lead text-gray mb-8 animate-fade-in-up animate-delay-200">
            Pure glassmorphism with multiple palette options
          </p>

          {/* Palette Switcher */}
          <div className="mb-8 animate-fade-in-up animate-delay-300">
            <GlassCard className="max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Choose Your Palette</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {palettes.map(p => (
                  <button
                    key={p.value}
                    onClick={() => setPalette(p.value)}
                    className={`glass-button ${palette === p.value ? 'glass-button-primary' : ''} text-left`}
                  >
                    <div className="font-semibold">{p.label}</div>
                    <div className="text-xs opacity-70">{p.description}</div>
                  </button>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Glass Cards Demo */}
        <section className="py-6">
          <h2 className="text-center mb-6 text-3xl font-bold">Interactive Glass Cards</h2>
          <p className="text-center text-gray mb-8">
            Move your mouse over the cards to see the dynamic highlight effect
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <GlassCard className="animate-scale-in">
              <h3 className="text-xl font-semibold mb-3">Liquid Glass Effect</h3>
              <p className="text-gray mb-4">
                Pure glassmorphism with translucent layers, backdrop blur, and subtle distortion
                effects.
              </p>
              <ul className="list-accent text-sm">
                <li>Backdrop filter blur</li>
                <li>Semi-transparent overlay</li>
                <li>Specular highlights</li>
                <li>Mouse hover interaction</li>
              </ul>
            </GlassCard>

            {/* Card 2 */}
            <GlassCard className="animate-scale-in animate-delay-100">
              <h3 className="text-xl font-semibold mb-3">4-Layer Structure</h3>
              <p className="text-gray mb-4">
                Each glass component consists of four carefully crafted layers for maximum visual
                impact.
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Layer 1:</strong> Backdrop filter
                </div>
                <div>
                  <strong>Layer 2:</strong> Color overlay
                </div>
                <div>
                  <strong>Layer 3:</strong> Specular highlights
                </div>
                <div>
                  <strong>Layer 4:</strong> Content
                </div>
              </div>
            </GlassCard>

            {/* Card 3 */}
            <GlassCard className="animate-scale-in animate-delay-200">
              <h3 className="text-xl font-semibold mb-3">Multiple Palettes</h3>
              <p className="text-gray mb-4">
                Switch between Pure Glass, Frost, Smoke, and Accent themes to match your brand.
              </p>
              <div className="mt-4 p-3 glass-component rounded-lg">
                <p className="text-sm">
                  <strong>Current:</strong> {palettes.find(p => p.value === palette)?.label}
                </p>
              </div>
            </GlassCard>

            {/* Card 4 */}
            <GlassCard variant="bordered" className="animate-scale-in animate-delay-300">
              <h3 className="text-xl font-semibold mb-3">Bordered Variant</h3>
              <p className="text-gray mb-4">
                Glass cards with subtle borders and inset shadows for enhanced depth.
              </p>
              <button className="glass-button w-full mt-2">Explore More</button>
            </GlassCard>

            {/* Card 5 */}
            <GlassCard className="animate-scale-in animate-delay-400">
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-gray">
                Optimized for all devices with adaptive blur and performance considerations.
              </p>
            </GlassCard>

            {/* Card 6 */}
            <GlassCard className="animate-scale-in animate-delay-500">
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-gray mb-3">
                Built-in support for reduced motion and reduced transparency preferences.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded glass-component text-xs">a11y friendly</span>
                <span className="px-2 py-1 rounded glass-component text-xs">WCAG compliant</span>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Typography Demo */}
        <section className="py-8">
          <GlassCard>
            <h2 className="text-3xl font-bold mb-6">Typography System</h2>

            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold mb-2">Heading 1</h1>
                <h2 className="text-4xl font-bold mb-2">Heading 2</h2>
                <h3 className="text-3xl font-bold mb-2">Heading 3</h3>
                <h4 className="text-2xl font-bold">Heading 4</h4>
              </div>

              <div>
                <p className="text-lead mb-3">
                  This is lead text - larger and more prominent for introductions.
                </p>
                <p className="mb-3">
                  Regular paragraph text with proper line height and spacing. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <p className="text-small text-gray">
                  Small text for captions and meta information.
                </p>
              </div>

              <div>
                <p className="text-gradient-yellow font-bold text-2xl mb-3">Gradient Text Effect</p>
                <p className="text-glow-yellow font-bold text-xl">Glowing Text Effect</p>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Button Variants */}
        <section className="py-6">
          <GlassCard>
            <h3 className="text-2xl font-bold mb-6">Button Components</h3>
            <div className="flex flex-wrap gap-3">
              <button className="glass-button glass-button-primary">Primary Button</button>
              <button className="glass-button glass-button-secondary">Secondary Button</button>
              <button className="glass-button">Default Glass</button>
            </div>
          </GlassCard>
        </section>

        {/* Info Banner */}
        <section className="py-6">
          <GlassCard variant="bordered">
            <div className="text-center py-4">
              <p className="text-lg animate-pulse-glow-subtle">
                ✨ Pure Liquid Glass Design System - Best Practices ✨
              </p>
              <p className="text-sm text-gray mt-2">
                Choose your preferred palette above and see it applied instantly
              </p>
            </div>
          </GlassCard>
        </section>
      </main>
    </div>
  )
}
