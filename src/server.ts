import mongoose from "mongoose";
import app from "./app";
import { configs } from "./app/configs";

async function server() {
  try {
    await mongoose.connect(configs.DB_URL as string);
    app.listen(configs.PORT, () => {
      console.log(`Example app listening on port ${configs.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
server();

export default server;
