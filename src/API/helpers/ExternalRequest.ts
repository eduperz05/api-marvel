import axios, { AxiosResponse } from "axios";
import md5 from "crypto-js/md5";
import { Convert } from "../../Dto/convert";
import { MarvelResponse } from "../../Dto/MarvelResponse";

export interface ExternalRequestHelper {
  getCharacters(): Promise<any|null>;
}

export class ExternalRequestHelperAxios implements ExternalRequestHelper {

  private MARVEL_API_URL: string;
  private PUBLIC_KEY: string|undefined;
  private PRIVATE_KEY: string|undefined;
  private ts: string;
  private hash: string;

  constructor() {
    this.MARVEL_API_URL = "https://gateway.marvel.com/v1/public/characters";
    this.PUBLIC_KEY = process.env.PUBLIC_KEY;
    this.PRIVATE_KEY = process.env.PRIVATE_KEY;
    this.ts = new Date().getTime().toString();
    this.hash = md5(this.ts + this.PRIVATE_KEY + this.PUBLIC_KEY).toString();
  }
  
  public async getCharacters(): Promise<MarvelResponse[]> {
    try {
      const params = {
        limit: Number(process.env.LIMIT) || 100,
        offset: Number(process.env.OFFSET) || 0,
        ts: this.ts,
        apikey: this.PUBLIC_KEY,
        hash: this.hash,
      };
      let limit = Infinity;
      let i = 0;
      let response: AxiosResponse[] = [];
      while (params.offset < limit) {
        response.push(await axios.get(this.MARVEL_API_URL, { params }));
        limit = response[0].data.data.total;
        params.offset += response[i].data.data.count;
        i++;
      }
      const marvelResponse: MarvelResponse[] = [];
      response.forEach(res => {
        const toMarvelResponse = Convert.toMarvelResponse(JSON.stringify(res.data));
        marvelResponse.push(toMarvelResponse);
      });
      return marvelResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}