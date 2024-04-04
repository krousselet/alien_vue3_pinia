<template>
    <Navbar></Navbar>
    <Contact></Contact>
</template>
<script>
import Contact from '@/components/Contact-component.vue'
import Navbar from '@/components/Navbar-component.vue'
export default {
    name: 'AboutView',
    components: {
        Contact,
        Navbar,
    }
}
</script>