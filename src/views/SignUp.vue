<template>
  <main>
    <!--<div class="image">-->
      <!--<img-->
        <!--:src="require('@/assets/img/todo.png')"-->
        <!--alt=""-->
      <!--&gt;-->
    <!--</div>-->
    <div class="form">
      <h2>Sign Up</h2>
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
          placeholder="Username"
          v-model="form.username"
          type="text"
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
        <el-input
          placeholder="Confirm Password"
          v-model="form.password_confirmation"
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
            Submit
          </el-button>
          <el-button
            native-type="button"
            type="primary"
            round
            @click="goTo('login')"
          >
            Login
          </el-button>
        </el-row>
      </form>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import AuthService from '@/services/AuthService';

export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        email: '',
        username: '',
        password: '',
        password_confirmation: '',
      },
    };
  },
  computed: {
    checkPasssword() {
      return this.password === this.password_confirmation;
    },
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser',
    }),
    async submit() {
      try {
        const auth = (await AuthService.register(this.form)).data;
        this.setUser(auth.user);
        this.$router.push({ name: 'user' });
        localStorage.setItem('token', auth.token);
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
