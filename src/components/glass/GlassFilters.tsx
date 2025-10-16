/* SVG Filters for Liquid Glass Effects */

export default function GlassFilters() {
  return (
    <svg
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      aria-hidden="true"
    >
      <defs>
        {/* Main Glass Distortion Filter */}
        <filter id="glass-distortion" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.008"
            numOctaves="2"
            result="noise"
            seed="2"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="77"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Subtle Glass Distortion - for smaller elements */}
        <filter id="glass-distortion-subtle" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.005"
            numOctaves="2"
            result="noise"
            seed="1"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Strong Glass Distortion - for dramatic effects */}
        <filter id="glass-distortion-strong" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.01"
            numOctaves="3"
            result="noise"
            seed="3"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="100"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Yellow Tint Filter - for branded accents */}
        <filter id="glass-yellow-tint">
          <feColorMatrix
            type="matrix"
            values="
              1.2 0   0   0  0
              0.9 1   0   0  0
              0   0   0.8 0  0
              0   0   0   1  0"
          />
        </filter>

        {/* Glow Filter - Yellow */}
        <filter id="glass-glow-yellow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feFlood floodColor="#f4d03f" floodOpacity="0.5" />
          <feComposite in2="coloredBlur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glow Filter - White (for light accents) */}
        <filter id="glass-glow-white" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feFlood floodColor="#ffffff" floodOpacity="0.3" />
          <feComposite in2="coloredBlur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Frosted Glass Effect */}
        <filter id="glass-frosted">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="1 1" />
          </feComponentTransfer>
        </filter>

        {/* Shimmer Effect - for animated elements */}
        <filter id="glass-shimmer">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="1"
            result="noise"
            seed="5"
          >
            <animate
              attributeName="baseFrequency"
              values="0.01;0.03;0.01"
              dur="8s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
        </filter>
      </defs>
    </svg>
  )
}
