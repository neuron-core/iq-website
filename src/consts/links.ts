/** Every "Talk to us" button */
export const CONTACT_FORM_URL = 'https://form.typeform.com/to/Ba6XOU1t';

/** Every "Become a partner" button */
export const PARTNER_FORM_URL = 'https://form.typeform.com/to/VFw5Dc7x';

export const PRIVACY_POLICY_URL = 'https://inspector.dev/privacy-policy.pdf';

export const NEURON_AI_LINKS = {
  website: 'https://neuron-ai.dev/',
  docs: 'https://docs.neuron-ai.dev/',
  github: 'https://github.com/neuron-core/neuron-ai',
};

/** Neuron IQ packages with a website of their own */
export const NEURON_IQ_LINKS = {
  stream: 'https://stream.neuron-iq.dev/',
};

/** Neuron AI's social media pages */
export const NEURON_AI_SOCIAL = {
  linkedin: 'https://www.linkedin.com/company/106896704/',
  instagram: 'https://www.instagram.com/neuronai_php_adk/',
  x: 'https://x.com/neuronai_php',
};

export const PAGES = {
  home: '/',
  premium: '/premium/',
  solutions: '/solutions/',
  partners: '/partners/',
};

/** Header and footer navigation. `product` gives an item its product's color in the header. */
export const MAIN_NAV: { label: string; href: string; product?: 'premium' }[] = [
  { label: 'Neuron IQ Premium', href: PAGES.premium, product: 'premium' },
  { label: 'Solutions', href: PAGES.solutions },
  { label: 'Partner Network', href: PAGES.partners },
  { label: 'FAQ', href: `${PAGES.home}#faq` },
];
