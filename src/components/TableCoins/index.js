import './index.scss'
import { getImage } from '../../api'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import AddCoin from '../AddCoin'

import { useState } from 'react'

const TableCoins = (ctx) => {
    let navigate = useNavigate()

    const [addCoinActive, setAddCoinActive] = useState(false)
    const [addCoin, setAddCoin] = useState()
    const [coinPrice, setCoinPrice] = useState()
    const [coinSymbol, setCoinSymbol] = useState()

    const activeAddCoin = ([coinId, coinPrice, coinSymbol]) => {
        setAddCoinActive(true);
        setAddCoin(coinId);
        setCoinPrice(coinPrice);
        setCoinSymbol(coinSymbol);
    }

    return (
        <>
        <table className='table-coins'>
            <thead className='table-coins__head'>
                <tr className='table-coins__row--head'>
                    <th className='table-coins__col'>Rank</th>
                    <th className='table-coins__col'>Name</th>
                    <th className='table-coins__col'>Price</th>
                    <th className='table-coins__col'>Market Cap</th>
                    <th className='table-coins__col'>VWAP (24Hr)</th>
                    <th className='table-coins__col'>Supply</th>
                    <th className='table-coins__col'>Volume (24Hr)</th>
                    <th className='table-coins__col'>Change (24Hr)</th>
                    <th className='table-coins__col'>Event</th>
                </tr>
            </thead>
            <tbody className='table-coins__body'>
                {
                    ctx.coins.map((coin) => 
                        <tr className='table-coins__row--body' key={coin.rank} onClick={(e) => { ctx.coins.length > 1 && e.target.type != 'button' ?  navigate('/coin/' + coin.id) : e.preventDefault() } }>
                            <th className='table-coins__col'>{coin.rank}</th>
                            <th className='table-coins__col'>
                                <img className='table-coins__avatar' src={getImage(coin.symbol)} />
                                {coin.name}
                            </th>
                            <th className='table-coins__col'>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(coin.priceUsd)}</th>
                            <th className='table-coins__col'>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(coin.marketCapUsd)}</th>
                            <th className='table-coins__col'>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(coin.vwap24Hr)}</th>
                            <th className='table-coins__col'>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(coin.supply)}</th>
                            <th className='table-coins__col'>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(coin.volumeUsd24Hr)}</th>
                            <th className='table-coins__col'>{new Intl.NumberFormat('eng-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(coin.changePercent24Hr/100)}</th>
                            <th className='table-coins__col'>
                                <Button textButton="+" event={ activeAddCoin } params={ [coin.id, coin.priceUsd, coin.symbol] } />
                            </th>
                        </tr>
                    )     
                }
            </tbody>
        </table>
        <AddCoin active={addCoinActive} setActive={setAddCoinActive} coinId={addCoin} coinPrice={coinPrice} coinSymbol={coinSymbol}/>
        </>
    )
}

export default TableCoins