import './index.scss'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { createAPI, getImage } from '../api'
import { store } from '../localStorage'

import avatar from '../assets/images/monkey.png'
import Portfolio from '../components/Portfolio'
import Button from '../components/Button'

const Layout = () => {
    const [portfolioActive, setPortfolioActive] = useState (false);
    const [coinsTop, setCoinsTop] = useState([]);
    const [coins, setCoins] = useState([]);
    const [lStore, setlStore] = useState([]);

    const [caseInfo, setCaseInfo] = useState({
        casePrice: 0,
        caseDifferencePrice: 0,
        caseDifferencePricePercent: 0
    });

    useEffect(() => {
        createAPI('v2/assets').fetchTop().then(resp => {
            setCoinsTop(resp.data);
        });
    }, [setCoinsTop]);

    useEffect(() => {
        createAPI('v2/assets').fetch().then(resp => {
            setCoins(resp.data);
        });
    }, [setCoins]);

    useEffect(() => {     
        setlStore(store('coinsCase').getStore());

        let totalPriceCase = 0;
        let differencePrice = 0;
        let differencePricePercent = 0;

        if (lStore.length != 0 && coins.length != 0)
        {
            lStore.map((coin) => {
                let coinId = coins.findIndex((coinCase) => { return coinCase.id === coin.coinId });

                totalPriceCase += coin.myPriceCoin;
                differencePrice += (coin.myPriceCoin - coins[coinId].priceUsd);
            })

            differencePricePercent = (differencePrice)/totalPriceCase; 
        }

        setCaseInfo({
            casePrice: totalPriceCase,
            caseDifferencePrice: differencePrice,
            caseDifferencePricePercent: differencePricePercent
        })
        return
    }, [coins, portfolioActive]);

    const activePortfolio = () => {
        setPortfolioActive(true);
    }

    return (
        <div className='App'>
            <div id="header" className='header'>
                <div className='header__coins'>
                    {
                        coinsTop.map((coin) => 
                            <div className='header__coin' key={coin.rank}>
                                <img className='header__coin-img' src={getImage(coin.symbol)} />
                                <span className='header__coin-price'>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(coin.priceUsd)}</span>
                            </div>
                        )
                    }
                </div>
                <div className='header__info'>
                    <span className='header__info-casePrice'>{ new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(caseInfo.casePrice) }</span>
                    <span>|</span>
                    <span className='header__info-caseDifference'>
                        { new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(caseInfo.caseDifferencePrice) }
                        ({ new Intl.NumberFormat('eng-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 5 }).format(caseInfo.caseDifferencePricePercent/100) })
                    </span>
                    <img className='header__info-caseAvatar' src={avatar} />

                    <Button textButton="portfolio" event={ activePortfolio } />
                </div>
            </div>

            <Portfolio active={portfolioActive} setActive={setPortfolioActive} lStore={lStore} setlStore={setlStore}/>
                 
            <Outlet />
        </div>
    )
}

export default Layout