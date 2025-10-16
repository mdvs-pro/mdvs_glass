export default function HomePage() {
  return (
    <main className="container min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-6">
        <h1 className="heading-hero text-center animate-fade-in-up">MDVS Agency</h1>
        <p className="text-lead text-center text-gray mb-6 animate-fade-in-up animate-delay-200">
          Elite Software Development & IT Outstaffing
        </p>

        <div className="flex justify-center gap-4 animate-fade-in-up animate-delay-300">
          <button className="glass-button glass-button-primary">Start Your Project</button>
          <button className="glass-button glass-button-secondary">View Portfolio</button>
        </div>
      </section>

      {/* Design System Preview */}
      <section className="py-8">
        <h2 className="text-center mb-6 heading-accent">Liquid Glass Design System</h2>

        <div className="grid gap-6">
          {/* Glass Card Example */}
          <div className="glass-component glass-mdvs-branded glass-card animate-scale-in">
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>
            <div className="glass-yellow-accent"></div>
            <div className="glass-content">
              <h3 className="mb-3">Glass Card Component</h3>
              <p className="text-gray mb-3">
                This is an example of the Liquid Glass design system with translucent effects,
                backdrop blur, and yellow accent overlays.
              </p>
              <ul className="list-accent">
                <li>Backdrop filter with blur</li>
                <li>Semi-transparent overlay</li>
                <li>Specular highlights</li>
                <li>Yellow brand accents</li>
              </ul>
            </div>
          </div>

          {/* Typography Examples */}
          <div className="glass-component glass-card animate-scale-in animate-delay-200">
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>
            <div className="glass-content">
              <h3 className="mb-3">Typography System</h3>
              <p className="mb-2">
                Regular text with <strong>bold emphasis</strong> and{' '}
                <span className="text-accent">yellow accents</span>.
              </p>
              <p className="text-gradient-yellow font-bold text-2xl mb-3">Gradient Text Effect</p>
              <p className="text-glow-yellow font-bold">Glowing Text Effect</p>
            </div>
          </div>

          {/* Buttons Grid */}
          <div className="glass-component glass-card animate-scale-in animate-delay-300">
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>
            <div className="glass-content">
              <h3 className="mb-4">Button Variants</h3>
              <div className="flex flex-col gap-3">
                <button className="glass-button glass-button-primary">Primary Button</button>
                <button className="glass-button glass-button-secondary">Secondary Button</button>
                <button className="glass-button">Default Glass Button</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Examples */}
      <section className="py-6">
        <div className="glass-component glass-card-bordered">
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>
          <div className="glass-content text-center">
            <p className="animate-pulse-glow-subtle">
              ✨ Phase 2: Design System Implementation Complete! ✨
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
