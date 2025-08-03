# E-Commerce Shop Demo

A simple online shop built for the See Tickets front-end challenge. Users can browse products, view details, filter by category, and add items to their basket.

## Getting Started

1. Clone the repo and install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to see the app

## What I Built

The app includes all the main features from the challenge:

- **Product listing** - Shows all products from the Fake Store API
- **Product details** - Click any product to see more info
- **Category filtering** - Filter products by category using the dropdown
- **Shopping basket** - Add/remove items, see total in header
- **Checkout** - Complete purchase with a success page

### Bonus Features I Added

- **Quantity controls** - Change item quantities in the basket
- **Persistent basket** - Your basket saves to local storage
- **Unit tests** - Added tests for the cart functionality
- **Responsive design** - Works on mobile and desktop

## Tech Stack Used

I tried to match your tech stack where possible:

- **React** & **Next.js** - Main framework
- **MUI** - For components and styling
- **TypeScript** - Type safety throughout
- **Zustand** - State management (lighter alternative to Redux)
- **Jest** & **React Testing Library** - For unit tests

## How It Works

### The Basket
I used Zustand for managing the shopping cart because it's simple and does the job well. The cart automatically saves to localStorage so your items don't disappear when you refresh.

### API Calls
All product data comes from the Fake Store API. I fetch products on the server side where possible for better performance.

### Styling
Most styling is done with MUI components to keep things consistent. I added some custom responsive breakpoints to make sure it looks good on all screen sizes.

## Testing

Run the tests with:
```bash
npm test
```

I focused on testing the cart functionality since that's the most important business logic.

## What I'd Do Next

If I had more time, I would:

- Add more comprehensive tests
- Improve error handling for API failures
- Add loading states for better UX
- Implement user accounts and order history
- Improve accessibilty
- E2E tests with Playwright
- Add a CI/CD Pipeline

## Thoughts on the Challenge

This was a good challenge that covered all the basics of an e-commerce app. I enjoyed working with the Fake Store API and trying to match your tech stack. The requirements were clear and gave me room to add some extra features.

The trickiest part was getting the localStorage persistence to work properly with Next.js server-side rendering, but I managed to sort it out with proper hydration handling.