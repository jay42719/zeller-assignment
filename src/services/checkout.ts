import { PricingRule } from '../models/pricingRule';
import { products } from '../data/products';

export class Checkout {
  private scannedItems: { [sku: string]: number } = {};
  private pricingRules: PricingRule[];

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
  }

  scan(sku: string): void {
    if (!this.scannedItems[sku]) {
      this.scannedItems[sku] = 0;
    }
    this.scannedItems[sku]++;
  }

  total(): number {
    let totalPrice = 0;

    for (const [sku, quantity] of Object.entries(this.scannedItems)) {
      const product = products.find((p) => p.sku === sku);
      const rule = this.pricingRules.find((r) => r.sku === sku);

      if (product) {
        const unitPrice = product.price;
        if (rule) {
          totalPrice += rule.calculatePrice(quantity, unitPrice);
        } else {
          totalPrice += quantity * unitPrice;
        }
      }
    }

    return parseFloat(totalPrice.toFixed(2));
  }
}
