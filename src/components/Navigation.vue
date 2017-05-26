<template>
  <div>
    <div class="container">
      <button class="btn btn-primary" type="submit" @click='getNavigationClick'>Get Nav</button>
      <pre>{{ json }}</pre>
    </div>
  </div>
</template>
<script>
  import {
    mapActions
  } from 'vuex'

  export default {
    name: 'Navigation',
    components: {},
    data() {
      return {
        json: 'Test'
      }
    },
    methods: {
      ...mapActions([
        'getNavigation'
      ]),
      getNavigationClick: function () {
        var ctx = this
        this.getNavigation()
          .then((r) => {
            ctx.json = r
          })
      }
    }
  }

</script>
<style scoped>
</style>
