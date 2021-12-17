<template>
  <div class="home">
    <Navbar />
    <div class="main"><router-view /></div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { Navbar },
};
</script>
<style scoped>
.home {
  padding-inline: var(--side-padding);
}
</style>
