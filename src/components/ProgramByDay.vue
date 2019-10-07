<template>
  <v-container>
    <div v-if="this.$route.params.day==='thursday' && this.$route.params.order==='hour'">
      <ThursdayHour />
    </div>

    <div v-if="this.$route.params.day==='thursday' && this.$route.params.order==='room'">
      <ThursdayRoom />
    </div>
  </v-container>
</template>

<script>
import ThursdayHour from "./program/ThursdayHour.vue";
import ThursdayRoom from "./program/ThursdayRoom.vue";
export default {
  components: {
    ThursdayHour,
    ThursdayRoom
  }
};
</script>

