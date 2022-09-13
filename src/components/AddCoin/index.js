import './index.scss'
import { useEffect, useState } from 'react'
import Button from '../Button'
import { store } from '../../localStorage'
import { useOutletContext } from 'react-router-dom'

const AddCoin = ({active, setActive, coinId, coinPrice, coinSymbol}) => {

    const [myCountCoin, setCountCoin] = useState(0);
    const [inputCountCoin, setInputCountCoin] = useState();

    const { setAddingCoin } = useOutletContext();

    useEffect(() => {
        let coinsCase = store('coinsCase').getStore();
        let myPriceCoin = (coinPrice * parseInt(myCountCoin));

        if (myCountCoin != 0)
        {
            if (coinsCase == null)
                store('coinsCase').setStore([{ coinId, coinSymbol, myCountCoin, coinPrice, myPriceCoin }]);
            else
            {
                let coinsArray = [];
                coinsArray = coinsCase;

                let coinInCaseId = coinsArray.findIndex((coin) => { return coin.coinId === coinId });

                if (coinInCaseId == -1)
                    coinsArray.push({ coinId, coinSymbol, myCountCoin, coinPrice, myPriceCoin });
                else
                    coinsArray[coinInCaseId] = { coinId, coinSymbol, myCountCoin, coinPrice, myPriceCoin };

                store('coinsCase').setStore(coinsArray);
                setAddingCoin(true);
            }
        }   
    }, [myCountCoin])

    const addCoinToCase = () => {
        setCountCoin(inputCountCoin);
        document.getElementsByName('countCoin')[0].value = '';
        setActive(false);
    }

    return (
        <div className={active ? 'addCoin addCoin--active' : 'addCoin'} onClick={() => setActive(false)}>
            <div className='addCoin__body' onClick={e => e.stopPropagation()}>
                <div className='addCoin__info'>
                    <span className='addCoin__info-text'>Adding coin</span>
                    <span className='addCoin__info-coin'>{coinId}</span>
                </div>
                <form className='addCoin__form' onSubmit={(event) => {event.preventDefault(); addCoinToCase()}}>
                    <input className='addCoin__form--input' type='text' name='countCoin' placeholder='write the number of coins' onChange={(event) => setInputCountCoin(event.target.value)}></input>
                    <button className='button button--green button--h35 button--r15' type='submit'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddCoin