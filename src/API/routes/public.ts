import { Router } from "express";
import { allCharactersController, idCharacterController, nameCharacterController } from "../controllers/character";

import paginate from "express-paginate";

export const router = Router();

router.get("/id/:id", idCharacterController);
router.get("/name/:name", nameCharacterController);
router.get("/", [paginate.middleware(20, 100)], allCharactersController);