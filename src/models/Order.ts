import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { User } from "./User";
import { OrderItem } from "./OrderItem";

@Table({ tableName: "orders", timestamps: true })
export class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare order_id: number;
  @ForeignKey(() => User)
  @Column({ allowNull: false })
  declare user_id: number;
  @BelongsTo(() => User)
  declare user: User;
  @HasMany(() => OrderItem)
  declare orders: OrderItem[];
  @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
  declare total: number;
  @Column({ allowNull: false, defaultValue: "En proceso" })
  declare status: string;
}
