export const navItems = [
  { label: 'Services', to: '/services', key: 'services' , subItems: [
    { label: 'Wash & Fold', to: '/services/wash-fold', key: 'wash-fold' },
    { label: 'Self Service', to: '/services/self-service', key: 'self-service' },
    { label: 'Commercial Towels', to: '/services/commercial-towels', key: 'commercial-towels' },
  ]},
  { label: 'Blog', to: '/blog', key: 'blog' },
  { label: 'Contact', to: '/contact', key: 'contact' },
];

export const services = [
  {
    title: 'Wash and Fold',
    image: 'washFold',
    body: 'Drop off your laundry and let the Circle Wash team wash, dry, and fold it neatly for pickup.',
  },
  {
    title: 'Self Service',
    image: 'selfService',
    body: 'Use large-capacity washers and dryers built for everyday loads, comforters, and blankets.',
  },
  {
    title: 'Commercial Towels',
    image: 'towels',
    body: 'Reliable towel laundry support for local businesses that need clean, folded inventory.',
  },
];

const base = import.meta.env.BASE_URL;

export const features = [
  { label: 'Epayment Accepted', image: `${base}images/payments.jpg` },
  { label: 'Large Washer for comforters and blankets', image: `${base}images/large-washer.jpg` },
  { label: 'Laundry Products', image: `${base}images/laundry-products.png` },
  { label: 'Entertainment System with Free Wifi', image: `${base}images/entertainment.jpg` },
];

export const steps = [
  {
    title: 'Drop Off',
    body: 'Circle Wash accepts drop off from 6 am to 9pm.',
    image: 'dropOff',
  },
  {
    title: 'Wash',
    body: 'Our Wash & Fold service makes laundry easy. We carefully sort your clothes, wash them with quality detergent, dry them completely, and fold them neatly for pickup.',
    image: 'wash',
  },
  {
    title: 'Pickup',
    body: 'Circle Wash accepts pickup from 6 am to 9pm.',
    image: 'pickup',
  },
];

export const reviews = [
  {
    name: 'Racquelle Roberts',
    date: 'February 11',
    text: 'Hiring Feedback Wrench has been one of the greatest investments I have made in my business.',
  },
  {
    name: 'Rita Nwokeji',
    date: 'March 11, 2021',
    text: 'Rob helped me identify the next steps for my accounting practice quickly. Thanks a lot.',
  },
  {
    name: 'Mike Stilwell',
    date: 'March 11, 2018',
    text: 'Met with Rob as he helped me navigate some long term strategies as I operated my business.',
  },
];

export const faqs = [
  ['Where is Circle Wash Stockton located?', 'Circle Wash is located at 1101 E March Ln, Stockton, CA 95210.'],
  ['How long does wash and fold take?', 'Most wash and fold orders are ready for pickup during the next available service window.'],
];

export const footerColumns = [
  ['Services', ['Wash & Fold', 'Self-Serve Laundry', 'Commercial']],
  ['Company', ['About Us', 'Contact', 'Blog']],
  ['Legal', ['Terms of Service', 'Store Policy']],
];
