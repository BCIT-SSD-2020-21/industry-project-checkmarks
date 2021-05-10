export const sumProgressValue = (obj) => {
    let progressCompletedValue = 0; // Max value: 3100
    for (const prop in obj) {
        progressCompletedValue += obj[prop];
    }
    return progressCompletedValue;
};

export const validateForm = (
    info,
    inputValidationValue,
    setInputValidationValue
) => {
    // const namesRegex = /^[a-zA-Z]+$/; // from Original Project
    const namesRegex = /[^a-z]/i; // case insensitive
    const streetAddressRegex = /^[a-z][a-z0-9_ .-]*?/i;
    const emailRegex = /^\S+@\S+\.\S+$/; // from Original Project
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/; // from Original Project

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
    if (info.firstName && !namesRegex.test(info.firstName)) {
        newInputValidationValue.firstName = 100;
    } else {
        newInputValidationValue.firstName = 0;
    }
    // LastName
    if (info.lastName && !namesRegex.test(info.lastName)) {
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
    // Id Document Upload
    if (info.idDocumentUploaded) {
        newInputValidationValue.idDocumentUploaded = 100;
    } else {
        newInputValidationValue.idDocumentUploaded = 0;
    }
    // Street Address
    if (
        info.userStreetAddress &&
        !streetAddressRegex.test(info.userStreetAddress)
    ) {
        newInputValidationValue.userStreetAddress = 100;
    } else {
        newInputValidationValue.userStreetAddress = 0;
    }
    // City
    if (info.userCity && !namesRegex.test(info.userCity)) {
        newInputValidationValue.userCity = 100;
    } else {
        newInputValidationValue.userCity = 0;
    }
    // Province
    if (info.userProvince && !namesRegex.test(info.userProvince)) {
        newInputValidationValue.userProvince = 100;
    } else {
        newInputValidationValue.userProvince = 0;
    }
    // Postal Code
    if (postalCodeRegex.test(info.userPostalCode)) {
        newInputValidationValue.userPostalCode = 100;
    } else {
        newInputValidationValue.userPostalCode = 0;
    }
    // Country
    if (info.userCountry && !namesRegex.test(info.userCountry)) {
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
        (info.isText || info.isLogo || info.isOther) &&
        (info.isText ? info.characterText : true) &&
        (info.isLogo ? info.fileName : true) &&
        (info.isOther ? info.OtherTypes.length > 0 : true)
    ) {
        newInputValidationValue.trademarkTypeFormCompleted = 400;
    } else {
        newInputValidationValue.trademarkTypeFormCompleted = 0;
    }
    // Total Amount > 0 (At least one class was selected)
    if (info.amount > 0) {
        newInputValidationValue.amountNotZero = 600;
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
    if (
        info.paymentCardholderName &&
        !namesRegex.test(info.paymentCardholderName) &&
        info.paymentCreditCardNumber.length === 16 &&
        info.paymentCardExpiryDate &&
        info.paymentCardCVV.length === 3
    ) {
        newInputValidationValue.paymentCardInfo = 200;
    } else {
        newInputValidationValue.paymentCardInfo = 0;
    }
    if (
        info.billingAddressStreet &&
        !streetAddressRegex.test(info.billingAddressStreet) &&
        info.billingAddressCity &&
        info.billingAddressPostalCode &&
        info.billingAddressCountry
    ) {
        newInputValidationValue.billingAddress = 200;
    } else {
        newInputValidationValue.billingAddress = 0;
    }
    if (info.paymentConfirmaed) {
        newInputValidationValue.paymentConfirmaed = 100;
    } else {
        newInputValidationValue.paymentConfirmaed = 0;
    }
    setInputValidationValue(newInputValidationValue);
};
