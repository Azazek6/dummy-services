import { User } from "../models/User";

const getProfile = async () => {
  const profile = await User.findOne({
    attributes: ["name"],
    where: { user_id: 1 },
  });
  if (!profile) throw new Error("Usuario no disponible");

  return profile;
};

export default { getProfile };
