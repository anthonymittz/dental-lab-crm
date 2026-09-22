// import { IpcAPI } from "@/ipc.js";

export { };

declare global {
  interface Window {
    // ipc: IpcAPI
  }

  declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
  declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

  declare module "*.css" { }

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