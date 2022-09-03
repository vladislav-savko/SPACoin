import axios from "axios";

const base_url = 'https://api.coincap.io/';

export const createAPI = endpoint => {
    let url = base_url + endpoint;

    return {
        fetch: () => axios.get(url).then(resp => {
            return resp.data
        }),
        fetchById: id => axios.get(url + id),
    }
}

export const getImage = symbol => {
    symbol = symbol.toLowerCase();
    
    let image_url = 'https://assets.coincap.io/assets/icons/' + symbol + '@2x.png';

    return image_url;
}