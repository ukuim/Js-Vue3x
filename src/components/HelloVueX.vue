<template>
  <div>
   <button @click="getUser">hello VUEX  </button>
   <p>{{this.$store.state.user}}</p>
  </div>
</template>

<script>
export default {

  data () {
    return {
    
    }
  },
  methods:{
    getUser(){
      this.$store.dispatch('setUser', {
        name: '张三',
        age: 18
      })
    },
  }
}
</script>

<style scoped>

</style>
