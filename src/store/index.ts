import { api } from "@/api";
import { createStore } from "vuex";
import sortModule from "./sortModule";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    sort: sortModule,
  },
});
