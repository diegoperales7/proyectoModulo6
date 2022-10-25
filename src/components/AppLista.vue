<template>
    <br>



<h2> Lista Encomiendas</h2>


<div class="container">
    <form action="">
        <div class="input-group">
            <input type="text" v-model="textoABuscarEncomienda" class="form-control"  placeholder="Buscar encomienda">
            <button class="btn btn-outline-secondary" @click.prevent="getEncomiendas()">Buscar</button>
    
        </div>
    </form>

    <div class="form-check form-switch alin">
            <input class="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked"
                :checked="$store.state.soloTerminado" v-on:input="$store.state.soloTerminado = $event.target.checked">
            <label class="form-check-label" for="flexSwitchCheckChecked">Mostrar solo Sobres
                {{$store.state.soloTerminado}}</label>
        </div>
<table class="table">
  <thead class="thead-dark">
    <tr >
      <th scope="col">Codigo</th>
      <th scope="col">Tipo</th>
      <th scope="col">Precio (Bs)</th>
      <th scope="col">Destinatario</th>
      <th scope="col"></th>    
      <th scope="col"></th>    
    </tr>
  </thead>
  <tbody>
    <tr v-for="(value,index) in encomiendas">
      <th >{{value.codigo}}</th>
      <td>{{value.tipo}}</td>
      <td>{{value.precio}}</td>
      <td>{{value.destinatarioId}}</td>
      <td><button type="button" class="btn btn-primary" @click="irAEncomienda('editar',value.id)">Editar</button></td>
      <td><button type="button" class="btn btn-danger" @click="irAEncomienda('eliminar',value.id)">Eliminar</button></td>
    </tr>
    
    
  </tbody>
</table>
<br>
<h2>Lista Destinatarios</h2>
<form action="">
        <div class="input-group">
            <input type="text" v-model="textoABuscarDestinatario" class="form-control" placeholder="Buscar Destinatarios">
            <button class="btn btn-outline-secondary" @click.prevent="getDestinatarios()">Buscar</button>
    
        </div>
    </form>
    <div class="form-check form-switch alin">
            <input class="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked"
                :checked="$store.state.soloTerminado" v-on:input="$store.state.soloTerminado = $event.target.checked">
            <label class="form-check-label" for="flexSwitchCheckChecked">Mostrar solo ciudad Cochabamba
                {{$store.state.soloTerminado}}</label>
        </div>
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">CI</th>
      <th scope="col">Nombre Completo</th>
      <th scope="col">Celular</th>
      <th scope="col">Direccion</th>
      <th scope="col">Ciudad</th>
      <th scope="col"></th>
      <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="(value) in destinatarios">
      <th>{{value.ci}}</th>
      <td>{{value.nombreCompleto}}</td>
      <td>{{value.celular}}</td>
      <td>{{value.direccion}}</td>
      <td>{{value.ciudad}}</td>
      <td><button type="button" class="btn btn-primary" @click="irADestinatario('editar',value.id)">Editar</button></td>
      <td><button type="button" class="btn btn-danger" @click="irADestinatario('eliminar',value.id)">Eliminar</button></td>
      
    </tr>
  </tbody>
</table>
</div>
</template>

<script>

    export default{
        name: 'appLista',
        data(){
            return {
                textoABuscarDestinatario:'',
                textoABuscarEncomienda:'',
                encomienda:{
                    codigo:null,
                    tipo:null,
                    precio:null,
                    destinatarioId:null
                },
                encomiendas:{

                },
                destinatario:{
                    ci:null,
                    nombreCompleto:null,
                    celular:null,
                    direccion:null,
                    ciudad:null
                },
                destinatarios:{

                }
            }
        },
        emits:['onAccion'],
        methods:{
            getEncomiendas(){
                axios
                ({
                    method: "get",
                    url: "http://localhost:3333/encomiendas/?q="+this.textoABuscarEncomienda
                })
                .then(response => {
                    this.encomiendas=response.data;
                    
                })
                .catch(e => console.log(e));
            },
            getDestinatarios(){
                axios
                ({
                    method: "get",
                    url: "http://localhost:3333/destinatarios/?q="+this.textoABuscarDestinatario
                })
                .then(response => {
                    this.destinatarios=response.data;
                    
                })
                .catch(e => console.log(e));
            },
            irAEncomienda(opcion,encomienda_id){
                if(opcion==='editar'){
                    this.$router.push({
                        name:'editarEncomiendaView',
                        params:{
                            id:encomienda_id
                        }
                    });
                }else{
                    
                    if (confirm("Esta seguro de eliminar encomienda"))
                    {
                        axios({
                        method: "delete",
                        url: "http://localhost:3333/encomiendas/"+encomienda_id
                        })
                        .then(response => {
                            this.getEncomiendas();
                            console.log(response);
                        })
                        .catch(e => console.log(e));
                    }
                    
                }
            },
            irADestinatario(opcion,destinatario_id){
                if(opcion==='editar'){
                    this.$router.push({
                        name:'editarDestinatarioView',
                        params:{
                            id:destinatario_id
                        }
                    });
                }else{
                    
                    if (confirm("Esta seguro de eliminar destinatario"))
                    {
                        axios({
                        method: "delete",
                        url: "http://localhost:3333/destinatarios/"+destinatario_id
                        })
                        .then(response => {
                            this.getDestinatarios();
                            console.log(response);
                        })
                        .catch(e => console.log(e));
                    }
                    
                }
            }
            
        },
        computed:{
            
        },
        mounted(){
            this.getEncomiendas(),
            this.getDestinatarios()
        },
        components:{
            
        }
    }
</script>

<style>
.alin{
    text-align: left;
}
</style>