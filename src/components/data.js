/**
 * Created by ekeu on 21/02/17.
 */

/*
 speakerID : {
     firstname : '',
     lastname: '',
     description: '',
     photo: '',
     website : '',
 }
 */

let Data = {
    special_greeting: 'A Very Happy New Year from all at Barnes Healing Church!',
    services : {
        sunday : [
            {
                day : 'Sunday',
                date : '1st January',
                time : '6:30pm',
                entry : 'n/a',
                speakerIDs : [0],
                description : 'n/a'
            },
            {
                day : 'Sunday',
                date : '8th January',
                time : '6:30pm',
                entry : 'n/a',
                speakerIDs : [14],
                description : 'n/a'
            },
            {
                day : 'Sunday',
                date : '15th January',
                time : '6:30pm',
                entry : 'n/a',
                speakerIDs : [1],
                description : 'n/a'
            },
            {
                day : 'Sunday',
                date : '22nd January',
                time : '6:30pm',
                entry : 'n/a',
                speakerIDs : [6,7] ,
                description : 'n/a'
            },
            {
                day : 'Sunday',
                date : '29th January',
                time : '6:30pm',
                entry : 'n/a',
                speakerIDs : [8],
                description : 'n/a'
            },
            {
                day : 'Sunday',
                date : '5th February',
                time : '6:30pm',
                entry : 'n/a',
                speakerIDs : [4],
                description : 'n/a'
            },
            {
                day : 'Sunday',
                date : '12 February',
                time : '6:30pm',
                entry : 'n/a',
                speakerIDs : [10],
                description : 'n/a'
            },
        ],

        wednesday : [
            {
                day : 'Wednesday',
                date : '11th January',
                time : '7:30pm',
                entry : 'n/a',
                speakerIDs : [11,4],
                description: 'n/a'
            },
            {
                day : 'Wednesday',
                date : '18th January',
                time : '7:30pm',
                entry : 'n/a',
                speakerIDs : [3],
                description: 'n/a'
            },
            {
                day : 'Wednesday',
                date : '25th January',
                time : '7:30pm',
                entry : 'n/a',
                speakerIDs : [5],
                description: 'n/a'
            },
            {
                day : 'Wednesday',
                date : '1st February',
                time : '7:30pm',
                entry : 'n/a',
                speakerIDs : [12],
                description: 'n/a'
            },
            {
                day : 'Wednesday',
                date : '8th February',
                time : '7:30pm',
                entry : 'n/a',
                speakerIDs : [13],
                description: 'n/a'
            }
        ]
    },

    events : [
            {
                title: 'Open Platform',
                day : 'Monday',
                date : '23rd January',
                time : '8:30pm',
                entry : '£3',
                speakerIDs: [14,6],
                description: 'Try your skills on the platform in a fun and friendly environment under the guidance of Medium Janet Neville. Alternatively come as an audience member and help raise the energy!'
            },

            {
                title: 'Open Development Circle',
                day : 'Monday',
                date : '16th January',
                time : '8:30pm',
                entry : '£5',
                speakerIDs : [15,3,8],
                description: 'Medium Jan Hall will provide expert and safe guidance for those looking to develop their Spiritual gifts'
            },
            {
                title : 'Psychic Saturday (Morning of Readings)',
                day : 'Saturday',
                date : '4th February',
                time : '10:00am',
                entry : '£12',
                speakerIDs : [],
                description: 'Our once a month Saturday morning of readings. Readings are £12 for 20 mins with tea and coffee provided afterwards'
            },
    ],

    speakers : {
        count : 19,
        0: {
            firstname : 'No',
            lastname : 'Service',
            description : '',
            photo : '',
            website: '',
            linkable: false
        },
        1: {
            firstname : 'Carie',
            lastname: 'North',
            description: 'Carie is a very gifted Psychic Medium, who has been working with spirit for over 25 years. She works closely with her spirit guide, or links to loved ones passed, to give insightful and empathetic readings. Carie can help to resolve issues that are causing distress or concern, such as career issues, relationship issues etc. She is well known in various spiritualist churches, such as Barnes Healing Church, where she regularly takes part in demonstrations of mediumship. Carie, is also a reiki healer for both people and animals and she is also an animal communicator.',
            photo: 'https://en-gb.facebook.com/1666231210323664/photos/1666233043656814/',
            website : 'https://en-gb.facebook.com/Carie-North-Animal-communicator-and-Reiki-healer-1666231210323664/',
            linkable: true
        },

        2: {
            firstname : 'David',
            lastname: 'Cole',
            description: 'In the past 20 years or so, David has served and demonstrated his gift in a number of Spiritualist churches and halls throughout the UK and abroad, he also serves spirit doing private sittings from his home in Berkshire.',
            photo: 'http://spiritual-truth.co.uk/wp-content/uploads/2011/08/gaza2-019-23-219x300.jpg',
            website : 'http://spiritual-truth.co.uk/',
            linkable: true
        },

        3: {
            firstname : 'Esi',
            lastname: 'Cakmakcioglu',
            description: "Esi Cakmakcioglu is an architect and urban designer who was introduced to Spirit in 1987.  It was her very first step into a journey to discover that there is no death and that life is eternal. Brought up in a family of scientists and artists, it was through her life journey that led her to become a spiritual medium, spirit artist and spiritual healer.  These pages give samples of her art of spirit communication, art of spirit healing and further portraits of loved ones in spirit sketched through her by Spirit. Esi would like to encourage you to a completely new way of looking at Life to bring 'meaning' into our lives and empower us.",
            photo: 'picture: https://static.wixstatic.com/media/5d88e3_f4ca78aa5ba5450c8dc57faf65705af9~mv2.jpg/v1/crop/x_32,y_0,w_350,h_472/fill/w_420,h_566,al_c,lg_1,q_80/5d88e3_f4ca78aa5ba5450c8dc57faf65705af9~mv2.jpg',
            website : 'https://www.artofspirit.co.uk/',
            linkable: true
        },

        4: {
            firstname : 'Bill',
            lastname: 'Rae',
            description: "Bill is a medium serving spiritualist churches, and also can give one to one readings, mediumship development classes from beginners to more advanced levels, and meditation training",
            photo: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-1/c113.33.414.414/s160x160/184818_1888579301003_4634483_n.jpg?oh=29e62939cf558f41be4e78d5ac28195a&oe=59461C18',
            website : 'https://www.facebook.com/bill.rae1',
            linkable: true
        },

        5: {
            firstname : 'Marc',
            lastname: 'Impey',
            description: 'Marc has been an established spiritualist medium for over a decade now, serving many spiritualist churches and theatres both in the UK and abroad.He has a wonderful, intricate and highly evidential way of delivering messages from those in spirit who wish to reach out and touch once again the hearts of their loved ones',
            photo: 'http://www.aurafusion.co.uk/wp-content/uploads/2015/08/Marc-Impey1.jpg',
            website : 'http://www.aurafusion.co.uk/marc-impey/',
            linkable: true
        },
        6 : {
            firstname : 'Paula',
            lastname: 'Vgori',
            description: '',
            photo: '',
            website : '',
            linkable: false
        },
        7 : {
            firstname : 'Michele',
            lastname: 'Gomie',
            description: '',
            photo: '',
            website : '',
            linkable: false
        },

        8 : {
            firstname : 'Andy',
            lastname: 'Mulligan',
            description: '',
            photo: '',
            website : '',
            linkable: false
        },

        9 : {
            firstname : 'David',
            lastname: 'Burke',
            description: '',
            photo: '',
            website : '',
            linkable: false
        },

        10 : {
            firstname : 'Karen',
            lastname: 'Wood',
            description: '',
            photo: '',
            website : '',
            linkable: false
        },

        11 : {
            firstname : 'Nicky',
            lastname: 'Huntingford',
            description: '',
            photo: '',
            website : '',
            linkable: false
        },

        12 : {
            firstname : 'Sid',
            lastname: 'Privett',
            description: '',
            photo: '',
            website : '',
            linkable: false
        },

        13 : {
            firstname : 'Mary',
            lastname: 'Regan',
            description: '',
            photo: '',
            website : '',
            linkable: false
        },

        14 : {
            firstname : 'Janet',
            lastname: 'Neville',
            description: '',
            photo: '',
            website : '',
            linkable: false
        },

        15 : {
            firstname : 'Jan',
            lastname: 'Hall',
            description: '',
            photo: '',
            website : '',
            linkable: false
        },

        16 : {
            firstname : 'Kerry',
            lastname: 'Light',
            description: '',
            photo: '',
            website : '',
            linkable: false
        },

        17 : {
            firstname : 'Del',
            lastname: 'Hodd',
            description: '',
            photo: '',
            website : '',
            linkable: false
        },

        18 : {
            firstname : 'Owen',
            lastname: 'Williams',
            description: '',
            photo: '',
            website : '',
            linkable: false
        }
    }
};

export default Data;