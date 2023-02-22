import { Table, Model, Column, DataType } from "sequelize-typescript";


@Table({
  tableName: "character",
})
export class Character extends Model<Character> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
    id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    image!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    description!: string;
}