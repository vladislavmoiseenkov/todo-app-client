<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AuthService from '@/services/AuthService';

export default {
  async created() {
    const token = localStorage.getItem('token');
    if (token) {
      const auth = (await AuthService.authenticate({ token })).data;
      this.setUser(auth.user);
      this.$router.push({ name: 'user' });
      localStorage.setItem('token', auth.token);
    }
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser',
    }),
  },
};
</script>

<style lang="scss">
@import './scss/app';

/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
/*}*/
/*#nav {*/
  /*padding: 30px;*/
  /*a {*/
    /*font-weight: bold;*/
    /*color: #2c3e50;*/
    /*&.router-link-exact-active {*/
      /*color: #42b983;*/
    /*}*/
  /*}*/
/*}*/
</style>
