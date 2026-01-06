'use client'

import { Download, Printer } from 'lucide-react'
import siteConfig from '../site.config'

export default function CVButtons({ showDownload = true }) {
  const cvFile = siteConfig.cvFile
  const isPdf = cvFile && cvFile.toLowerCase().endsWith('.pdf')

  // Get config values with defaults
  const showDownloadBtn = siteConfig.cvConfig?.showDownloadButton !== false
  const showPrintBtn = siteConfig.cvConfig?.showPrintButton !== false

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex gap-3 print:hidden">
      {showDownload && cvFile && showDownloadBtn && (
        <a
          href={cvFile}
          download
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-slate-200 transition-colors text-sm font-medium shadow-sm"
        >
          <Download className="h-4 w-4" />
          Download {isPdf ? 'PDF' : 'CV'}
        </a>
      )}
      {showPrintBtn && (
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
        >
          <Printer className="h-4 w-4" />
          Print
        </button>
      )}
    </div>
  )
}
