import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const loadFontFromObject =
  (font: string) => {
    let cssId = 'google-font-' + font

    const cssIdAll = cssId + '-all'
    const existing = document.getElementById(cssId)
    const existingAll = document.getElementById(cssIdAll)
    if (!existing && !existingAll && font) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.id = cssId
      link.href = `https://fonts.googleapis.com/css2?family=${font}&display=swap`;
      link.setAttribute('data-testid', cssId) // for react testing library
      document.head.appendChild(link)
    }
  };