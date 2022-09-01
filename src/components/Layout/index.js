import './index.scss'
import { Outlet } from 'react-router-dom'
import btcpng from '../../assets/images/btc.png'
import avatar from '../../assets/images/monkey.png'
import Portfolio from './Portfolio'
import { useState } from 'react'

const Layout = () => {
    const [portfolioActive, setPortfolioActive] = useState (false);

    return (
        <div className='App'>
            <div className='header'>
                <div className='header-coins'>
                    <div className='coin'>
                        <img src={btcpng} />
                        <span className='coin-price'>$19,939.91</span>
                    </div>
                    <div className='coin'>
                        <img src={btcpng} />
                        <span className='coin-price'>$19,939.91</span>
                    </div>
                    <div className='coin'>
                        <img src={btcpng} />
                        <span className='coin-price'>$19,939.91</span>
                    </div>
                </div>
                <div className='portfolio_info'>
                    <span className='count'>$19,939.91</span>
                    <span>|</span>
                    <span className='def'>+2,38 (1,80 %)</span>
                    <img src={avatar} />
                    <button className='button-open-portfolio' onClick={() => setPortfolioActive(true)}>portfolio</button>
                </div>
            </div>

            <Portfolio active={portfolioActive} setActive={setPortfolioActive}/>
                 
            <Outlet />
        </div>
    )
}

export default Layout