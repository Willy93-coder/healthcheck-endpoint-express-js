import mongoose from "mongoose";
import { env } from "../../env";

const db = {
  connect: async () => {
    await mongoose.connect(env.MONGO_URI);
  },
};

export { db };
