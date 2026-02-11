// Reference to vite/client removed to fix "Cannot find type definition file" error.
// /// <reference types="vite/client" />

declare var process: {
  env: {
    API_KEY: string;
    [key: string]: string | undefined;
  }
};

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
