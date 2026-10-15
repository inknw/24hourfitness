import { ArrowDown, ArrowUpRight, Check, Dumbbell, Flame, MapPin, MoveUpRight, Sparkles, Users, Wind } from 'lucide-react'
import { ClubGallery } from '@/components/club-gallery'

export function GymHero() {
  return <>
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-photo" src="/images/club-12.jpg" alt="The real free-weight floor at 24 Hour Fitness Mid Wilshire" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-content container">
        <div className="hero-eyebrow"><span className="live-dot" /> SAME NEIGHBORHOOD. NEW ENERGY.</div>
        <h1 id="hero-title">YOUR CITY.<br />YOUR GYM.<br /><span>YOUR NEXT.</span></h1>
        <p>A stronger you starts right here. Discover your next<br className="desktop-break" /> chapter at our refreshed Mid Wilshire club.</p>
        <div className="hero-actions"><a href="#membership" className="button button-lime">FIND YOUR MEMBERSHIP <ArrowUpRight size={18} /></a><ClubGallery hero /></div>
        <div className="hero-reassurance"><Check size={13} /><span>Every level. Every goal. Everyone welcome.</span></div>
      </div>
      <div className="hero-side-label"><span>3699 WILSHIRE BOULEVARD</span><span>LOS ANGELES, CALIFORNIA</span></div>
      <a className="renovation-card" href="#club"><span className="renovation-icon"><Sparkles size={21} /></span><div><span className="eyebrow">UPGRADED FOR YOU</span><h2>A fresh space. <br />A fresh start.</h2><span className="renovation-foot">Recently renovated <MoveUpRight size={16} /></span></div></a>
      <div className="hero-bottom container"><span><MapPin size={13} /> MID WILSHIRE · LOS ANGELES</span><a href="#club">MORE THAN A GYM <ArrowDown size={14} /></a><span className="hero-pagination"><b>MID WILSHIRE</b><span />SPORT</span></div>
    </section>
    <div className="feature-strip"><div className="container feature-inner">{[{ icon: Dumbbell, label: 'STRENGTH & CARDIO' }, { icon: Users, label: 'GX24® GROUP CLASSES' }, { icon: Flame, label: 'PERSONAL TRAINING' }, { icon: Wind, label: 'SAUNA & RECOVERY' }, { icon: Sparkles, label: 'NEW TURF ZONE' }].map(({ icon: Icon, label }) => <a href="#amenities" key={label}><Icon size={21} strokeWidth={1.5} /><span>{label}</span></a>)}</div></div>
  </>
}
