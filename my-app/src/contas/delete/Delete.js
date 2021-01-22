import { useState } from 'react'
import { getConta } from '../../services'
import { Link } from 'react-router-dom'
import { Input, Space, Layout, Menu, Breadcrumb } from 'antd';
import CardDelete from '../componentes/CardDelete'

const { Header, Sider, Content, Footer } = Layout
const { Search } = Input;

const Delete = () => {
    const [pesquisa, setPesquisa] = useState('')
    const [userData, setUserData] = useState(false)

    const onClick = () => {
        getConta(pesquisa)
            .then((res) => {
                setUserData(res.data)
                console.log(userData);
            })
    }
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['4']}>
                <Menu.Item  key="1"><Link to="/home">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/contas/create">Nova Conta</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/contas/edit">Editar Conta</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="#">Deletar Conta</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/contas/search">Pesquisar Conta</Link></Menu.Item>
                </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Contas</Breadcrumb.Item>
                    <Breadcrumb.Item>Deletar</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24 }}>
                <Space direction="vertical" size={60}>
                        <Space direction="vertical">
                            <Search value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="insira um cpf" allowClear enterButton="Search" size="large" onSearch={onClick} />
                        </Space>
                        {
                            userData ?
                                <CardDelete {...userData} /> : null
                        }
                    </Space>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default Delete