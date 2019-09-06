
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
            "description":"Ok, This might be a little more tricky. You have 5 lives! Save Kimmy!",
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
        
        {   
            "id":1,
            "newStage": 48.9,
            "title": "spying enemy basement1",
            "active":false,
            "startTime":54,                                      
            "endTime":55,
            "complete": false,
            "pressed": false,
            "correctMove":"right",                     
            "wrongMove1":{
                //"kind": "left",
                "failStartTime":96.75, 
                "failEndTime":97.75
            },
            "wrongMove2":{
                //"kind": "none",
                 "failStartTime":96.75, 
                "failEndTime":97.75
            },      
        },       
        {   // electric wall
            "id":1,
            "title": "spying enemy basement3",
            "active":false,
            "startTime":56,
            "endTime":57,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{               
                "failStartTime":96.75, 
                "failEndTime":97.75
            },
            "wrongMove2":{               
                 "failStartTime":96.75, 
                "failEndTime":97.75
            },     
        },  
        {   // electric wall
            "id":1,
            "title": "run to take spaceship1",
            "active":false,
            "startTime":59.7,
            "endTime":60.7,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{               
                "failStartTime":96.75, 
                "failEndTime":97.75
            },
            "wrongMove2":{               
                 "failStartTime":96.75, 
                "failEndTime":97.75
            }, 
        },
        {   // electric wall
            "id":1,
            "title": "run to take spaceship2",
            "active":false,
            "startTime":61.5,
            "endTime":62.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{               
                "failStartTime":96.75, 
                "failEndTime":97.75
            },
            "wrongMove2":{               
                 "failStartTime":96.75, 
                "failEndTime":97.75
            }, 
        },
        {   // electric wall
            "id":1,
            "title": "run to take spaceship2",
            "active":false,
            "startTime":63.5,
            "endTime":64.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{               
                "failStartTime":96.75, 
                "failEndTime":97.75
            },
            "wrongMove2":{               
                 "failStartTime":96.75, 
                "failEndTime":97.75
            }, 
        },
        {   // direnction
            "id":1,
            "title":"energy fire",
            "active":false,
            "startTime":67.5,
            "endTime":68.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":98.25, 
                "failEndTime":99.5
            },
            "wrongMove2":{
                "failStartTime":98.25, 
                "failEndTime":99.5
            }
        },        
        {   // blade 
            "id":1,
            "title": "energy jump",
            "active":false,
            "startTime":69.5,
            "endTime":70.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":108.1, 
                "failEndTime":110
            },
            "wrongMove2":{
               "failStartTime":108.1, 
                "failEndTime":110
            }
        },        
        {   // platform mobile 
            "id":1,
            "title": "platform mobile",
            "active":false,
            "startTime":71.5,
            "endTime":72,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":108.1, 
                "failEndTime":110
            },
            "wrongMove2":{
               "failStartTime":108.1, 
                "failEndTime":110
            }
        },        
        {   // platform mobile 
            "id":1,
            "title": "platform mobile",
            "active":false,
            "startTime":73.5,
            "endTime":74.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":104.25, 
                "failEndTime":107.75
            },
            "wrongMove2":{
                "failStartTime":98.25, 
                "failEndTime":99.5
            }
        },
        {   // platform mobile
            "id":1,
            "title": "platform mobile",
            "active":false,
            "startTime":76.2,
            "endTime":77.2,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":108.1, 
                "failEndTime":110
            },
            "wrongMove2":{
               "failStartTime":108.1, 
                "failEndTime":110
            }
        },
        {   // platform mobile 
            "id":1,
            "title": "platform mobile",
            "active":false,
            "startTime":81,
            "endTime":81.7,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":102.5, 
                "failEndTime":104
            },
            "wrongMove2":{
                 "failStartTime":102.5, 
                "failEndTime":104
            }
        },
        {   // platform mobile 
            "id":1,
            "title": "platform mobile",
            "active":false,
            "startTime":83,
            "endTime":83.7,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":102.5, 
                "failEndTime":104
            },
            "wrongMove2":{
                 "failStartTime":102.5, 
                "failEndTime":104
            }
        },
        {   // platform mobile
            "id":1,
            "title": "platform mobile",
            "active":false,
            "startTime":85,
            "endTime":85.7,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":102.5, 
                "failEndTime":104
            },
            "wrongMove2":{
                 "failStartTime":102.5, 
                "failEndTime":104
            }
        },
        {   // platform mobile 
            "id":1,
            "title": "platform mobile",
            "active":false,
            "startTime":87.7,
            "endTime":88.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":102.5, 
                "failEndTime":104
            },
            "wrongMove2":{
                 "failStartTime":102.5, 
                "failEndTime":104
            }
        },
        {   // platform mobile
            "id":1,
            "jumpTo": 112.25,
            "title": "platform mobile",
            "active":false,
            "startTime":91.2,
            "endTime":92.2,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":102.5, 
                "failEndTime":104
            },
            "wrongMove2":{
                 "failStartTime":102.5, 
                "failEndTime":104
            },
            "finishStage":96,
            "gameComplete": true
            
        },        
    ],          
};


