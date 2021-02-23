<template>
  <div class="home">
    <SubNavbar />
    <Slider />
    <Content />
    <About />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import SubNavbar from "@/components/header/SubNavbar.vue";
import Slider from "@/components/Slider.vue";
import Content from "@/components/Content.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    SubNavbar,
    Slider,
    Content,
    About,
    Footer,
  },
};
</script>
