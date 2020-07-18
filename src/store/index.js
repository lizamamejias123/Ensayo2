import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
    state: {
        item: ['uf', 'utm', 'dolar', 'libra_cobre', 'euro', 'bitcoin'],
        input: '',
        lista: [],
    },
    mutations: {
        BUSQUEDA(state, valor) {
            this.input = valor
            state.item.forEach(element => {
                axios.get(`https://mindicador.cl/api/${element}/${this.input}`)
                    .then(res => {
                        if (res.data.serie.length == 1) { state.lista.push(res.data) }
                    })
            });
            console.log(state.lista)
        }
    },
    actions: {
        Busqueda(context, dispatch) {
            context.commit('BUSQUEDA', dispatch)
        }

    },
    modules: {},
    getters: {
        ListaConInformacion(state) { return state.lista }
    },
})