import { ServiceState } from "../types/service-state";

const HealthState = {
  state: "starting" as ServiceState,
  get: (): ServiceState => HealthState.state,
  set: (next: ServiceState): void => {
    HealthState.state = next;
  },
  isReady: (): boolean => {
    return HealthState.state === "ready";
  },
};

export { HealthState };
