<template>
    <div>
      <input type="text" placeholder="DD-MM-AAAA" v-model="input" class="p-3 m-4"> 
      <button class="primary" @click="Busqueda">Buscar</button> 
<table class="table container" v-for="(item,index) in InformacionExtraida" :key="index">
<thead >
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Fecha</th>
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{item.nombre}}</td>
      <td>{{new Date(item.serie[0].fecha).getDate()}} - {{new Date(item.serie[0].fecha).getMonth()+1}} - {{new Date(item.serie[0].fecha).getFullYear()}}</td>
      <td>{{item.serie[0].valor}}</td>
    </tr>
  </tbody>
</table>
    </div>
</template>
<script>
import router from "../router"
import store from '../store/index'
import axios from 'axios'
export default {
    data() {
        return {
            input:'',
        }
    },
    methods: {
        Busqueda(){
        store.dispatch('Busqueda',this.input)
        
    }
    },
    computed: {
        InformacionExtraida(){
        return store.getters.ListaConInformacion
      
        }
    },
}
</script>