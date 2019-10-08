<template>
  <v-container mt-12 pt-12>
    <v-row>
      <v-col cols="10" offset="1" lg="4" offset-lg="4" align-self="center">
        <v-row justify="center">
          <h3 class="title orange--text">ΠΕΜΠΤΗ 24 ΟΚΤΩΒΡΙΟΥ 2019</h3>
          
        </v-row>
        <v-row justify="center mt-5" >
          <p @click="$router.push({path: '/program/thursday/hour'})">ΑΝΑ ΩΡΑ</p> 
          <p class="ml-4" @click="$router.push({path: '/program/thursday/room'})">ΑΝΑ ΑΙΘΟΥΣΑ</p>
        </v-row>

        <v-row justify="center">
          <h3 class="title orange--text">ΠΑΡΑΣΚΕΥΗ 25 ΟΚΤΩΒΡΙΟΥ 2019</h3>
          
        </v-row>

        <v-row justify="center mt-5" >
          <p @click="$router.push({path: '/program/friday/hour'})">ΑΝΑ ΩΡΑ</p> 
          <p class="ml-4" @click="$router.push({path: '/program/friday/room'})">ΑΝΑ ΑΙΘΟΥΣΑ</p>
        </v-row>

        <v-row justify="center">
          <h3 class="title orange--text">ΣΑΒΒΑΤΟ 26 ΟΚΤΩΒΡΙΟΥ 2019</h3>
          
        </v-row>

        <v-row justify="center mt-5" >
          <p @click="$router.push({path: '/program/saturday/hour'})">ΑΝΑ ΩΡΑ</p> 
          <p class="ml-4" @click="$router.push({path: '/program/saturday/room'})">ΑΝΑ ΑΙΘΟΥΣΑ</p>
        </v-row>
      
        <!-- <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn tile block dark color="orange" v-on="on">ΠΕΜΠΤΗ 24 ΟΚΤΩΒΡΙΟΥ 2019</v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title @click="$router.push({path: '/program/thursday/hour'})">ΑΝΑ ΩΡΑ</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="$router.push({path: '/program/thursday/room'})">ΑΝΑ ΑΙΘΟΥΣΑ</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>-->
      </v-col>
    </v-row>

    <!-- <v-row class="mt-2">
      <v-col cols="10" offset="1" lg="4" offset-lg="4">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn tile block dark color="orange" v-on="on">ΠΑΡΑΣΚΕΥΗ 25 ΟΚΤΩΒΡΙΟΥ 2019</v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title @click="$router.push({path: '/program/friday/hour'})">ΑΝΑ ΩΡΑ</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="$router.push({path: '/program/friday/room'})">ΑΝΑ ΑΙΘΟΥΣΑ</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <v-row class="mt-2">
      <v-col cols="10" offset="1" lg="4" offset-lg="4">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn tile block dark color="orange" v-on="on">ΣΑΒΒΑΤΟ 24 ΟΚΤΩΒΡΙΟΥ 2019</v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title @click="$router.push({path: '/program/saturday/hour'})">ΑΝΑ ΩΡΑ</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="$router.push({path: '/program/saturday/room'})">ΑΝΑ ΑΙΘΟΥΣΑ</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row> -->
  </v-container>
</template>