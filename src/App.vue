<template>
  <div id="app">
    <b-container fluid class='Navbar'>
      <b-navbar :sticky="true" toggleable="md" type="light" class="nav-background">
        <h4 class='d-md-none d-sm-none d-none d-lg-block'>Izabela Kałka</h4>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item><router-link to="/">O mnie</router-link></b-nav-item>
              <b-nav-item><router-link to="/kwalifikacje">Kwalifikacje</router-link></b-nav-item>
              <b-nav-item><router-link to="/oferta">Oferta</router-link></b-nav-item>
              <b-nav-item><router-link to="/kontakt">Kontakt</router-link></b-nav-item>
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>
    </b-container>
    <!-- <b-container>
      <router-link to="/">O mnie</router-link> |
      <router-link to="/kwalifikacje">Kwalifikacje</router-link> |
      <router-link to="/oferta">Oferta</router-link> |
      <router-link to="/superwizja">Superwizja</router-link> |
      <router-link to="/kontakt">Kontakt</router-link>
    </b-container> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif !important;
    background: #e6f4f1 !important; 
    text-align: center;
    color: #2c3e50;
    padding: 2rem;
    margin: auto;
  }
  .nav-background {
    min-height: 50px;
    margin: auto;
  }
</style>
