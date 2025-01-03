import { PricingRule } from '../models/pricingRule';

export const pricingRules: PricingRule[] = [
  {
    sku: 'atv', // Apple TV
    calculatePrice: (quantity, unitPrice) =>
      Math.floor(quantity / 3) * 2 * unitPrice + (quantity % 3) * unitPrice,
  },
  {
    sku: 'ipd', // Super iPad
    calculatePrice: (quantity, unitPrice) =>
      quantity > 4 ? quantity * 499.99 : quantity * unitPrice,
  },
];
