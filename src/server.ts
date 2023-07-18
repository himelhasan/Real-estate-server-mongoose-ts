import mongoose from "mongoose";
import app from "./app";

const port = 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/realEstate");
    console.log(`database connection established`);

    app.listen(port, () => {
      console.log(`The server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(`couldn't start server`);
  }
}
main().catch((err) => console.log(err));
