<template>
  <div class="flex items-center h-full">
    <form action="#" @submit.prevent="submit" class="bg-gray-100 mx-auto rounded-lg text-left shadow-md sm:my-8 max-w-lg w-full px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="name">Name</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-3" id="name" type="text" placeholder="Name" v-model="form.name">
          <span v-if="errors.name" class="text-red-500 text-xs italic">{{ errors.name.join(', ') }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="email">Email</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-3" id="email" type="text" placeholder="Email" v-model="form.email">
          <span v-if="errors.email" class="text-red-500 text-xs italic">{{ errors.email.join(', ') }}</span>
        </div>
        <div class="mb-6">
          <label class="block text-sm font-bold mb-2" for="password">Password</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-3" id="password" type="password" placeholder="******" v-model="form.password">
          <span v-if="errors.password" class="text-red-500 text-xs italic">{{ errors.password.join(', ') }}</span>
        </div>
        <div class="mb-6">
          <label class="block text-sm font-bold mb-2" for="password">Confirm password</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-3" id="password_confirmation" type="password" placeholder="******" v-model="form.password_confirmation">
          <span v-if="errors.password_confirmation" class="text-red-500 text-xs italic">{{ errors.password_confirmation.join(', ') }}</span>
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        },
        errors: {}
      }
    },
    methods: {
      async submit () {
        this.register(this.form)
          .then(() => {
            this.$router.replace({ name: 'Login' })
          })
          .catch(error => {
            this.errors = error.response.data.errors
          })
      },

      async register (credentials) {
        return window.axios.post('/register', credentials)
      }
    }
  }
</script>