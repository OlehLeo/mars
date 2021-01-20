<template>
  <div>
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
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<style scoped></style>
