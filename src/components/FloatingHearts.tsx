'use client'

const items = [
  { emoji: '❤️', top: '10%', left: '5%', delay: '0s' },
  { emoji: '🌸', top: '8%', left: '48%', delay: '1.2s' },
  { emoji: '🥰', top: '15%', left: '85%', delay: '0.5s' },
  { emoji: '💐', top: '38%', left: '2%', delay: '2s' },
  { emoji: '❤️', top: '45%', left: '92%', delay: '0.8s' },
  { emoji: '🌷', top: '65%', left: '10%', delay: '1.6s' },
  { emoji: '🥰', top: '70%', left: '88%', delay: '0.3s' },
  { emoji: '❤️', top: '85%', left: '25%', delay: '1s' },
  { emoji: '🌸', top: '90%', left: '65%', delay: '1.8s' },
  { emoji: '💐', top: '55%', left: '48%', delay: '2.4s' },
]

export default function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute text-2xl animate-float opacity-80"
          style={{ top: item.top, left: item.left, animationDelay: item.delay }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  )
}
