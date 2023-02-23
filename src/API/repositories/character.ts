import { Result } from "../../Dto/MarvelResponse";
import { Character } from "../models/character";

export interface CharacterRepository {
  existData(): Promise<boolean|null>;
  saveCharacters(character: any): Promise<any|null>;
  getAll(page: any): Promise<any|null>;
  getById(id: number): Promise<any|null>;
  getByName(name: string): Promise<any|null>;
}

export class CharacterRepositorySequelize implements CharacterRepository {

  public async existData(): Promise<boolean|null> {
    try {
      const character = await Character.count();
      return character > 0;
    } catch (error) {
      throw new Error("Error finding on database.");
    }
  }
    
  public async saveCharacters(characters: Result[]): Promise<void> {
    try {
      Promise.all(characters.map(async(character) => {
        const characterDomain: any = {
          "id_marvel": character.id,
          "name": character.name,
          "description": character.description,
          "modified": character.modified,
          "thumbnail": character.thumbnail.path + "." + character.thumbnail.extension,
          "resourceURI": character.resourceURI
        };
        await Character.create(characterDomain);
      }));
    } catch (error) {
      throw new Error("Error storing on database.");
    }
    return;
  }

  public async getById(id: number): Promise<Character|null>{
    try {
      const character = await Character.findOne({ where: { id_marvel: id } });
      return character;
    } catch (error) {
      throw new Error("Error finding on database.");
    }
  }

  public async getByName(name: string): Promise<Character|null>{
    try {
      const character = await Character.findOne({ where: { name: name } });
      return character;
    } catch (error) {
      throw new Error("Error finding on database.");
    }
  }

  public async getAll(page: any): Promise<object|null>{
    try {
      const characters = await Character.findAndCountAll({ 
        limit: page.limit,
        offset: page.skip
      });
      return characters;
    } catch (error) {
      throw new Error("Error finding on database.");
    }
  }
}