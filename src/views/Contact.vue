<template>
  <b-container class="contactView">
    <b-row class='text'>
      <b-col>
        <h1>{{json.title}}</h1>
      </b-col>
    </b-row>
    <br>
    <b-row align-v="center" class='text'>
      <b-col md='5' class='align-self-center'>
        <img src='@/assets/8.jpg' alt='Room'>
      </b-col>
      <b-col md='5'>
        {{json.text1}}
        <br>
        <br>
        <h5>{{json.sec1}}</h5>
        <br>
        <font-awesome-icon icon="phone" /> {{json.tel}}
        <br>
        <br>
        <h5>{{json.sec2}}</h5>
        <br>
        <b>{{json.addr1}}</b>
        <br>
        <font-awesome-icon icon="map-marker-alt" /> {{json.addr2}}
        <br>
        {{json.addr3}}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import json from '@/json/data.json'

export default {
  name: "Contact",
  data() {
    return {
      json: json.Contact,
      center: { lat: 50.257931, lng: 19.031550 },
      zoom: 13.25,
      mapOptions: { disableDefaultUI: true }
    }
  }
};
</script>

<style scope>
  .text {
    text-align: justify;
    text-justify: inter-word;
  }
  .map2 {
    width:90%;  
    height: 200px; 
    margin-left: auto; 
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>