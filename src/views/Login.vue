<template>
  <main>
    <!--<div class="image">-->
      <!--<img-->
        <!--:src="require('@/assets/img/todo.png')"-->
        <!--alt=""-->
      <!--&gt;-->
    <!--</div>-->
    <div class="form">
      <h2>Login</h2>
      <form @submit.prevent="submit">
        <el-input
          placeholder="Email"
          v-model="form.email"
          type="email"
          clearable
          required
        >
        </el-input>
        <el-input
          placeholder="Password"
          v-model="form.password"
          type="password"
          clearable
          required
        >
        </el-input>
        <el-row>
          <el-button
            native-type="submit"
            type="success"
            round
          >
            Login
          </el-button>
          <el-button
            native-type="button"
            type="primary"
            round
            @click="goTo('sign-up')"
          >
            Sign Up
          </el-button>
        </el-row>
      </form>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import AuthService from '../services/AuthService';

export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser',
    }),
    async submit() {
      try {
        const user = (await AuthService.login(this.form)).data;
        this.setUser(user.user);
        this.$router.push({ name: 'user' });
        localStorage.setItem('token', user.token);
      } catch (e) {
        console.error(e);
      }
    },
    goTo(pathName) {
      this.$router.push({ name: pathName });
    },
  },
};
</script>

<style scoped lang="scss">
  main {
    display: flex;

    & > div {
      margin: auto;
      width: 50%;

      img {
        display: block;
        margin: auto;
      }

      &.form {
        h2 {
          text-align: center;
        }

        form {
          margin: auto;
          width: 50%;

          & > div {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
</style>
