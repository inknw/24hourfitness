'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Expand, Play } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { gallery } from '@/lib/club-data'

export function ClubGallery({ hero = false }: { hero?: boolean }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const change = (step: number) => setIndex((current) => (current + step + gallery.length) % gallery.length)
  return <>
    <button className={hero ? 'tour-button' : 'text-link'} onClick={() => setOpen(true)}>{hero ? <span className="play-icon"><Play size={14} fill="currentColor" /></span> : <Expand size={16} />}{hero ? 'TAKE A LOOK INSIDE' : 'EXPLORE THE CLUB'}{!hero && <ArrowRight size={16} />}</button>
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="gallery-dialog sm:max-w-5xl" onKeyDown={(e) => { if (e.key === 'ArrowRight') change(1); if (e.key === 'ArrowLeft') change(-1) }}>
        <DialogHeader><DialogTitle>Inside Mid Wilshire</DialogTitle><DialogDescription>Real photos from the official club gallery. Use the arrows to explore.</DialogDescription></DialogHeader>
        <img className="gallery-image" src={gallery[index].src} alt={gallery[index].alt} />
        <div className="gallery-controls"><Button variant="outline" size="icon-lg" onClick={() => change(-1)} aria-label="Previous club photo"><ArrowLeft /></Button><span aria-live="polite">{String(index + 1).padStart(2, '0')} / {gallery.length} <span className="gallery-caption">— {gallery[index].alt}</span></span><Button variant="outline" size="icon-lg" onClick={() => change(1)} aria-label="Next club photo"><ArrowRight /></Button></div>
      </DialogContent>
    </Dialog>
  </>
}
