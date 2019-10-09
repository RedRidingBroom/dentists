<template>
  <v-container mt-12 pt-12>
    <v-row>
      <v-col cols="10" offset="1" lg="4" offset-lg="4" align-self="center">
        <v-row justify="center">
          <h3 class="title orange--text text-center">ΠΕΜΠΤΗ 24 ΟΚΤΩΒΡΙΟΥ 2019</h3>
        </v-row>
        <v-row justify="center my-5">
          <v-btn
            class="mr-2"
            depressed
            @click="$router.push({path: '/program/thursday/hour'})"
            color="primary"
            small
          >ΑΝΑ ΩΡΑ</v-btn>
          <v-btn
            depressed
            color="primary"
            small
            @click="$router.push({path: '/program/thursday/room'})"
          >ΑΝΑ ΑΙΘΟΥΣΑ</v-btn>
        </v-row>

        <v-divider></v-divider>
        <v-row justify="center" class="mt-7">
          <h3 class="title orange--text text-center">ΠΑΡΑΣΚΕΥΗ 25 ΟΚΤΩΒΡΙΟΥ 2019</h3>
        </v-row>

        <v-row justify="center my-5">
          <v-btn
            class="mr-2"
            depressed
            color="primary"
            small
            @click="$router.push({path: '/program/friday/hour'})"
          >ΑΝΑ ΩΡΑ</v-btn>
          <v-btn
            depressed
            color="primary"
            small
            @click="$router.push({path: '/program/friday/room'})"
          >ΑΝΑ ΑΙΘΟΥΣΑ</v-btn>
        </v-row>

        <v-divider></v-divider>

        <v-row justify="center" class="mt-7">
          <h3 class="title orange--text text-center">ΣΑΒΒΑΤΟ 26 ΟΚΤΩΒΡΙΟΥ 2019</h3>
        </v-row>

        <v-row justify="center my-5">
          <v-btn
            class="mr-2"
            depressed
            color="primary"
            small
            @click="$router.push({path: '/program/saturday/hour'})"
          >ΑΝΑ ΩΡΑ</v-btn>
          <v-btn
            depressed
            color="primary"
            small
            @click="$router.push({path: '/program/saturday/room'})"
          >ΑΝΑ ΑΙΘΟΥΣΑ</v-btn>
        </v-row>

        <v-divider></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>