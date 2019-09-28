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
            XDDDDDDDD
            <br>
            <br>
            122222222222222222
            <br>
            <br>
            XDDDDDDDD
            <br>
            XDDDDDDDD
            <br>
            XDDDDDDDD
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "footerContact",
  data() {
    return {
      center: { lat: 50.257931, lng: 19.031550 },
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
  .tmp {
    margin-left: auto; 
    margin-right: auto;
    margin-bottom: 0;
    width:70%;
  }
  .contact {
    height: 200px;
  }
</style>