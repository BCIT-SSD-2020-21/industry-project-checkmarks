export const createClioContact = async (info) => {
    var name = info.firstName + ' ' + info.lastName;
    var type = 'Person';

    var fnResponse = false;

    await fetch('http://localhost:44397/api/Clio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            data: {
                name: name,
                type: type,
                email_addresses: [
                    {
                        name: 'Other',
                        address: info.email,
                    },
                ],
                phone_numbers: [
                    {
                        name: 'Other',
                        number: info.phone,
                    },
                    {
                        name: 'Fax',
                        number: '123456489',
                    },
                ],
                addresses: [
                    {
                        name: 'Other',
                        street: info.streetAdress,
                        city: info.city,
                        province: info.province,
                        postal_code: info.postalCode,
                        country: info.country,
                        primary: true,
                    },
                ],
            },
        }),
    })
        .then((res) => {
            if (res.status != 200) {
                fnResponse = false;
            }
            console.log(res.json());
            // return res.json();
        })
        // .then((data) => {
        //     var matterIdd = data.data.display_number;
        //     this.setState({
        //       matterId: matterIdd
        //     });
        //     fnResponse = true;
        // })
        .catch((err) => {
            console.log(err);
        });

    return fnResponse;
};
