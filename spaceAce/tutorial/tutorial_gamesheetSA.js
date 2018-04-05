
var gameCfg = {
    "levels": [
        {
            "label":"cadet", 
            "description":"It can't get easier than this! You have 7 lives!! Good luck ;)", 
            "lives":7, 
            "score":150
        },
        {
            "label":"captain",
            "description":"Ok, This might be a little more tricky. You have 5 lives! Save Sindi!",
            "lives":5,
            "score":200
        },    
        {
            "label":"ace", 
            "description":"Are you a hero? Complete the saga with 3 lives", 
            "lives":3,
            "score":300
        }       
    ],
    "stageTitle":[
        "Borf kidnaps Kimberly",
        "Spaceship labirint, Borf's base approach", 
        "Borf's base Electrics cylindrics pitfalls", 
        "Borf's base red sentinels and floatings stairs",
        "Cemetery of Monster",
        "Future City",
        "Meet Orishala",
        "Skull-Bat Fighting",
        "Floating Platforms",
        "Fire Ball Labirinth",
        "Emperor Esh Castel",
        "Orishala Duel",
        "Big Hand Sindi Prison",
        "Escape from Castle on Esh's space veicle",
        "Real Form of Emperor Esh",
        "Escape and Destroy Esh Empire"
    ],
    "stageSubTitle":[
        "Fight with the borf's mecha to reach Dexter/Ace's spaceship",
        "Take the right direction and destroy all steel rounded meteors",
        "Go trough the electric Cylinders and find the right way for next stage",
        "Use your skill to fight with the big Piranha",
        "Mummy, Golems and Zombies cand you do it?","welcom to the city of Empire, destroy all robots and run away of the fire",
        "First meeting with Orishala (the Queen of Esh's Empire), try to defeat her but pay attention to her Black Magic",
        "Flight on your Super Hang Glider, fight the Bats, and pay attention to the turbo boost and the landing",
        "Dont fall, use your reflex to ride Don Davis on the disappearing floating platform"
    ]
};
var data = {
    "checkPointScore":0,
    "checkPoints":[         
        {   // spaceship labirynt
            "id":2,
            "newStage":112.25,
            //"newStage":124.25,
            "title": "labirynt move",
            "active":false,
            "startTime":125.5,
            "endTime":126.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":153, 
                "failEndTime":154
            },
            "wrongMove2":{
                "failStartTime":153, 
                "failEndTime":154
            }
        },
        {   // spaceship labirynt
            "id":2,
            "title": "labirynt move2",
            "active":false,
            "startTime":127.7,
            "endTime":128.7,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":153, 
                "failEndTime":154
            },
            "wrongMove2":{
                "failStartTime":154.5, 
                "failEndTime":155.75
            }
        },
        {   
            //ERROR //ERROR //ERROR //ERROR
            "id":2,
            "title": "labirynt move3",
            "active":false,
            "startTime":130,
            "endTime":131,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
               "failStartTime":153, 
                "failEndTime":154
            },
            "wrongMove2":{
                "failStartTime":154.5, 
                "failEndTime":155.75
            }
        },
        {   
            "id":2,
            "title": "labirynt ball fire",
            "active":false,
            "startTime":132.25,
            "endTime":133.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":158.25, 
                "failEndTime":159.7
            },
            "wrongMove2":{
                "failStartTime":158.25, 
                "failEndTime":159.7
            },
        },
        {   // spaceship labirynt
            "id":2,
            "title": "labirynt move4",
            "active":false,
            "startTime":135,
            "endTime":136,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":153, 
                "failEndTime":154
            },
            "wrongMove2":{
                "failStartTime":154.5, 
                "failEndTime":156
            },
        },
        {   // spaceship labirynt
            "id":2,
            "title": "labirynt ball fire",
            "active":false,
            "startTime":136.75,
            "endTime":137.75,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":158.25, 
                "failEndTime":159.75
            },
            "wrongMove2":{
                "failStartTime":158.25, 
                "failEndTime":159.75
            },
        },
        {   // spaceship labirynt
            "id":2,
            "title": "labirynt move5",
            "active":false,
            "startTime":138.9,
            "endTime":139.9,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
             "wrongMove1":{
                "failStartTime":153, 
                "failEndTime":154
            },
            "wrongMove2":{
                "failStartTime":154.5, 
                "failEndTime":156.2
            },
        },
        {   // spaceship labirynt
            "id":2,
            "title": "labirynt ball fire",
            "active":false,
            "startTime":141.75,
            "endTime":142.75,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":158.25, 
                "failEndTime":159.75
            },
            "wrongMove2":{
               "failStartTime":158.25, 
                "failEndTime":159.75
            },
        },        
        {   // spaceship labirynt
            "id":2,
            "jumpTo": 216.6,
            "title": "base landing",
            "active":false,
            "startTime":144.2,
            "endTime":145.2,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":160.75, 
                "failEndTime":164
            },
            "wrongMove2":{
                "failStartTime":160.75, 
                "failEndTime":164
            },
            "finishStage":145.8           
        },
        
    ],          
};


