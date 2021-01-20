<template>
  <b-container class="offer">
    <b-row class='text'>
      <b-col>
        <h1>{{json.title1}}</h1>
      </b-col>
    </b-row>
    <br>
    <b-row class='text'>
      <b-col md='6' class='align-self-center' order='2' order-md='1'>
        <b>{{json.sec1}}</b>{{json.text1}}
        <br>
        <br>
        <b>{{json.sec3}}</b>{{json.text3}}
      </b-col>
      <b-col md='6' class='align-self-center' order='1' order-md='2'>
        <img src='@/assets/11.jpg' alt='Logo'>
      </b-col>
    </b-row>
    <br>
    <b-row class='text'>
      <b-col>
          <h3>{{json.subtitle1}}</h3>
          <br>
          <br>
          <b>{{json.sec2}}</b>{{json.text2}}
          <br>
          <br>
          <b>{{json.listTitle}}</b>
          <br>
          <ul>
            <li>{{json.l1}}</li>
            <li>{{json.l2}}</li>
            <li>{{json.l3}}</li>
            <li>{{json.l4}}</li>
          </ul>
      </b-col>
      <b-col>
        <h3>{{json.subtitle2}}</h3>
        <br>
        <br>
        {{json.text2a}}
        <b>{{json.text2b}}</b>
        {{json.text2c}}
        <b>{{json.text2d}}</b>
        {{json.text2e}}
        <br>
        <br>
        <b>{{json.listTitle}}</b>
        <br>
        <ul>
          <li>{{json.l5}}</li>
          <li>{{json.l6}}</li>
          <li>{{json.l7}}</li>
          <li>{{json.l8}}</li>
        </ul>
      </b-col>
    </b-row>

    <b-row class='text'>
      <b-col>
        <h1>{{json.title2}}</h1>
      </b-col>
    </b-row>
    <br>
    <b-row class='text'>
      <b-col>
        {{json.text4}}
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import json from '@/json/data.json'

export default {
  name: "Offer",
  data() {
    return {
      json: json.Offer
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