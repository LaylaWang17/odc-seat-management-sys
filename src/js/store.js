import Vue from "vue";
import Vuex from "vuex";

import { initalizeData, getSeatsIdByKeywords, updateData } from "./processData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allSeatsData: initalizeData(),
    pickedSeats: [],
    isReset: false,
  },
  mutations: {
    searchSeats(state, { keywords, region }) {
      state.pickedSeats = getSeatsIdByKeywords(
        keywords,
        state.allSeatsData,
        region
      );
      state.isReset = false;
    },
    resetSeatsState(state) {
      state.isReset = true;
    },
    updateSeatsData(state, { region, seat }) {
      state.allSeatsData = updateData(state.allSeatsData, region, seat);
    },
    reloadSeatsData(state, seatsData) {
      state.allSeatsData = seatsData;
    },
  },
  actions: {
    searchSeats({ commit }, payload) {
      commit("searchSeats", payload);
    },
    resetSeatsState({ commit }) {
      commit("resetSeatsState");
    },
    updateSeatsData({ commit }, payload) {
      commit("updateSeatsData", payload);
    },
    reloadSeatsData({ commit }, seatsData) {
      commit("reloadSeatsData", seatsData);
    },
  },
  plugins: [localStoragePlugin],
});

function localStoragePlugin(store) {
  store.subscribe((mutation, state) => {
    if (["updateSeatsData", "reloadSeatsData"].includes(mutation.type)) {
      localStorage.setItem(
        "odc-seats-management-sys",
        JSON.stringify(state.allSeatsData)
      );
    }
  });
}
