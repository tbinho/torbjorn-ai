'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Start' },
  { href: '/arbete', label: 'Arbete' },
  { href: '/riktning', label: 'Riktning' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b border-border bg-base/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16">
          {/* Logo / Namn */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-lg text-text hover:text-accent transition-colors"
          >
            {pathname !== '/' && (
              <Image
                src="/torbjorn_ai_hero_comics.jpg"
                alt=""
                width={32}
                height={32}
                className="rounded-sm"
              />
            )}
            Torbjörn Sandblad
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      text-sm transition-colors duration-200
                      ${isActive
                        ? 'text-accent font-medium'
                        : 'text-text-muted hover:text-text'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
