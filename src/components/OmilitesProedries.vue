<template>
  <v-container>
    <v-row class="mt-12 pt-12">
      <v-col cols="8" offset="2" lg="4" offset-lg="4">
        <v-row justify="center">
          <v-btn block dark color="orange" @click="$router.push({path: '/omilites-proedries/freeprogram'})">
            ΟΜΙΛΗΤΕΣ-ΣΥΓΓΡΑΦΕΙΣ <br> ΕΛΕΥΘΕΡΟΥ ΠΡΟΓΡΑΜΜΑΤΟΣ
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="8" offset="2" lg="4" offset-lg="4">
        <v-row justify="center">
          <v-btn height="100%" block tile dark color="orange" @click="$router.push({path: '/omilites-proedries/kateuthinomenoprogram'})">
            ΟΜΙΛΗΤΕΣ-ΣΥΝΤΟΝΙΣΤΕΣ <br> ΚΑΤΕΥΘΥΝΟΜΕΝΟΥ <br> ΠΡΟΓΡΑΜΜΑΤΟΣ
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="8" offset="2" lg="4" offset-lg="4">
        <v-row justify="center">
          <v-btn block tile dark color="orange" @click="$router.push({path: '/omilites-proedries/proedries'})">
            Προεδρίες 39ου ΠΟΣ
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>