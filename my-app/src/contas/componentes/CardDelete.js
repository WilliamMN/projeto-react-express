import { deleteContas } from '../../services'
import { Descriptions, Button, Layout } from 'antd';

const CardDelete = ({ idcontas, cpf, email, nome, endereco, telefone }) => {
    return (
        <Layout>
            <Descriptions title={nome}>
                <Descriptions.Item label="Nome">{nome}</Descriptions.Item>
                <Descriptions.Item label="CPF">{cpf}</Descriptions.Item>
                <Descriptions.Item label="Telefone">{telefone}</Descriptions.Item>
                <Descriptions.Item label="Endereço">{endereco}</Descriptions.Item>
                <Descriptions.Item label="Email">{email}</Descriptions.Item>
            </Descriptions>
            <Button danger onClick={deleteContas(idcontas)}>Excluir</Button>
        </Layout>
    )
}

export default CardDelete
