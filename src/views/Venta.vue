<template>
  <div id="busqueda">
    <h1>Juegos Disponibles</h1>
    <ul>
      <li
        v-for="(producto, clave) in productosConStock"
        :key="clave"
        :style="{backgroundColor: producto.color}"
      >
        <label>
          {{ producto.id }} | {{ producto.nombre }} | stock:
          {{ producto.stock }} | {{ producto.precio }}
        </label>
        <input type="button" value="+" @click="agregarStock(producto)" />
        <input type="button" value="-" @click="disminuirventas(producto)" />
        <input type="button" value="Vender" @click="vender(producto)" />
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from "vuex";
export default {
  data() {
    return {
      busquedaPorId: "",
    };
  },

  methods: {
    ...mapMutations(["modificarOcupado", "agregarStock"]),
    modificarOcupado() {
      this.$store.dispatch("modificarOcupado");
    },
    vender(producto) {
      this.$store.dispatch("vender", producto);
    },

    disminuirventas(producto) {
      this.$store.commit("restarStock", producto);
    },
  },
  computed: {
    ...mapGetters(["productosConStock"]),

    totalventas() {
      let eltotalventas = this.$store.state.totalventas;
      console.log(eltotalventas);
      return `Total Ventas: ${eltotalventas}`;
    },
  },
};
</script>
