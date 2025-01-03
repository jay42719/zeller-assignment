import { Checkout } from './services/checkout';
import { pricingRules } from './data/pricingRules';

// First Checkout Scenario
const co1 = new Checkout(pricingRules);

co1.scan('atv');
co1.scan('atv');
co1.scan('atv');
co1.scan('vga');

console.log('SKUs Scanned: atv, atv, atv, vga \nTotal Price:', co1.total());

// Second Checkout Scenario
const co2 = new Checkout(pricingRules);

co2.scan('atv');
co2.scan('ipd');
co2.scan('ipd');
co2.scan('atv');
co2.scan('ipd');
co2.scan('ipd');
co2.scan('ipd');

console.log(
  'SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd \nTotal Price:',
  co2.total()
);
