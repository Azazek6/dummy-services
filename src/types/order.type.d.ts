export interface IOrder {
  order_id?: number;
  user?: { name: string };
  orders: Array<ICart>;
  total: number;
  status: string;
}

interface IProduct {
  id: number;
  discountPercentage: number;
  thumbnail: string;
  brand: string;
  title: string;
  price: number;
  sku: string;
}

interface ICart extends IProduct {
  quantity: number;
}
