import { useState } from 'react'
import { putContas } from '../../services'
import { Descriptions, Button, Layout, Input } from 'antd';

const CardEdit = (props) => {
    const [idcontas, setIdContas] = useState(props.idcontas)
    const [cpf, setCpf] = useState(props.cpf)
    const [email, setEmail] = useState(props.email)
    const [nome, setNome] = useState(props.nome)
    const [endereco, setEndereco] = useState(props.endereco)
    const [telefone, setTelefone] = useState(props.telefone)
    return (
        <Layout>
        <Descriptions title={nome}>
            <Descriptions.Item label="Nome"><Input  placeholder={"Nome"} value={nome} onChange={(e) => setNome(e.target.value)} /></Descriptions.Item>
            <Descriptions.Item label="CPF"><Input  placeholder={"CPF"} value={cpf} onChange={(e) => setCpf(e.target.value)} /></Descriptions.Item>
            <Descriptions.Item label="Telefone"><Input  placeholder={"Telefone"} value={telefone} onChange={(e) => setTelefone(e.target.value)} /></Descriptions.Item>
            <Descriptions.Item label="Endereço"><Input  placeholder={"Endereço"} value={endereco} onChange={(e) => setEndereco(e.target.value)} /></Descriptions.Item>
            <Descriptions.Item label="Email"><Input  placeholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} /></Descriptions.Item>
        </Descriptions>
        <Button type="primary" onClick={putContas({ idcontas, nome, email, cpf, endereco, telefone })}>Excluir</Button>
    </Layout>
    )
}

export default CardEdit