<template>
  <div>
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="5" sm="2">
          <v-select
            :items="rovers"
            v-model="selectedRover"
            label="Rover"
            @change="setRoverCameras"
            solo
          ></v-select> </v-col
        ><v-col class="d-flex" cols="6" sm="3">
          <v-select
            :items="currentCameras"
            item-text="camera"
            item-value="abbreviation"
            label="Camera"
            v-model="selectedCamera"
            solo
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="4" sm="1">
          <v-text-field
            class="mx-2"
            label="Sol"
            v-model="selectedSol"
            type="number"
            solo
            :min="0"
          ></v-text-field>
        </v-col>
        <v-btn class="findButton" color="primary" @click="findPhotos">
          Find photos
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data: () => ({
    rovers: ["Curiosity", "Opportunity", "Spirit"],
    selectedRover: null,
    allCameras: [
      {
        abbreviation: "All cameras",
        camera: "All cameras",
      },
      {
        abbreviation: "FHAZ",
        camera: "Front Hazard Avoidance Camera",
      },
      {
        abbreviation: "RHAZ",
        camera: "Rear Hazard Avoidance Camera",
      },
      {
        abbreviation: "MAST",
        camera: "Mast Camera",
      },
      {
        abbreviation: "CHEMCAM",
        camera: "Chemistry and Camera Complex",
      },
      {
        abbreviation: "MAHLI",
        camera: "Mars Hand Lens Imager",
      },
      {
        abbreviation: "MARDI",
        camera: "Mars Descent Imager",
      },
      {
        abbreviation: "NAVCAM",
        camera: "Navigation Camera",
      },
      {
        abbreviation: "PANCAM",
        camera: "Panoramic Camera",
      },
      {
        abbreviation: "MINITES",
        camera: "Miniature Thermal Emission Spectrometer (Mini-TES)	",
      },
    ],
    currentCameras: [],
    selectedCamera: null,
    selectedSol: 1000,
    apiKeyFromNasaAPI: "SMP0jbzbRkh1ocBuGS0rJxMdN2hcVmgbFG1zRgOY",
    noPhotosImage: [
      "https://click2kemah.com/directory/wp-content/uploads/2019/04/No-image-available.jpg",
    ],
  }),
  methods: {
    async findPhotos() {
      var params = this.setParams();
      if (!this.selectedRover) {
        return alert("Please, choose rover");
      }
      this.$store.commit("setParams", { params, rover: this.selectedRover });
      this.$store.commit("setPage", 1);
      this.$store.dispatch("findPhotos");
    },
    setParams() {
      if (this.selectedCamera == "" || this.selectedCamera == "All cameras") {
        this.selectedCamera = "All cameras";
        return {
          sol: this.selectedSol,
          api_key: this.apiKeyFromNasaAPI,
        };
      }
      return {
        sol: this.selectedSol,
        camera: this.selectedCamera,
        api_key: this.apiKeyFromNasaAPI,
      };
    },
    setRoverCameras() {
      if (this.selectedRover == "Curiosity") {
        this.currentCameras = this.allCameras.slice();
        this.currentCameras.splice(8, 2);
      } else {
        this.currentCameras = this.allCameras.slice();
        this.currentCameras.splice(3, 4);
      }
    },

    setAllCamerasOnLaunch() {
      this.currentCameras = this.allCameras;
    },
  },
  created() {
    this.setAllCamerasOnLaunch();
  },
};
</script>
<style scoped>
.findButton {
  margin-top: -30px;
}
</style>
