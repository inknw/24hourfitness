'use client'

import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { club } from '@/lib/club-data'
import { cn } from '@/lib/utils'

const plans = [
  { name: 'GetFit', label: 'YOUR STARTING LINE', monthly: '24.99', yearly: '19.98', total: '239.88', description: 'Make movement part of your everyday.', features: ['Weights & cardio equipment', 'Functional training & turf areas', '24GO® fitness app', '24 Smart Start™ plan'] },
  { name: 'KeepFit', label: 'BUILD YOUR MOMENTUM', monthly: '39.99', yearly: '24.99', total: '299.88', description: 'More ways to move. More reasons to show up.', features: ['Strength, cardio & functional training', 'GX24® studio & cycle classes', 'Sauna access at this club', '24 Smart Start™ plan'] },
  { name: 'KeepFit+', label: 'GO ALL IN', monthly: '49.99', yearly: '28.99', total: '347.88', description: 'Your fitness. Your wellness. Your next level.', features: ['KeepFit workout amenities', 'Designated Buddy Pass', 'Premium wellness benefits*', '24GO® premium digital workouts'] },
]

export function Memberships() {
  const [billing, setBilling] = useState('monthly')
  return <section id="membership" className="membership-section section-pad"><div className="container">
    <div className="section-heading"><div><span className="eyebrow lime">INVEST IN YOUR NEXT</span><h2>BIG GOALS. <span className="outline-text">REAL OPTIONS.</span></h2></div><fieldset className="billing-switch"><legend className="sr-only">Membership billing</legend>{['monthly', 'yearly'].map((value) => <label key={value} className={cn(billing === value && 'selected')}><input type="radio" name="billing" value={value} checked={billing === value} onChange={() => setBilling(value)} />{value === 'monthly' ? 'Monthly' : 'Yearly'}{value === 'yearly' && <span>SAVE MORE</span>}</label>)}</fieldset></div>
    <div className="plans-grid">{plans.map((plan, index) => <article className={cn('plan', index === 2 && 'plan-featured')} key={plan.name}><div className="plan-topline"><span className="eyebrow">{plan.label}</span>{index === 2 && <span className="plan-tag">MORE POSSIBILITIES</span>}</div><h3>{plan.name}</h3><p>{plan.description}</p><div className="plan-price" aria-live="polite"><span>$</span>{billing === 'monthly' ? plan.monthly : plan.yearly}<small>/ mo</small></div><div className="billing-note">{billing === 'yearly' ? `$${plan.total} billed annually, plus applicable fees` : 'Starting monthly rate, plus applicable fees'}</div><a className={cn('button', index === 2 ? 'button-lime' : 'button-outline')} href={club.join} target="_blank" rel="noopener noreferrer">EXPLORE {plan.name.toUpperCase()} <ArrowUpRight size={16} /></a><ul>{plan.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul></article>)}</div>
    <p className="pricing-disclaimer">Pricing shown on the official club page; offers and eligibility can change. Annual fees, enrollment fees, and other terms apply. The advertised KeepFit+ offer lists a $69.99 annual fee. Yearly prices are monthly equivalents paid upfront. *Wellness benefits and amenity access vary by plan and location. Confirm all inclusions and current totals on the official enrollment site.</p>
  </div></section>
}
