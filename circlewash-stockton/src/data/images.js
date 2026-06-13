const imageCandidates = {
  favicon: ['cw_favicon.png'],
  logo: ['cw_logo.jpg'],
  hero: ['circle_wash_hero.jpg'],
  washFold: ['wash-and-fold.jpg'],
  selfService: ['selfservice.jpg'],
  selfServiceHero: ['large-washer.png'],
  insideWasher: ['inside-washer.jpg'],
  towels: ['commercial-towels.jpg'],
  drying: ['free-drying.jpg'],
  dropOff: ['dropoff.jpg'],
  wash: ['wash.jpg'],
  pickup: ['pickup.jpeg'],
  map: ['map.png'],
  googleLogo: ['Google-logo.png'],
  payments: ['payments.jpg'],
  largeWasher: ['large-washer.jpg'],
  laundryProducts: ['laundry-products.png'],
  wifi: ['entertainment.jpg'],
  blog: ['blog.png'],
};

export function getImageSrc(name, candidateIndex = 0) {
  const candidates = imageCandidates[name] || [];
  const fileName = candidates[candidateIndex];

  if (!fileName) {
    return null;
  }

  return `${import.meta.env.BASE_URL}images/${fileName}`;
}

export default imageCandidates;
