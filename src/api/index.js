import axios from "axios";

const base_url = 'https://api.coincap.io/';

export const createAPI = endpoint => {
    let url = base_url + endpoint;

    return {
        fetch: () => axios.get(url).then(resp => { return resp.data }),
        fetchOffsetLimit: (offset, limit) => axios.get(`${url}?offset=${offset}&limit=${limit}`).then(resp => { return resp.data }),
        fetchTop: () => axios.get(`${url}?limit=3`).then(resp => { return resp.data }),
        fetchById: id => axios.get(`${url}${id}`).then(resp => { return resp.data }),
        fetchByIdHystory: id => axios.get(`${url}${id}/history?interval=d1`).then(resp => { return resp.data }),
    }
}

export const getImage = symbol => {
    symbol = symbol.toLowerCase();
    
    var image_url = `https://assets.coincap.io/assets/icons/${symbol}@2x.png`;

    console.log(kek);

    return image_url;
}