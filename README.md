# React i18n Practical Guide

A comprehensive guide and working example for implementing internationalization (i18n) and localization in React applications. Features step-by-step implementations of language switching, number/date formatting, dynamic translations, and RTL support using react-i18next and Tailwind CSS.

## Features

- 🌐 Multiple language support (English, Arabic)
- 🔄 RTL layout support
- 💅 Tailwind CSS integration
- ⚡ Performance optimization techniques
- 🧪 Form validation with Zod
- 📦 Organized translation structure

## Demo Branches

Each feature is implemented in its own branch for easier learning:

- `base`: Basic i18next configuration
- `rtl-support`: RTL layout implementation
- `performance`: Performance optimization
- `persistence-events`: Persisting the preference language
- `formatting`: Formatting dates and numbers
- `namespaces`: Implementing namespaces

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- i18next
- react-i18next
- Zod
- react-hook-form

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-i18n-practical-guide.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

## Project Structure

```
src/
  ├── locales/         # Translation files
  │   ├── en/
  │   │   ├── common.json
  │   │   ├── auth.json
  │   │   └── validation.json
  │   └── ar/
  ├── components/      # React components
  ├── i18n.ts         # i18next configuration
  └── App.tsx         # Main application
```

## VSCode Setup

This project includes configuration for the i18n Ally extension. To use it:

1. Install the "i18n Ally" extension
2. English is configured as the source language
3. Enjoy real-time translation previews and management

## Contributing

Feel free to contribute to this project. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

x - [@othmane_kahtal](https://x.com/othmane_kahtal)

Linkedin - [@othmane kahtal](https://www.linkedin.com/in/othmanekahtal/)

hashnode - [@othmane kahtal](https://hashnode.com/@othmanekahtal)

Blog Link: [https://blog.othmane.me/building-multilingual-react-apps-practical-guide-to-i18next-and-rtl-support](https://blog.othmane.me/building-multilingual-react-apps-practical-guide-to-i18next-and-rtl-support)
