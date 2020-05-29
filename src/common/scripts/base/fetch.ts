import { G } from './global';

interface XResponse extends Response {
  data: any | void;
}

class API {
  public request: Function;
  constructor(apiHostName = '') {
    this.request = (url: string, config?: any): Promise<XResponse> => {
      let response: XResponse;
      return new Promise((resolve, reject) => {
        let baseHost = '';
        if (apiHostName && !/^http(s)?\/\//.test(url)) {
          baseHost = G.apiBase[apiHostName];
          if (!baseHost) {
            throw new Error(`Invalid apiHostName "${apiHostName}"`);
          }
        }
        fetch(baseHost + url, {
          credentials: 'include',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          ...config,
        })
          .then(res => {
            response = res as XResponse;
            return res.text();
          })
          .then(data => {
            response.data = data ? JSON.parse(data) : null;
            resolve(response);
          })
          .catch(e => {
            reject(e);
          });
      });
    };
  }

  get(url: string, config?: any): Promise<XResponse> {
    return this.request(url, config);
  }

  post(url: string, data: Record<string, string>, config: any = {}): Promise<XResponse> {
    return this.request(url, {
      method: 'post',
      body: JSON.stringify(data),
      ...config,
    });
  }
}

export const apiCommon = new API();
