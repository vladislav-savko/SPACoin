import './index.scss'
import { getImage } from '../../api'

const TableCoins = (coins) => {
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
                    coins.coins.map((coin) => 
                        <tr>
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
                            <th>{new Intl.NumberFormat('eng-US', { style: 'percent', compactDisplay: 'short' }).format(coin.changePercent24Hr)}</th>
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