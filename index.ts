import App from "./src/app";
import { initializeDatabase } from "./src/config/database";

const initServer = () => {
  App.listen(App.get("PORT"));
  console.log(`server in port ${App.get("PORT")}`);
  initializeDatabase();
};

initServer();
