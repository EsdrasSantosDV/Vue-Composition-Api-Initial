import axios from 'axios'
//TEMOS O HTTPCLIENT, MAS USANDO AXIOS
//TEMOS A PARTE DA AUTNENTICAÇÃO E POODEMO COLOCAR VARIAS COISAS
const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
//SERIA OS METODOS HTTP, E BEM COMPLETA ESSA LIB

export default {
    getEvents() {
        return apiClient.get('/events')
    }
}
