require('dotenv').config();
const BASE = process.env.REACT_APP_BASE_URL + 'api/';
const BASE_URL_LOCAL = process.env.REACT_APP_BASE_URL_LOCAL + 'api/';
const BASE_URL = BASE + 'trademark/';

const tmTypeDescription = (tmTypeArray) => {
    // (tmType: tmTypDescription)
    var TRADEMARK_TYPES = {
        1: 'Word',
        2: 'Design',
        3: 'Colour',
        4: 'Three Dimensional',
        5: 'Position',
        6: 'Hologram',
        7: 'Motion',
        8: 'Sound',
        9: 'Taste',
        10: 'Scent',
        11: 'Texture',
        14: 'A Mode of Packaging Goods',
        17: 'Standard Characters',
    };

    return tmTypeArray.reduce((tmDescriptions, thisTmType) => {
        var thisTmTypeDescription = TRADEMARK_TYPES[thisTmType];
        if (tmDescriptions.indexOf(thisTmTypeDescription) === -1) {
            tmDescriptions.push(thisTmTypeDescription);
        }

        return tmDescriptions;
    }, []);
};

export const formatSearchResults = (data) => {
    const formattedData = [];
    if (data?.length > 0) {
        data.forEach((item) => {
            // FORMAT DATE HERE
            let formattedItem = {
                ...item,
                tmTypeDescriptions: tmTypeDescription(item?.tmType),
                fileDateFormatted: item?.fileDate?.substring(0, 10),
            };
            formattedData.push(formattedItem);
        });
    }
    return formattedData;
};

export const searchTrademarks = async (text, password) => {
    const url = `${BASE_URL}/${text}/${
        password ? '?password=' + password : ''
    }`;
    const response = await fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log('Error: ', error));
    return formatSearchResults(response?.data);
};

export const searchTerms = async (text) => {
    const url = `${BASE_URL_LOCAL}cipo/GetTermDataByString/${text}`;
    console.log('url: ', url);
    const response = await fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log('Error: ', error));
    return response;
};

export const getAllClasses = async () => {
    const url = `${BASE_URL_LOCAL}cipo/GetAllClasses`;
    const response = await fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log('Error: ', error));
    return response;
};
