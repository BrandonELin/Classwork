let cat = {
    name: 'Mr. Bean',
    legs: 4,
    type: 'Feline',
    friends: [
        {
            name: 'Georgey',
            legs: 4,
            type: 'Feline'
        },
        {
            name: 'Snake',
            legs: 3,
            type: 'Feline'
        },
        {
            name: 'Rixio',
            legs: 5,
            friends: [
                {
                    name: 'Arthur',
                    fins: 5,
                    type: 'Fish'
                },
                {
                    name: 'Hannibal',
                    type: 'Platypus'
                }
            ]
        }
    ]
}

//how do we access 'snake'
console.log(cat.friends[1].name)
//how do we access 'Rixio'
console.log(cat.friends[2].name)
//how do we access the fins property
console.log(cat.friends[2].friends[0].fins)