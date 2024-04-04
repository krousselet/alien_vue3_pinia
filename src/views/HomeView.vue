<template>
  <Navbar></Navbar>
  <Home></Home>
</template>

<script>
import Home from '@/components/Home-component.vue'
import Navbar from '@/components/Navbar-component.vue'
export default {
  name: 'HomeView',
  components: {
    Home,
    Navbar,
  }
}
</script>
