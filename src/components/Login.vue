<template>
  <div>
    <div class="container">
      <form class="form-signin">

        <div v-if="state=='sign-in'">
          <h2 class="form-signin-heading">Please sign in</h2>
          <label for="username" class="sr-only">Email address</label>
          <input type="email" id="username" class="form-control" placeholder="Email address" required autofocus v-model="loginUsername" >
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="password" class="form-control" placeholder="password" required v-model="loginPassword">
          <div class="checkbox">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit" @click='loginClick'>Sign in</button>
        </div>
        <div v-if="state=='logged-in'">
          <button class="btn btn-lg btn-primary btn-block" type="submit" @click='logoutClick'>Sign out</button>
        </div>

        <div v-if="state=='buzy'" class="text-center">
          <loader width="30px" height="30px" border="6px" margin="0px"></loader>
        </div>

      </form>

    </div>
  </div>
</template>
<script>
  import {
    mapActions
  } from 'vuex'

  import {
    mapGetters
  } from 'vuex'

    import loader from './loader'


  export default {
    name: 'Login',
    components: {
      loader
    },
    data() {
      return {
        loginUsername: 'kai.rune@slettemoen.no',
        loginPassword: 'w%#653&puzSw5l31',
        state: 'sign-in'
      }
    },
    computed: {
      ...mapGetters([
          'username'
      ])
    },
    created: function () {
      var ctx = this
      this.state = 'buzy'

      this.getProfile().then((r) => {
        if (r != null) {
          ctx.storeUser({
            id: r.id,
            username: r.username,
            fullname: r.firstname + ' ' + r.lastname
          })
          ctx.state = 'logged-in'
        } else {
          ctx.state = 'sign-in'
        }
        //{"active":true,"company":"Penetrace AS","description":"Full name: Kai-Rune Slettemoen\nSenior system developer, worked with the Penetrace solution since 2008.","email":"kai.rune@slettemoen.no","firstname":"Kai-Rune","id":766,"lastname":"(Penetrace)","mobile":"004791577550","title":"Developer","username":"kai.rune@slettemoen.no","timestamp":636313953480404}
      })
    },    
    methods: {
          ...mapActions([
            'getProfile',
            'login',
            'logout',
            'storeUser'
          ]),

          logoutClick: function() {
            this.state = 'sign-in'
            this.logout()
          },

          loginClick: function() {
            var ctx = this
            this.state = 'buzy'

            this.login({ 
              username: this.loginUsername, 
              password: this.loginPassword, 
              rememberMe: this.rememberMe 
            })
            .then((r) => {
              console.log(r)
              ctx.state = 'logged-in'
            })
          }
        }
  }

</script>
<style scoped>
  body {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #eee;
  }

  .form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }

  .form-signin .form-signin-heading,
  .form-signin .checkbox {
    margin-bottom: 10px;
  }

  .form-signin .checkbox {
    font-weight: normal;
  }

  .form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }

  .form-signin .form-control:focus {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

</style>
