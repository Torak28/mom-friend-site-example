<template>
  <b-container class="about">
    <b-row class='text'>
      <b-col>
        <h1>{{json.title}}</h1>
      </b-col>
    </b-row>
    <b-row class='text'>
      <b-col md='8' order='2' order-md='1'>
        {{json.text1}}
        <br>
        <br>
        {{json.text2}}
        <br>
        <br>
        <center><b>{{json.text3}}</b></center>
      </b-col>
      <b-col md='4' class='align-self-center' order='1' order-md='2'>
        <img src='@/assets/pic.jpg' alt='Logo'>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import json from '@/json/data.json'

export default {
  name: "About",
  data() {
    return {
      json: json.About
    }
  }
};
</script>

<style scope>
  .text {
    text-align: justify;
    text-justify: inter-word;
  }
  h1 {
    text-align: right;
    background: linear-gradient(180deg, rgba(255,255,255,0) 65%, rgb(255, 127, 17) 65%);
    display: inline;
  }
  
</style>