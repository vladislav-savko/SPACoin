import './index.scss'
import { useEffect, useState } from 'react'
import Button from '../Button'
import { store } from '../../localStorage'

const AddCoin = ({active, setActive, coinId, coinPrice, coinSymbol}) => {

    const [myCountCoin, setCountCoin] = useState(0);
    const [inputCountCoin, setInputCountCoin] = useState();

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
            }
        }   
    }, [myCountCoin])

    const addCoinToCase = () => {
        setCountCoin(inputCountCoin);
        setActive(false);
    }

    return (
        <div className={active ? 'addCoin addCoin--active' : 'addCoin'} onClick={() => setActive(false)}>
            <div className='addCoin__body' onClick={e => e.stopPropagation()}>
                <div className='addCoin__info'>
                    <span className='addCoin__info-text'>Adding coin</span>
                    <span className='addCoin__info-coin'>{coinId}</span>
                </div>
                <form className='addCoin__form'>
                    <input className='addCoin__form--input' type='text' name='countCoin' placeholder='write the number of coins' onChange={(event) => setInputCountCoin(event.target.value)}></input>
                    <Button className='button--green button--h35 button--r15' textButton="Add" event={ addCoinToCase } />
                </form>
            </div>
        </div>
    )
}

export default AddCoin