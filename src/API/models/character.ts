import { Table, Model, Column, DataType } from "sequelize-typescript";
import { Comics, Thumbnail, URL } from "../../Dto/MarvelResponse";


@Table({
  tableName: "CHARACTERS",
})
export class Character extends Model<Character> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
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
    type: DataType.STRING,
    allowNull: false,
  })
    description!: string;
    
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
    modified!: string;
      
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
    thumbnail!: Thumbnail;
      
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
    resourceURI!: string;
      
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
    comics!: Comics;
      
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
    series!: Comics;
      
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
    stories!: Comics;
      
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
    events!: Comics;
      
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
    urls!: URL[];
}