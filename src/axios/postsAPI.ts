import axios from 'axios';

const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})

export const getPosts = () => {
    return instance.get('posts')
}

export const getPostById = (id:number) => {
    return instance.get(`posts/${id}`)
}