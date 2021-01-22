import { useState } from 'react'
import { getConta } from '../../services'
import { Input, Space } from 'antd';

import CardDelete from '../componentes/CardDelete'

import './Delete.css'

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
        <div>
            <Space direction="vertical">
                <Search value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="insira um cpf" allowClear enterButton="Search" size="large" onSearch={onClick} />
            </Space>
            {
                userData?
                <div className="div-contas-search" style={{ padding: 24, textAlign: 'center' }}><CardDelete {...userData}/></div>: null  
            }
        </div>
    )
}

export default Delete