<template>
    <br>
    <div class="container">

    <h2>Editar Encomiendas</h2>
    <form @submit.prevent="guardar()">
  <div class="form-group alin">
    <label for="inputCodigo">Codigo:</label>
    <input type="text" class="form-control " v-model="encomienda.codigo"  >
    <label for="inputTipo">Tipo:</label>
    <input type="text" v-model="encomienda.tipo" class="form-control" >
    <label for="inputPrecio">Precio:</label>
    <input type="text" v-model="encomienda.precio" class="form-control"  >
    <label for="inputDestinatario">Destinatario:</label>
    <input type="text" v-model="encomienda.destinatarioId" class="form-control"  >
    <button type="submit" class="btn btn-primary m-2 ">Guardar</button>
    <button class="btn btn-danger m-2">Cancelar</button>
</div>

  <br>
</form>
</div>
</template>

<script>
    export default{
        name: 'editarEncomiendaView',
        data(){
            return {
                encomienda:{
                    codigo:null,
                    tipo:null,
                    precio:null,
                    destinatarioId:null
                },
                encomiendas:{

                }
            }
        },
        methods:{
            getEncomienda(){
                axios
                ({
                    method: "get",
                    url: "http://localhost:3333/encomiendas/"+this.$route.params.id,
                    
                })
                .then(response => {
                    this.encomienda=response.data;
                    console.log(response);
                    
                })
                .catch(e => console.log(e));
            },
            guardar(){
                axios
                ({
                    method: "patch",
                    url: "http://localhost:3333/encomiendas/"+this.$route.params.id,
                    data:this.encomienda
                    
                })
                .then(response => {   
                    this.$store.state.mensaje = {
                        texto:"La encomienda se edito exitosamente",
                        tipo:"exito"
                    };
                    this.$store.dispatch('addMensajeAction');
                    this.$router.push({name:'app'});
                     
                })
                .catch(e => console.log(e));
            }
        },
        computed:{
        },
        mounted(){
            this.getEncomienda()
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