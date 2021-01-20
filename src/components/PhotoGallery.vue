<template>
  <div>
    <v-row class="photosFromRovers">
      <v-col v-for="n in numberPhotosOnPage" :key="n" cols="4" sm="4" lg="2">
        <v-img :src="photos[n - 1]" aspect-ratio="1"> </v-img>
      </v-col>
      <v-btn
        class="loadMoreButton"
        v-if="isButtonActive"
        color="primary"
        @click="loadMorePhotos"
      >
        Load More
      </v-btn>
      <p v-if="!isButtonActive && photos.length > 24" class="finalMessage">
        That's all available photos
      </p>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PhotoGallery",
  data() {
    return {
      a: 0,
    };
  },
  computed: {
    photos() {
      return this.$store.state.photos;
    },
    isButtonActive() {
      return this.$store.state.isLoadMoreButtonActive;
    },
    numberPhotosOnPage() {
      return this.$store.state.photos.length;
    },
  },
  methods: {
    async loadMorePhotos() {
      this.$store.commit("setPage", this.$store.state.page + 1);
      await this.$store.dispatch("findPhotos");
      // this.a = this.numberPhotosOnPage;
    },
    // setNumberPhotosOnPage() {
    //   this.a = this.numberPhotosOnPage;
    // },
  },
  // created() {
  //   this.setNumberPhotosOnPage();
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.photosFromRovers {
  display: flex;
  align-content: flex-end;
  flex: 0 1 auto;
}
.loadMoreButton {
  margin-top: 12px;
  margin-left: 40px;
  margin-bottom: 32px;
}
.finalMessage {
  margin-top: 12px;
  margin-left: 50px;
}
</style>
