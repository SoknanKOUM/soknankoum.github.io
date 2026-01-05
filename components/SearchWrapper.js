'use client'

import { useState } from 'react'
import Header from './Header'
import SearchModal from './SearchModal'

export default function SearchWrapper({ allContent, children }) {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <Header allContent={allContent} searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      {children}
      {/* Search Modal - Rendered at root level for proper z-index */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        allContent={allContent}
      />
    </>
  )
}
