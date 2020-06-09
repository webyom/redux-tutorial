declare module 'compression';
declare module 'cookie-parser';

interface MicroTemplate {
  render($data?: Record<string, any>, $opt?: Record<string, any>): string;
}

declare module '*.tpl.html' {
  const tpl: MicroTemplate;
  export const render: typeof tpl.render;
  export default tpl;
}

declare module '*.html' {
  const tpl: MicroTemplate;
  export const render: typeof tpl.render;
  export default tpl;
}
