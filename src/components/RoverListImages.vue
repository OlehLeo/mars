<template>
  <div>
    <v-row class="roverNames">
      <p>Curiosity</p>
      <p>Opportunity</p>
      <p>Spirit</p>
    </v-row>
    <v-row>
      <v-col v-for="(image, i) in roverListImages" :key="i">
        <v-img :src="image" class="grey lighten-2" aspect-ratio="1.7778">
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "RoverListImages",

  data: () => ({
    roverListImages: [
      "https://mars.nasa.gov/system/feature_items/images/6148_Mars_chemist_320x240px.jpg",
      "https://www.universetoday.com/wp-content/uploads/2008/10/five_years_on_mars-4_10240768.jpg",
      "https://www.edn.com/wp-content/uploads/contenteetimes-images-ednmoments-spirit-rover-800.jpg",
    ],
  }),
};
</script>
<style scoped>
.roverNames {
  display: flex;
  justify-content: space-around;
  margin-top: 35px;
  font-family: "Titillium Web", "Helvetica Neue", "Helvetica", Arial, sans-serif;
}
</style>
