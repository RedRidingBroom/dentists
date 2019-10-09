<template>
  <v-app>
    <v-app-bar class="myBar" app color="primary darken-1" dark>
      <v-btn icon>
        <v-icon @click="drawer = !drawer">mdi-dots-vertical</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-toolbar-title class="caption test">
        <span class="mr-2">39ο Πανελλήνιο Οδοντιατρικό Συνέδριο</span>
        <v-img src="../public/img/tooth.png" aspect-ratio="1" height="30" width="30"></v-img>
      </v-toolbar-title>

      <v-btn v-if="whereToShow()" icon right>
        <v-icon @click="showTextField = !showTextField; searchText=''">mdi-magnify</v-icon>
      </v-btn>
      <!-- <v-btn fixed @click="findString('Συντονισμός')">hi</v-btn> -->
    </v-app-bar>

    <v-content>
      <v-text-field
        autofocus
        @blur="showTextField = !showTextField; searchText=''"
        @click:append="findString(searchText)"
        v-model="searchText"
        v-if="showTextField"
        label="Αναζήτηση"
        solo
        dense
        append-icon="mdi-magnify"
        light
        class="myTextField"
      ></v-text-field>
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
    showTextField: false,
    searchText: "",
    items: [
      { title: "Αρχική Σελίδα", link: "/" },
      { title: "Μηνύματα Προέδρων", link: "/messages" },
      { title: "Πρόγραμμα", link: "/program" },
      { title: "Ομιλητές", link: "/omilites-proedries" },
      { title: "Χρήσιμες Πληροφορίες", link: "/information" },
      { title: "Εκθέτες", link: "/exhibition" },
      { title: "Χορηγοί", link: "/sponsors" }
    ]
  }),
  methods: {
    findString(str) {
      let strFound = self.find(str);

      if (!strFound) {
        strFound = self.find(str, 0, 1);
        while (self.find(str, 0, 1)) continue;
      }
    },
    whereToShow() {
      if (
        this.$route.path === "/program/thursday/room" ||
        this.$route.path === "/program/thursday/hour" ||
        this.$route.path === "/program/friday/room" ||
        this.$route.path === "/program/friday/hour" ||
        this.$route.path === "/program/saturday/room" ||
        this.$route.path === "/program/saturday/hour"
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
#app {
  background-color: #eceff1;
}

.myBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.myTextField {
  height: 50px;
  display: hidden;
  position: fixed;
  width: 40%;
  left: 30%;
}

.test {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.myRow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
