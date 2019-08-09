import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://sadwich-app.firebaseio.com/',
})

export default instance