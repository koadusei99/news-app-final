<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
:root {
  --primary-400: #51e3db;
  --primary-500: #42c0b9;
  --primary-600: #38a39d;
  --slate-400: #94a3b8;
  --slate-600: #475569;
  --slate-800: #1e293b;
  --slate-900: #0f172a;
  --gray-400: #9ca3af;
  --side-padding: 4rem;
  --rounded: 8px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Noto Sans Display", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f172a;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.input-group {
  display: flex;
  flex-direction: column;
}
.input-group input {
  padding: 6px;
  font-family: Raleway;
}
@media screen and (max-width: 768px) {
  :root {
    --side-padding: 1rem;
  }
}
</style>
