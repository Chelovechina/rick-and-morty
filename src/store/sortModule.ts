import { ISortState } from "@/types/ISortState";

export default {
  state: {
    search: "",
    activeStatus: "",
    statuses: ["Alive", "Dead", "unknown"],
    activeGender: "",
    genders: ["Male", "Female", "Genderless", "unknown"],
    currentPage: 1,
  } as ISortState,
  getters: {},
  mutations: {
    setPage: (state: ISortState, page: number) => {
      state.currentPage = page;
    },
    setSearch: (state: ISortState, search: string) => {
      state.search = search;
    },
    clearSearch: (state: ISortState) => {
      state.search = "";
    },
    setActiveStatus: (state: ISortState, activeStatus: string) => {
      state.currentPage = 1;
      state.activeStatus = activeStatus;
    },
    setActiveGender: (state: ISortState, gender: string) => {
      state.currentPage = 1;
      state.activeGender = gender;
    },
  },
};
