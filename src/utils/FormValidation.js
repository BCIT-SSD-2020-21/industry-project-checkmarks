export const advancedSearch = (searchText, targetText) => {
    var searchWords = searchText.split(' ');
    let targetTextMatches = true;
    searchWords.forEach((word) => {
        if (!targetText.toLowerCase().includes(word.toLowerCase())) {
            targetTextMatches = false;
        }
    });
    return targetTextMatches;
};

export const sumProgressValue = (obj) => {
    let progressCompletedValue = 0; // Max abbreviation: 3100
    for (const prop in obj) {
        progressCompletedValue += obj[prop];
    }
    return progressCompletedValue;
};

export const canadaProvinces = [
    { name: 'Alberta', abbreviation: 'AB' },
    { name: 'British Columbia', abbreviation: 'BC' },
    { name: 'Manitoba', abbreviation: 'MB' },
    { name: 'New Brunswick', abbreviation: 'NB' },
    { name: 'Newfoundland and Labrador', abbreviation: 'NL' },
    { name: 'Northwest Territories', abbreviation: 'NT' },
    { name: 'Nova Scotia', abbreviation: 'NS' },
    { name: 'Nunavut', abbreviation: 'NU' },
    { name: 'Ontario', abbreviation: 'ON' },
    { name: 'Prince Edward Island', abbreviation: 'PE' },
    { name: 'Quebec', abbreviation: 'QC' },
    { name: 'Saskatchewan', abbreviation: 'SK' },
    { name: 'Yukon Territory', abbreviation: 'YT' },
];
export const unitedStates = [
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'American Samoa', abbreviation: 'AS' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'District of Columbia', abbreviation: 'DC' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Guam', abbreviation: 'GU' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Puerto Rico', abbreviation: 'PR' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Virgin Islands', abbreviation: 'VI' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wyoming', abbreviation: 'WY' },
];

