export const club = {
  name: 'Mid Wilshire',
  address: '3699 Wilshire Blvd, Suite 110',
  city: 'Los Angeles, CA 90010',
  phone: '(213) 388-2700',
  official: 'https://www.24hourfitness.com/gyms/los-angeles-ca/mid-wilshire-sport',
  join: 'https://www.24hourfitness.com/sales-redirect/salesredirect.html?flow=POS&clubId=00118',
  schedule: 'https://www.24hourfitness.com/utility/classes/?clubid=00118&trainingtype=all',
  app: 'https://link.24go.co/1BdPnxG9N0',
  directions: 'https://www.google.com/maps/search/?api=1&query=24+Hour+Fitness+3699+Wilshire+Blvd+Los+Angeles',
}

export const hours = [
  ['Monday', '5:00 AM – Midnight'],
  ['Tuesday – Thursday', 'Open 24 hours'],
  ['Friday', 'Midnight – 9:00 PM'],
  ['Saturday – Sunday', '5:00 AM – 9:00 PM'],
]

export const gallery = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14].map((n) => ({
  src: `/images/club-${n}.jpg`,
  alt: n === 1 ? 'Mid Wilshire club exterior on Wilshire Boulevard' : n === 6 ? 'Rows of cardio equipment at Mid Wilshire' : n === 8 ? 'Functional training area and TRX rig at Mid Wilshire' : n === 12 ? 'Free weights and benches at Mid Wilshire' : `Mid Wilshire club interior, official gallery photo ${n}`,
}))
