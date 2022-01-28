<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Work' }">Work</router-link>
    <router-link :to="{ name: 'Skills' }">Skills</router-link>
    <router-link :to="{ name: 'Projects' }">Projects</router-link>
    <router-link :to="{ name: 'Testimonials' }">Testimonials</router-link>
    <router-link :to="{ name: 'Contact' }">Contact</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  methods: {
    redirect() {},
    back() {},
    forward() {},
  }
}
</script>

<style>
#app {
background-color: rgb(29, 27, 27);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-size: 23px;
  /* font-weight: bold; */
  color: #f2f5f8;
  text-decoration: blueviolet;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: #eff4f8;
  background: rgb(15, 112, 202);
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
