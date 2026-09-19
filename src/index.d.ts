import { IpcAPI } from "@/ipc.js";
export {};

declare module "*.css" {}

declare global {
  interface Window {
    ipc: IpcAPI
  }
}