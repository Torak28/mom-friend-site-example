<template>
  <b-container id='Navbar'>
    <b-navbar :sticky="true" toggleable="md" type="light" class="nav-background">
      <h4 class='d-md-none d-sm-none d-none d-lg-block'>Izabela Kałka</h4>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>item 1</b-nav-item>
            <b-nav-item>item 2</b-nav-item>
            <b-nav-item>item 3</b-nav-item>
            <b-nav-item>item 4</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
</style>
