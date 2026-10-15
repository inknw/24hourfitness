'use client'

import { useState } from 'react'
import { ArrowUpRight, MapPin, Menu, X } from 'lucide-react'
import { club } from '@/lib/club-data'
import { cn } from '@/lib/utils'

export function GymHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="24 Hour Fitness Mid Wilshire home"><img src="/images/logo.png" alt="24 Hour Fitness" width="220" height="55" /></a>
      <div className="header-location"><MapPin size={14} /><span>MID WILSHIRE <small>LOS ANGELES, CA</small></span></div>
      <nav className={cn('main-nav', open && 'nav-open')} aria-label="Main navigation" id="main-navigation">
        {[['The club', '#club'], ['Amenities', '#amenities'], ['Classes & training', '#classes'], ['Membership', '#membership']].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#visit" onClick={() => setOpen(false)} className="mobile-visit">Visit us</a>
      </nav>
      <a className="button button-lime header-join" href={club.join} target="_blank" rel="noopener noreferrer">JOIN THE CLUB <ArrowUpRight size={17} /></a>
      <button className="menu-toggle icon-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
  )
}
