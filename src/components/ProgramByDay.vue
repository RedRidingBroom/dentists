<template>
  <v-container>
    <div v-if="this.$route.params.day==='thursday' && this.$route.params.order==='hour'">
      <ThursdayHour />
    </div>

    <div v-if="this.$route.params.day==='thursday' && this.$route.params.order==='room'">
      <ThursdayRoom />
    </div>

    <div v-if="this.$route.params.day==='friday' && this.$route.params.order==='hour'">
      <FridayHour />
    </div>

    <div v-if="this.$route.params.day==='friday' && this.$route.params.order==='room'">
      <FridayRoom />
    </div>

    <div v-if="this.$route.params.day==='saturday' && this.$route.params.order==='hour'">
      <SaturdayHour />
    </div>

    <div v-if="this.$route.params.day==='saturday' && this.$route.params.order==='room'">
      <SaturdayRoom />
    </div>
  </v-container>
</template>

<script>
import ThursdayHour from "./program/ThursdayHour.vue";
import ThursdayRoom from "./program/ThursdayRoom.vue";
import FridayRoom from "./program/FridayRoom.vue";
import FridayHour from "./program/FridayHour.vue";
import SaturdayHour from "./program/SaturdayHour.vue";
import SaturdayRoom from "./program/SaturdayRoom.vue";
export default {
  components: {
    ThursdayHour,
    ThursdayRoom,
    FridayRoom,
    FridayHour,
    SaturdayHour,
    SaturdayRoom
  }
};
</script>

