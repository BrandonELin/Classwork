let radio = {
    stations: [
        {
            name: '103.5 KTU',
            songs: [
                {
                    title: 'Preach',
                    artist: 'Saint Motel'
                },
                {
                    title: 'Alright',
                    artist: 'Stuck In the Sound'
                },
                {
                    title: 'Dark Days',
                    artist: 'PUP'
                }
            ]
        },
        {
            name: 'Z100',
            songs: [
                {
                    title: 'Do It All The Time',
                    artist: 'IDKHBTFM'
                },
                {
                    title: "Don't Take the Money",
                    artist: 'The Bleachers'
                },
                {
                    title: "It's Not Living",
                    artist: "The 1975"
                }
            ]
        },
    ],
    changeStation() {
        let x = Math.floor((Math.random()*100))%2;
        let y = Math.floor((Math.random()*100))%3;
        let z = radio.stations[x].songs[y];
        console.log(`Now Playing ${z.title} by ${z.artist}`)
    }
}

console.log(Math.random())

radio.changeStation()