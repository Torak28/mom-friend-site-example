<template>
  <b-container id='footerContact'>
    <br>
    <br>
    <br>
    <hr>
    <b-row align-v="center">
      <b-col md='6' class='text-left'>
        <gmap-map :center="center" :zoom="zoom" :options="mapOptions" class='map'>
          <gmap-marker :position.sync=center :clickable="true"></gmap-marker>
        </gmap-map>
      </b-col>
      <b-col md='6'>
        <b-row>
          <b-col class='contact'>
            {{json.text}}
            <br>
            <br>
            <font-awesome-icon icon="phone" /> {{json.tel}}
            <br>
            <br>
            <b>{{json.addr1}}</b>
            <br>
            <font-awesome-icon icon="map-marker-alt" /> {{json.addr2}}
            <br>
            {{json.addr3}}
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <br>
  </b-container>
</template>

<script>
export default {
  name: "footerContact",
  props: ['json'],
  data() {
    return {
      center: { lat: 50.252750, lng: 19.012200 },
      zoom: 13.25,
      mapOptions: { disableDefaultUI: true }
    }
  }
};
</script>

<style scope>
  .map {
    width:70%;  
    height: 200px; 
    margin-left: auto; 
    margin-right: auto;
    /* margin-top: 10px; */
    margin-bottom: 10px;
  }
  .contact {
    height: 200px;
  }
</style>