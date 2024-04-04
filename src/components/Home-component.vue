<template>
    <div class="row-12">
        <div class="col-12">
            <main class="d-flex align-items-center justify-content-center text-center">
                <div class="position-absolute top-0 start-0 w-100 h-100">
                    <img :src="homeStore.emptySpaceDesktop" alt="image de l'espace xénomorphe"
                        class="img-fluid w-100 h-100" style="object-fit: cover;">
                </div>
                <div class="position-absolute top-50 start-50 catch">
                    <p class="text-white" style="z-index: 1;">{{ homeStore.catch }}</p>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { useHomeStore } from '@/stores/HomeStore';
const homeStore = useHomeStore();
</script>
<style scoped>
html,
body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

p {
    color: lime !important;
}

.catch {
    transform: translate(-50%) !important;
    font-size: 32px;
    width: 100% !important;
    letter-spacing: 3px;
}
</style>