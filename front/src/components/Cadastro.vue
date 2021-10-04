import axios from 'axios';
<template>
    <div class="box">
        <h3>{{ titulo }}</h3>
        <hr>

        <form :key="form">
            <div class="min-plus-text">
                <label>ID</label> <br>
                <input v-model="item.id" type="text" placeholder="Digite um ID" />
            </div>

            <div class="long-text">
                <label>Nome</label> <br>
                <input required @blur="pesqGitHub(item.nome)" v-model="item.nome" type="text" placeholder="Digite um Nome" />
            </div>

            <div  class="min-plus-text">
                <label>Idade</label> <br>
                <input required v-model="item.idade" type="number" placeholder="0" />
            </div>

            <div :key="github" class="long-text">
                <label>GitHub User</label> <br>
                <input required v-model="item.userGit" type="text" placeholder="Usuário do GitHub" />
            </div>

            <div class="min-text">
                <label>CEP</label> <br>
                <input required  @blur="pesquisaCep(item.cep)" v-model="item.cep" type="number" placeholder="00.000-000" />
            </div>

            <div class="min-text">
                <label>Estado</label> <br>
                <select v-model="item.estado">
                    <option values='AC' >AC</option>
                    <option values='AL' >AL</option>
                    <option values='AP' >AP</option>
                    <option values='AM' >AM</option>
                    <option values='BA' >BA</option>
                    <option values='CE' >CE</option>
                    <option values='GO' >GO</option>
                    <option values='MA' >MA</option>
                    <option values='MT' >MT</option>
                    <option values='MS' >MS</option> 
                    <option values='MG' >MG</option>
                    <option values='PA' >PA</option>
                    <option values='PB' >PB</option>
                    <option values='PR' >PR</option>
                    <option values='PI' >PI</option>
                    <option values='RJ' >RJ</option>
                    <option values='RN' >RN</option>
                    <option values='RS' >RS</option>
                    <option values='RO' >RO</option>
                    <option values='RR' >RR</option>
                    <option values='SC' >SC</option>
                    <option values='SP' >SP</option>
                    <option values='SE' >SE</option>
                    <option values='TO' >TO</option>
                    <option values='DF' >DF</option>
                </select>
                <!-- <input v-model="item.estado" type="text" placeholder="---" /> -->
            </div>

            <div class="mediun-min-text">
                <label>Cidade</label> <br>
                <input v-model="item.cidade" type="text" placeholder="Selecione a cidade" />
            </div>

            <div class="mediun-min-text">
                <label>Bairro</label> <br>
                <input v-model="item.bairro" type="text" placeholder="Selecione o Bairro" />
            </div>

            <div class="mediun-text">
                <label>Rua</label> <br>
                <input v-model="item.rua" type="text" placeholder="Jardinete Juventina" />
            </div>


            <div class="min-text">
                <label>Numero</label> <br>
                <input required v-model="item.number" type="tel" placeholder="---"/>
            </div>


            <div class="mediun-text">
                <label>Complemento</label> <br>
                <input v-model="item.complemento" type="text" placeholder="Ex. casa 01, Ap 20/Bl 01" />
            </div>

            <hr>

            <div>
                <button @click="close()">Cancelar</button>
                <button @submit.prevent="addItem(item)"> Salvar</button>
            </div>
        </form>
        
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';

export default{
    name: 'Cadastro',
    
    data(){
        return{
            form: 0,
            item: {
                nome: '',
            },
            github: 0,
        }
    }, 

    methods:{
        close(){
            this.$store.dispatch('setModalVisible', false)
        },

        addItem(item){
            this.$store.dispatch('addList', item)
            this.$store.dispatch('setModalVisible', false)
        },

        pesqGitHub(nome){
            const response = 
                axios.get(`https://api.github.com/search/users?q=${nome}`)
                .then( (response) => {

                    this.item.id = response.data.items[1].id;
                    this.item.userGit = response.data.items[1].login;
                    this.form += 1
                })
                .catch( (error) => {
                    console.log(error[1])
                })
        },

        pesquisaCep(cep){
            const response = 
                axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then( (response) => {
                    this.item.rua = response.data.logradouro;
                    this.item.bairro = response.data.bairro;
                    this.item.cidade = response.data.localidade;
                    this.item.estado = response.data.uf;
                    this.item.complemento = response.data.complemento;
                    
                    this.form +=1
                })
                .catch( (error) => {
                    console.log(error[1])
                })
                
        }
    },

    computed:{
        list(){
            return this.$store.state.list;
        },
        titulo() {
            return this.$store.state.title;
        },
        estados(){
            return this.$store.state.estado
        }
    }
}


</script>

<style scoped >

h3{
    text-align:start;
}

.box{
    text-align:right;
    max-width:680px;
    max-height:470;

    margin: 0 auto;

    border: 1px solid black;
    border-radius: 10px;
    padding: 0 20px;
}

form{
    display: flex;
    flex-wrap: wrap;
}

input{
    width: 100%;
    border:1px solid #DFE3E6;
    border-radius: 4px;
    opacity:1;
    padding: 5px;
}

select{
    width: 100%;
    border:1px solid #DFE3E6;
    border-radius: 4px;
    opacity:1;
    padding: 5px;
}

option{
    text-align: center;
}

.long-text{
    text-align:start;
    width: 490px;
    margin:10px 18px 10px 0px;
}

.min-plus-text{
    text-align:start;
    width:152px;
    margin:10px 18px 10px 0px;
}

.min-text{
    text-align:start;
    width: 98px;
    margin:10px 18px 10px 0px;
}

.mediun-min-text{
    text-align:start;
    width: 206px;
    margin:10px 18px 10px 0px;
}

.mediun-text{
    text-align:start;
    width: 263px;
    margin:10px 18px 10px 0px;
}

button{
    margin:5px 10px 15px 5px;
    height:40px;
    border: 1px solid #E2B874;
    border-radius: 5px;
    font-weight: 900;
    background: #ffffff;
    color:#E2B874;
    
}

button:hover{
    font-weight: 900;
    background:#E2B874;
    color: #ffffff;
}

hr{
    width: 98%;
}

</style>
