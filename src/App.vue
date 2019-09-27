<template>
  <div id="app">
    <b-container>
      <b-navbar :sticky="true" toggleable="md" type="light" class="nav-background">
        <!-- <b-navbar-brand tag="h1" class='d-md-none d-sm-none d-none d-lg-block'>Izabela Kałka</b-navbar-brand> -->
        <h3 class='d-md-none d-sm-none d-none d-lg-block'>Izabela Kałka</h3>
        <b-navbar-toggle target="nav-collapse" />
            
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item><b-link to="/">O mnie</b-link></b-nav-item>
              <b-nav-item><b-link to="/kwalifikacje">Kwalifikacje</b-link></b-nav-item>
              <b-nav-item><b-link to="/oferta">Oferta</b-link></b-nav-item>
              <b-nav-item><b-link to="/superwizja">Superwizja</b-link></b-nav-item>
              <b-nav-item><b-link to="/kontakt">Kontakt</b-link></b-nav-item>
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>
    <br>
    <br>
    <router-view/>
    </b-container>
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
    color: #2c3e50;
    padding: 2rem;
    margin: auto;
  }
  .nav-background {
    background: #e6f4f1;
    min-height: 50px;
    margin: auto;
  }
</style>
