<template>
  <div>
    <v-row class="photosFromRovers">
      <v-col v-for="(item, i) in photos" :key="i" cols="4" sm="4" lg="2">
        <v-img :src="item" aspect-ratio="1"> </v-img>
      </v-col>
      <p v-if="!isButtonActive && photos.length > 24" class="finalMessage">
        That's all available photos
      </p>
    </v-row>
    <div v-bind:class="{ loadMoreButton: isButtonActive }">
      <v-btn
        block
        v-if="isButtonActive"
        color="primary"
        @click="loadMorePhotos"
      >
        Load More
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    photos() {
      return this.$store.state.photos;
    },
    isButtonActive() {
      return this.$store.state.isLoadMoreButtonActive;
    },
  },
  methods: {
    async loadMorePhotos() {
      this.$store.commit("setPage", this.$store.state.page + 1);
      await this.$store.dispatch("findPhotos");
    },
  },
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
  display: flex;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 102px;
}
.finalMessage {
  margin-top: 12px;
  margin-left: 50px;
}
</style>
