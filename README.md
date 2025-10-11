# React Electron Test App

This project is a fully functional macOS desktop application built with Electron that encapsulates a React web application. It includes a bundled Node.js/Express backend, a custom desktop icon setup, and a complete build process for production deployment.

## Features

-   **Desktop Application**: A cross-platform desktop app powered by Electron.
-   **Modern Frontend**: A rich, responsive UI built with React, TypeScript, and Tailwind CSS.
-   **Bundled Backend**: A self-contained Node.js/Express server that runs alongside the Electron app.
-   **Native Integration**: Demonstrates Inter-Process Communication (IPC) to call native desktop dialogs from the React app.
-   **Production Ready**: Scripts and configuration for building a distributable macOS `.dmg` installer.
-   **Custom Icon**: Setup for including a custom macOS desktop icon (`.icns`).

## Local Development

Follow these steps to get the application running on your local machine for development and testing.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or newer recommended)
-   npm (comes with Node.js)

### Setup

1.  **Clone the repository (if applicable)**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
    This command will install all the necessary dependencies for React, Electron, and the build tools.
    ```bash
    npm install
    ```

3.  **Run the development server:**
    This command concurrently starts the Vite dev server for the React app and launches the Electron application. The app will have access to developer tools and hot-reloading for the frontend.
    ```bash
    npm run dev
    ```

## Building for Production (macOS)

To build the application into a distributable package, follow these steps.

1.  **Create a custom icon (Optional but Recommended)**
    -   Create a PNG file for your application icon at `assets/icon.png`. A resolution of 512x512 or 1024x1024 is recommended.
    -   `electron-builder` will automatically convert this PNG into a `.icns` file required by macOS during the build process.

2.  **Run the distribution script:**
    This command first builds the React application for production into the `dist` folder, then uses `electron-builder` to package your app into a macOS `.dmg` installer.
    ```bash
    npm run dist
    ```

3.  **Find the installer:**
    Once the build is complete, you will find the installer file (e.g., `React Test App-1.0.0.dmg`) in the `release/` directory.

## Project Structure

```
.
├── assets/
│   └── icon.png          # Source for the macOS application icon
├── dist/                   # Production build of the React app (generated)
├── release/                # Packaged desktop application (generated)
├── public/
│   └── index.html        # HTML template for the React app
├── src/
│   ├── App.tsx             # Main React component
│   ├── index.tsx           # React entry point
│   └── types.d.ts          # TypeScript definitions for window object
├── electron.js             # Electron main process entry point
├── preload.js              # Electron preload script for IPC
├── server.js               # Node.js/Express backend server
├── package.json            # Project configuration and scripts
├── README.md               # This file
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build tool configuration
```
