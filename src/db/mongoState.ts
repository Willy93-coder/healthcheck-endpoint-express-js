import { MongodbState } from "../types/mongoState";

const MongoState = {
  state: "disconnected" as MongodbState,
  get: (): MongodbState => MongoState.state,
  set: (next: MongodbState): void => {
    MongoState.state = next;
  },
  isReady: () => MongoState.state === "ready",
};
