<template lang="html">
  <div v-if="country" class="detail">
    <h2>{{country.name}}</h2>
    <p>Continent: {{country.region}}</p>
    <p>Population: {{country.population}}</p>
    <img src="country.flag" alt=""/>
      <router-link :to="{ name: 'map-view', params: {country} }">See Map</router-link>
  </div>
</template>

<script>
export default {
  name: 'country-detail',
  props: ['country']
}
</script>

<style lang="css" scoped>
.detail {
  margin-left: 20%;
}
</style>
