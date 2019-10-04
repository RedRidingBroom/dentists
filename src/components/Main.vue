<template>
  <v-container>
    <v-row class="mt-12">
      <v-col cols="2" offset="5">
        <v-row justify="center">
          <v-btn block tile dark color="orange" @click="$router.push({path: '/information'})">Χρήσιμες Πληροφορίες</v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col cols="2" offset="5">
        <v-row justify="center">
          <v-btn block tile dark color="orange" @click="$router.push({path: '/messages'})">Μηνύματα Προέδρων</v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col cols="2" offset="5">
        <v-row justify="center">
          <v-btn block tile dark color="orange" @click="$router.push({path: '/sponsors'})">Χορηγοί</v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col cols="2" offset="5">
        <v-row justify="center">
          <v-btn block tile dark color="orange" >Πρόγραμμα</v-btn>
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
