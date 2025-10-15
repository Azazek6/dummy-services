import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { User } from "./User";

@Table({ tableName: "orders", timestamps: true })
export class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare order_id: number;
  @Column({ allowNull: false })
  @ForeignKey(() => User)
  declare user_id: number;
  @BelongsTo(() => User)
  declare user: User;
  @Column({ allowNull: false })
  declare total: number;
  @Column({ allowNull: false, defaultValue: "En proceso" })
  declare status: string;
}
