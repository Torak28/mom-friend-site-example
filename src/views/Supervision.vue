<template>
  <b-container class="supervision">
    <b-row class='text'>
      <b-col>
        <h1>{{json.title}}</h1>
      </b-col>
    </b-row>
    <br>
    <b-row class='text'>
      <b-col md='9' class='align-self-center' order='2' order-md='1'>
        <b>{{json.sec}}</b>{{json.text1}}
        <br>
        <br>
        <b>{{json.listTitle1}}</b>
        <br>
        <ul>
          <li>{{json.l1}}</li>
          <li>{{json.l2}}</li>
          <li>{{json.l3}}</li>
        </ul>
        <br>
        {{json.text2}}
      </b-col>
      <b-col md='3' class='align-self-center' order='1' order-md='2'>
        <img src='@/assets/5.jpg' alt='Std'>
      </b-col>
    </b-row>
    <b-row class='text'>
      <b-col md='3' class='align-self-center'>
        <img src='@/assets/6.jpg' alt='Za1'>
      </b-col>
      <b-col md='3' class='align-self-center'>
        <img src='@/assets/7.jpg' alt='Za1'>
      </b-col>
      <b-col md='6' class='align-self-center'>
        {{json.text3}}
        <br>
        <br>
        <b>{{json.listTitle2}}</b>
        <ul>
          <li><b-link :href="json.link1"> {{json.link_text1}} </b-link></li>
          <li><b-link :href="json.link2"> {{json.link_text2}} </b-link></li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import json from '@/json/data.json'

export default {
  name: "Supervision",
  data() {
    return {
      json: json.Supervision
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
