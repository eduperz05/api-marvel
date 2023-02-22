import { CharacterRepository } from "../repositories/character";
import { findAllCharacters, findCharacterById, findCharacterByName } from "./character";

class CharacterRepositoryMock implements CharacterRepository {
  public async existData(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public async set(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public async getAll(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public async getById(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public async getByName(): Promise<any> {
    throw new Error("Method not implemented.");
  }

}
const repository = new CharacterRepositoryMock();
const page = {};

describe("findAllCharacters service", () => {

  test("should return 'Characters not found'.", async() => {
    repository.getAll = jest.fn().mockReturnValue(Promise.resolve(null));
    await expect(findAllCharacters(page, repository)).rejects.toThrowError("Characters not found");
  });

  test("should return all characters", async() => {
    const character = {
      rows: [
        {
          id_marvel: 1,
          name: "Iron-Man",
          toJSON: () => {
            return { id_marvel: 1,
              name: "Iron-Man" };
          }
        }
      ],
    };
    const characterJSONed = {
      rows: [
        {
          id_marvel: 1,
          name: "Iron-Man",
        }
      ],
    };
    repository.getAll = jest.fn().mockReturnValue(Promise.resolve(character));
    await expect(findAllCharacters(page, repository)).resolves.toEqual(characterJSONed);
  });
});

describe("findCharacterById service", () => {
  const id = 1;
  const character = {
    id_marvel: 1,
    name: "Iron-Man",
    toJSON: () => {
      return { id_marvel: 1,
        name: "Iron-Man" };
    }
  };
  const characterJSONed = {
    id_marvel: 1,
    name: "Iron-Man",
  };

  test("should return 'Characters not found'.", async() => {
    repository.getAll = jest.fn().mockReturnValue(Promise.resolve(null));
    await expect(findCharacterById(id, repository)).rejects.toThrowError("Character not found");
  });

  test("should return a character", async() => {
    repository.getAll = jest.fn().mockReturnValue(Promise.resolve(character));
    await expect(findCharacterById(id, repository)).resolves.toEqual(characterJSONed);
  });
});

describe("findCharacterByName service", () => {
  const name = "Iron-Man";
  const character = {
    id_marvel: 1,
    name: "Iron-Man",
    toJSON: () => {
      return { id_marvel: 1,
        name: "Iron-Man" };
    }
  };
  const characterJSONed = {
    id_marvel: 1,
    name: "Iron-Man",
  };

  test("should return 'Characters not found'.", async() => {
    repository.getAll = jest.fn().mockReturnValue(Promise.resolve(null));
    await expect(findCharacterByName(name, repository)).rejects.toThrowError("Character not found");
  });

  test("should return a character", async() => {
    repository.getAll = jest.fn().mockReturnValue(Promise.resolve(character));
    await expect(findCharacterByName(name, repository)).resolves.toEqual(characterJSONed);
  });
});