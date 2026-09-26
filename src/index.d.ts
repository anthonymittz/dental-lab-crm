// import { IpcAPI } from "@/ipc.js";
import * as React from 'react';

export { };

declare global {
  interface Window {
    // ipc: IpcAPI
  }

  type IconName = 
    "layoutDashboard" | "settings" | "calendarDays" | "notepadText" | "search" | "x" |
    "hammer" | "stickyNote" | "stickyNoteCheck" | "listTodo" | "fileBox" | "archive" |
    "calendarRange" | "kanban" | "calendarClock" | "package" | "chevronDown" |
    "factory" | "tag" | "idCardLanyard" | "circlePile" | "drill" | "recycle" |
    "flaskConical" | "hospital" | "trendingUp" | "fileDown" | "fileUp" |
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

  type AtLeastOne<T, Keys extends keyof T = keyof T> =
    Partial<T> & { [K in Keys]: Required<Pick<T, K>> }[Keys];

  interface GridItem { id: string, element: import("react").ReactNode }
  
  type GridSize = AtLeastOne<{ rows: number, cols: number }>

  type ExtractClassName<T extends React.ComponentType<any>> =
    Partial<React.ComponentProps<T>>['className'];

  declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
  declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

  declare module "*.css" { }

  declare module "*.svg" {
    const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGSVGElement> & { title?: string }>;
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