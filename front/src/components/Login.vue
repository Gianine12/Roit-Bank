<template>
    <div>
        <h1>Login</h1>

        <form @submit.prevent='setUser()'>
            <div>
                <input required type='text' placeholder="Email" v-model="formulario.email"/>
            </div>

            <div>
                <input required type='password' placeholder="Senha" v-model="formulario.password"/>
            </div>

            <div>
                <button>Logar</button>
            </div>
        </form>
    </div>
    
</template>

<script>
export default{
    data:() => ({
        formulario: {
            email: '',
            password:''
        }
    }),

    methods: {        
        setUser () {
            this.$store.dispatch('setUser', this.formulario)
        }
    },

    computed:{

    }

}
</script>

<style scoped>

</style>
