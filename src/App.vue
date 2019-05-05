<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header text= 'List of Countries'/>
    <router-view id="mapid"></router-view>
  </div>
</template>

<script>
// import CountriesList from './components/CountriesList.vue'
// import CountryDetail from './components/CountryDetail.vue'
// import CountryListItem from './components/CountryListItem.vue'
import Header from './components/Header.vue'



export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 80px;
}
</style>
