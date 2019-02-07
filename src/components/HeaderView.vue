<template>
  <el-container>
    <el-header style="font-size: 12px;">
      <span>
        <el-button
          @click="showHideAside"
          type="primary"
          icon="el-icon-menu"
          circle
        ></el-button>
      </span>
      <span>
        <span v-if="user && user.username">{{ user.username }}</span>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <!--<el-dropdown-item-->
              <!--command="logout"-->
            <!--&gt;-->
              <!--Logout-->
            <!--</el-dropdown-item>-->
          </el-dropdown-menu>
        </el-dropdown>
        <button
          @click="logout"
        >
          Logout
        </button>
      </span>
    </el-header>
  </el-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AuthService from '@/services/AuthService';

export default {
  name: 'HeaderView',
  props: {
    aside: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
    }),
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser',
    }),
    showHideAside() {
      this.$emit('aside', !this.aside);
    },
    async logout() {
      const token = localStorage.getItem('token');
      await AuthService.logout({ token });
      this.setUser({});
      localStorage.removeItem('token');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style scoped lang="scss">
  section {
    align-self: baseline;

    .el-header {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
