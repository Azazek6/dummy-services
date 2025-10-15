import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";
import { sequelize } from "../config/database";
import { IOrder } from "../types/order.type";
import { User } from "../models/User";

const createOrder = async (order: IOrder) => {
  return sequelize.transaction(async (transaction) => {
    const newOrder = await Order.create(
      { user_id: 1, total: parseFloat(order.total.toFixed(2)) },
      { transaction }
    );
    if (!newOrder) throw new Error("Hubo un problema al generar la orden");

    await Promise.all(
      order.orders.map((item) =>
        OrderItem.create(
          {
            order_id: newOrder.order_id,
            product_id: item.id,
            sku: item.sku,
            price: item.total,
            quantity: item.quantity,
            thumbnail: item.thumbnail
          },
          { transaction }
        )
      )
    );

    return newOrder;
  });
};

const getOrders = async () => {
  const orders = await Order.findAll({
    attributes: ["order_id", "total", "status"],
    where: { user_id: 1 },
    include: [{ model: User, attributes: ["name"] }, { model: OrderItem }],
  });

  return orders;
};

export default { createOrder, getOrders };
