import './index.scss'
import avatar from '../../assets/images/monkey.png'
import { useEffect, useState } from 'react'
import { getImage } from '../../api'

const Portfolio = ({active, setActive, store}) => {

    const deleteCoinFromCase = (coinDeleteId) => {
        let coinsCase = JSON.parse(localStorage.getItem('coinsCase'));
        let coinIdx = coinsCase.findIndex((coin) => { return coin.coinId == coinDeleteId });
        let coinsDOM = document.getElementsByClassName('pcoin');
        
        coinsCase.splice(coinIdx, 1);
        localStorage.setItem('coinsCase', JSON.stringify(coinsCase));
        coinsDOM[coinIdx].remove();
    }

    return (
        <div className={active ? 'portfolio active' : 'portfolio'} onClick={() => setActive(false)}>
            <div className='portfolio_body' onClick={e => e.stopPropagation()}>
                <div className='portfolio_info'>
                    <img src={avatar} />
                    <span>Portfolio</span>
                </div>
                <div className='coins'>
                    {
                        store == null ? <div className='case_clear'>Case clear</div> : store.map((coin) => 
                        <div className='pcoin' key={coin.coinId}>
                            <img src={getImage(coin.coinSymbol)} />
                            <span className='count-coin'>{coin.myCountCoin}<sub>{coin.coinSymbol}</sub></span>
                            <span className='price-coin'>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(coin.coinPrice)}</span>
                            <span className='count-price-coin'>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(coin.myPriceCoin)}</span>
                            <div className='delete-coin' onClick={() => deleteCoinFromCase(coin.coinId)}>x</div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio