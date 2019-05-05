<template lang="html">
  <div>
    <p>{{country.latlng}}</p>

  </div>
</template>

<script>



export default {
  name: 'map-view',
  props: ['country'],

}

</script>

<style lang="css" scoped>
#mapid { height: 180px; }
</style>
