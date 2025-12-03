import mongoose from "mongoose";
import { env } from "../../env";
import { MongoState } from "./mongoState";

let eventsRegistered = false;

function registerMongoEvents() {
  if (eventsRegistered) return;
  eventsRegistered = true;

  const conn = mongoose.connection;

  conn.on("connected", () => {
    console.info("[mongo] connected");
    MongoState.set("ready");
  });

  conn.on("disconnect", () => {
    console.warn("[mongo] disconnect");
    MongoState.set("disconnected");
  });

  conn.on("error", (err) => {
    console.error("[mongo] error", err);
    MongoState.set("error");
  });
}

const db = {
  connect: async (): Promise<void> => {
    MongoState.set("connecting");
    registerMongoEvents();
    await mongoose.connect(env.MONGO_URI);
  },
  disconnect: async (): Promise<void> => {
    await mongoose.disconnect();
  },
};

export { db };
