import firebase from 'firebase';
import Vue from 'vue';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let app = '';

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAHsbHZgN2Ds4pabgylHQRZ_QBcZCuqBYQ",
  authDomain: "vue-estudo.firebaseapp.com",
  databaseURL: "https://vue-estudo.firebaseio.com",
  projectId: "vue-estudo",
  storageBucket: "vue-estudo.appspot.com",
  messagingSenderId: "238152543478"
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue ({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
