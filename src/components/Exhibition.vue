<template>
  <v-container>
    <v-row>
      <v-col cols="10" offset="1">
        <h3 class="headline text-center primary--text">FOYER ΚΕΝΤΡΙΚΟΥ ΑΜΦΙΘΕΑΤΡΟΥ</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" offset="1" md="6" offset-md="3">
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">ΕΤΑΙΡΕΙΑ</th>
                <th class="text-center">ΑΡΙΘΜΟΣ ΠΕΡΙΠΤΕΡΟΥ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in foyer" :key="item.company">
                <td>{{item.company}}</td>
                <td class="text-center">{{ item.number }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-divider class="mt-10"></v-divider>

    <v-row class="mt-3">
      <v-col cols="10" offset="1">
        <h3 class="headline text-center primary--text">ΕΚΘΕΣΙΑΚΟΣ ΧΩΡΟΣ Α'</h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="10" offset="1" md="6" offset-md="3">
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">ΕΤΑΙΡΕΙΑ</th>
                <th class="text-center">ΑΡΙΘΜΟΣ ΠΕΡΙΠΤΕΡΟΥ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in place_a" :key="item.company">
                <td>{{item.company}}</td>
                <td class="text-center">{{ item.number }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-divider class="mt-10"></v-divider>

    <v-row class="mt-3">
      <v-col cols="10" offset="1">
        <h3 class="headline text-center primary--text">ΕΚΘΕΣΙΑΚΟΣ ΧΩΡΟΣ B'</h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="10" offset="1" md="6" offset-md="3">
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">ΕΤΑΙΡΕΙΑ</th>
                <th class="text-center">ΑΡΙΘΜΟΣ ΠΕΡΙΠΤΕΡΟΥ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in place_b" :key="item.company">
                <td>{{item.company}}</td>
                <td class="text-center">{{ item.number }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      foyer: [
        { company: "ORAL-B", number: "1" },
        { company: "COLGATE", number: "2" },
        { company: "GLAXOSMITHKLINE", number: "3.4" }
      ],
      place_a: [
        { company: "ULTRADENT HELLAS", number: "5.6" },
        { company: "STEFANOUDAKIS- MIGLIONICO", number: "7" },
        { company: "ORAL VISION & MEMODENT", number: "8.9" },
        { company: " ΙΩΑΝΝΗΣ ΤΣΑΠΡΑΖΗΣ ΑΕ", number: "10" },
        { company: "DENTALCOM - ΠΑΠΑΖΟΓΛΟΥ Γ. ", number: "11" },
        { company: "DENTAL LINE ΕΒΕΠΕ/ Γ. ΔΕΒΕΡΙΚΟΣ", number: "12" },
        { company: "3M", number: "13" },
        { company: "ELLADENT", number: "14" },
        { company: "UNICON", number: "15" },
        { company: " SMALTO PASTELI - ΧΡΗΣΤΟΣ ΤΖΟΥΜΑΝΕΚΑΣ", number: "16" },
        { company: "DENTALAND", number: "17.21" },
        { company: "COLTENE", number: "18" },
        { company: "ΜΩΡΙΣ ΦΑΡΑΝΤΖΗ  ΑΕ", number: "19" },
        { company: "ΜΙΛΤΙΑΔΗΣ ΒΙΤΣΑΡΟΠΟΥΛΟΣ Α.Ε", number: "20.24" },
        { company: "ΔΗΜΗΤΡΙΟΣ ΜΑΥΡΑΕΙΔΟΠΟΥΛΟΣ  ΑΕ", number: "22" },
        { company: "ORAL INNOVATION", number: "23" }
      ],
      place_b: [
        { company: "FREZYDERM", number: "25.26" },
        { company: "UNILEVER HELLAS AEBE", number: "27.28" },
        { company: "PROFILE - ADIN HELLAS", number: "29.3" },
        { company: "ARRIANI", number: "32" },
        { company: "ΝΕΓΡΙΝ ΙΝ DENTAL", number: "33" },
        { company: "ΟΔΟΝΤΙΑΤΡΙΚΑ ΑΠΟΣΤΟΛΙΔΗ", number: "34.35" },
        { company: "ARISTON DENTAL", number: "36.37" },
        { company: "ANTHOS HELLAS/Ν.ΣΑΡΜΑΣ", number: "38" },
        { company: "SADENT ΑΕΒΕ", number: "39" },
        { company: "Α. ΜΙΧΑΗΛΙΔΟΥ ΚΑΙ ΣΙΑ Ε.Ε", number: "40" },
        { company: "INNOVIS PHARMA", number: "41" },
        { company: "ΣΥΝΕΤΑΙΡΙΣΜΟΣ ΟΔΟΝΤΙΑΤΡΩΝ ΘΕΣΣΑΛΟΝΙΚΗΣ", number: "42" },
        { company: "INTERMED", number: "43" },
        { company: "SMART DENTAL CARE", number: "44" },
        { company: "DENTAL EXPERT ΑΝΝΑ ΕΛΜΑΟΓΛΟΥ Ε.Π.Ε", number: "45.46" },
        { company: "PLAC CONTROL", number: "47" },
        { company: " ", number: "48" },
        { company: "SOUTHERN IMPLANTS", number: "49" },
        { company: "YGEIA DENT", number: "50" },
        { company: "ΑΦΟΙ ΣΤΕΡΓΙΟΥ", number: "51" }
      ]
    };
  }
};
</script>