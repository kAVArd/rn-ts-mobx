import axios, {AxiosInstance} from 'axios';

import {anyJson} from 'typings/any_json';

export interface Headers {
  [header: string]: string | number;
}

export interface HttpApi {
  setBaseUrl: (url: string) => void;
  addHeader: (header: string, value: string) => void;
  cleanHeaders: () => void;
  get: <T>(url: string, config?: anyJson) => Promise<T>;
  post: <T>(url: string, data?: anyJson, config?: anyJson) => Promise<T>;
  put: <T>(url: string, data?: anyJson, config?: anyJson) => Promise<T>;
  delete: <T>(url: string, config?: anyJson) => Promise<T>;
}

export class Http implements HttpApi {
  private baseUrl: string;
  private headers: Headers;
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string = '', headers: Headers = {}) {
    this.baseUrl = baseURL;
    this.headers = headers;
    this.axiosInstance = axios.create({baseURL, headers});
  }

  public setBaseUrl(url: string) {
    this.baseUrl = url;
    this.createAxiosInstance();
  }

  public addHeader(header: string, value: string) {
    this.headers[header] = value;
    this.createAxiosInstance();
  }

  public cleanHeaders() {
    this.headers = {};
    this.createAxiosInstance();
  }

  public async get<T>(url: string, config?: anyJson) {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  public async post<T>(url: string, data?: anyJson, config?: anyJson) {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(url: string, data?: anyJson, config?: anyJson) {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: anyJson) {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }

  private createAxiosInstance() {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: this.headers,
    });
  }
}
