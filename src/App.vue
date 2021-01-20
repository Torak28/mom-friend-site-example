<template>
  <div id="app">
    <b-container>
      <b-navbar :sticky="true" toggleable="md" type="light" class="nav-background">
        <b-navbar-brand href="#">
          <img src="./assets/logoNavbar.png" alt="Logo">
        </b-navbar-brand>
        <h2 class='d-md-none d-sm-none d-none d-lg-block'>{{json.MainBar.name}}</h2>
        <b-navbar-toggle target="nav-collapse" />
            
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/">{{json.MainBar.cat_1}}</b-nav-item>
              <b-nav-item to="/kwalifikacje">{{json.MainBar.cat_2}}</b-nav-item>
              <b-nav-item to="/oferta">{{json.MainBar.cat_3}}</b-nav-item>
              <b-nav-item to="/superwizja">{{json.MainBar.cat_4}}</b-nav-item>
              <b-nav-item to="/kontakt">{{json.MainBar.cat_5}}</b-nav-item>
              <b-nav-item to="/rodo">{{json.MainBar.cat_6}}</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>
    <br>
    <br>
    <b-row>
      <router-view/>
    </b-row>
    <b-row>
      <footerContact v-bind:json='json.FooterContact'/>
    </b-row>
    <br>
    <br>
    <b-row class='text-center'>
      <b-col>
        <small class="text-muted">{{json.Footer.text1}}</small>
        <br>
        <small><b-link to="/rodo">{{json.Footer.text2}}</b-link></small>
      </b-col>
    </b-row>
    </b-container>
    <footer>
      <cookie-law :buttonText=json.Cookie.bttn theme="base">
        <div slot="message">
          Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie, po więcej informacji zapraszam do zapozaniania się z treścią <b-link href="/rodo">Polityki Prywatności</b-link>!
        </div>
      </cookie-law>
    </footer>
  </div>
</template>

<script>
import footerContact from "@/components/footerContact.vue";
import CookieLaw from 'vue-cookie-law'
import json from './json/data.json'

export default {
  name: 'app',
  components: {
    footerContact,
    CookieLaw
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
  h2 {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, rgb(140, 180, 255) 65%);
    display: inline;
  }
  h3 {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, rgb(140, 180, 255) 65%);
    display: inline;
  }
  h5 {
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
    font-size: 1.1rem;
    text-align: justify;
    text-justify: inter-word;
  }
</style>
