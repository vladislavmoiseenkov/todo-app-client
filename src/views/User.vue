<template>
  <main>
    <aside-view v-if="aside" />
    <header-view :aside="aside" @aside="showAside" />
    <router-view />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import AsideView from '../components/AsideView';
import HeaderView from '../components/HeaderView';

export default {
  name: 'User',
  components: { HeaderView, AsideView },
  data() {
    return {
      aside: false,
    };
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
  methods: {
    showAside() {
      this.aside = !this.aside;
    },
  },
};
</script>

<style scoped lang="scss">
  main {
    display: flex;

    aside {
      height: 100vh;
    }
  }
</style>
