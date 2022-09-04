import './index.scss'
import ChartCoin from '../ChartCoin'
import TableCoins from '../TableCoins'
import { useEffect, useState } from 'react'
import { createAPI } from '../../api'

const Coin = (ctx) => {
    const [dataCoin, setDataCoin] = useState([]);
    const [dataHystory, setDataHystory] = useState([]);

    useEffect(() => {
        createAPI('v2/assets/').fetchById(ctx.id).then(resp => {
            setDataCoin(_data => [..._data, resp.data]);
        });
    }, [setDataCoin]);

    useEffect(() => {
        createAPI('v2/assets/').fetchByIdHystory(ctx.id).then(resp => {
            setDataHystory(resp.data);
        });
    }, [setDataHystory]);

    if (dataCoin.length > 1)
        dataCoin.length = 1

    return (
        <>
        <div className='coinInfo'>
            <TableCoins coins={ dataCoin } />

            <ChartCoin hysory={ dataHystory }/>
        </div>  
      </>
    )
}

export default Coin