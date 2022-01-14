<template>
  <div id="nav">
    <router-link to="/">Dashboard</router-link> |
    <span v-if="! authenticated">
      <router-link to="/Login">Login</router-link> |
      <router-link to="/Register">Register</router-link>
    </span>
    <span v-if="authenticated">
      <a v-on:click="logout" class="cursor-pointer">Logout</a>
    </span>
  </div>
  <router-view/>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      })
    },

    methods: {
      ...mapActions({
        logoutAction: 'auth/logout',
        receiveBroadcastAction: 'app/receiveBroadcast',
      }),

      async logout () {
        await this.logoutAction()
        this.$router.replace({ name: 'Dashboard' })
      }
    },

    // watch: {
        // this.$echo.private('*')
        //   .listen('*', data => {
        //     this.receiveBroadcastAction(data.message)
        //   })
        // axios.get('/api/state') // once subscribed, we can receive game state
  }
</script>