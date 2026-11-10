/** Partnership levels, from the entry level up. `certified` counts the certified people each level asks for. */
export const PARTNER_TIERS = [
  { name: 'Silver', conditions: 'Yes', certified: { sales: 1, tech: 1 } },
  { name: 'Gold', conditions: 'Higher', certified: { sales: 1, tech: 2 } },
  { name: 'Platinum', conditions: 'Highest', certified: { sales: 1, tech: 2 } },
];