export const validateForm = (info, setValidationProgress) => {
    // const namesRegex = /^[a-zA-Z]+$/; // from Original Project
    const numbersRegex = /^[0-9]*$/;
    const personNameRegex = /[^a-z '.-]/i; // case insensitive
    const locationNamsRegex = /[^a-z0-9 '.-]/i; // case insensitive
    const emailRegex = /^\S+@\S+\.\S+$/; // from Original Project
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/; // from Original Project
    const zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/i;

    const newInputValidationValue = {};
    // Individual OR Organization NAME
    if (info.individualOrOrganization === 'Individual') {
        newInputValidationValue.individualOrOrganizationName = 100;
    } else if (info.individualOrOrganization === 'Organization') {
        if (info.organizationName) {
            newInputValidationValue.individualOrOrganizationName = 100;
        } else {
            newInputValidationValue.individualOrOrganizationName = 0;
        }
    }
    // FirstName
    if (info.firstName && !personNameRegex.test(info.firstName)) {
        newInputValidationValue.firstName = 100;
    } else {
        newInputValidationValue.firstName = 0;
    }
    // LastName
    if (info.lastName && !personNameRegex.test(info.lastName)) {
        newInputValidationValue.lastName = 100;
    } else {
        newInputValidationValue.lastName = 0;
    }
    // Email
    if (emailRegex.test(info.email)) {
        newInputValidationValue.email = 100;
    } else {
        newInputValidationValue.email = 0;
    }
    //phone
    if (numbersRegex.test(info.phone) && info.phone.length >= 10) {
        newInputValidationValue.phone = 1;
    } else {
        newInputValidationValue.phone = 0;
    }
    // Id Document Upload
    if (info.idDocumentUploaded) {
        newInputValidationValue.idDocumentUploaded = 100;
    } else {
        newInputValidationValue.idDocumentUploaded = 0;
    }
    // Street Address
    if (info.userStreetAddress.length > 2) {
        newInputValidationValue.userStreetAddress = 100;
    } else {
        newInputValidationValue.userStreetAddress = 0;
    }
    // City
    if (info.userCity.length > 2 && !locationNamsRegex.test(info.userCity)) {
        newInputValidationValue.userCity = 100;
    } else {
        newInputValidationValue.userCity = 0;
    }
    // Province
    if (info.userProvince && !locationNamsRegex.test(info.userProvince)) {
        newInputValidationValue.userProvince = 100;
    } else {
        newInputValidationValue.userProvince = 0;
    }
    // Postal Code
    if (
        (info.userCountry === 'Canada' &&
            postalCodeRegex.test(info.userPostalCode)) ||
        (info.userCountry === 'USA' && zipCodeRegex.test(info.userPostalCode))
    ) {
        newInputValidationValue.userPostalCode = 100;
    } else {
        newInputValidationValue.userPostalCode = 0;
    }
    // Country
    if (info.userCountry && !locationNamsRegex.test(info.userCountry)) {
        newInputValidationValue.userCountry = 100;
    } else {
        newInputValidationValue.userCountry = 0;
    }
    // Agreed to Terms of Service
    if (info.agreedTermsOfService) {
        newInputValidationValue.agreedTermsOfService = 100;
    } else {
        newInputValidationValue.agreedTermsOfService = 0;
    }
    // Trademark Types Completed
    if (
        !info.isOther &&
        (info.isText || info.isLogo) &&
        (info.isText ? info.characterText : true) &&
        (info.isLogo ? info.fileName : true)
    ) {
        newInputValidationValue.trademarkTypeFormCompleted = 500;
    } else {
        newInputValidationValue.trademarkTypeFormCompleted = 0;
    }
    // Total Amount > 0 (At least one class was selected)
    if (info.amount > 0) {
        newInputValidationValue.amountNotZero = 500;
    } else {
        newInputValidationValue.amountNotZero = 0;
    }
    // Not Filed in Other Countr OR If Filed, Fields completed
    if (
        info.filedInOtherCountry === 'No' ||
        (info.filedInOtherCountry === 'Yes' &&
            info.countryOfFiling &&
            info.fillingDate &&
            info.fillingNumber)
    ) {
        newInputValidationValue.internationalFilingInfo = 300;
    } else {
        newInputValidationValue.internationalFilingInfo = 0;
    }
    // Order Confirmed
    if (info.infoConfirmed) {
        newInputValidationValue.infoConfirmed = 200;
    } else {
        newInputValidationValue.infoConfirmed = 0;
    }
    // Payment Information Provided        // Payment Information

    // UBC 2 courses - Java, Java (2nd year), Matlab
    // DC 2 courses - C#, operating systems
    // Codecademy;
    // old job - VBA (macros)
    // Lighthouse Labs - Intro to Web Dev (6 weeks) , $1500

    // if (
    //     info.paymentCardholderName &&
    //     !personNameRegex.test(info.paymentCardholderName) &&
    //     numbersRegex.test(info.paymentCreditCardNumber) &&
    //     info.paymentCreditCardNumber.length >= 13 &&
    //     info.paymentCreditCardNumber.length <= 19 &&
    //     info.paymentCardExpiryDate.length === 4 &&
    //     numbersRegex.test(info.paymentCardExpiryDate) &&
    //     info.paymentCardCVV.length >= 3 &&
    //     info.paymentCardCVV.length <= 4 &&
    //     numbersRegex.test(info.paymentCardCVV)
    // ) {
    //     newInputValidationValue.paymentCardInfo = 200;
    // } else {
    //     newInputValidationValue.paymentCardInfo = 0;
    // }
    // if (
    //     info.billingAddressStreet.length > 2 &&
    //     info.billingAddressCity.length > 2 &&
    //     !locationNamsRegex.test(info.billingAddressCity) &&
    //     ((info.billingAddressCountry === 'Canada' &&
    //         postalCodeRegex.test(info.billingAddressPostalCode)) ||
    //         (info.billingAddressCountry === 'USA' &&
    //             zipCodeRegex.test(info.billingAddressPostalCode))) &&
    //     info.billingAddressCountry
    // ) {
    //     newInputValidationValue.billingAddress = 200;
    // } else {
    //     newInputValidationValue.billingAddress = 0;
    // }
    if (info.paymentConfirmed) {
        newInputValidationValue.paymentConfirmed = 300;
    } else {
        newInputValidationValue.paymentConfirmed = 0;
    }
    setValidationProgress(newInputValidationValue);
};
