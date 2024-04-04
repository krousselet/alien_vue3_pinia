<template>
  <Navbar></Navbar>
  <About></About>
</template>
<script>
import About from '@/components/About-component.vue'
import Navbar from '@/components/Navbar-component.vue'
export default {
  name: 'AboutView',
  components: {
    About,
    Navbar,
  }
}
</script>