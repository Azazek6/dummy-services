import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table({ tableName: "users" })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare user_id: number;
  @Column({ allowNull: false })
  declare name: string;
}
