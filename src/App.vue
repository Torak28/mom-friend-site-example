<template>
  <div id="app">
    <b-container>
      <router-link to="/">O mnie</router-link> |
      <router-link to="/kwalifikacje">Kwalifikacje</router-link> |
      <router-link to="/oferta">Oferta</router-link> |
      <router-link to="/superwizja">Superwizja</router-link> |
      <router-link to="/kontakt">Kontakt</router-link>
    </b-container>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif !important;
  background: #e6f4f1 !important; 
  text-align: center;
  color: #2c3e50;
  padding: 2rem;
  margin: auto;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
