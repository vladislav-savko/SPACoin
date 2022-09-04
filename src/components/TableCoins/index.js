import './index.scss'
import { getImage } from '../../api'
import { useNavigate } from 'react-router-dom'

const TableCoins = (ctx) => {
    let navigate = useNavigate()

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
                        <tr key={coin.rank} onClick={(e) => { ctx.coins.length > 1 ? navigate('/coin/' + coin.id) : e.preventDefault() } }>
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
                                {/* <Button textButton="+" onClick={() => setAddCoinActive(true)} />
                                <Button textButton="i" /> */}
                            </th>
                        </tr>
                    )     
                }
            </tbody>
        </table>
        </>
    )
}

export default TableCoins