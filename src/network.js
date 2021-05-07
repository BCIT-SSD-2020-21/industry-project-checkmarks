export const createClioContact = async (info) => {
    var fnResponse = false;

    await fetch('https://localhost:44397/api/Clio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            data: {
                name: info.firstName + ' ' + info.lastName,
                type: 'Person',
                email_addresses: [
                    {
                        name: 'Other',
                        address: info.email,
                    },
                ],
                phone_numbers: [
                    {
                        name: 'Other',
                        number: '999999',
                    },
                    {
                        name: 'Fax',
                        number: '123456489',
                    },
                ],
                addresses: [
                    {
                        name: 'Other',
                        street: info.userStreetAddress,
                        city: info.userCity,
                        province: info.userProvince,
                        postal_code: info.userPostalCode,
                        country: info.userCountry,
                        primary: true,
                    },
                ],
            },
        }),
    })
        .then((res) => {
            console.log(info);
            if (res.status != 200) {
                fnResponse = false;
            }
            // console.log(res.json());
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            // var matterIdd = data.data.display_number;
            // this.setState({
            //   matterId: matterIdd
            // });
            // fnResponse = true;
        })
        .catch((err) => {
            console.log(err);
        });

    return fnResponse;
};

export const createEmail = async (info) => {
    var termsArray = [];
    var classesArray = [];
    var trademarkType;

    //create termsSelected array
    info.termsSelected.forEach((element) => {
        var item = [element.termName];
        termsArray.push(item);
    });

    //create classesSelected  array
    info.termsSelected.forEach((element) => {
        classesArray.push(element.termClass);
    });

    //create classesSelected  array
    // info.classesSelected.forEach((element) => {
    //     classesArray.push(element.number);
    // });

    //create trademarkType array
    var trademarkType = [];
    if (info.isText === true) {
        trademarkType.push('Standard Characters');
    }
    if (info.isLogo === true) {
        trademarkType.push('Logos or Design');
    }
    if (info.isOther === true) {
        trademarkType.push('Others');
    }

    // const createdContact = await this.createClioContact();

    // if (!createdContact) {
    //     return false;
    // }

    var fnResponse = false;

    await fetch('https://localhost:44397/api/Email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            data: {
                name: info.firstName + ' ' + info.lastName,
                type: info.individualOrOrganization,
                organizationName: info.organizationName,
                amountPaid: (info.amount / 100) * 100,

                contactInfo: {
                    emailAddress: info.email,
                    // phoneNumber: info.phone,
                    phoneNumber: '604895555',
                    fax: '604895555',
                    matterId: '010',
                },

                addressInfo: {
                    street: info.userStreetAddress,
                    city: info.userCity,
                    province: info.userProvince,
                    postal_code: info.userPostalCode,
                    country: info.userCountry,
                },

                trademarkInfo: {
                    fileName: info.fileName,
                    trademarkType: trademarkType,
                    characterText: info.characterText,
                    // nice classes
                    // classes: classesArray,
                    classes: classesArray,
                    terms: termsArray,
                },

                prevTrademarkInfo: {
                    filedInOtherCountry: info.filedInOtherCountry,
                    countryOfFiling: info.countryOfFiling,
                    filingDate: info.fillingDate,
                    applicationNum: info.fillingNumber,
                },
            },
        }),
    })
        .then((res) => {
            if (res.status == 200) {
                fnResponse = true;
            } else if (res.status >= 400) {
                fnResponse = false;
            }
        })
        .catch((err) => {
            console.log(err);
        });

    return fnResponse;

    // end of email function
};
