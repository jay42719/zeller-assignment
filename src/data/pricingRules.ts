import { PricingRule } from '../models/pricingRule';

export const pricingRules: PricingRule[] = [
  {
    sku: 'atv', // Stock Keeping Unit
    calculatePrice: (quantity, unitPrice) =>
      Math.floor(quantity / 3) * 2 * unitPrice + (quantity % 3) * unitPrice,
  },
  {
    sku: 'ipd',
    calculatePrice: (quantity, unitPrice) =>
      quantity > 4 ? quantity * 499.99 : quantity * unitPrice,
  },
];
