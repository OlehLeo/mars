import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: [],
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
    addMorePhotos(state, value) {
      state.photos = [...state.photos, ...value];
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
  },
  actions: {
    async findPhotos({ state, commit }) {
      var params = { ...state.params, page: state.page };
      try {
        var resultFromDb = await axios.get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${state.rover}/photos`,
          { params }
        );
        var photosFromDb = resultFromDb.data.photos.map((i) => i.img_src);
        if (photosFromDb.length === 0 && state.page === 1) {
          photosFromDb = state.noPhotosImage;
        }
      } catch (error) {
        console.log(error);
        photosFromDb = state.noPhotosImage;
      }
      if (photosFromDb.length > 24) {
        commit("setLoadMoreButtonState", true);
      } else {
        commit("setLoadMoreButtonState", false);
      }
      if (state.page === 1) {
        commit("setPhotos", photosFromDb);
      } else {
        commit("addMorePhotos", photosFromDb);
      }
    },
  },
});
