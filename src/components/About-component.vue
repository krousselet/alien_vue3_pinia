<template>
    <div>
        <div id="flashlight-overlay"></div>
        <img id="facehugger" :src="aboutStore.faceHuggerOne" alt="Facehugger">
    </div>
    <main id="about">
        <div id="title-container">
            <h2>{{ aboutStore.title }}</h2>
            <transition name="fade">
                <button v-if="!aboutStore.listVisible" @click="aboutStore.toggleList">Qui suis-je ?</button>
            </transition>
            <transition name="slide-fade">
                <ul v-if="aboutStore.listVisible">
                    <li v-for="(item, index) in aboutStore.listItems" :key="index">{{ item }}</li>
                </ul>
            </transition>
        </div>
    </main>
</template>

<script setup>
import { useAboutStore } from '@/stores/AboutStore';
const aboutStore = useAboutStore();
import { onMounted, onUnmounted } from 'vue';

// const facehuggerFrame = ref(1);

onMounted(() => {
  const overlay = document.getElementById('flashlight-overlay');
  const updateOverlay = (e) => {
    overlay.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent 100px, black 150px)`;
  };
  document.addEventListener('mousemove', updateOverlay);

  const facehugger = document.getElementById('facehugger');
  let facehuggerFrame = 1;
  
  // Random movement logic
  const moveFacehuggerRandomly = () => {
    // Randomize frame
    facehuggerFrame = facehuggerFrame === 1 ? 2 : 1;
    facehugger.src = aboutStore.getFaceHuggerImage(facehuggerFrame);

    // Get viewport dimensions
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    // Calculate random position
    const maxX = vw - facehugger.offsetWidth;
    const maxY = vh - facehugger.offsetHeight;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    // Update position
    facehugger.style.left = `${newX}px`;
    facehugger.style.top = `${newY}px`;
  };

  // Move randomly every 500 milliseconds (adjust as needed)
  const intervalId = setInterval(moveFacehuggerRandomly, 500);

  onUnmounted(() => {
    clearInterval(intervalId);
    document.removeEventListener('mousemove', updateOverlay);
  });
});
</script>

<style lang="scss" scoped>
#about {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    letter-spacing: 2px;

    #title-container {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* Slide-Fade Transition */
.slide-fade-enter-active {
    transition: all 0.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
}

body {
    overflow: hidden;
    margin: 0;
    height: 100vh;
    background-color: black;
}

#flashlight-overlay {
    @media (min-width: 991px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, transparent 100px, black 150px);
    pointer-events: none; /* Allows clicking through the overlay */
    z-index: 1000;
    }
    
}

#facehugger {
    position: absolute;
    width: 100px; /* Adjust size as needed */
    animation: crawl 10s infinite linear;
    z-index: 999;
    // background-color: white;
    // border-radius: 50%;
}

@keyframes crawl {
    0% { left: 0; top: 0; }
    25% { left: 25%; top: 10%; transform: rotate(45deg); }
    50% { left: 50%; top: 25%; transform: rotate(90deg); }
    75% { left: 75%; top: 10%; transform: rotate(145deg); }
    100% { left: 100%; top: 0; transform: rotate(360deg); }
}
</style>