import { MongodbState } from "../types/mongoState";

const MongoState = {
  state: "disconnected" as MongodbState,
  get: (): MongodbState => MongoState.state,
  set: (next: MongodbState): void => {
    MongoState.state = next;
  },
  isReady: (): boolean => MongoState.state === "ready",
  isConnecting: (): boolean => MongoState.state === "connecting",
  isDisconnecting: (): boolean => MongoState.state === "disconnected",
  isError: (): boolean => MongoState.state === "error",
};

export { MongoState };
