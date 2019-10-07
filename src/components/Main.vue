<template>
  <v-container class="mt-8">
    <v-row>
      <v-col cols="10" offset="1" md="6" offset-md="3" lg="4" offset-lg="4" >
        <v-img src="../../public/img/logo-el.png"></v-img>
      </v-col>
    </v-row>

    <v-row class="mt-4 pt-5">
      <v-col cols="8" offset="2" lg="4" offset-lg="4">
        <v-row justify="center">
          <v-btn  block dark color="orange" @click="$router.push({path: '/messages'})"><v-icon left>mdi-message</v-icon>Μηνυματα Προεδρων</v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="mt-4">
 <v-col cols="8" offset="2" lg="4" offset-lg="4">
        <v-row justify="center">
          <v-btn block  tile dark color="orange"><v-icon left>mdi-calendar</v-icon>Πρoγραμμα</v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="mt-4">
 <v-col cols="8" offset="2" lg="4" offset-lg="4">
        <v-row justify="center">
          <v-btn block  tile dark color="orange"><v-icon left>mdi-calendar</v-icon>Ομιλητες</v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="8" offset="2" lg="4" offset-lg="4">
        <v-row justify="center">
          <v-btn block  tile dark color="orange" @click="$router.push({path: '/information'})"> <v-icon left>mdi-information</v-icon><span> Χρησιμες Πληροφοριες</span></v-btn>
        </v-row>
      </v-col>
    </v-row>

    

  

  

      <v-row class="mt-4">
 <v-col cols="8" offset="2" lg="4" offset-lg="4">
        <v-row justify="center">
          <v-btn block tile dark color="orange" @click="$router.push({path: '/sponsors'})"><v-icon left>mdi-hand-heart</v-icon>Χορηγοι</v-btn>
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
