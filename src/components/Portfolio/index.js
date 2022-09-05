import './index.scss'
import avatar from '../../assets/images/monkey.png'
import { useEffect, useState } from 'react'
import { getImage } from '../../api'
import Button from '../Button'

const Portfolio = ({active, setActive, store}) => {

    const deleteCoinFromCase = (coinDeleteId) => {
        let coinsCase = JSON.parse(localStorage.getItem('coinsCase'));
        let coinIdx = coinsCase.findIndex((coin) => { return coin.coinId == coinDeleteId });
        let coinsDOM = document.getElementsByClassName('portfolio__coin');
        
        coinsCase.splice(coinIdx, 1);
        localStorage.setItem('coinsCase', JSON.stringify(coinsCase));
        coinsDOM[coinIdx].remove();
    }

    return (
        <div className={active ? 'portfolio portfolio--active' : 'portfolio'} onClick={() => setActive(false)}>
            <div className='portfolio__wrapper' onClick={e => e.stopPropagation()}>
                <div className='portfolio__head'>
                    <img className='portfolio__head-avatar' src={avatar} />
                    <span className='portfolio__head-text'>Portfolio</span>
                </div>
                <div className='portfolio__body'>
                    {
                        store == null ? <div className='portfolio__coin--null'>Case clear</div> : 
                        store.map((coin) => 
                        <div className='portfolio__coin' key={coin.coinId}>
                            <img className='portfolio__coin-avatar' src={getImage(coin.coinSymbol)} />
                            <span className='portfolio__coin-count'>{coin.myCountCoin}<sub>{coin.coinSymbol}</sub></span>
                            <span className='portfolio__coin-price'>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(coin.coinPrice)}</span>
                            <span className='portfolio__coin-price--green'>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(coin.myPriceCoin)}</span>
                            <Button className='button--red' textButton="x" event={ deleteCoinFromCase } params={ coin.coinId } />
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio