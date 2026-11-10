import { FRAMEWORK } from './framework';
import { NEURON_IQ_PREMIUM } from './offer';

export interface FaqItem {
  question: string;
  answer: string;
}

/** Shared by the home and Neuron IQ Premium pages, each picks its own. */
export const FAQ = {
  free: {
    question: 'Is Neuron still open source?',
    answer: `Yes. The framework is open source under the ${FRAMEWORK.license} license.`,
  },
  whyPay: {
    question: 'Why pay for Neuron IQ if the framework is open source?',
    answer: 'You pay for getting advanced extensions, direct support from the team that created Neuron, priority on your bugs, and help when you upgrade or make important decisions.',
  },
  securityPatches: {
    question: 'Do I need Neuron IQ to get security patches?',
    answer: 'No. Security patches are available to everyone. With Neuron IQ and Neuron IQ Premium you get them with priority.',
  },
  versions: {
    question: 'Which versions are supported?',
    answer: `Neuron IQ and Neuron IQ Premium work with Neuron v${FRAMEWORK.version}. If you are on v${FRAMEWORK.previousVersion}, we help you move.`,
  },
  stopPaying: {
    question: 'What happens if I stop paying for Neuron IQ?',
    answer: 'You keep the version of te code you have, but it stops receiving updates.',
  },
  data: {
    question: 'Where is my data?',
    answer: `With Neuron IQ Premium you choose: our cloud, in ${NEURON_IQ_PREMIUM.saasRegion} hosted by ${NEURON_IQ_PREMIUM.saasProvider}, or on-premise in your own infrastructure.`,
  },
  compliance: {
    question: 'Does it make my company compliant with the AI Act or GDPR?',
    answer: 'No software can do that alone. On-premise keeps the data recorded by the platform inside your company, and the legal assessment stays with you.',
  },
  availability: {
    question: 'When will Neuron IQ Premium be available?',
    answer: 'It is coming soon. Get in touch to be among the first companies to try it.',
  },
} satisfies Record<string, FaqItem>;
