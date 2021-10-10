<template>
  <div id="app">
    <div class="navbar">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/Busqueda">Búsquedas</router-link>
      |
      <router-link to="/Venta">Ventas</router-link>
      |
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}

.navbar {
  display: flex;
  background-color: #333;
  justify-content: center;
}
.navbar a {
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
}
.navbar a:hover {
  background-color: #ddd;
  color: black;
}
</style>
