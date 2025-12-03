import { app } from "./server";
import { env } from "../env";
import { HealthState } from "./core/state";
import { db } from "./db/db";
import { MongoState } from "./db/mongoState";

async function bootstrap() {
  HealthState.set("starting");

  try {
    await db.connect();
    console.log("[bootstrap] Mongo connected. MongoState:", MongoState.get());
    HealthState.set("ready");
  } catch (error) {
    console.error("[bootstrap] Failed to connect to Mongo:", error);
    HealthState.set("starting");
  }

  app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("[bootstrap] Unexpected error during startup:", err);
  process.exit(1);
});
