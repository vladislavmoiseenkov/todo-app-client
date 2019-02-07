<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
    }),
  },
  mounted() {
    if (!this.user) {
      this.$router.push({ name: 'login' });
    }
  },
};
</script>
