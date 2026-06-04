/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Contact-form Lambda Function URL. */
  readonly VITE_CONTACT_FORM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
