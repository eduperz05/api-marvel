import { Sequelize } from "sequelize-typescript";
import { Character } from "../API/models/character";

export const db = new Sequelize({
  dialect: "mariadb",
  database: process.env.DB_SCHEMA || "chuck_norris",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "123456",
  models: [Character],
  logging: false,
});