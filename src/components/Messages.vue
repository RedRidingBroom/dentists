<template>
  <v-container>
    <v-row justify="center">
      <v-card color="primary lighten-2">
        <v-card-title class="text-center justify-center">
          <h1 class="font-weight-bold headline basil--text">ΜΗΝΥΜΑΤΑ ΠΡΟΕΔΡΩΝ</h1>
        </v-card-title>

        <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item">
            <v-card flat color="basil">
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'ΕΟΟ', 'Ο.Ε.', 'Ο.Σ. Κρήτης',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>