<template>
  <div v-bind:class="{ footer: !isOffset }">
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          href="https://www.linkedin.com/in/zarumaoleh/"
          color="white"
          text
          rounded
          class="my-2"
        >
          Contact me
        </v-btn>
        <v-col class="footerYear" cols="12">
          {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
<script>
export default {
  computed: {
    isOffset() {
      return this.$store.state.photos.length;
    },
  },
};
</script>
<style scoped>
.footer {
  margin-top: 263px;
}
.footerYear {
  display: flex;
  justify-content: center;
}
</style>
