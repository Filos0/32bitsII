<template>
  <div id="Ventas">
    <h1 v-text="tituloEntrada"></h1>
    <h1>Juegos Baratos Disponibles</h1>
    <ul>
      <li v-for="(producto, clave) in productosBaratosDisponibles" :key="clave">
        <label v-text="producto.nombre"></label>
      </li>
    </ul>
    <hr />
    <h1>Búsqueda de juegos disponibles</h1>
    <input type="text" v-model="busquedaPorId" />
    <ul v-if="productoDisponiblePorId.length > 0">
      <li v-for="(producto, clave) in productoDisponiblePorId" :key="clave">
        <label v-text="producto.nombre"></label>
      </li>
    </ul>
  </div>
</template>

<script>
//aca traemos info del store con mapstate en vez de usar el this.$store.state.ocupado
import {mapState, mapGetters, mapMutations} from "vuex";
export default {
  data() {
    return {
      busquedaPorId: "",
    };
  },
  computed: {
    ...mapGetters(["productosConStock", "productosBaratosDisponibles"]),

    productoDisponiblePorId() {
      return this.$store.getters.productoDisponiblePorId(this.busquedaPorId);
    },

    ocupado() {
      console.log(this.$store.state.ocupado);
      let ocupado = this.$store.state.ocupado ? "Ocupado" : "Disponible";
      return `Estado : ${ocupado}`;
    },
    totalventas() {
      let eltotalventas = this.$store.state.totalventas;
      console.log(eltotalventas);
      return `Total Ventas: ${eltotalventas}`;
    },
  },
};
</script>

<style scoped>
#blog {
  background-color: green;
  color: white;
}
</style>
