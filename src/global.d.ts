import { IpcAPI } from "@/ipc.js";
export {};

declare global {
  interface Window {
    ipc: IpcAPI
  }
}