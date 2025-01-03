export type PricingRule = {
  sku: string; // Stock Keeping Unit
  calculatePrice: (quantity: number, unitPrice: number) => number;
};
