import { useState } from 'react'
import { createUsuarios } from '../../services'

import "./Signup.css"
import 'antd/dist/antd.css';
import { Button, Input, Space } from 'antd';

function Cadastro() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    return (
        // <div>
        //     <input value={email} onChange={(e) => setEmail(e.target.value)} />
        //     <input value={password} onChange={(e) => setPassword(e.target.value)} />
        //     <input value={name} onChange={(e) => setName(e.target.value)} />
        //     <button onClick={createUsuarios({ name, email, password })}>cadastrar</button>
        // </div>

        <div className="div-login" style={{ padding: 24, textAlign: 'center' }}>
            <Space direction="vertical" size={50}>
                <h1 className="titulo">Cadastro</h1>
                <Space direction="vertical" size={25}>
                    <Space direction="vertical" size={10}>
                        <Input placeholder={"Seu Nome"} value={name} onChange={(e) => setName(e.target.value)} />
                        <Input placeholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input.Password placeholder={"Senha"} value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Space>
                    <Button onClick={createUsuarios({ email, password })} type="primary" block>Cadastrar</Button>
                </Space>
            </Space>
        </div>
    )
}

export default Cadastro