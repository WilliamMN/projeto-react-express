import axios from 'axios'

const rootURL = "http://localhost:3003"

export const api = axios.create({
    baseURL: rootURL
})