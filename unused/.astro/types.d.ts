/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  namespace astroHTML.JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  const Astro: import('astro').AstroGlobal;
  const Fragment: any;
}

export {};
