<template>
    <div>
      <FooterGuide v-show="$route.meta.showfooter"></FooterGuide>
      <router-view></router-view>
    </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
    mounted(){
      // this.$store.dispatch('getAddress')
      this.getAddress()
      this.getUserInfo()
    },

    data () {
      return {}
    },
    methods: {
      ...mapActions(['getAddress','getUserInfo'])
    },
    computed: {},
    components: {
      FooterGuide
    }
  }
</script>
<style>

</style>
