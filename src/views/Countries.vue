<template lang="html">
  <div class="">
    <CountriesList :countries="countries"/>
    <CountryDetail v-bind:country="selectedCountry"/>
  </div>

</template>

<script>

import CountriesList from '@/components/CountriesList';
import CountryDetail from '@/components/CountryDetail';
import {eventBus} from '@/main.js';

export default {
  components: {
    CountriesList,
    CountryDetail
  },
  data() {
    return {
      countries: [],
      selectedCountry: null
    };
  },
  mounted() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(countries => this.countries = countries),

    eventBus.$on('country-selected', (country) => { // want film from bus
      this.selectedCountry = country;
    })
  }
}
</script>


<style lang="css" scoped>
#mapid {
  display: flex;
  justify-content: flex-start;
}
</style>
