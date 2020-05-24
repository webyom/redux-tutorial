type gType = {
  SERVER_INJECTED_DATA: Record<string, any>;
  ENV: string;
  apiBase: {
    common: string;
    [propName: string]: string;
  };
  hostBase: {
    codeSailing: string;
    [propName: string]: string;
  };
  cdnBase: string;
};

export const G: gType = (window as any).G;
