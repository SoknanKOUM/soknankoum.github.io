'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import siteConfig from '../site.config'
import * as Icons from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Header({ allContent = [], searchOpen, setSearchOpen }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMac, setIsMac] = useState(false)
  const [navigationItems, setNavigationItems] = useState([])

  // Generate navigation items
  useEffect(() => {
    if (siteConfig.useDynamicNavigation) {
      // Dynamic: generate from content folders
      const contentFolders = Array.from(
        new Set(allContent.map(item => item.page))
      ).sort()

      const dynamicNav = [
        { title: "Home", path: "/", icon: "Home" },
        ...contentFolders.map(folder => {
          const iconMap = {
            'cv': 'FileText',
            'blog': 'BookOpen',
            'projects': 'FolderGit2',
            'publications': 'FileEdit',
            'research': 'FlaskConical',
            'teaching': 'GraduationCap'
          }
          return {
            title: folder.charAt(0).toUpperCase() + folder.slice(1),
            path: `/${folder}`,
            icon: iconMap[folder.toLowerCase()] || 'FileText'
          }
        })
      ]
      setNavigationItems(dynamicNav)
    } else {
      // Manual: use config
      setNavigationItems(siteConfig.navigation)
    }
  }, [allContent])

  // Detect Mac for keyboard shortcut display
  useEffect(() => {
    setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent))
  }, [])

  // Keyboard shortcut listener (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [setSearchOpen])

  // Helper function to render icon
  const renderIcon = (iconName) => {
    if (!iconName) return null
    const IconComponent = Icons[iconName]
    if (!IconComponent) return null
    return <IconComponent className="h-4 w-4" />
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-black/95 backdrop-blur-sm transition-colors">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-slate-300 transition-colors">
            {siteConfig.name}
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-white ${
                    pathname === item.path ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white' : 'text-gray-600 dark:text-slate-400'
                  }`}
                >
                  {renderIcon(item.icon)}
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md transition-colors text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-slate-700"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
              <span className="text-sm">Search</span>
              <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-white dark:bg-slate-900 text-gray-500 dark:text-slate-400 text-xs font-semibold rounded border border-gray-300 dark:border-slate-700">
                {isMac ? '⌘' : 'Ctrl'}K
              </kbd>
            </button>

            {/* Mobile Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md transition-colors text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            <button
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md transition-colors text-gray-600 dark:text-slate-400"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t dark:border-slate-800">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.path
                    ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-slate-800'
                    : 'text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {renderIcon(item.icon)}
                {item.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
