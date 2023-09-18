import { IState } from "@/types/IState";
import { InjectionKey } from "vue";
import { Store, useStore } from "vuex";

export const key: InjectionKey<Store<IState>> = Symbol();

export const useStoreTyped = () => {
  return useStore(key);
};
