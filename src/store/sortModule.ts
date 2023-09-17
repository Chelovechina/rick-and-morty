interface ISortState {
  search: string;
  activeStatus: string;
  statuses: string[];
  activeGender: string;
  genders: string[];
}

export default {
  state: {
    search: "",
    activeStatus: "",
    statuses: ["Alive", "Dead", "unknown"],
    activeGender: "",
    genders: ["Male", "Female", "Genderless", "unknown"],
  },
  getters: {},
  mutations: {
    setSearch: (state: ISortState, search: string) => {
      state.search = search;
    },
    clearSearch: (state: ISortState) => {
      state.search = "";
    },
  },
};
