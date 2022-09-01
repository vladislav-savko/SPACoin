import './index.scss'
import btcpng from '../../../assets/images/btc.png'
import avatar from '../../../assets/images/monkey.png'

const Portfolio = ({active, setActive}) => {
    return (
        <div className={active ? 'portfolio active' : 'portfolio'} onClick={() => setActive(false)}>
            <div className='portfolio_body' onClick={e => e.stopPropagation()}>
                <div className='portfolio_info'>
                    <img src={avatar} />
                    <span>Portfolio</span>
                </div>
                <div className='coins'>
                    <div className='coin'>
                        <img src={btcpng} />
                        <span className='count-coin'>2.3<sub>BTC</sub></span>
                        <span className='price-coin'>$19,939.91</span>
                        <span className='count-price-coin'>$40,939.91</span>
                        <div className='delete-coin'>x</div>
                    </div>
                    <div className='coin'>
                        <img src={btcpng} />
                        <span className='count-coin'>2.3<sub>BTC</sub></span>
                        <span className='price-coin'>$19,939.91</span>
                        <span className='count-price-coin'>$40,939.91</span>
                        <div className='delete-coin'>x</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio