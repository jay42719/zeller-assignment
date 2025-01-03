# Checkout System for Zeller

This is a flexible and extendable checkout system for Zeller's computer store. It supports product scanning, pricing rules, and promotions, as described in the project requirements.

---

## Features

- Flexible pricing rules.
- Supports bulk discounts and promotions.
- Built-in unit tests to ensure reliability.
- Auto-formatting with Prettier.
- Pre-commit hooks for maintaining code quality.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jay42719/zeller-assignment.git
   cd zeller-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Running the Checkout System

1. To start the project in development mode (auto-restarts using nodemon):
   ```bash
   npm run dev
   ```
2. To build and start the project in production mode:
   ```bash
   npm run build
   npm start
   ```

---

### Example Usage

    import { Checkout } from './src/Checkout';
    import { pricingRules } from './src/data/pricingRules';

    const co = new Checkout(pricingRules);
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');

    console.log(`Total: $${co.total().toFixed(2)}`);

---

### Scripts

- npm run dev: Starts the project in development mode.
- npm run build: Builds the project using TypeScript.
- npm start: Runs the project after building.
- npm test: Runs unit tests using Jest.
- npm run format: Formats code using Prettier.
