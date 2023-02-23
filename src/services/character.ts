import { CharacterRepository } from "../API/repositories/character";

export const findAllCharacters = async(page: object, repository: CharacterRepository) => {
  const characters = await repository.getAll(page);
  if (!characters) {
    throw new Error("Characters not found");
  }
  characters.rows = characters.rows.map((character: { toJSON: () => any; }) => character.toJSON());
  return characters;
};

export const findCharacterById = async(id: number, repository: CharacterRepository) => {
  const character = await repository.getById(id);
  if (!character) {
    throw new Error("Character not found");
  }
  return character.toJSON();
};

export const findCharacterByName = async(name: string, repository: CharacterRepository) => {
  const character = await repository.getByName(name);
  if (!character) {
    throw new Error("Character not found");
  }
  return character.toJSON();
};
