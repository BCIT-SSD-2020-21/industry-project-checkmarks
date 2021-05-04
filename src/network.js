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
            console.log(data);
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
