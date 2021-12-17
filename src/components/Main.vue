<template>
  <div class="main">
    <section>
      <h2 class="header">Curated</h2>
      <div class="main-headlines">
        <Card
          v-for="(news, id) in mainHeadlines.favourite"
          :key="id"
          :news="news"
          :variants="{ width: 250 }"
        />
      </div>
    </section>
    <section>
      <h2 class="header">Other Stories</h2>
      <div class="other-headlines">
        <Card
          v-for="(news, id) in mainHeadlines.general.slice(0, 4)"
          :key="id"
          :news="news"
          :variants="{ hideDesc: true, width: 180 }"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "./Card.vue";
export default {
  components: { Card },
  name: "News",
  created() {
    this.fetchMainHeadlines();
  },
  props: { category: String },
  computed: {
    ...mapGetters(["mainHeadlines"]),
  },
  methods: {
    ...mapActions(["fetchMainHeadlines"]),
  },
};
</script>

<style scoped>
section {
  padding: 20px 0;
  margin-top: 20px;
}
.header {
  text-align: left;
  font-size: 1.8rem;
  font-weight: 800;
  font-family: Raleway;
  margin-bottom: 30px;
}
.main-headlines {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.other-headlines {
  display: flex;
  gap: 15px;
}
@media screen and (max-width: 768px) {
  .other-headlines {
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
