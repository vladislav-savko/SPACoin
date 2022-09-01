import './index.scss'
import btcpng from '../../../assets/images/btc.png'

const addCoin = ({active, setActive}) => {
    return (
        <div className={active ? 'addCoin active' : 'addCoin'} onClick={() => setActive(false)}>
            <div className='addCoin_body' onClick={e => e.stopPropagation()}>
                <div className='addCoin_info'>
                    <img src={btcpng} />
                    <span>Adding coin</span>
                </div>
                <form>
                    <input type='text'></input>
                    <button type='submit'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default addCoin