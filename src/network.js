export const createClioContact = async (info) => {
    var fnResponse = null;

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
                fnResponse = null;
            }
            // console.log(res.json());
            return res.json();
        })
        .then((data) => {
            console.log(data);
            fnResponse = data.data.display_number;
            // fnResponse = true;
        })
        .catch((err) => {
            console.log(err);
        });

    return fnResponse;
};

export const createEmail = async (info, matterId) => {
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
                    matterId: matterId,
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
            console.log(res);
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

export const sendPayment = async (info) => {
    console.log('sendPayment called');
    return true;
    // this.setState({
    //   disableButton: true,
    //   buttonText: 'Submitting...'
    // })
    // await fetch('https://localhost:44397/api/Payment', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         amount: String(info.amount),
    //         // "method": String(this.props.values.id),
    //         account_id: 'bL4uzw6cR4mQjzmovjpCTw', //Live Trust acc key
    //     }),
    // })
    //     .then(async (res) => {
    //         if (res.status == 200) {
    // const createdEmail = await createEmail();

    // if (createdEmail) {
    //   this.props.nextStep();
    // } else {
    //   this.setState({
    //     dialogOpen: true,
    //     disableButton: false
    //   });
    // }
    //     alert('payment successful');
    // } else {
    //     alert(
    //         "The payment did not go through. Please revise your payment information or go to the 'About Us' link to get in touch."
    //     );
    // this.setState({
    //   disableButton: false,
    //   buttonText: 'Confirm and Check Out'
    // });
    //     }
    // })
    // .catch((err) => {
    //     alert(
    //         "The form could not be submitted because of a technical issue. Please try again, or go to the 'About Us' link to get in touch.  " +
    //             err
    //     );
    //   this.setState({
    //     disableButton: false,
    //     buttonText: 'Confirm and Check Out'
    //   });
    // });
};
