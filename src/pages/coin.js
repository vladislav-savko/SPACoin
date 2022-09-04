import { useParams } from 'react-router-dom'
import Coin from '../components/Coin'

const CoinInfo = () => {

    let { id } = useParams();

    return (
        <Coin id={id}/>
    )
}

export default CoinInfo