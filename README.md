# Little Lemon Restaurant Reservation System

A modern, responsive web application for Little Lemon Restaurant that allows customers to make table reservations online. Built with React, TypeScript, and Tailwind CSS.

## Features

- Clean, restaurant-themed layout
- Responsive design for all devices
- Accessible form with proper ARIA labels
- Form validation
- Date and time selection
- Interactive success messages
- Unit tests

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Formik & Yup for form handling
- React DatePicker
- Jest & React Testing Library

## Getting Started

### Prerequisites

- Node.js 16.0 or later
- npm 7.0 or later

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd little-lemon-reservation
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Running Tests

```bash
npm test
```

## Project Structure

```
src/
  components/         # React components
    Header.tsx
    ReservationForm.tsx
    SuccessMessage.tsx
    __tests__/       # Component tests
  App.tsx            # Main App component
  main.tsx          # Application entry point
  index.css         # Global styles
```

## Accessibility

The application follows WCAG guidelines with:
- Proper heading hierarchy
- ARIA labels
- Keyboard navigation
- High contrast colors
- Responsive design
- Screen reader friendly

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 