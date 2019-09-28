<template>
  <div id="app">
    <b-container>
      <b-navbar :sticky="true" toggleable="md" type="light" class="nav-background">
        <h3 class='d-md-none d-sm-none d-none d-lg-block'>{{json.MainBar.name}}</h3>
        <b-navbar-toggle target="nav-collapse" />
            
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/">{{json.MainBar.cat_1}}</b-nav-item>
              <b-nav-item to="/kwalifikacje">{{json.MainBar.cat_2}}</b-nav-item>
              <b-nav-item to="/oferta">{{json.MainBar.cat_3}}</b-nav-item>
              <b-nav-item to="/superwizja">{{json.MainBar.cat_4}}</b-nav-item>
              <b-nav-item to="/kontakt">{{json.MainBar.cat_5}}</b-nav-item>
              <!-- <b-nav-item to="/rodo">{{json.MainBar.cat_6}}</b-nav-item> -->
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>
    <br>
    <br>
    <router-view/>
    <footerContact />
    <br>
    <br>
    <b-row class='text-center'>
      <b-col>
        <small class="text-muted">{{json.Footer.text}}</small>
        <br>
        <small><b-link href="http://example.com">{{json.MainBar.cat_6}}</b-link></small>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import footerContact from "@/components/footerContact.vue";
import json from './json/data.json'

export default {
  name: 'app',
  components: {
    footerContact
  },
  data() {
    return {
      json
    }
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
  .text {
    text-align: justify;
    text-justify: inter-word;
  }
</style>
