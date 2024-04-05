<template>
    <Navbar></Navbar>
    <Projects></Projects>
</template>

<script>
import Projects from '@/components/Projects-component.vue'
import Navbar from '@/components/Navbar-component.vue'
export default {
    name: 'ProjectsView',
    components: {
        Projects,
        Navbar,
    }
}
</script>