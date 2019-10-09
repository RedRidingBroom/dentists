<template>
  <v-container>
    <v-row class="mt-12 pt-12">
      <v-col cols="8" offset="2" lg="4" offset-lg="4">
        <v-row justify="center">
          <v-btn
            class="myBtn"
            block
            dark
            color="orange"
            @click="$router.push({path: '/omilites-proedries/freeprogram'})"
          >
            <div>
              ΟΜΙΛΗΤΕΣ-ΣΥΓΓΡΑΦΕΙΣ
              <br />ΕΛΕΥΘΕΡΟΥ ΠΡΟΓΡΑΜΜΑΤΟΣ
            </div>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="8" offset="2" lg="4" offset-lg="4">
        <v-row justify="center">
          <v-btn
            class="myBtn"
            height="100%"
            block
            tile
            dark
            color="orange"
            @click="$router.push({path: '/omilites-proedries/kateuthinomenoprogram'})"
          >
            <div>
              ΟΜΙΛΗΤΕΣ-ΣΥΝΤΟΝΙΣΤΕΣ
              <br />ΚΑΤΕΥΘΥΝΟΜΕΝΟΥ
              <br />ΠΡΟΓΡΑΜΜΑΤΟΣ
            </div>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="8" offset="2" lg="4" offset-lg="4">
        <v-row justify="center">
          <v-btn
            class="myBtn"
            block
            tile
            dark
            color="orange"
            @click="$router.push({path: '/omilites-proedries/proedries'})"
          >
            <div>Προεδριες 39ου ΠΟΣ</div>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.myBtn {
  transform: skew(-20deg);
  -webkit-transform: skew(-20deg);
  -o-transform: skew(-20deg);
  -moz-transform: skew(-20deg);
  -ms-transform: skew(-20deg);
}

.myBtn div {
  transform: skew(20deg);
}
</style>