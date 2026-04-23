# Aurex
## Deployed testnet Contracts

- **MockUSDT:** [0x8225838dd8f89960240d5553552a5c27e2bcc57b](https://testnet.bscscan.com/token/0x8225838dd8f89960240d5553552a5c27e2bcc57b)

- **AurexNode:** [0x5676ba67eae088d21e93654044114149fbe232ac](https://testnet.bscscan.com/address/0x5676ba67eae088d21e93654044114149fbe232ac)

- **AurexToken:** [0xbaF25B731D67Eb314FFecA04Db8A57b3f45bD8A2](https://testnet.bscscan.com/address/0xbaF25B731D67Eb314FFecA04Db8A57b3f45bD8A2)

- **AurexStaking:** [0xf6c3f452d8dc225a67ec0cc3799efa4a8cab244a](https://testnet.bscscan.com/address/0xf6c3f452d8dc225a67ec0cc3799efa4a8cab244a)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

**Aurex** is a cutting-edge blockchain platform designed to simplify node management, staking, and rewards tracking. Built with modern web technologies, it offers a seamless user experience with stunning animations and responsive design.

The platform provides users with an intuitive interface to:
- Purchase and manage blockchain nodes
- Stake tokens and earn rewards
- Monitor portfolio performance via comprehensive dashboards
- Track and claim rewards in real-time

---

## ✨ Features

- 🚀 **High Performance** - Built with Vite for lightning-fast development and optimized production builds
- 🎨 **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS and custom animations
- 🔄 **Smooth Animations** - GSAP-powered animations for enhanced user experience
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎯 **Node Management** - Comprehensive node sale and management system
- 💰 **Staking Platform** - Secure token staking with automated rewards
- 📊 **Dashboard Analytics** - Real-time monitoring and performance tracking
- 🎁 **Rewards System** - Track and claim your earnings effortlessly
- 🧩 **Component Library** - Extensive library of reusable UI components (Lightswind)
- ⚡ **Optimized Performance** - Code splitting and lazy loading for optimal load times

---

## 🛠 Tech Stack

### Frontend Framework
- **React 19.2.0** - Latest React with concurrent features
- **React Router 7.9.6** - Modern routing solution

### Build Tools & Development
- **Vite 7.2.2** - Next generation frontend tooling
- **ESLint** - Code quality and consistency

### Styling & UI
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Lightswind 3.1.18** - Advanced UI component library
- **Custom CSS** - Additional styling and theming

### Animation & Graphics
- **GSAP 3.13.0** - Professional-grade animation library
- **3D Components** - Interactive 3D elements and effects

### Fonts
- **Inter** - Primary typography
- **Sofia Sans** - Secondary typography

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** or **bun**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/swadhinbiswas123/aurex-frontend.git
   cd aurex
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

The application will be available at `http://localhost:3000`

### Build

Create a production build:

```bash
npm run build
# or
yarn build
# or
bun run build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
bun run preview
```

---

## 📁 Project Structure

```
aurex/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, icons, and mock data
│   │   ├── fonts/        # Custom font families
│   │   ├── icons/        # SVG icons
│   │   ├── images/       # Project images
│   │   └── mock/         # Mock data for development
│   ├── components/        # Reusable UI components
│   │   ├── btn/          # Button components
│   │   ├── card/         # Card components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   └── lightswind/   # Lightswind UI components
│   ├── layout/            # Layout components
│   ├── pages/             # Page components
│   │   ├── Dashboard/    # Dashboard page
│   │   ├── Home/         # Home/landing page
│   │   ├── NodeSale/     # Node sale page
│   │   ├── Rewards/      # Rewards page
│   │   └── Stake/        # Staking page
│   ├── router/            # Routing configuration
│   ├── shared/            # Shared components (Header, Footer, etc.)
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── eslint.config.js       # ESLint configuration
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run deploy` | Build and deploy to Netlify |

---

## 🚢 Deployment

The project is configured for deployment on **Netlify**. 

### Automated Deployment

```bash
npm run deploy
```

This command will:
1. Build the production version
2. Deploy to Netlify using the configured site ID

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Ensure proper routing configuration for SPA

---

## 🤝 Contributing

We welcome contributions to Aurex! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style

- Follow the existing code style
- Run ESLint before committing: `npm run lint`
- Write meaningful commit messages
- Add comments for complex logic

---

## 📄 License

This project is **private** and proprietary. All rights reserved.

---

## 📞 Contact & Support

For questions, issues, or support:

- **Repository**: [aurex-frontend](https://github.com/swadhinbiswas123/aurex-frontend)
- **Organization**: BlockWhizz
- **Current Branch**: mahfuz

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Vite Team** - For the blazing fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **GSAP** - For professional animation capabilities
- **Lightswind** - For the comprehensive UI component library

---

<div align="center">
  
  **Built with ❤️ by the BlockWhizz Team**
  
  ⭐ Star this repo if you find it helpful!

</div>
