<template>
  <v-app>
    <v-app-bar app color="primary lighten-1" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Συνεδριο</span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn icon>
         <v-icon @click="drawer = !drawer">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-navigation-drawer class="primary" v-model="drawer"  temporary absolute>

      <v-list dark>
        <v-list-item v-for="item in items" router :to="item.link" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import Page from "./views/Page";

export default {
  name: "App",
  components: {
    Page
  },
  data: () => ({
    drawer: null,
    items: [
          { title: 'Αρχική Σελίδα', link: '/' },
          { title: 'Μηνύματα Προέδρων', link: '/messages' },
          { title: 'Σπόνσορες', link: '/sponsors' },
          { title: 'Χρήσιμες Πληροφορίες', link: '/information' }
        ],
  })
};
</script>
