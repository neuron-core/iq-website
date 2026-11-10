// /llms.txt (llmstxt.org): the site summarised for AI tools.
// Built from src/consts, so its facts match the pages.

import type { APIRoute } from 'astro';
import { CONTACT_FORM_URL, NEURON_AI_LINKS, PAGES, PARTNER_FORM_URL } from '../consts/links';
import { FRAMEWORK } from '../consts/framework';
import { CONSOLE_FEATURES, FLY_PACKAGES, NEURON_IQ, NEURON_IQ_PREMIUM, flyPackage } from '../consts/offer';
import { PARTNER_TIERS } from '../consts/partners';
import { formatList } from '../utils/format';

const appLimits = formatList([...NEURON_IQ.appLimits.map((limit) => `up to ${limit}`), 'unlimited'], 'or');
const consoleFeatures = formatList(CONSOLE_FEATURES.map((feature) => feature.name.toLowerCase()));
const tierNames = formatList(PARTNER_TIERS.map((tier) => tier.name));
const deployments = formatList(NEURON_IQ_PREMIUM.deployments, 'or');

const body = `# Neuron IQ

> Priority support from the team that created Neuron, and a platform to run, watch and improve your PHP AI agents in production.

Neuron AI is the first agentic framework of the PHP ecosystem, open source under the ${FRAMEWORK.license} license. Neuron IQ and Neuron IQ Premium come from the team that created it, and work with Neuron v${FRAMEWORK.version}.

- Neuron IQ: the certified distribution of the framework, with priority fixes, a direct, dedicated channel with the team that created Neuron, ${NEURON_IQ.consultingHours} hours of specialist consulting and Neuron Subagents. Annual subscription, sized on the applications in production: ${appLimits}.
- Neuron IQ Premium (coming soon): the ready-to-use platform to run, monitor and improve your agents: ${consoleFeatures}. Annual subscription, as ${deployments}. Includes ${flyPackage(NEURON_IQ_PREMIUM.consultingHours)}.
- Fly with Neuron: specialist and advanced consulting packages from the people who created Neuron, of ${formatList(FLY_PACKAGES.map(String))} hours.

## Pages

- [Neuron IQ](${PAGES.home}): how the framework, Neuron IQ and Neuron IQ Premium fit together, what Neuron IQ includes, and the FAQ
- [Neuron IQ Premium](${PAGES.premium}): the console, before and after, and how to run it: ${deployments}
- [Solutions](${PAGES.solutions}): the plans compared, consultancy and support, training and certification
- [Partner Network](${PAGES.partners}): ${tierNames} partnership levels, and the Referral Partner

## Neuron AI

- [Website](${NEURON_AI_LINKS.website}): the open source framework
- [Documentation](${NEURON_AI_LINKS.docs})
- [GitHub](${NEURON_AI_LINKS.github})

## Contact

- [Talk to us](${CONTACT_FORM_URL}): Neuron IQ, Neuron IQ Premium, consultancy and training
- [Become a partner](${PARTNER_FORM_URL}): join the Neuron Partner Network
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
