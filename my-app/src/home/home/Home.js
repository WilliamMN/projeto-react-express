import Grafico from "../utils/Grafico"
import Card from '../../contas/componentes/Card'
import { useState, useEffect } from 'react'
import { getContas } from "../../services"
import { Layout, Menu, Breadcrumb } from 'antd';

import './Home.css'
const { Header, Sider, Content, Footer } = Layout

function Login() {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        getContas()
            .then((res) => {
                console.log(res.data);
                setUserData(res.data)
            })
    }, [])

    return (

        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Nova Conta</Menu.Item>
                    <Menu.Item key="3">Editar Conta</Menu.Item>
                    <Menu.Item key="4">Deletar Conta</Menu.Item>
                    <Menu.Item key="5">Pesquisar Conta</Menu.Item>
                </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <Grafico />
                     {
                         userData.map((card) => <Card key={card.idcontas} {...card} />)
                     }
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default Login