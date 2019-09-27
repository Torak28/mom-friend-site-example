<template>
  <b-container id='footerContact'>
    <br>
    <br>
    <br>
    <b-row>
      <b-col md='6' style="background: white;">
        <gmap-map :center= "center" :zoom= "zoom" style="width:80%;  height: 300px;">
          <gmap-marker :position.sync=markerPos1 :clickable="true"></gmap-marker>
        </gmap-map>
      </b-col>
      <b-col md='6' style="background: green;">
        XD 2
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
</style>