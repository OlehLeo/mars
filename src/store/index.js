import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: [],
    numberPhotosOnPage: 0,
    params: {},
    rover: "",
    page: null,
    noPhotosImage: [
      "https://click2kemah.com/directory/wp-content/uploads/2019/04/No-image-available.jpg",
    ],
    isLoadMoreButtonActive: false,
  },
  mutations: {
    setPhotos(state, value) {
      state.photos = value;
    },
    addMorePhotos(state, morePhotos) {
      Array.prototype.push.apply(state.photos, morePhotos);
    },
    setParams(state, { params, rover }) {
      state.params = params;
      state.rover = rover;
    },
    setPage(state, pageNumber) {
      state.page = pageNumber;
    },
    setLoadMoreButtonState(state, value) {
      state.isLoadMoreButtonActive = value;
    },
    setNumberPhotosOnPage(state, value) {
      state.numberPhotosOnPage = value;
    },
  },
  actions: {
    async findPhotos({ state, commit }) {
      var params = { ...state.params, page: state.page };
      var resultFromDb = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${state.rover}/photos`,
        { params }
      );
      var photosFromDb = resultFromDb.data.photos.map((i) => i.img_src);

      if (photosFromDb.length == 0 && state.page == 1) {
        photosFromDb = state.noPhotosImage;
        commit("setNumberPhotosOnPage", 1);
      }
      if (photosFromDb.length > 24) {
        commit("setLoadMoreButtonState", true);
      } else {
        commit("setLoadMoreButtonState", false);
      }
      if (state.page == 1) {
        commit("setPhotos", photosFromDb);
        commit("setNumberPhotosOnPage", photosFromDb.length);
      } else {
        commit("addMorePhotos", photosFromDb);
        commit("setNumberPhotosOnPage", photosFromDb.length);
      }
    },
  },
});
