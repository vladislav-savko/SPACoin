import './index.scss'
import { createAPI } from '../../api'

import AddCoin from './AddCoin'
import TableCoins from '../TableCoins'

import { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        createAPI('v2/assets').fetch().then(resp => {
            setData(resp.data);
        });
    }, [setData]);

    return (
        <>
        <div className='home'>
            <div className='coins'>
                <TableCoins coins={data} />
            </div>
        </div>  

        <AddCoin />
      </>
    )
}

export default Home