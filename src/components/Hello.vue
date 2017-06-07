<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click='click'>1111</button>
  </div>
</template>
 
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Zack\'s Home ！'
    }
  },
  methods: {
    click () {
      window.xzywww = this
      this.$router.push('/table')
    }
  }
}
</script>
