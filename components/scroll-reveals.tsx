'use client'

import { useEffect } from 'react'

export function ScrollReveals() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const sections = document.querySelectorAll('.section-heading, .club-photo-grid, .strength-copy, .classes-grid, .plans-grid, .visit-grid')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.08 })
    sections.forEach((section) => { section.classList.add('reveal-ready'); observer.observe(section) })
    return () => { observer.disconnect(); sections.forEach((section) => section.classList.remove('reveal-ready')) }
  }, [])
  return null
}
