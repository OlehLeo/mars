<template>
  <v-app>
    <p class="title">Mars rover photos</p>
    <RoverListImages />
    <NavigationBar />
    <PhotoGallery />
    <Footer />
  </v-app>
</template>

<script>
import PhotoGallery from "./components/PhotoGallery";
import RoverListImages from "./components/RoverListImages";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    PhotoGallery,
    RoverListImages,
    NavigationBar,
    Footer,
  },
};
</script>
<style>
.v-application .title {
  display: flex;
  justify-content: center;
  font-size: 2.3em !important;
  margin-top: 25px;
  font-family: "Titillium Web", "Helvetica Neue", "Helvetica", Arial, sans-serif;
}
</style>
