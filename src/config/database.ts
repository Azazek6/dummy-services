import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME } from "./general";

export const sequelize = new Sequelize({
  dialect: "mysql",
  host: DB_HOST,
  port: 3306,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  models: [User],
  timezone: "-05:00",
  logging: false,
  pool: {
    max: 100,
    min: 0,
    idle: 10000,
  },
});

export const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos exitosa");

    await sequelize.sync({ alter: true });
    console.log("✅ Modelos sincronizados");
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error);
    process.exit(1);
  }
};
