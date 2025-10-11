// src/types.d.ts
export {};

declare global {
  interface Window {
    electronAPI?: {
      showDialog: () => Promise<void>;
    };
  }
}
