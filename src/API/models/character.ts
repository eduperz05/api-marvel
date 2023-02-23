import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "CHARACTERS",
})
export class Character extends Model<Character> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
    id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    id_marvel!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    name!: string;
    
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
    description!: string;
    
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
    modified!: string;
      
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
    thumbnail!: string;
      
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
    resourceURI!: string;
}