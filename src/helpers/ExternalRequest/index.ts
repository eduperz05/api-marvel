import axios from "axios";
import { Convert } from "../../Dto/convert";
import { MarvelResponse } from "../../Dto/MarvelResponse";

export interface ExternalRequestHelper {
  getCharacters(): Promise<any|null>;
}

export class ExternalRequestHelperAxios implements ExternalRequestHelper {
  
  public async getCharacters(): Promise<MarvelResponse> {
    try {
      const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?apikey=${process.env.SECRET_MARVEL}`);
      const marvelResponse = Convert.toMarvelResponse(JSON.stringify(response.data));
      return marvelResponse;
    } catch (error) {
      throw new Error("Error getting characters from Marvel API.");
    }
  }
}