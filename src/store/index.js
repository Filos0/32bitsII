import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ocupado: false,
    totalventas: 0,
    productos: [
      {
        id: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 25000,
        color: "red",
        destacado: "true",
      },
      {
        id: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 15000,
        color: "blue",
        destacado: "true",
      },
      {
        id: "0003",
        nombre: "GW 4",
        stock: 100,
        precio: 35000,
        color: "green",
        destacado: "true",
      },
      {
        id: "0004",
        nombre: "Mario tennis Aces",
        stock: 100,
        precio: 990,
        color: "yellow",
        destacado: "true",
      },
      {
        id: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: "true",
      },
      {
        id: "0006",
        nombre: "Forza Horizon",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: "true",
      },
    ],
    titulo: "32 bits",
    subtitulo: "Juegos de PC y consolas",
  },
  getters: {
    productosConStock: (state) => {
      return state.productos.filter((producto) => {
        return producto.stock > 0;
      });
    },
    productosBaratosDisponibles: (state, getters) => {
      return getters.productosConStock.filter((producto) => {
        return producto.precio < 1000;
      });
    },
    productoDisponiblePorId: (state, getters) => (id) => {
      return getters.productosConStock.filter((producto) => {
        return producto.id == id;
      });
    },
  },

  mutations: {
    modificarOcupado: (state) => {
      state.ocupado = !state.ocupado;
    }, //modificar estado ocupado en About page
    agregarStock: (state, producto) => {
      state.productos.map((p) => {
        if (p.id == producto.id) p.stock++;
      });
    },
    restarStock: (state, producto) => {
      state.productos.map((p) => {
        if (p.id == producto.id) p.stock--;
      });
    },
    venderProducto(state, producto) {
      state.productos.forEach((p) => {
        if (p.id == producto.id && p.stock > 0) {
          p.stock--;
        }
      });
    },
    actualizarTotal(state, producto) {
      state.totalVentas += producto.precio;
    },
  },
  actions: {
    modificarOcupado({commit}) {
      commit("modificarOcupado");
    },

    async vender({commit, state, dispatch}, producto) {
      await dispatch("procesarVenta", producto)
        .then(() => {
          alert("Venta procesada exitosamente");
        })
        .catch(() => {
          alert("Venta rechazada. No hay stock o el producto no existe");
        });
      dispatch("actualizarTotal", producto);
    },
    async procesarVenta({commit, state}, producto) {
      return new Promise((resolve, reject) => {
        let tiempoEjecucion = Math.floor(Math.random() * 2000 + 1);
        setTimeout(() => {
          let resultado = false;
          state.productos.forEach((p) => {
            if (p.id == producto.id && p.stock > 0) {
              commit("venderProducto", producto);
              resultado = true;
            }
          });
          if (resultado) resolve();
          else reject();
        }, tiempoEjecucion);
      });
    },
    actualizarTotal({commit}, producto) {
      return new Promise((resolve, reject) => {
        let tiempoEjecucion = Math.floor(Math.random() * 3000 + 1);
        setTimeout(() => {
          commit("actualizarTotal", producto);
        }, tiempoEjecucion);
      });
    },
  },
  modules: {},
});
