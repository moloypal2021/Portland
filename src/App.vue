<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/header/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

