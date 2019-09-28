<template>
  <b-container class="rodo">
    <b-row class='text'>
      <b-col>
        <h1>{{json.title}}</h1>
      </b-col>
    </b-row>
    <br>
    <b-row class='text'>
      <b-col>
        {{json.text1}}
        <br>
        <br>
        {{json.text2}}
        <br>
        <br>
        <ol>
          <li>{{json.pkt1}}</li>
          <li>{{json.pkt2}}</li>
          <li>{{json.pkt3}}</li>
        </ol>
        <!-- <br>
        <br> -->
        {{json.text3}}
        <br>
        <ul>
          <li>{{json.l1}}</li>
          <li>{{json.l2}}</li>
          <li>{{json.l3}}</li>
        </ul>
        <!-- <br>
        <br> -->
        {{json.text4}}
        <br>
        <ul>
          <li>{{json.l4}}</li>
          <li>{{json.l5}}</li>
          <li>{{json.l6}}</li>
          <li>{{json.l7}}</li>
          <li>{{json.l8}}</li>
        </ul>
        {{json.text5}}
        <br>
        <br>
        {{json.text6}}
        <br>
        <ul>
          <li>{{json.l9}}</li>
          <li>{{json.l10}}</li>
          <li>{{json.l11}}</li>
          <li>{{json.l12}}</li>
          <li>{{json.l13}}</li>
          <li>{{json.l14}}</li>
        </ul>
        {{json.text7}}
        <br>
        <br>
        {{json.text8}}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import json from '@/json/data.json'

export default {
  name: "Rodo",
  data() {
    return {
      json: json.Rodo
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