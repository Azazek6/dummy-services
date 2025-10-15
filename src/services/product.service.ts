import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";
import { sequelize } from "../config/database";
import { IOrder } from "../types/order.type";

const createOrder = async (order: IOrder) => {
  return sequelize.transaction(async (transaction) => {
    const newOrder = await Order.create({ user_id: 1 }, { transaction });
    if (!newOrder) throw new Error("Hubo un problema al generar la orden");

    await Promise.all(
      order.orders.map((item) =>
        OrderItem.create(
          {
            order_id: newOrder.order_id,
            product_id: item.id,
            sku: item.sku,
            price: item.price,
          },
          { transaction }
        )
      )
    );

    return newOrder;
  });
};

export default { createOrder };
