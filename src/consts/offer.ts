/** Fly with Neuron consulting packages, in hours */
export const FLY_PACKAGES = [4, 10, 20];

export function flyPackage(hours: number): string {
  return `Fly with Neuron ${hours}`;
}

export const NEURON_IQ = {
  /** Plans are sized on the applications in production: up to each limit, or unlimited */
  appLimits: [1, 3],
  /** Hours of the Fly with Neuron package included */
  consultingHours: 4,
};

export const NEURON_IQ_PREMIUM = {
  consultingHours: 10,
  deployments: ['SaaS', 'on-premise'],
  saasRegion: 'a European region (Amsterdam)',
  saasProvider: 'a US provider',
};

/** The Neuron IQ Premium console. `short` names the feature in the plans table. */
export const CONSOLE_FEATURES = [
  { name: 'Recovery and scheduling', short: 'recovery', text: 'From the last saved step' },
  { name: 'Live answers', short: 'live answers', text: 'Live to the user’s browser' },
  { name: 'Tracing and alerts', short: 'tracing', text: 'Watch your agents in production' },
  { name: 'Quality tests', short: 'tests', text: 'Results compared over time' },
  { name: 'Costs', short: 'costs', text: 'Tracked per application' },
  { name: 'Prompt management', short: 'prompts', text: 'Versions and changes without a release' },
];

export const CONSULTING_ROLES = ['Certified Senior Software Engineer', 'Certified Software Architect'];

/** One level of the training or certification path, first level first */
export interface Level {
  name: string;
  detail?: string;
}

export const TRAINING: Level[] = [
  { name: 'Kick Off with Neuron AI', detail: '8 hours in two sessions' },
  { name: 'Expert on Neuron AI', detail: '2 days, with samples and classroom' },
];

export const CERTIFICATIONS: Level[] = [
  { name: 'Use Neuron AI Certification' },
  { name: 'Architectural Projects with Neuron Certification' },
];
