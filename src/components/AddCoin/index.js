import './index.scss'
import { useEffect, useState } from 'react'

const AddCoin = ({active, setActive, coinId, coinPrice, coinSymbol}) => {

    const [myCountCoin, setCountCoin] = useState(0);
    const [inputCountCoin, setInputCountCoin] = useState();

    useEffect(() => {
        let coinsCase = JSON.parse(localStorage.getItem('coinsCase'));
        let myPriceCoin = (coinPrice * parseInt(myCountCoin));

        if (myCountCoin != 0)
        {
            if (coinsCase == null)
                localStorage.setItem('coinsCase', JSON.stringify( [{ coinId, coinSymbol, myCountCoin, coinPrice, myPriceCoin }] ));
            else
            {
                
                let coinsArray = [];
                coinsArray = coinsCase;

                let coinInCaseId = coinsArray.findIndex((coin) => { return coin.coinId === coinId });

                if (coinInCaseId == -1)
                    coinsArray.push({ coinId, coinSymbol, myCountCoin, coinPrice, myPriceCoin });
                else
                    coinsArray[coinInCaseId] = { coinId, coinSymbol, myCountCoin, coinPrice, myPriceCoin };

                localStorage.setItem('coinsCase', JSON.stringify( coinsArray ));
            }

            coinsCase = JSON.parse(localStorage.getItem('coinsCase'));
        }   
    }, [myCountCoin])

    const addCoinToCase = () => {
        setCountCoin(inputCountCoin);
    }

    return (
        <div className={active ? 'addCoin active' : 'addCoin'} onClick={() => setActive(false)}>
            <div className='addCoin_body' onClick={e => e.stopPropagation()}>
                <div className='addCoin_info'>
                    <span>Adding coin</span>
                    <span>{coinId}</span>
                </div>
                <form>
                    <input type='text' name='countCoin' placeholder='write the number of coins' onChange={(event) => setInputCountCoin(event.target.value)}></input>
                    <button onClick={ (e) => 
                    { 
                        e.preventDefault();
                        addCoinToCase();
                        setActive(false);
                    }}>
                        Add
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCoin