import './index.scss'
import { createAPI } from '../../api'

import TableCoins from '../TableCoins'

import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

const Home = (ctx) => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        createAPI('v2/assets').fetchOffsetLimit(((ctx.page-1)*20), 20).then(resp => {
            setData(resp.data);
        });
    }, [setData, ctx.page]);

    const handlePageClick = (event) => {
        navigate(`/page/${event.selected + 1}`);
    };

    return (
        <div className='home'>
            <div className='home__wrapper'>
                <TableCoins coins={data} />

                <ReactPaginate  
                    breakLabel=".."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    pageCount={100}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    className="home__pagination"
                    initialPage={ctx.page-1}
                />
            </div>
        </div>  
    )
}

export default Home