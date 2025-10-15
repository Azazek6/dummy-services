import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Order } from "./Order";

@Table({ tableName: "order_items", timestamps: true })
export class OrderItem extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare item_id: number;
  @ForeignKey(() => Order)
  @Column({ allowNull: false })
  declare order_id: number;
  @BelongsTo(() => Order)
  declare order: Order;
  @Column({ allowNull: false })
  declare product_id: number;
  @Column({ allowNull: false })
  declare thumbnail: string;
  @Column({ allowNull: false })
  declare sku: string;
  @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
  declare price: number;
  @Column({ allowNull: false })
  declare quantity: number;
}
