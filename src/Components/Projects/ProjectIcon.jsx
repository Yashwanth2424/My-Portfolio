const svgProps = {
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const CalendarIcon = () => (
  <svg {...svgProps}>
    <rect x="3.5" y="5" width="17" height="15" rx="3" />
    <path d="M3.5 10h17M8 3v4M16 3v4M8 14h3M13 14h3" />
  </svg>
)

export const ChartIcon = () => (
  <svg {...svgProps}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    <path d="M4 7l6-3 6 6 5-4" />
  </svg>
)

export const BoardIcon = () => (
  <svg {...svgProps}>
    <rect x="3.5" y="4" width="17" height="16" rx="3" />
    <path d="M9.5 4v16M15 4v16" />
  </svg>
)
