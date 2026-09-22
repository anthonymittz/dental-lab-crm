# Configuration

## Deps

bcrypt
better-sqlite3
clsx
electron-squirrel-startup
lucide-react
motion
react
react-dom
react-router
uuid

## Dev deps

@babel/core
@babel/preset-react
@electron-forge/cli
@electron-forge/maker-deb
@electron-forge/maker-rpm
@electron-forge/maker-squirrel
@electron-forge/maker-zip
@electron-forge/plugin-auto-unpack-natives
@electron-forge/plugin-fuses
@electron-forge/plugin-webpack
@electron/fuses
@electron/rebuild
@svgr/webpack
@tailwindcss/postcss
@vercel/webpack-asset-relocator-loader
babel-loader
cross-env
css-loader
electron
node-loader
postcss
postcss-loader
style-loader
tailwind-merge
tailwindcss

## Config

### Types

In `global.d.ts`:
```ts
export {};

declare global {
  interface Window {
    ipc: IpcAPI
  }

  declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
  declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

  declare module "*.css" {}

  declare module "*.svg" {
    import * as React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    export default ReactComponent;
  }

  declare module '*.png' {
    const content: string;
    export default content;
  }
  declare module '*.jpg' {
    const content: string;
    export default content;
  }
  declare module '*.webp' {
    const content: string;
    export default content;
  }
}
```

### CSP
In webpack.renderer.config: `devtool: 'source-map',`