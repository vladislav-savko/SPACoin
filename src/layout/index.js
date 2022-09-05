import './index.scss'
import { Outlet } from 'react-router-dom'
import avatar from '../assets/images/monkey.png'
import Portfolio from '../components/Portfolio'
import { useState, useEffect } from 'react'
import { createAPI, getImage } from '../api'

const Layout = () => {
    const [portfolioActive, setPortfolioActive] = useState (false);
    const [coinsTop, setCoinsTop] = useState([]);
    const [coins, setCoins] = useState([]);
    const [store, setStore] = useState([]);

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
        let coinsCase = JSON.parse(localStorage.getItem('coinsCase'));

        let totalPriceCase = 0;
        let differencePrice = 0;
        let differencePricePercent = 0;

        if (coinsCase != null && coins.length != 0)
        {
            coinsCase.map((coin) => {
                let coinId = coins.findIndex((coinCase) => { return coinCase.id === coin.coinId });

                totalPriceCase += coin.myPriceCoin;
                differencePrice += (coin.myPriceCoin - coins[coinId].priceUsd);
            })

            differencePricePercent = (differencePrice)/totalPriceCase;

            setCaseInfo({
                casePrice: totalPriceCase,
                caseDifferencePrice: differencePrice,
                caseDifferencePricePercent: differencePricePercent
            })
        }
        
        setStore(coinsCase);
                
        return
    }, [coins]);

    return (
        <div className='App'>
            <div className='header'>
                <div className='header-coins'>
                    {
                        coinsTop.map((coin) => 
                            <div className='coin' key={coin.rank}>
                                <img src={getImage(coin.symbol)} />
                                <span className='coin-price'>{new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(coin.priceUsd)}</span>
                            </div>
                        )
                    }
                </div>
                <div className='portfolio_info'>
                    <span className='count'>{ new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(caseInfo.casePrice) }</span>
                    <span>|</span>
                    <span className='def'>
                        { new Intl.NumberFormat('eng-US', { style: 'currency', currency: 'USD' }).format(caseInfo.caseDifferencePrice) } 
                        ({ new Intl.NumberFormat('eng-US', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 5 }).format(caseInfo.caseDifferencePricePercent/100) })
                        </span>
                    <img src={avatar} />
                    <button className='button-open-portfolio' onClick={() => setPortfolioActive(true)}>portfolio</button>
                </div>
            </div>

            <Portfolio active={portfolioActive} setActive={setPortfolioActive} store={store}/>
                 
            <Outlet />
        </div>
    )
}

export default Layout