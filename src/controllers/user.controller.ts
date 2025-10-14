import { Request, Response } from "express";
import userService from "../services/user.service";

const getProfile = async (_req: Request, res: Response) => {
  try {
    const profile = await userService.getProfile();
    return res.status(200).json(profile);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export default { getProfile };
