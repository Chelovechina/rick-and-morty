import { createStore } from "vuex";

import { api } from "@/api";
import { IState } from "@/types/IState";
import sortModule from "./sortModule";

export const store = createStore<IState>({
  state: {} as IState,
  getters: {},
  mutations: {},
  actions: {
    getCharacters: async ({ commit }) => {
      const response = await api.get("character");
    },
  },
  modules: {
    sort: sortModule,
  },
});
