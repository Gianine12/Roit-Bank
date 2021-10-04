import axios from 'axios'

const apiCep = axios.create({
    baseURL:'https://viacep.com.br/ws/'
})

export default {
    consultacep() {
        return apiCep.get('33939106/json/')
    }
}