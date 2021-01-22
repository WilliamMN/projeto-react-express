import {api} from './utils'

export const postUsuarios = (body)=>()=>{
    const {email, password: senha} = body
     api.post('/login', {email, senha})
}

export const createUsuarios = (body)=>()=>{
    const {name: nome, email, password: senha} = body
    api.post('/signup', {nome, email, senha})
}

//contas
export const createContas = (body)=>()=>{
    api.post('/create', body)
}

export const deleteContas = (body)=>()=>{
    api.delete(`/delete/${body}`)
}

export const putContas = (body)=>()=>{
    console.log(body);
    api.put('/update', body)
}

export const getConta = (body)=>{
    return api.get(`/read/${body}`)
}

export const getContas = ()=>{
    return api.get(`/contas`)
}