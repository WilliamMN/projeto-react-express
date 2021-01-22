import { useState } from 'react'
import { postUsuarios } from '../../services'
import "./Login.css"
import 'antd/dist/antd.css';
import { Button, Input, Space } from 'antd';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="div-login" style={{ padding: 24, textAlign: 'center' }}>
            <Space direction="vertical" size={50}>
                <h1 className="titulo">Login</h1>
                <Space direction="vertical" size={25}>
                    <Space direction="vertical" size={10}>
                        <Input placeholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input.Password  placeholder={"Senha"} value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Space>
                    <Button onClick={postUsuarios({ email, password })} type="primary" block>Entrar</Button>
                </Space>
            </Space>
        </div>
    )
}

export default Login