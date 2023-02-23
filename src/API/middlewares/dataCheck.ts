import { CharacterRepositorySequelize } from "../repositories/character";
import { Request, Response, NextFunction } from "express";
import { ExternalRequestHelperAxios } from "../helpers/ExternalRequest";
import { MarvelResponse, Result } from "../../Dto/MarvelResponse";

export const dataCheck = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const characterRepository = new CharacterRepositorySequelize();
    const marvelAxiosFetcher = new ExternalRequestHelperAxios();

    const existData = await characterRepository.existData();
    if (!existData) {
      const marvelResponse = await marvelAxiosFetcher.getCharacters();
      const characters: Result[] = marvelResponse.reduce((acc: any, response: MarvelResponse) => {
        return acc.concat(response.data.results);
      }, []);
      await characterRepository.saveCharacters(characters);
    }
    next();
  } catch (err) {
    res.status(500).json("Failed to fetch characters.");
  }
  return;
};