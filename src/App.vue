<template>
  <div id="app">
    <b-container>
      <b-navbar :sticky="true" toggleable="md" type="light" class="nav-background">
        <h3 class='d-md-none d-sm-none d-none d-lg-block'>Izabela Kałka</h3>
        <b-navbar-toggle target="nav-collapse" />
            
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/">O mnie</b-nav-item>
              <b-nav-item to="/kwalifikacje">Kwalifikacje</b-nav-item>
              <b-nav-item to="/oferta">Oferta</b-nav-item>
              <b-nav-item to="/superwizja">Superwizja</b-nav-item>
              <b-nav-item to="/kontakt">Kontakt</b-nav-item>
              <b-nav-item to="/rodo">Polityka prywatności</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>
    <br>
    <br>
    <router-view/>
    <footerContact />
    <b-row class='text-center'>
      <b-col>
        <small class="text-muted">© 2019, Jarek Ciołek-Żelechowski</small>
        <br>
        <small><b-link href="http://example.com">Polityki Prywatności</b-link></small>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import footerContact from "@/components/footerContact.vue";

export default {
  name: 'app',
  components: {
    footerContact
  }
}
</script>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif !important;
    background: #e6f4f1 !important; 
    color: #2c3e50;
    padding: 2rem;
    margin: auto;
  }
  /* h1 {
    background: linear-gradient(180deg, rgba(255,255,255,0) 65%, rgb(140, 180, 255) 65%);
    display: inline;
  } */
  h3 {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, rgb(140, 180, 255) 65%);
    display: inline;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  .nav-background {
    background: #e6f4f1;
    min-height: 50px;
    margin: auto;
  }
</style>
