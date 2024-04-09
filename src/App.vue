<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// GENERAL

a {
  color: rgba(0, 255, 0, 0.589) !important;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  @media (min-width: 991px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 100%;
      width: 0;
      height: 2px;
      background: lime;
      z-index: 25;
      transition: width .3s ease-in-out;
    }
  }

  &:hover::before {
    width: 100%;
  }
}


body {
  background: rgba(0, 0, 0, 0.904);
}


* {
  font-family: "Orbitron", sans-serif;
}

</style>
