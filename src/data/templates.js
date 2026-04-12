export const STEP_TYPES = {
  landing: { label: 'Landing Page', icon: '🏠', color: '#6366f1' },
  optin: { label: 'Opt-In Page', icon: '📧', color: '#8b5cf6' },
  salesPage: { label: 'Sales Page', icon: '💰', color: '#ec4899' },
  orderForm: { label: 'Order Form', icon: '🛒', color: '#f59e0b' },
  upsell: { label: 'Upsell Page', icon: '🚀', color: '#10b981' },
  downsell: { label: 'Downsell Page', icon: '🔄', color: '#14b8a6' },
  thankYou: { label: 'Thank You Page', icon: '🎉', color: '#3b82f6' },
  webinar: { label: 'Webinar Page', icon: '🎥', color: '#f97316' },
  video: { label: 'Video Sales Letter', icon: '▶️', color: '#ef4444' },
  quiz: { label: 'Quiz / Survey', icon: '❓', color: '#a855f7' },
};

export const TEMPLATES = [
  {
    id: 'lead-magnet',
    name: 'Lead Magnet Funnel',
    description: 'Capture leads with a free offer, then nurture them into buyers.',
    category: 'Beginner',
    steps: [
      { id: 's1', type: 'landing', name: 'Free Gift Landing Page', visits: 1000, conversions: 400 },
      { id: 's2', type: 'optin', name: 'Email Opt-In', visits: 400, conversions: 320 },
      { id: 's3', type: 'thankYou', name: 'Thank You + Offer', visits: 320, conversions: 64 },
    ],
  },
  {
    id: 'product-launch',
    name: 'Product Launch Funnel',
    description: 'Build anticipation and launch your product to a warm audience.',
    category: 'Intermediate',
    steps: [
      { id: 's1', type: 'optin', name: 'Waitlist Opt-In', visits: 2000, conversions: 900 },
      { id: 's2', type: 'video', name: 'Video Sales Letter', visits: 900, conversions: 540 },
      { id: 's3', type: 'orderForm', name: 'Order Form', visits: 540, conversions: 108 },
      { id: 's4', type: 'upsell', name: 'One-Time Upsell', visits: 108, conversions: 43 },
      { id: 's5', type: 'thankYou', name: 'Thank You Page', visits: 108, conversions: 108 },
    ],
  },
  {
    id: 'webinar',
    name: 'Webinar Funnel',
    description: 'Register attendees for your live or automated webinar.',
    category: 'Intermediate',
    steps: [
      { id: 's1', type: 'webinar', name: 'Webinar Registration', visits: 3000, conversions: 1200 },
      { id: 's2', type: 'thankYou', name: 'Confirmation Page', visits: 1200, conversions: 1200 },
      { id: 's3', type: 'salesPage', name: 'Replay / Sales Page', visits: 800, conversions: 160 },
      { id: 's4', type: 'orderForm', name: 'Order Form', visits: 160, conversions: 48 },
    ],
  },
  {
    id: 'tripwire',
    name: 'Tripwire Funnel',
    description: 'Convert cold traffic with a low-cost offer, then upsell to core products.',
    category: 'Advanced',
    steps: [
      { id: 's1', type: 'landing', name: 'Free + Shipping Offer', visits: 5000, conversions: 1500 },
      { id: 's2', type: 'orderForm', name: 'Order Form ($7)', visits: 1500, conversions: 450 },
      { id: 's3', type: 'upsell', name: 'Core Product Upsell', visits: 450, conversions: 135 },
      { id: 's4', type: 'downsell', name: 'Payment Plan Downsell', visits: 315, conversions: 95 },
      { id: 's5', type: 'thankYou', name: 'Thank You Page', visits: 450, conversions: 450 },
    ],
  },
  {
    id: 'quiz',
    name: 'Quiz Funnel',
    description: 'Segment your audience with a quiz and show personalised offers.',
    category: 'Intermediate',
    steps: [
      { id: 's1', type: 'landing', name: 'Quiz Landing Page', visits: 2500, conversions: 1750 },
      { id: 's2', type: 'quiz', name: 'Quiz Questions', visits: 1750, conversions: 1400 },
      { id: 's3', type: 'optin', name: 'Results Opt-In', visits: 1400, conversions: 840 },
      { id: 's4', type: 'salesPage', name: 'Personalised Sales Page', visits: 840, conversions: 168 },
      { id: 's5', type: 'orderForm', name: 'Order Form', visits: 168, conversions: 50 },
    ],
  },
];

export const DEFAULT_FUNNEL = {
  id: 'my-funnel',
  name: 'My First Funnel',
  steps: [
    { id: 'step-1', type: 'landing', name: 'Landing Page', visits: 1000, conversions: 350 },
    { id: 'step-2', type: 'optin', name: 'Opt-In Page', visits: 350, conversions: 280 },
    { id: 'step-3', type: 'thankYou', name: 'Thank You Page', visits: 280, conversions: 280 },
  ],
};
