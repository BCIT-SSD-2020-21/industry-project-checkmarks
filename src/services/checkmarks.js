require('dotenv').config();
const BASE = process.env.REACT_APP_BASE_URL + 'api/';
const BASE_URL = BASE + 'trademark/';

export const formatSearchResults = (data) => {
    const formattedData = [];
    data.forEach((item) => {
        // FORMAT DATE HERE
        let formattedItem = {
            ...item,
            fileDateFormatted: item.fileDate.substring(0, 10),
        };
        formattedData.push(formattedItem);
    });
    return formattedData;
};

export const searchTrademarks = async (term, password) => {
    const url = `${BASE_URL}/${term}/${
        password ? '?password=' + password : ''
    }`;
    const response = await fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log('Error: ', error));
    return formatSearchResults(response.data);
};
