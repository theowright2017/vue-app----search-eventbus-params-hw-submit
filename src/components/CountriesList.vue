<template lang="html">
<div class="">
<input type="text" v-model="search" placeholder="search for country">
  <ul>
  <CountryListItem v-for="country in filteredCountries"
  v-bind:country="country"/>
  <!-- :key="index" -->
  </ul>
</div>
</template>

<script>
import CountryListItem from '@/components/CountryListItem';

export default {
  name: 'countries-list',
  props:['countries'],
  components: { CountryListItem },
  data() {
    return {
      search: ""
    }
  },
  computed: {
    filteredCountries: function() {
      return this.countries.filter((country) => {
        return country.name.match(this.search.charAt(0).toUpperCase() + this.search.slice(1).toLowerCase());
      })
    }
  }
}
</script>

<style lang="css" scoped>
input {
  margin-left: 40px;
}
ul {
  height: 50vh;
  overflow: auto;
}
</style>
