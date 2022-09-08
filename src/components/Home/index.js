import './index.scss'
import { createAPI } from '../../api'

import TableCoins from '../TableCoins'

import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Home = () => {
    const [data, setData] = useState([]);
    const [itemOffset, setItemOffset] = useState([]);

    const [totalCountPage, setTotalCountPage] = useState(0);

    useEffect(() => {
        createAPI('v2/assets').fetch().then(resp => {
            setData(resp.data);
        });
    }, [setData]);

    useEffect(() => {
        setTotalCountPage(data.length/20);
        setItemOffset(data.slice(0, 20));
    }, [data]);

    const handlePageClick = (event) => {
        setItemOffset(data.slice(event.selected*20, event.selected*20+20));
    };

    return (
        <div className='home'>
            <div className='home__wrapper'>
                <TableCoins coins={itemOffset} />

                <ReactPaginate  
                    breakLabel=""
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalCountPage}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    className="home__pagination"
                />
            </div>
        </div>  
    )
}

export default Home