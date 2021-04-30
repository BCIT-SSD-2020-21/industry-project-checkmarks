require('dotenv').config();
const BASE = process.env.REACT_APP_BASE_URL_CIPO; // class(one), apend:classes/{number} ; term(class's), append:classes/{number}/terms ;
// const BASE_URL = BASE + 'trademark/';

// // // All of below 'Should' be changed to Arrays, as User can query CIPO DB by multiple crteria
// type must be:            null, service, good
// searchType must be:      null, BEGINS , CONTAINS , EXACT
// niceClass must be:       null, integer between 1 to 46
export const searchTerms = async (
    termNames,
    termType,
    searchType,
    niceClass
) => {
    const url = `${BASE}terms?${termNames ? 'termNames=' + termNames : ''}${
        termType ? '&termType=' + termType : ''
    }${searchType ? '&searchType=' + searchType : ''}${
        niceClass ? '&niceClasses=' + niceClass : ''
    }&api_key=2fdf2b0b9560b5e71f707c1ff726415c`;
    console.log(url);
    const response = await fetch(url, {
        method: 'GET',
        // credentials: 'include',
        headers: {
            // 'API-KEY': '2fdf2b0b9560b5e71f707c1ff726415c',
            // Accept: 'application/json',
            // 'Content-Type': 'application/json',
            // Authorization: 'Bearer 2fdf2b0b9560b5e71f707c1ff726415c',
        },
    })
        // .then((response) => response.json())
        .catch((error) => console.log('Error: ', error));
    console.log(response);
    // return response?.data;
};

// export const formatSearchResults = (data) => {
//     const formattedData = [];
//     data?.forEach((item) => {
//         // FORMAT DATE HERE
//         let formattedItem = {
//             ...item,
//             tmTypeDescriptions: tmTypeDescription(item.tmType),
//             fileDateFormatted: item.fileDate.substring(0, 10),
//         };
//         formattedData.push(formattedItem);
//     });
//     return formattedData;
// };

// export const searchTrademarks = async (term, password) => {
//     const url = `${BASE_URL}/${term}/${
//         password ? '?password=' + password : ''
//     }`;
//     const response = await fetch(url)
//         .then((response) => response.json())
//         .catch((error) => console.log('Error: ', error));
//     return formatSearchResults(response?.data);
// };
