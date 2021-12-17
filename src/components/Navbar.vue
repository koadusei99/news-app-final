<template>
  <div class="nav">
    <div class="top">
      <button @click="toggle" class="toggler">
        <img src="../assets/list.svg" alt="" />
      </button>
      <div class="brand">
        <img width="120" src="../assets/logo.svg" alt="" />
      </div>
      <div class="location">
        <div>
          <img width="25" height="25" src="../assets/cloud-sun.svg" alt="" />
          <p class="weather">+31&deg;</p>
        </div>
        <div>
          <img width="20" height="20" src="../assets/geo-alt.svg" alt="" />
          <p class="country">{{ country.toUpperCase() }}</p>
        </div>
      </div>
      <button class="mobile-search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </button>
    </div>
    <div class="bottom">
      <div :class="`links ${expand}`">
        <router-link to="/main">Home</router-link>
        <router-link to="/general">General</router-link>
        <router-link to="/sports">Sports</router-link>
        <router-link to="/science">Science</router-link>
        <router-link to="/health">Health</router-link>
        <router-link to="/tech">Technology</router-link>
        <router-link to="/entertainment">Entertainment</router-link>
      </div>
      <div class="searchbar">
        <div class="input-group">
          <label for="sr-only"></label>
          <input type="text" placeholder="Search headline" />
        </div>
        <button class="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  data() {
    return { expanded: false };
  },
  computed: {
    expand() {
      return this.expanded ? "show" : "";
    },

    ...mapGetters(["country"]),
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style scoped>
.mobile-search {
  display: none;
}
.toggler {
  display: none;
}
.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Raleway;
  gap: 1rem;
}
.nav > div {
  width: 100%;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px 0;
}
.location {
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
}
.location div {
  display: flex;
}
.location div:last-child {
  align-items: baseline;
}
.weather {
  font-size: 1.1rem;
}
.country {
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: underline;
}
.bottom {
  display: flex;
  justify-content: space-between;
}
.links {
  display: flex;
  justify-content: left;
}
.links a {
  padding: 10px 20px;
  text-decoration: none;
  font-weight: 600;
  color: var(--slate-900);
  transition: 150ms ease-in;
}
.links a.router-link-exact-active {
  background-color: var(--primary-600);
  color: white;
}
.input-group input {
  height: 100%;
}
.search {
  border: none;
  background-color: var(--primary-500);
  padding: 10px;
  width: fit-content;
  color: white;
}
.searchbar {
  display: flex;
}
@media screen and (max-width: 768px) {
  .nav {
    position: relative;
  }
  .links.show {
    display: flex;
  }
  .links {
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 50px;
    z-index: 10;
    background-color: white;
    width: 100%;
    margin-top: 5px;
    padding: 10px 0;
    display: none;
  }
  .location {
    display: none;
  }
  .searchbar {
    display: none;
  }
  .mobile-search {
    display: block;
    width: 40px;
    height: 100%;
    background-color: transparent;
    border: none;
    order: 3;
  }
  .top {
    border: none;
  }
  .toggler {
    display: block;
    border: none;
    width: 60px;
    background-color: transparent;
  }
  .toggler img {
    width: 40px;
  }
}
</style>
