# MediaSorterPro

MediaSorterPro is a desktop application to manually scan files from a folder, view them through previews, assign tags, and reposition the files into different folders based on the assigned tags.

## Table of Contents

- [MediaSorterPro](#mediasorterpro)
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
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

MediaSorterPro is a desktop application developed with Electron, React, Tailwind CSS, and TypeScript. It allows you to manually scan files from a folder, view them through previews, assign tags, and reposition the files into different folders based on the assigned tags.

## Features

- **Electron**: Build cross-platform desktop apps with JavaScript, HTML, and CSS.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

## Prerequisites

Before you begin, make sure you have the following requirements:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

## Installation

Clone the repository and install the dependencies:

```sh
git clone https://github.com/tuo-username/mediasorterpro.git
cd mediasorterpro
npm install
# or
yarn install
```

## Setup

Make sure you have the necessary environment variables configured. Create a `.env` file in the root directory if needed.

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
mediasorterpro/
├── build/                  # Production build
├── dist/                   # Electron executables
├── node_modules/           # Node.js modules
├── src/                    # Source files
│   ├── App.tsx             # Main React component
│   ├── index.tsx           # Entry point for React
│   ├── index.css           # Tailwind CSS imports
│   └── index.html          # HTML template
├── assets/                 # Icons and other assets
│   ├── icon.png            # Icon for Linux
│   ├── icon.ico            # Icon for Windows
│   └── icon.icns           # Icon for macOS
├── .babelrc                # Babel configuration
├── .gitignore              # Git ignore file
├── package.json            # NPM scripts and dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── webpack.config.js       # Webpack configuration
├── main.js                 # Main Electron process
├── preload.js              # Electron preload script
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

This project follows Electron's security guidelines. The main security features include:

- **Context Isolation**: Enabled to prevent access to Electron internals from the renderer process.
- **Disable Remote Module**: The remote module is disabled for security reasons.
- **Preload Script**: A preload script is used to expose a limited API to the renderer process.

For more information, refer to the [Electron Security Documentation](https://www.electronjs.org/docs/latest/tutorial/security).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.