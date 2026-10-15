import { GymHeader } from '@/components/gym-header'
import { GymHero } from '@/components/gym-hero'
import { ClubSection, AmenitiesSection, ClassesSection, VisitSection, GymFooter } from '@/components/gym-sections'
import { StrengthFeature } from '@/components/strength-feature'
import { Memberships } from '@/components/memberships'
import { ScrollReveals } from '@/components/scroll-reveals'

export default function Page() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <GymHeader />
    <main id="main">
      <GymHero />
      <ClubSection />
      <StrengthFeature />
      <AmenitiesSection />
      <ClassesSection />
      <Memberships />
      <VisitSection />
    </main>
    <GymFooter />
    <ScrollReveals />
  </>
}
