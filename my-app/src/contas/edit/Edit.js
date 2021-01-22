import { useState } from 'react'
import { getConta } from '../../services'
import { Link } from 'react-router-dom'
import { Input, Space, Layout, Menu, Breadcrumb } from 'antd';
import CardEdit from '../componentes/CardEdit'

const { Header, Content, Footer } = Layout
const { Search } = Input;

const Edit = () => {
    const [pesquisa, setPesquisa] = useState('')
    const [userData, setUserData] = useState(false)

    const onClick = () => {
        getConta(pesquisa)
            .then((res) => {
                setUserData(res.data)
            })
    }
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
                    <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/contas/create">Nova Conta</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="#">Editar Conta</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/contas/delete">Deletar Conta</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/contas/search">Pesquisar Conta</Link></Menu.Item>
                </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Contas</Breadcrumb.Item>
                    <Breadcrumb.Item>Edit</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24 }}>
                    <Space direction="vertical" size={60}>
                        <Space direction="vertical">
                            <Search value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="insira um cpf" allowClear enterButton="Search" size="large" onSearch={onClick} />
                        </Space>
                        {
                            userData ?
                                <CardEdit {...userData} /> : null
                        }
                    </Space>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default Edit