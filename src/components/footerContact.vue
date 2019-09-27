<template>
  <b-container id='footerContact'>
    <br>
    <br>
    <br>
    <b-row class='text-center' align-v="center">
      <b-col md='6' style="background: white;">
        Mapa:
        <gmap-map :center= "center" :zoom= "zoom" class='map'>
          <gmap-marker :position.sync=markerPos1 :clickable="true"></gmap-marker>
        </gmap-map>
      </b-col>
      <b-col md='6' style="background: green;">
        XDXD
        <br>
        <br>
        XDXD
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "footerContact",
  data() {
    return {
      center: { lat: 50.2226782, lng: 18.9739298 },
      zoom: 10,
      markerPos1: { lat: 50.231156, lng: 18.997150 },
    }
  }
};
</script>

<style scope>
  img {
        max-width: 100%;
        height: auto;
  }
  .map {
    width:70%;  
    height: 200px; 
    margin-left: auto; 
    margin-right: auto;
    /* margin-top: 10px; */
    margin-bottom: 10px;
  }
</style>