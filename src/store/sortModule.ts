import { ISortState } from "@/types/ISortState";

export default {
  state: (): ISortState => ({
    search: "",
    activeStatus: "",
    statuses: ["Alive", "Dead", "unknown"],
    activeGender: "",
    genders: ["Male", "Female", "Genderless", "unknown"],
  }),
  getters: {},
  mutations: {
    setSearch: (state: ISortState, search: string) => {
      state.search = search;
    },
    clearSearch: (state: ISortState) => {
      state.search = "";
    },
    setActiveStatus: (state: ISortState, activeStatus: string) => {
      state.activeStatus = activeStatus;
    },
    setActiveGender: (state: ISortState, gender: string) => {
      state.activeGender = gender;
    },
  },
};
