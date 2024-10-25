# Electron App Boilerplate

This repository serves as a boilerplate for developing desktop applications using Electron, React, Tailwind CSS, and TypeScript. It includes all necessary configurations and dependencies to get you started quickly.

## Table of Contents

- [Electron App Boilerplate](#electron-app-boilerplate)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Scripts](#scripts)
  - [Building for Production](#building-for-production)
  - [Security](#security)
  - [Debugging](#debugging)
  - [Configuring Icons](#configuring-icons)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

This boilerplate provides a solid foundation for building desktop applications with Electron, React, Tailwind CSS, and TypeScript. It includes configurations for Webpack, Babel, and PostCSS, ensuring a smooth development experience.

## Features

- **Electron**: Build cross-platform desktop apps with JavaScript, HTML, and CSS.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Webpack**: A module bundler for modern JavaScript applications.
- **Babel**: A JavaScript compiler.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

## Installation

Clone the repository and install the dependencies:

```sh
git clone https://github.com/carmineoncode/electron-app-boilerplate.git
cd electron-app-boilerplate
npm install
# or
yarn install
```

## Setup

Ensure you have the necessary environment variables set up. Create a `.env` file in the root directory if needed.

## Usage

To start the development server and the Electron app, run:

```sh
npm start
# or
yarn start
```

In another terminal, run:

```sh
npm run electron
# or
yarn electron
```

## Project Structure

```plaintext
electron-app-boilerplate/
├── build/                  # Production build
├── dist/                   # Electron executables
├── node_modules/           # Node.js modules
├── src/                    # Source files
│   ├── App.tsx             # Main React component
│   ├── index.tsx           # Entry point for React
│   ├── index.css           # Tailwind CSS imports
│   └── index.html          # HTML template
├── .babelrc                # Babel configuration
├── .gitignore              # Git ignore file
├── package.json            # NPM scripts and dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── webpack.config.js       # Webpack configuration
├── main.js                 # Electron main process
├── preload.js              # Electron preload script
├── assets/                 # Icons and other assets
│   ├── icon.png            # Icon for Linux
│   ├── icon.ico            # Icon for Windows
│   └── icon.icns           # Icon for macOS
└── README.md               # Project documentation
```

## Scripts

- `npm start` / `yarn start`: Start the development server.
- `npm run electron` / `yarn electron`: Start the Electron app in development mode.
- `npm run build` / `yarn build`: Build the project for production.
- `npm run electron:prod` / `yarn electron:prod`: Start the Electron app in production mode.
- `npm run dist` / `yarn dist`: Build the project and create executables.

## Building for Production

To create a production build and generate executables, run:

```sh
npm run dist
# or
yarn dist
```

This will create a production build in the `build` directory and generate executables in the `dist` directory.

## Security

This project follows Electron's security guidelines. Key security features include:

- **Context Isolation**: Enabled to prevent access to the Electron internals from the renderer process.
- **Disable Remote Module**: The remote module is disabled for security reasons.
- **Preload Script**: A preload script is used to expose a limited API to the renderer process.

For more information, refer to the [Electron Security Documentation](https://www.electronjs.org/docs/latest/tutorial/security).

## Debugging

In development mode, you can open the DevTools by using the custom menu:

- **Reload**: Press `CmdOrCtrl+R` to reload the window.
- **Toggle DevTools**: Press `CmdOrCtrl+Shift+I` to open or close the DevTools.

Note: The DevTools are not accessible in production mode.

## Configuring Icons

To configure the icons for your Electron app, place your icon files in the `assets` directory. The following icon formats and resolutions are supported:

- **Windows**: `icon.ico` (16x16, 32x32, 48x48, 64x64, 128x128, 256x256)
- **macOS**: `icon.icns` (16x16, 32x32, 64x64, 128x128, 256x256, 512x512, 1024x1024)
- **Linux**: `icon.png` (16x16, 32x32, 48x48, 64x64, 128x128, 256x256, 512x512)

Update the `package.json` file to point to your icon files:

```json
"build": {
  "appId": "com.example.electronapp",
  "files": [
    "build/**/*",
    "main.js",
    "preload.js",
    "package.json"
  ],
  "directories": {
    "output": "dist",
    "buildResources": "assets"
  },
  "win": {
    "icon": "assets/icon.ico"
  },
  "mac": {
    "icon": "assets/icon.icns"
  },
  "linux": {
    "icon": "assets/icon.png"
  }
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.