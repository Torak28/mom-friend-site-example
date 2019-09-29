<template>
  <b-container class="quals">
    <b-row class='text'>
      <b-col>
        <h1>{{json.title}}</h1>
      </b-col>
    </b-row>
    <b-row class='text'>
      <b-col md='8' class='align-self-center' order='2' order-md='1'>
        {{json.text1a}} 
        <b-link :href="json.link_addr"> {{json.link_text1}} </b-link>
        {{json.text1b}}
        <br>
        <br>
        {{json.text2}} 
      </b-col>
      <b-col md='4' class='align-self-center' order='1' order-md='2'>
        <img src='@/assets/1.jpg' alt='Std'>
      </b-col>
    </b-row>
    <br>
    <b-row class='text'>
      <b-col md='3' class='align-self-center'>
        <img src='@/assets/2.jpg' alt='Za1'>
      </b-col>
      <b-col md='9' class='align-self-center'>
        {{json.text3}}
        <br>
        <br>
        {{json.text4}}
      </b-col>
    </b-row>
    <br>
    <b-row class='text'>
      <b-col md='6' class='align-self-center' order='3' order-md='1'>
        {{json.text5}}
        <br>
        <br>
        {{json.text6}}
      </b-col>
      <b-col md='3' class='align-self-center' order='2' order-md='2'>
        <img src='@/assets/3.jpg' alt='Za2'>
      </b-col>
      <b-col md='3' class='align-self-center' order='1' order-md='3'>
        <img src='@/assets/4.jpg' alt='Za3'>
      </b-col>
    </b-row>
    <br>
    <b-row class='text'>
      <b-col md='2' class='align-self-center'>
        <img src='@/assets/9.jpg' alt='Za2'>
      </b-col>
      <b-col md='2' class='align-self-center'>
        <img src='@/assets/10.jpg' alt='Za3'>
      </b-col>
      <b-col md='8' class='align-self-center'>
         {{json.text7}}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import json from '@/json/data.json'

export default {
  name: "Qualifications",
  data() {
    return {
      json: json.Quals
    }
  }
};
</script>

<style scope>
  .text {
    text-align: justify;
    text-justify: inter-word;
  }
</style>
