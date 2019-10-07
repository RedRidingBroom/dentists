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
  </v-container>
</template>

<script>
import ThursdayHour from "./program/ThursdayHour.vue";
import ThursdayRoom from "./program/ThursdayRoom.vue";
import FridayRoom from "./program/FridayRoom.vue";
import FridayHour from "./program/FridayHour.vue";
export default {
  components: {
    ThursdayHour,
    ThursdayRoom,
    FridayRoom,
    FridayHour
  }
};
</script>

