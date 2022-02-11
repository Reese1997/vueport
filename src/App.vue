<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Work' }">Work</router-link>
    <router-link :to="{ name: 'Skills' }">Skills</router-link>
    <router-link :to="{ name: 'Projects' }">Project </router-link>
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
  },
};
</script>

<style scoped>
#app {
  
  background-color: rgb(40, 150, 201);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f1e3e3;
}

#nav {
  
  padding: 23px;
  background-color: rgb(205, 223, 240);
  bottom: 0;
  display: flex;
justify-content: center;


}

#nav a {
  font-size: 20px;
  color: #332e2e;
  text-decoration: rgb(15, 14, 15);
  padding: 9px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: rgb(21, 107, 192);
  
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
