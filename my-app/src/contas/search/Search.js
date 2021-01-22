import { useState } from 'react'
import { getConta } from '../../services'
import { Input, Space } from 'antd';

import Card from '../componentes/Card'

import './Search.css'

const { Search } = Input;

const Pesquisa = () => {
    const [pesquisa, setPesquisa] = useState('')
    const [userData, setUserData] = useState(false)

    const onClick = () => {
        getConta(pesquisa)
            .then((res) => {
                setUserData(res.data)
            })
    }
    return (
        <div>
            <Space direction="vertical">
                <Search value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="insira um cpf" allowClear enterButton="Search" size="large" onSearch={onClick} />
            </Space>
            {
                userData ?
                <div className="div-contas-search" style={{ padding: 24, textAlign: 'center' }}><Card {...userData} /></div>: null  
            }
        </div>
    )
}

export default Pesquisa