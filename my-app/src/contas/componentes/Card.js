import { Descriptions } from 'antd';

const Card = ({ cpf, email, nome, endereco, telefone }) => {
    return (
        <Descriptions title={nome}>
            <Descriptions.Item label="Nome">{nome}</Descriptions.Item>
            <Descriptions.Item label="CPF">{cpf}</Descriptions.Item>
            <Descriptions.Item label="Telefone">{telefone}</Descriptions.Item>
            <Descriptions.Item label="Endereço">{endereco}</Descriptions.Item>
            <Descriptions.Item label="Email">{email}</Descriptions.Item>
        </Descriptions>
    )
}

export default Card