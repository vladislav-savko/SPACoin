import './index.scss'
import btcpng from '../../assets/images/btc.png'
import AddCoin from './AddCoin'
import { useState } from 'react'

const Home = () => {
    const [addCoinActive, setAddCoinActive] = useState (false);

    return (
        <>
        <div className='home'>
            <div className='coins'>
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
                        <tr>
                            <th>1</th>
                            <th>
                                <img src={btcpng} />

                                Bitcoin
                            </th>
                            <th>$19,939.91</th>
                            <th>$381.93b</th>
                            <th>$381.93b</th>
                            <th>19.14m</th>
                            <th>$11.52b</th>
                            <th>-1.50%</th>
                            <th>
                                <div className='button-add-coin' onClick={() => setAddCoinActive(true)}>+</div>
                                <div className='button-info-coin'>i</div>
                            </th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <th>
                                <img src={btcpng} />

                                Bitcoin
                            </th>
                            <th>$19,939.91</th>
                            <th>$381.93b</th>
                            <th>$381.93b</th>
                            <th>19.14m</th>
                            <th>$11.52b</th>
                            <th>-1.50%</th>
                            <th>
                            <div className='button-add-coin' onClick={() => setAddCoinActive(true)}>+</div>
                                <div className='button-info-coin'>i</div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>  

        <AddCoin active={addCoinActive} setActive={setAddCoinActive}/>
      </>
    )
}

export default Home