import { Request, Response } from "express";
import productService from "../services/product.service";

export const createOrder = async (req: Request, res: Response) => {
  try {
    await productService.createOrder(req.body);
    return res
      .status(201)
      .json({ message: "Se ha generado la orden de compra" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
