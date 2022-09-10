import Home from '../components/Home'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

const Index = () => {
    const pathParams = parseInt(useParams().number);

    return (
        <Home page={pathParams > 0 && pathParams <= 100 ? pathParams : 1}/>
    )
}

export default Index