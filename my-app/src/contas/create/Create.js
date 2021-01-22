import { useState } from 'react'
import { createContas } from '../../services'
import { Button, Input, Space } from 'antd';

import 'antd/dist/antd.css';

import './Create.css'

function Create() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [nomecompleto, setNomeCompleto] = useState(`${nome} ${sobrenome}`)
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [endereco, setEndereco] = useState('')
    const [telefone, setTelefone] = useState('')
    return (
        <div className="div-contas-create">
            <Space direction={"vertical"}>
                <Space>
                    <Input placeholder={"Nome"} value={nome} onChange={(e) => setNome(e.target.value)} />
                    <Input placeholder={"Sobrenome"} value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                </Space>
                <Input placeholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder={"Endereço"} value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                <Space>
                    <Input placeholder={"Cpf"} value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    <Input placeholder={"Telefone"} value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </Space>
                <Button type="primary" block onClick={createContas({ nomecompleto, email, cpf, endereco, telefone })} >Criar</Button>
            </Space>
        </div>
    )
}

export default Create