import { createStore } from "vuex";

import { api } from "@/api";
import { ICharacter } from "@/types/ICharacter";
import { IState, StatusEnum } from "@/types/IState";
import sortModule from "./sortModule";
import { IInfo } from "@/types/IInfo";

export const store = createStore<IState>({
  state: {} as IState,
  getters: {
    getPagination: (state): number[] => {
      const currentPage = state.sort.currentPage;
      const pages = state.info.pages;
      const result = [];

      if (currentPage <= 3) {
        for (let i = 1; i <= Math.min(5, pages); i++) {
          result.push(i);
        }
        return result;
      }

      if (currentPage >= pages - 2) {
        for (let i = pages - 4; i <= pages; i++) {
          result.push(i);
        }
        return result;
      }

      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        result.push(i);
      }

      return result;
    },
  },
  mutations: {
    setStatus: (state: IState, status: StatusEnum) => {
      state.status = status;
    },
    setErrorMessage: (state: IState, errorMessage: string) => {
      state.errorMessage = errorMessage;
    },
    setCharacters: (state: IState, characters: ICharacter[]) => {
      state.characters = characters;
    },
    setInfo: (state: IState, info: IInfo) => {
      state.info = info;
    },
  },
  actions: {
    getCharacters: async ({ state, commit }) => {
      try {
        commit("setStatus", StatusEnum.LOADING);

        const response = await api.get("character", {
          params: {
            status: state.sort.activeStatus,
            gender: state.sort.activeGender,
            name: state.sort.search,
            page: state.sort.currentPage,
          },
        });

        commit("setCharacters", response.data.results);
        commit("setInfo", response.data.info);
        commit("setStatus", StatusEnum.FULLFILLED);
      } catch (e: any) {
        commit("setStatus", StatusEnum.ERROR);
        commit("setErrorMessage", e.message);
      }
    },
  },
  modules: {
    sort: sortModule,
  },
});
