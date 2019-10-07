<template>
  <v-container class="cont">


   
    <v-row class="mt-5">
 
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1" @click="$router.push({path: '/message/devliotis'})">
              Αθανάσιος
              <br />Δεβλιώτης
            </v-list-item-title >
            <v-list-item-subtitle class="mt-2" @click="$router.push({path: '/message/devliotis'})">Πρόεδρος της Ελληνικής Οδοντιατρικής Ομοσπονδίας</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">
            <v-img src="../../public/img/devliotis.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text @click="$router.push({path: '/message/devliotis'})">Διαβάστε το μήνυμα...</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>

    <v-row class="mt-5">
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title @click="$router.push({path: '/message/39president'})" class="headline mb-1">Νικόλαος Γ. <br/> Νικητάκης</v-list-item-title>
            <v-list-item-subtitle @click="$router.push({path: '/message/39president'})" class="mt-2">Πρόεδρος Οργανωτικής Επιτροπής 39ου ΠΟΣ</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">
            <v-img src="../../public/img/39president.jpeg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text @click="$router.push({path: '/message/39president'})">Διαβάστε το μήνυμα...</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>

    <v-row class="mt-5">
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title @click="$router.push({path: '/message/crete'})" class="headline mb-1">Πρόεδροι Ο.Σ. Κρήτης</v-list-item-title>
            <v-list-item-subtitle  @click="$router.push({path: '/message/crete'})">Πατήστε το κουμπί για περισσότερα</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn text @click="$router.push({path: '/message/crete'})">Διαβάστε το μήνυμα...</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      card: "first",
      items: ["ΕΟΟ", "Ο.Ε.", "Ο.Σ. Κρήτης"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>

<style scoped>
.cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: center;
}

.bottom-card {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  left: 0;
  align-self: flex-end;
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.2s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>