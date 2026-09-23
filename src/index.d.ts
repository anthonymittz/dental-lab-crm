// import { IpcAPI } from "@/ipc.js";

export { };

declare global {
  interface Window {
    // ipc: IpcAPI
  }

  type IconName = 
    "layoutDashboard" | "settings" | "calendarDays" | "notepadText" | "search" | "x" |
    "hammer" | "stickyNote" | "stickyNoteCheck" | "listTodo" | "fileBox" | "archive" |
    "calendarRange" | "kanban" | "calendarClock" | "package" | 
    "factory" | "tag" | "idCardLanyard" | "circlePile" | "drill" | "recycle" |
    "flaskConical" | "hospital" | "trendingUp" |
    "truck" | "handshake" | "wallet" | "shelvingUnit" | "login" | "logout";

  interface LinkMeta {
    id: string;
    to: string;
    label: string;
    icon: IconName;
  }

  interface TabMeta {
    id: string;
    to: string;
    label: string;
    icon?: IconName;
  }

  type ExtractClassName<T extends React.ComponentType<any>> =
    Partial<React.ComponentProps<T>>['className']

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