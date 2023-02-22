import { Router } from "express";
import { allCharactersController, idCharacterController, nameCharacterController } from "../controllers/character";

import paginate from "express-paginate";

export const router = Router();

router.get("/", [paginate.middleware(5, 20)], allCharactersController);
router.get("/:id", idCharacterController);
router.get("/:name", nameCharacterController);