<template>
    <br>
    <div class="container">

    <h2>Registro de Encomiendas</h2>
    <form @submit.prevent="agregarEncomienda()">
  <div class="form-group alin">
    <label for="inputCodigo">Codigo:</label>
    <input type="text" class="form-control " v-model="encomienda.codigo" >
    <label for="inputTipo">Tipo:</label>
    <input type="text" v-model="encomienda.tipo" class="form-control"  >
    <label for="inputPrecio">Precio:</label>
    <input type="text" v-model="encomienda.precio" class="form-control"  >
    <label for="inputDestinatario">Destinatario:</label>
    <input type="text" v-model="encomienda.destinatarioId" class="form-control"  >
    <br>
    <button type="submit" class="btn btn-primary m-2 ">Agregar</button>
    <button class="btn btn-danger m-2"><router-link to="/" class="sin">Cancelar</router-link></button>
</div>




  <br>
</form>
</div>
</template>

<script>
    export default{
        name: 'EncomiendasView',
        data(){
            return {
                encomienda:{
                    codigo:null,
                    tipo:null,
                    precio:null,
                    entregado:"false",
                    destinatarioId:null
                },
                encomiendas:{

                }
            }
        },
        methods:{
            agregarEncomienda(){
                axios
                ({
                    method: "post",
                    url: "http://localhost:3333/encomiendas",
                    data: this.encomienda
                })
                .then(response => {
                    console.log(response);
                    this.$router.push({name:'app'});
                    //this.tarea.titulo = null;
                    //this.getTareas();
                })
                .catch(e => console.log(e));
            },
        },
        computed:{
        },
        mounted(){
        },
        components:{
        }
    }
</script>

<style>
.alin{
    text-align: left;
}

.sin{
    color: white;
    text-decoration: none;
    
}
.sin:hover{
    background-color: transparent;
    color: white;
}
</style>