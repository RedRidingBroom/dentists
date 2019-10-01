<template>
  <v-app>
    <v-app-bar app color="primary darken-1" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Συνεδριο</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
         <v-icon @click="drawer = !drawer">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-navigation-drawer class="primary darken-2" v-model="drawer" temporary fixed>

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

export default {
  name: "App",
  data: () => ({
    drawer: null,
    items: [
          { title: 'Αρχική Σελίδα', link: '/' },
          { title: 'Χρήσιμες Πληροφορίες', link: '/information' },
          { title: 'Μηνύματα Προέδρων', link: '/messages' },
          { title: 'Χορηγοί', link: '/sponsors' }
          
        ],
  })
};
</script>

<style>
 #app{
   background-color: #ECEFF1; 
  }
</style>
