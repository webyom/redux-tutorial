interface MicroTemplate {
  render($data?: Record<string, any>, $opt?: Record<string, any>): string;
}

declare module '*.tpl.html' {
  const tpl: MicroTemplate;
  export const render: typeof tpl.render;
  export default tpl;
}

declare interface Application {
  boot(): void;
}

declare const app: Application;
