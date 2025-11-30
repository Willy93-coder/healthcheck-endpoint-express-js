import { env } from "../../env";

const mongoOptions = {
  serverSelectionTimeoutMS: env.MONGO_SERVER_SELECTION_TIMEOUT_MS,
  connectTimeoutMS: env.MONGO_CONNECT_TIMEOUT_MS,
  socketTimeoutMS: env.MONGO_SOCKET_TIMEOUT_MS,
  minPoolSize: env.MONGO_MIN_POOL_SIZE,
  maxPoolSize: env.MONGO_MAX_POOL_SIZE,
};

export { mongoOptions };
