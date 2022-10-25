<template>
    <br>
    <div class="container">

    <h2>Registro de Destinatarios</h2>
    <form @submit.prevent="agregarDestinatario()">
  <div class="form-group alin">
    <label for="inputci">CI:</label>
    <input type="text" class="form-control " v-model="destinatario.ci" id="inputci" aria-describedby="emailHelp" >
    <label for="inputNombreCompleto">Nombre Completo:</label>
    <input type="text" v-model="destinatario.nombreCompleto" class="form-control" id="inputNombreCompleto" >
    <label for="inputCelular">Celular:</label>
    <input type="text" v-model="destinatario.celular" class="form-control" id="inputCelular" >
    <label for="inputDireccion">Dirección:</label>
    <input type="text" v-model="destinatario.direccion" class="form-control" id="inputDireccion" >
    <label for="inputCiudad">Ciudad:</label>
    <input type="text" v-model="destinatario.ciudad" class="form-control" id="inputCiudad" >
    <br>
    <button type="submit" class="btn btn-primary m-2 ">Agregar</button>
    <button class="btn btn-danger m-2"><router-link to="/" class="sin">Cancelar</router-link> </button>
</div>

  <br>
</form>
</div>
</template>

<script>
    export default{
        name: 'DestinatariosView',
        data(){
            return {
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
        methods:{
            agregarDestinatario(){
                axios
                ({
                    method: "post",
                    url: "http://localhost:3333/destinatarios",
                    data: this.destinatario
                })
                .then(response => {
                    //console.log(response);
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