import LiquidGlassButton from '@/components/glass/LiquidGlassButton'

export default function HomePage() {
  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '3rem',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '800px', padding: '2rem' }}>
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          TRUE Liquid Glass Effect
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            opacity: 0.9,
            marginBottom: '2rem',
            textShadow: '0 1px 5px rgba(0,0,0,0.3)',
          }}
        >
          macOS Tahoe 26 Style — Advanced SVG Filters + 4-Layer Structure
        </p>
      </div>

      {/* Demo Button */}
      <LiquidGlassButton href="https://mdvs.pro">
        <div style={{ fontSize: '1.5rem', letterSpacing: '0.02em' }}>MDVS Agency</div>
      </LiquidGlassButton>

      {/* Info */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: '600px',
          padding: '2rem',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
        }}
      >
        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>4-Layer Glass Structure</h3>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            textAlign: 'left',
            fontSize: '1.1rem',
            lineHeight: '2',
          }}
        >
          <li>🔹 Layer 1: backdrop-filter + SVG distortion</li>
          <li>🔹 Layer 2: Semi-transparent tint</li>
          <li>🔹 Layer 3: Specular shine (inset shadow)</li>
          <li>🔹 Layer 4: Content</li>
        </ul>

        <p style={{ marginTop: '1.5rem', opacity: 0.8 }}>
          Hover over the button to see the liquid glass effect in action!
        </p>
      </div>
    </main>
  )
}
