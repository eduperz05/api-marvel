import { CharacterRepositorySequelize } from "../../repositories/character";
import { Request, Response, NextFunction } from "express";
import { ExternalRequestHelperAxios } from "../../helpers/ExternalRequest";

export const dataCheck = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const characterRepository = new CharacterRepositorySequelize();
    const marvelAxiosFetcher = new ExternalRequestHelperAxios();

    const existData = await characterRepository.existData();
    if (!existData) {
      await marvelAxiosFetcher.getCharacters();
      next();
    }
  } catch (err) {
    res.status(500).json("Failed to fetch characters.");
  }
  return;
};