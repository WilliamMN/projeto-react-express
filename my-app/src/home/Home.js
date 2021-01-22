import Grafico from "./Grafico"
import Card from '../contas/componentes/Card'
import { useState, useEffect } from 'react'
import { getContas } from "../services"

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
        <div className="teste">
            <Grafico />
            {
                userData.map((card) => <Card key={card.idcontas} {...card} />)
            }
        </div>
    )
}

export default Login