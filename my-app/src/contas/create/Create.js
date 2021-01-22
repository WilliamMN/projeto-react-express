import { useState } from 'react'
import { createContas } from '../../services'
import { Link } from 'react-router-dom'
import { Button, Input, Space, Layout, Menu, Breadcrumb, Row, Col } from 'antd'

import './Create.css'

const { Header, Content, Footer } = Layout

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

            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="#">Nova Conta</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/contas/edit">Editar Conta</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/contas/delete">Deletar Conta</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/contas/search">Pesquisar Conta</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Conta</Breadcrumb.Item>
                        <Breadcrumb.Item>Criar</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24 }}>
                        <Row>
                            <Col span={12}>
                                <Input placeholder={"Nome"} value={nome} onChange={(e) => setNome(e.target.value)} />
                            </Col>
                            <Col span={12}>
                                <Input placeholder={"Sobrenome"} value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                            </Col>
                        </Row>

                        <Input placeholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input placeholder={"Endereço"} value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                        <Row>
                            <Col span={12}>
                                <Input placeholder={"Cpf"} value={cpf} onChange={(e) => setCpf(e.target.value)} />
                            </Col>
                            <Col span={12}>
                                <Input placeholder={"Telefone"} value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                            </Col>
                        </Row>
                        <Button type="primary" block onClick={createContas({ nomecompleto, email, cpf, endereco, telefone })} >Criar</Button>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>


        </div>
    )
}

export default Create