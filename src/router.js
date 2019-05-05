import Vue from 'vue';
import Router from 'vue-router';
import Countries from '@/views/Countries'; //@ references src folder
import MapView from '@/views/MapView'

Vue.use(Router);

 export const router = new Router({
  routes: [
    {
      path: '',
      name: 'countries',
      component: Countries
    },
    {
      path: '/map-view',
      name: 'map-view',
      component: MapView,
      props: true
    }
  ]
});
