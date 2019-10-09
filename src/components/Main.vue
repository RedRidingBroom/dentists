<template>
  <v-container class="mt-8">
    <v-row>
      <v-col cols="10" offset="1" md="6" offset-md="3" lg="4" offset-lg="4">
        <v-img src="../../public/img/logo-el.png"></v-img>
      </v-col>
    </v-row>

    <v-row class="mt-4 pt-5">
      <v-col cols="8" offset="2" lg="4" offset-lg="4">
        <v-row justify="center">
          <v-btn class="myBtn" block dark color="orange" @click="$router.push({path: '/messages'})">
            <div>
              <v-icon left>mdi-message</v-icon>Μηνυματα Προεδρων
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
            @click="$router.push({path: '/program'})"
          >
            <div>
              <v-icon left>mdi-calendar</v-icon>Πρoγραμμα
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
            @click="$router.push({path: '/omilites-proedries'})"
          >
            <div>
              <v-icon left>mdi-calendar</v-icon>Ομιλητες και Προεδρείες
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
            @click="$router.push({path: '/information'})"
          >
            <div>
              <v-icon left>mdi-information</v-icon>
              <span>Χρησιμες Πληροφοριες</span>
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
            @click="$router.push({path: '/exhibition'})"
          >
            <div>
              <v-icon left>mdi-hand-heart</v-icon>Εκθετες
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
            @click="$router.push({path: '/sponsors'})"
          >
            <div>
              <v-icon left>mdi-hand-heart</v-icon>Χορηγοι
            </div>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>

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
