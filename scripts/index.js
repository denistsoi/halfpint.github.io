var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

Vue.component('home', require('./components/home'));
Vue.component('talks', require('./components/talks'));
Vue.component('jobs', require('./components/jobs'));
Vue.component('projects', require('./components/projects'));


var app = new Vue({
  el: '#cv',
  data: function() {
    return {
      currentView: 'home'
    }
  }
});