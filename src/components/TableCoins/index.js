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
        <table id='coins'>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>VWAP (24Hr)</th>
                    <th>Supply</th>
                    <th>Volume (24Hr)</th>
                    <th>Change (24Hr)</th>
                    <th>Event</th>
                </tr>
            </thead>
            <tbody>
                {
                    ctx.coins.map((coin) => 
                        <tr key={coin.rank} onClick={(e) => { ctx.coins.length > 1 && e.target.type != 'button' ?  navigate('/coin/' + coin.id) : e.preventDefault() } }>
                            <th>{coin.rank}</th>
                            <th>
                                <img src={getImage(coin.symbol)} />

                                {coin.name}
                            </th>
                            <th>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(coin.priceUsd)}</th>
                            <th>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(coin.marketCapUsd)}</th>
                            <th>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(coin.vwap24Hr)}</th>
                            <th>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(coin.supply)}</th>
                            <th>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(coin.volumeUsd24Hr)}</th>
                            <th>{new Intl.NumberFormat('eng-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(coin.changePercent24Hr/100)}</th>
                            <th>
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