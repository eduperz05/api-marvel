import { Character } from "../../API/models/character";

export interface CharacterRepository {
  existData(): Promise<boolean|null>;
  set(character: any): Promise<any|null>;
  get(id: number): Promise<any|null>;
  getAll(page: any): Promise<any|null>;
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
    
  public async set(character: any): Promise<void> {
    try {
      await Character.create(character);
    } catch (error) {
      throw new Error("Error storing on database.");
    }
    return;
  }

  public async get(id: number): Promise<Character|null>{
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

  public async getAll(page: any): Promise<object>{
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