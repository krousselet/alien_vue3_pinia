<template>
    <swiper :slidesPerView="1" :breakpoints="{
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
    }" navigation pagination>
        <swiper-slide v-for="(project, projectIndex) in projectsStore.projects" :key="projectIndex">
            <img :src="project" alt="">
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { useProjectsStore } from '@/stores/ProjectsStore';
const projectsStore = useProjectsStore();
</script>

<script>
// Importing Swiper Vue components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
    components: {
        Swiper,
        SwiperSlide
    }
}
</script>