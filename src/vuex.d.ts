import { Store } from "vuex";
import { IState } from "./types/IState";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<IState>;
  }
}
