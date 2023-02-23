import { Request, Response } from "express";
import { CharacterRepositorySequelize } from "../repositories/character";
import { findAllCharacters, findCharacterById, findCharacterByName } from "../../services/character";
import paginate from "express-paginate";


export const allCharactersController = async(req: Request, res: Response) => {
  try {
    const page = {
      page: Number(req.query.page),
      limit: Number(req.query.limit),
      skip: Number(req.skip)
    };
    const repository = new CharacterRepositorySequelize();
    const characters = await findAllCharacters(page, repository);

    const response = {
      characters: characters.rows,
      pageCount: Math.ceil(characters.count / page.limit),
      itemCount: characters.count,
      pages: paginate.getArrayPages(req)(9, Math.ceil(characters.count / page.limit), page.page)
    };
    
    res.status(200).json(response);
  } catch (error: any) {
    res.status(409).json(error.message);
  }
  return;
};


export const idCharacterController = async(req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      res.status(400).json("No id parameter");
      return;
    }
    const id = Number(req.params.id);
    const repository = new CharacterRepositorySequelize();
    const character = await findCharacterById(id, repository);
    res.status(200).json(character);
  } catch (error: any) {
    res.status(409).json(error.message);
  }
  return;
};

export const nameCharacterController = async(req: Request, res: Response) => {
  try {
    if (!req.params.name) {
      res.status(400).json("No name parameter");
      return;
    }
    const name = String(req.params.name);
    const repository = new CharacterRepositorySequelize();
    const character = await findCharacterByName(name, repository);
    res.status(200).json(character);
  } catch (error: any) {
    res.status(409).json(error.message);
  }
  return;
};