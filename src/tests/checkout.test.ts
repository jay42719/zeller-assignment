import { Checkout } from '../services/checkout';
import { pricingRules } from '../data/pricingRules';

describe('Checkout System', () => {
  it('Test 1 : Calculates total for 3-for-2 Apple TV deal', () => {
    const co = new Checkout(pricingRules);
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');
    expect(co.total()).toBe(249.0);
  });

  it('Test 2 : Applies bulk discount for Super iPad', () => {
    const co = new Checkout(pricingRules);
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');
    expect(co.total()).toBe(2499.95);
  });

  it('Test 3 : Handles mixed scenarios', () => {
    const co = new Checkout(pricingRules);
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');
    expect(co.total()).toBe(2718.95);
  });
});
