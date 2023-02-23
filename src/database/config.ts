import { Sequelize } from "sequelize-typescript";
import { Character } from "../API/models/character";

import * as dotenv from "dotenv";
dotenv.config();


export const db = new Sequelize({
  dialect: "mariadb",
  database: process.env.DB_SCHEMA || "MARVEL_DB",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "123456",
  models: [Character],
  logging: false,
});