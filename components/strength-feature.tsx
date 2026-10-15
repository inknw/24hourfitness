'use client'

import dynamic from 'next/dynamic'
import { Component, useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowUpRight, Move, Pause, Play, RotateCcw } from 'lucide-react'

const EquipmentScene = dynamic(() => import('@/components/equipment-scene'), { ssr: false, loading: () => <div className="scene-loading">PREPARING YOUR NEXT REP</div> })

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? <img className="scene-fallback" src="/images/club-12.jpg" alt="Mid Wilshire free weights" /> : this.props.children }
}

export function StrengthFeature() {
  const container = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [sceneKey, setSceneKey] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(media.matches)
    const listener = () => setReduced(media.matches)
    media.addEventListener('change', listener)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '120px' })
    if (container.current) observer.observe(container.current)
    return () => { observer.disconnect(); media.removeEventListener('change', listener) }
  }, [])
  return <section className="strength-section container" aria-labelledby="strength-title">
    <div className="strength-copy"><span className="eyebrow lime">MAKE YOUR NEXT MOVE</span><h2 id="strength-title">SMALL STEPS.<br /><span className="outline-text">STRONGER YOU.</span></h2><p>Your first rep. Your next personal best. Wherever you are in your journey, we have the equipment, space, and support to take you further.</p><a className="text-link" href="#membership">LET&apos;S GET TO WORK <ArrowUpRight size={18} /></a></div>
    <div className="equipment-wrap" ref={container}><span className="equipment-watermark" aria-hidden="true">STRONG</span><div className="equipment-scene"><SceneBoundary>{visible && <EquipmentScene key={sceneKey} reducedMotion={reduced || paused} />}</SceneBoundary></div><div className="equipment-caption"><span><Move size={14} /> DRAG TO EXPLORE IN 3D</span><div className="flex gap-2"><button aria-label={paused ? 'Play 3D animation' : 'Pause 3D animation'} aria-pressed={paused} className="icon-button" onClick={() => setPaused(!paused)}>{paused ? <Play size={16} /> : <Pause size={16} />}</button><button aria-label="Reset 3D dumbbell rotation" className="icon-button" onClick={() => setSceneKey((n) => n + 1)}><RotateCcw size={16} /></button></div></div></div>
  </section>
}
