<template>
    <div>
<table class="table container">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Valor</th>
      <th scope="col">Fecha</th>
      <th scope="col">Valor en Pesos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{result.uf.nombre}} </td>
      <td>{{result.uf.valor}} {{result.uf.unidad_medida}}</td>
      <td>{{result.uf.fecha}}</td>
      <td>{{result.uf.valor}}</td>
    </tr>
    <tr>
      <td>{{result.utm.nombre}} </td>
      <td>{{result.utm.valor}} {{result.utm.unidad_medida}}</td>
      <td>{{result.utm.fecha}}</td>
      <td>{{result.utm.valor}}</td>
    </tr>
    <tr>
      <td>{{result.dolar.nombre}} </td>
      <td>{{result.dolar.valor}} {{result.dolar.unidad_medida}}</td>
      <td>{{result.dolar.fecha}}</td>
      <td>{{result.dolar.valor}}</td>
    </tr>
    <tr>
      <td>{{result.euro.nombre}} </td>
      <td>{{result.euro.valor}} {{result.euro.unidad_medida}}</td>
      <td>{{result.euro.fecha}}</td>
      <td>{{result.euro.valor}}</td>
    </tr>
    <tr>
      <td>{{result.libra_cobre.nombre}} </td>
      <td>{{result.libra_cobre.valor}} {{result.libra_cobre.unidad_medida}}</td>
      <td>{{result.libra_cobre.fecha}}</td>
      <td>{{result.libra_cobre.valor*result.dolar.valor}}</td>
    </tr>
    <tr>
      <td>{{result.bitcoin.nombre}} </td>
      <td>{{result.bitcoin.valor}} {{result.bitcoin.unidad_medida}}</td>
      <td>{{result.bitcoin.fecha}}</td>
      <td>{{result.bitcoin.valor*result.dolar.valor}}</td>
    </tr>
  
    
  </tbody>
</table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
          result:''
        }
    },
    created() {
        axios.get('https://mindicador.cl/api')
        .then((result) => {
      this.result = result.data});
    },
    
}
</script>