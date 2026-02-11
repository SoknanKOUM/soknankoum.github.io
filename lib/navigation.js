import fs from 'fs'
import path from 'path'

/**
 * Dynamically generates navigation items based on content folders
 * @returns {Array} Array of navigation items
 */
export function generateNavigation() {
  const contentDir = path.join(process.cwd(), 'content')

  // Check if content directory exists
  if (!fs.existsSync(contentDir)) {
    return []
  }

  // Get all folders in content directory
  const folders = fs.readdirSync(contentDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  // Map folders to navigation items with intelligent defaults
  const navItems = folders.map(folder => {
    return {
      title: capitalizeFolder(folder),
      path: `/${folder}`,
      icon: getDefaultIcon(folder)
    }
  })

  return navItems
}

/**
 * Capitalize folder name intelligently
 */
function capitalizeFolder(folder) {
  // Handle special cases
  const specialCases = {
    'cv': 'CV',
    'blog': 'Blog',
    'projects': 'Projects',
    'publications': 'Publications',
    'research': 'Research',
    'teaching': 'Teaching',
    'about': 'About'
  }

  if (specialCases[folder.toLowerCase()]) {
    return specialCases[folder.toLowerCase()]
  }

  // Default: capitalize first letter
  return folder.charAt(0).toUpperCase() + folder.slice(1)
}

/**
 * Get default icon for common folder names
 */
function getDefaultIcon(folder) {
  const iconMap = {
    'cv': 'FileText',
    'blog': 'BookOpen',
    'projects': 'FolderGit2',
    'publications': 'FileEdit',
    'research': 'FlaskConical',
    'teaching': 'GraduationCap',
    'about': 'User',
    'contact': 'Mail'
  }

  return iconMap[folder.toLowerCase()] || 'FileText'
}
