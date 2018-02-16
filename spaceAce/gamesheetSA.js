
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
        /*
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
            "jumpTo": 112.1,
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
            "finishStage":96.25
            
        }, 
        */
        //fine id 1
        /*
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
        */
        //fine ID 2
        /*
        {   // inside borf's base
            "id":3,
            "newStage":216.6,
            "title": "energy trap move Dexter",
            "active":false,
            "startTime":218.5,
            "endTime":219.7,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":272.7, 
                "failEndTime":276
            },
            "wrongMove2":{
                "failStartTime":272.7, 
                "failEndTime":276
            },
        },
        {   // inside borf's base   
            "id":3,
            "title": "energy trap move2 Dexter",
            "active":false,
            "startTime":221,
            "endTime":222,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":272.2, 
                "failEndTime":276
            },
            "wrongMove2":{
                "failStartTime":272.2, 
                "failEndTime":276
            },
        },
        {   // inside borf's base   
            "id":3,
            "title": "energy trap move3 Dexter",
            "active":false,
            "startTime":223,
            "endTime":224,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":272.7, 
                "failEndTime":276
            },
            "wrongMove2":{
                "failStartTime":272.7, 
                "failEndTime":276
            },
        },
        {   // inside borf's base  
            "id":3,
            "title": "energy trap move4 Dexter",
            "active":false,
            "startTime":225.25,
            "endTime":226.25,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
           "wrongMove1":{
                "failStartTime":272.7, 
                "failEndTime":276
            },
            "wrongMove2":{
                "failStartTime":272.7, 
                "failEndTime":276
            },
        },
        {   // inside borf's base     
            "id":3,
            "title": "energy trap move1 Ace",
            "active":false,
            "startTime":228,
            "endTime":229,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
           "wrongMove1":{
                "failStartTime":272.7, 
                "failEndTime":276
            },
            "wrongMove2":{
                "failStartTime":272.7, 
                "failEndTime":276
            },
        },
        {   // inside borf's base     
            "id":3,
            "title": "energy trap move1 Ace",
            "active":false,
            "startTime":232.5,
            "endTime":233.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":265, 
                "failEndTime":267.75
            },
            "wrongMove2":{
                "failStartTime":265, 
                "failEndTime":267.75
            },
        },
        {   // inside borf's base   
            "id":3,
            "title": "enemy fire Ace",
            "active":false,
            "startTime":235,
            "endTime":236,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":268.5, 
                "failEndTime":272.2
            },
            "wrongMove2":{
                "failStartTime":268.5, 
                "failEndTime":272.2
            },
        },
        {   // inside borf's base     
            "id":3,
            "title": "energy trap move2 Ace",
            "active":false,
            "startTime":237.5,
            "endTime":238.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":268.5, 
                "failEndTime":272.2
            },
            "wrongMove2":{
                "failStartTime":268.5, 
                "failEndTime":272.2
            },
        },
        {   // inside borf's base    
            "id":3,
            "title": "energy trap move2 Ace",
            "active":false,
            "startTime":240,
            "endTime":241,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":268.5, 
                "failEndTime":272.2
            },
            "wrongMove2":{
                 "failStartTime":268.5, 
                "failEndTime":272.2
            },
        },
        {   // inside borf's base  
            "id":3,
            "title": "enemy fire Ace",
            "active":false,
            "startTime":242.25,
            "endTime":243.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
              "wrongMove1":{
                "failStartTime":268.5, 
                "failEndTime":272.2
            },
            "wrongMove2":{
                "failStartTime":153, 
                "failEndTime":272.2
            },
        },
        {   // inside borf's base  
            "id":3,
            "title": "energy trap move5 Dexter",
            "active":false,
            "startTime":247,
            "endTime":248,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":272.7, 
                "failEndTime":276
            },
            "wrongMove2":{
                "failStartTime":272.7, 
                "failEndTime":276
            },
        },
        {   // inside borf's base
            "id":3,
            "title": "energy trap move6 Dexter",
            "jumpTo":336.75,
            "active":false,
            "startTime":251.75,
            "endTime":252.75,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
           "wrongMove1":{
                "failStartTime":272.7, 
                "failEndTime":276
            },
            "wrongMove2":{
                "failStartTime":272.7, 
                "failEndTime":276
            },
            "finishStage":254.2
        },
        // end ID 3
        */
        /*
        {   
            "id":4,
            "newStage":336.75,
            "title": "sentinel robot Dexter",
            "active":false,
            "startTime":339.75,
            "endTime":340.75,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":394.7, 
                "failEndTime":397.7
            },
            "wrongMove2":{
                 "failStartTime":394.7, 
                "failEndTime":397.7
            }
        },
        {   
            "id":4,
            "title": "sentinel robot2 Dexter",
            "active":false,
            "startTime":342.75,
            "endTime":343.75,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":394.7, 
                "failEndTime":397.7
            },
            "wrongMove2":{
                 "failStartTime":394.7, 
                "failEndTime":397.7
            }
        },
        {  
            "id":4,
            "title": "sentinel robot3 ace",
            "active":false,
            "startTime":346.75,
            "endTime":347.75,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":394.7, 
                "failEndTime":397.7
            },
            "wrongMove2":{
                 "failStartTime":394.7, 
                "failEndTime":397.7
            }
        },
        {  
            "id":4,
            "title": "sentinel robot3 ace",
            "active":false,
            "startTime":350.2,
            "endTime":351.2,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":385, 
                "failEndTime":386
            },
            "wrongMove2":{
                "failStartTime":386.75, 
                "failEndTime":389.25
            }
        },
        {   "id":4,          
            "title": "sentinel robot3 ace",
            "active":false,
            "startTime":353.25,
            "endTime":354.25,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":386.75, 
                "failEndTime":389.25
            },
            "wrongMove2":{
                 "failStartTime":386.75, 
                "failEndTime":389.25
            }
        },        
         {   "id":4,        
            "title": "sentinel robot3 ace",
            "active":false,
            "startTime":356,
            "endTime":357,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":383.9, 
                "failEndTime":386
            },
            "wrongMove2":{
                "failStartTime":386, 
                "failEndTime":389.3
            }
        },
        {   "id":4,          
            "title": "sentinel robot3 ace",
            "active":false,
            "startTime":358.5,
            "endTime":359.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":383.9, 
                "failEndTime":386
            },
            "wrongMove2":{
                "failStartTime":386, 
                "failEndTime":389.3
            }
        },
        {   "id":4,          
            "title": "sentinel robot3 ace",
            "active":false,
            "startTime":360.5,
            "endTime":361.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                 "failStartTime":386.4, 
                "failEndTime":389.3
            },
            "wrongMove2":{
                  "failStartTime":386.4, 
                "failEndTime":389.3
            }
        },
        {   "id":4,         
            "title": "sentinel robot3 ace",
            "active":false,
            "startTime":364.25,
            "endTime":365.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":383.9, 
                "failEndTime":386
            },
            "wrongMove2":{
                "failStartTime":386, 
                "failEndTime":389.3
            }
        },
        {   "id":4,    
            "jumpTo":378,
            "title": "sentinel robot3 ace",
            "active":false,
            "startTime":367,
            "endTime":368,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":383.9, 
                "failEndTime":386
            },
            "wrongMove2":{
                "failStartTime":386, 
                "failEndTime":389.3
            },
            "finishStage":370
        },             
        {   "id":4,         
            "title": "sentinel robot3 Dexter",
            "active":false,
            "startTime":377,
            "endTime":378,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":393, 
                "failEndTime":394.2
            },
            "wrongMove2":{
                "failStartTime":393, 
                "failEndTime":394.2
            },
        }, 
        
        {   "id":4,
            "newStage": 375,
            "title": "sentinel robot3 Dexter",
            "active":false,
            "startTime":379,
            "endTime":380,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
           "wrongMove1":{
                "failStartTime":393, 
                "failEndTime":394.2
            },
            "wrongMove2":{
                "failStartTime":393, 
                "failEndTime":394.2
            },
        },
        {  "id":4,  
           "jumpTo": 459.75,
            "title": "sentinel robot3 Dexter",
            "active":false,
            "startTime":381,
            "endTime":382,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
           "wrongMove1":{
                "failStartTime":393, 
                "failEndTime":394.2
            },
            "wrongMove2":{
                "failStartTime":393, 
                "failEndTime":394.2
            },
         "finishStage":383
        },        
        //End id 4
        */
        /*
        {   
            "id":5,
            "newStage":459.75,
            "title": "escape fire and green wolves Dexter",
            "active":false,
            "startTime":460.7,
            "endTime":461.7,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":504.2, 
                "failEndTime":507.2
            },
            "wrongMove2":{
                "failStartTime":504.2, 
                "failEndTime":507.2
            }
        },
        {   "id":5,          
            "title": "escape fire and green wolves2 Dexter",
            "active":false,
            "startTime":462.7,
            "endTime":463.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
                "failStartTime":504.2, 
                "failEndTime":507.2
            },
            "wrongMove2":{
                "failStartTime":504.2, 
                "failEndTime":507.2
            }
        },    
        {   "id":5,          
            "title": "escape fire and green wolves3 Dexter",
            "active":false,
            "startTime":464.5,
            "endTime":465.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":504.2, 
                "failEndTime":507.2
            },
            "wrongMove2":{
                "failStartTime":504.2, 
                "failEndTime":507.2
            }
        },    
        {   "id":5,    
            "title": "energy Ace",
            "active":false,
            "startTime":466.7,
            "endTime":467.7,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":502.2, 
                "failEndTime":503.8
            },
            "wrongMove2":{
                 "failStartTime":502.2, 
                "failEndTime":503.8
            }
        },    
        {   "id":5,
            "title": "wolves fight Ace",
            "active":false,
            "startTime":470,
            "endTime":471,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":502.2, 
                "failEndTime":503.8
            },
            "wrongMove2":{
                 "failStartTime":502.2, 
                "failEndTime":503.8
            }
        },
        {   "id":5,         
            "title": "robot fight Ace",
            "active":false,
            "startTime":472.5,
            "endTime":473.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":499, 
                "failEndTime":500.2
            },
            "wrongMove2":{
                 "failStartTime":499, 
                "failEndTime":500.2
            }
        },
        {   "id":5,          
            "title": "escape fire Ace",
            "active":false,
            "startTime":474.2,
            "endTime":475,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":499, 
                "failEndTime":500.2
            },
            "wrongMove2":{
                 "failStartTime":499, 
                "failEndTime":500.2
            }
        },
        {   "id":5,            
            "title": "escape fire wolves Ace",
            "active":false,
            "startTime":476,
            "endTime":477,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":499, 
                "failEndTime":500.2
            },
            "wrongMove2":{
                 "failStartTime":499, 
                "failEndTime":500.2
            }
        },
         {  "id":5,            
            "title": "escape fire2  Ace",
            "active":false,
            "startTime":478.7,
            "endTime":479.7,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":502.2, 
                "failEndTime":503.8
            },
            "wrongMove2":{
                 "failStartTime":502.2, 
                "failEndTime":503.8
            }
        },
        {   "id":5,        
            "title": "robot fight2 Ace",
            "active":false,
            "startTime":481,
            "endTime":482,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":499, 
                "failEndTime":500.2
            },
            "wrongMove2":{
                 "failStartTime":499, 
                "failEndTime":500.2
            }
        },
        {   "id":5, 
            "jumpTo": 555.7,
            "title": "escape fire3 Ace",
            "active":false,
            "startTime":483.7,
            "endTime":484.7,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
           "wrongMove1":{
                "failStartTime":499, 
                "failEndTime":500.2
            },
            "wrongMove2":{
                 "failStartTime":499, 
                "failEndTime":500.2
            },
            "finishStage":491,
        },
        //end of id 5
        */
        /*
        {   "id":6,
            "newStage":555.7,
            "title": "robot fire Dexter",
            "active":false,
            "startTime":556.7,
            "endTime":557.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":585.75, 
                "failEndTime":589
            },
            "wrongMove2":{
                "failStartTime":585.75, 
                "failEndTime":589
            }
        },
        {   "id":6,      
            "title": "press Dexter",
            "active":false,
            "startTime":558.5,
            "endTime":559.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":589.5, 
                "failEndTime":590.5
            },
            "wrongMove2":{
                 "failStartTime":589.5, 
                "failEndTime":590.5
            }
        },
        {   "id":6,          
            "title": "floating pistons Dexter",
            "active":false,
            "startTime":560.2,
            "endTime":561.2,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":591, 
                "failEndTime":592
            },
            "wrongMove2":{
                "failStartTime":591, 
                "failEndTime":592
            }
        },
        {   "id":6,       
            "title": "energy ace",
            "active":false,
            "startTime":563.25,
            "endTime":564.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":586, 
                "failEndTime":589
            },
            "wrongMove2":{
                "failStartTime":586, 
                "failEndTime":589
            }
        },
        {   "id":6,    
            "title": "monster fire Ace",
            "active":false,
            "startTime":565.25,
            "endTime":566.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":592.5, 
                "failEndTime":594.25
            },
            "wrongMove2":{
                "failStartTime":594.75, 
                "failEndTime":595.75
            }
        },
        {   "id":6,
            "title": "monster fire Ace",
            "active":false,
            "startTime":567.2,
            "endTime":568,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":598.25, 
                "failEndTime":599.25
            },
            "wrongMove2":{
                 "failStartTime":598.25, 
                "failEndTime":599.25
            }
        },
        {   "id":6,       
            "title": "monster fire Ace",
            "active":false,
            "startTime":568.7,
            "endTime":569.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
               "failStartTime":592.5, 
                "failEndTime":594.25
            },
            "wrongMove2":{
                "failStartTime":594.75, 
                "failEndTime":595.75
            }
        },
        {   "id":6,        
            "title": "monster fire Ace",
            "active":false,
            "startTime":570,
            "endTime":571.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                 "failStartTime":598.5, 
                "failEndTime":599.25
            },
            "wrongMove2":{
                "failStartTime":600, 
                "failEndTime":603.5
            }
        },
        {   "id":6,     
            "title": "monster fire Ace",
            "active":false,
            "startTime":572.2,
            "endTime":573,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":592.75, 
                "failEndTime":594
            },
            "wrongMove2":{
                "failStartTime":594.75, 
                "failEndTime":595.75
            }
        },
        {   "id":6,        
            "title": "monster fire Dexter",
            "active":false,
            "startTime":574,
            "endTime":575,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
               "failStartTime":589.5, 
                "failEndTime":590.5
            },
            "wrongMove2":{
                 "failStartTime":589.5, 
                "failEndTime":590.5
            }           
        },
        {   "id":6,         
            "title": "monster fire Dexter",
            "active":false,
            "startTime":577,
            "endTime":578,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":586, 
                "failEndTime":589
            },
            "wrongMove2":{
                "failStartTime":586, 
                "failEndTime":589
            }
        },         
        {   "id":6,
            "title": "monster fire Dexter",
            "active":false,
            "startTime":579,
            "endTime":579.7,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
               "failStartTime":589.75, 
                "failEndTime":590.5
            },
            "wrongMove2":{
               "failStartTime":589.75, 
                "failEndTime":590.5
            }
        },  
        {   "id":6,
            "title": "monster fire Dexter",
            "active":false,
            "startTime":580.7,
            "endTime":581.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
               "failStartTime":589.75, 
                "failEndTime":590.5
            },
            "wrongMove2":{
               "failStartTime":589.75, 
                "failEndTime":590.5
            }
        }, 
        {   "id":6,
            "jumpTo":652,
            "title": "monster fire Dexter",
            "active":false,
            "startTime":582.5,
            "endTime":583.2,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
               "failStartTime":589.75, 
                "failEndTime":590.5
            },
            "wrongMove2":{
               "failStartTime":589.75, 
                "failEndTime":590.5
            },
            "finishStage":585.25
        }, 
        // end id 6
        */
        {   "id":7,
            "newStage":652,
            "title": "flame escape Dexter",
            "active":false,
            "startTime":652,
            "endTime":653,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":688.1, 
                "failEndTime":691.4
            },
            "wrongMove2":{
                 "failStartTime":688.1, 
                "failEndTime":691.4
            }
        },
    ],          
};

var gameSheet7 = {
    "checkPoints":[
        {   // spaceship fight
            "newStage":652,
            "title": "flame escape Dexter",
            "active":false,
            "startTime":652,
            "endTime":653,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":688.1, 
                "failEndTime":691.4
            },
            "wrongMove2":{
                 "failStartTime":688.1, 
                "failEndTime":691.4
            },
        },
        {   // spaceship fight            
            "title": "flame escape2 Dexter",
            "active":false,
            "startTime":653.7,
            "endTime":654.7,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":688.1, 
                "failEndTime":691.4
            },
            "wrongMove2":{
                 "failStartTime":688.1, 
                "failEndTime":691.4
            },
        },
        {   // spaceship fight            
            "title": "enter space island Dexter",
            "active":false,
            "startTime":655.2,
            "endTime":656.2,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":679.5, 
                "failEndTime":680.7
            },
            "wrongMove2":{
                "failStartTime":679.5, 
                "failEndTime":680.7
            },
        },
        {   // spaceship fight            
            "title": "avoid laser enemy laser Dexter",
            "active":false,
            "startTime":657.5,
            "endTime":658.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
           "wrongMove1":{
                "failStartTime":679.5, 
                "failEndTime":680.7
            },
            "wrongMove2":{
                "failStartTime":679.5, 
                "failEndTime":680.7
            },
        },
        {   // spaceship fight            
            "title": "avoid enemy laser2 Dexter",
            "active":false,
            "startTime":659,
            "endTime":660,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":679.5, 
                "failEndTime":680.7
            },
            "wrongMove2":{
                "failStartTime":679.5, 
                "failEndTime":680.7
            },
        },
        {   // spaceship fight            
            "title": "avoid enemy laser3 Dexter",
            "active":false,
            "startTime":660.9,
            "endTime":661.7,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":679.5, 
                "failEndTime":680.7
            },
            "wrongMove2":{
                "failStartTime":679.5, 
                "failEndTime":680.7
            },
        },
        {   // spaceship fight            
            "title": "avoid enemy laser4 Dexter",
            "active":false,
            "startTime":662.7,
            "endTime":663.7,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":683.8, 
                "failEndTime":685.1
            },
            "wrongMove2":{
                "failStartTime":683.8, 
                "failEndTime":685.1
            },
        },
        {   // spaceship fight            
            "title": "avoid enemy laser5 Dexter",
            "active":false,
            "startTime":664.2,
            "endTime":665,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":683.8, 
                "failEndTime":685.1
            },
            "wrongMove2":{
                "failStartTime":683.8, 
                "failEndTime":685.1
            },
        },
        {   // spaceship fight            
            "title": "avoid enemy laser5 Dexter",
            "active":false,
            "startTime":667.7,
            "endTime":668.7,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":680.8, 
                "failEndTime":682.3
            },
            "wrongMove2":{
                 "failStartTime":680.8, 
                "failEndTime":682.3
            },
        },
        {   // spaceship fight            
            "title": "avoid enemy laser6 Dexter",
            "active":false,
            "startTime":669,
            "endTime":670,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":679.5, 
                "failEndTime":680.7
            },
            "wrongMove2":{
                "failStartTime":679.5, 
                "failEndTime":680.7
            },
        },
        {   // spaceship fight            
            "title": "avoid enemy laser7 Dexter",
            "active":false,
            "startTime":670.5,
            "endTime":671.2,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":683.8, 
                "failEndTime":685.1
            },
            "wrongMove2":{
                "failStartTime":683.8, 
                "failEndTime":685.1
            },
        },
        {   // spaceship fight            
            "title": "space castle Dexter",
            "active":false,
            "startTime":672,
            "endTime":672.8,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
           "wrongMove1":{
                "failStartTime":682.5, 
                "failEndTime":683.8
            },
            "wrongMove2":{
                "failStartTime":682.5, 
                "failEndTime":683.8
            },
        },
        {   // spaceship fight            
            "title": "space castle Dexter",
            "active":false,
            "startTime":673,
            "endTime":674,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":683.8, 
                "failEndTime":685.1
            },
            "wrongMove2":{
                "failStartTime":683.8, 
                "failEndTime":685.1
            },
        },
        {   // spaceship fight            
            "title": "space castle Dexter",
            "active":false,
            "startTime":674.7,
            "endTime":675.7,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":679.5, 
                "failEndTime":680.7
            },
            "wrongMove2":{
                "failStartTime":679.5, 
                "failEndTime":680.7
            },
        },
        {   // spaceship fight            
            "title": "space castle Dexter",
            "active":false,
            "startTime":676.9,
            "endTime":677.9,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":683.8, 
                "failEndTime":685.1
            },
            "wrongMove2":{
                "failStartTime":683.8, 
                "failEndTime":685.1
            },
            "endStage": 679.3
        },
        ],
};
var gameSheet8 = {
    "checkPoints":[
        {   // circular platform floating
            "newStage":731.2,
            "title": "escape inside drone Dexter",
            "active":false,
            "startTime":734.4,
            "endTime":735.4,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":762, 
                "failEndTime":763.3
            },
            "wrongMove2":{
                "failStartTime":762, 
                "failEndTime":763.3
            },
        },
         {  // circular platform floating           
            "title": "escape inside drone2 Dexter",
            "active":false,
            "startTime":736.2,
            "endTime":737.1,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
                "failStartTime":762, 
                "failEndTime":763.3
            },
            "wrongMove2":{
                "failStartTime":762, 
                "failEndTime":763.3
            },
        },
        {   // spaceship fight            
            "title": "escape inside drone3 Dexter",
            "active":false,
            "startTime":737.9,
            "endTime":738.9,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":762, 
                "failEndTime":763.3
            },
            "wrongMove2":{
                "failStartTime":762, 
                "failEndTime":763.3
            },
        },
        {   // spaceship fight            
            "title": "escape inside drone4 Dexter",
            "active":false,
            "startTime":739.2,
            "endTime":740.2,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":762, 
                "failEndTime":763.3
            },
            "wrongMove2":{
                "failStartTime":762, 
                "failEndTime":763.3
            },
        },
        {   // spaceship fight            
            "title": "escape inside drone5 Ace",
            "active":false,
            "startTime":741.5,
            "endTime":742.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":763.2, 
                "failEndTime":765
            },
            "wrongMove2":{
                "failStartTime":763.2, 
                "failEndTime":765
            },
        },
        {   // spaceship fight            
            "title": "escape inside drone6 Ace",
            "active":false,
            "startTime":743.6,
            "endTime":744.6,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":763.2, 
                "failEndTime":765
            },
            "wrongMove2":{
                "failStartTime":763.2, 
                "failEndTime":765
            },
        },
        {   // spaceship fight            
            "title": "escape inside drone7 Ace",
            "active":false,
            "startTime":745.4,
            "endTime":746.4,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":763.2, 
                "failEndTime":765
            },
            "wrongMove2":{
                "failStartTime":763.2, 
                "failEndTime":765
            },
        },
        {   // spaceship fight            
            "title": "escape inside drone8 Ace",
            "active":false,
            "startTime":747.4,
            "endTime":748.2,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":763.2, 
                "failEndTime":765
            },
            "wrongMove2":{
                "failStartTime":763.2, 
                "failEndTime":765
            },
        },
        {   // spaceship fight            
            "title": "escape inside drone8 Ace",
            "active":false,
            "startTime":749.5,
            "endTime":750.3,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":802.5, 
                "failEndTime":805.6
            },
            "wrongMove2":{
                "failStartTime":763.2, 
                "failEndTime":805.6
            },
        },
        {   // spaceship fight            
            "title": "escape inside drone9 dexter",
            "active":false,
            "startTime":751.5,
            "endTime":752.2,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":760.25, 
                "failEndTime":761.9
            },
            "wrongMove2":{
                 "failStartTime":760.25, 
                "failEndTime":761.9
            },
            "endStage":754.8
        },
    ],
};
var gameSheet9 = {
    "checkPoints":[
        {   // space jungle
            "newStage":805.8,
            "title": "Dexter",
            "active":false,
            "startTime":806.5,
            "endTime":807.4,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":836.8, 
                "failEndTime":838.1
            },
            "wrongMove2":{
                 "failStartTime":836.8, 
                "failEndTime":838.1
            },
        },
        {   // space jungle           
            "title": "Dexter",
            "active":false,
            "startTime":808.5,
            "endTime":809.3,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":836.8, 
                "failEndTime":838.1
            },
            "wrongMove2":{
                 "failStartTime":836.8, 
                "failEndTime":838.1
            },
        },
        {   // space jungle           
            "title": "Dexter",
            "active":false,
            "startTime":810.2,
            "endTime":811,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":840.2, 
                "failEndTime":841.45
            },
            "wrongMove2":{
                "failStartTime":840.2, 
                "failEndTime":841.45
            },
        },
        {   // space jungle           
            "title": "energy Dexter",
            "active":false,
            "startTime":813.5,
            "endTime":814.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":838.4, 
                "failEndTime":840.1
            },
            "wrongMove2":{
                "failStartTime":838.4, 
                "failEndTime":840.1
            },
        },
        /*{   // space jungle           
            "title": "ace",
            "active":false,
            "startTime":813.5,
            "endTime":814.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":762, 
                "failEndTime":763.3
            },
            "wrongMove2":{
                "failStartTime":762, 
                "failEndTime":763.3
            },
        },*/
         {   // space jungle           
            "title": "ace",
            "active":false,
            "startTime":815.5,
            "endTime":816.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":843.2, 
                "failEndTime":844.5
            },
            "wrongMove2":{
                "failStartTime":843.2, 
                "failEndTime":844.5
            },
        },
        {   // space jungle           
            "title": "ace",
            "active":false,
            "startTime":817.6,
            "endTime":818.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":844.75, 
                "failEndTime":848
            },
            "wrongMove2":{
                 "failStartTime":844.75, 
                "failEndTime":848
            },
        },
        {   // space jungle           
            "title": "ace",
            "active":false,
            "startTime":819,
            "endTime":820,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":843.2, 
                "failEndTime":844.6
            },
            "wrongMove2":{
                "failStartTime":843.2, 
                "failEndTime":844.6
            },
        },
        {   // space jungle           
            "title": "Dexter",
            "active":false,
            "startTime":821.3,
            "endTime":822.3,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":841.6, 
                "failEndTime":843.1
            },
            "wrongMove2":{
                "failStartTime":840.2, 
                "failEndTime":843.1
            },
            "endStage":823.3
        },
    ],
};
var gameSheet10 = {
    "checkPoints":[
        {   // space biker
            "newStage":890.5,
            "title": "Dexter",
            "active":false,
            "startTime":891.7,
            "endTime":892.7,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":926.5, 
                "failEndTime":927.4
            },
            "wrongMove2":{
                 "failStartTime":926.5, 
                "failEndTime":927.4
            },
        },
        {   // space biker            
            "title": "Dexter",
            "active":false,
            "startTime":895.4,
            "endTime":896.2,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":927.8, 
                "failEndTime":928.9
            },
            "wrongMove2":{
                "failStartTime":927.8, 
                "failEndTime":928.9
            },
        },
         {   // space biker
            "title": "Dexter",
            "active":false,
            "startTime":897,
            "endTime":898,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":927.7, 
                "failEndTime":928.9
            },
            "wrongMove2":{
                "failStartTime":927.7, 
                "failEndTime":928.9
            },
        },
        {   // space biker
            "title": "Ace",
            "active":false,
            "startTime":899.4,
            "endTime":900.2,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":929, 
                "failEndTime":930.1
            },
            "wrongMove2":{
                 "failStartTime":929, 
                "failEndTime":930.1
            },
        },
        {   // space biker
            "title": "Ace",
            "active":false,
            "startTime":901.4,
            "endTime":902.4,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":932.5, 
                "failEndTime":934.2
            },
            "wrongMove2":{
                  "failStartTime":932.5, 
                "failEndTime":934.2
            },
        },
        {   // space biker
            "title": "Ace",
            "active":false,
            "startTime":903.7,
            "endTime":904.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":932.5, 
                "failEndTime":934.2
            },
            "wrongMove2":{
                  "failStartTime":932.5, 
                "failEndTime":934.2
            },
        },
         {   // space biker
            "title": "Ace",
            "active":false,
            "startTime":905.7,
            "endTime":906.4,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":932.5, 
                "failEndTime":934.2
            },
            "wrongMove2":{
                  "failStartTime":932.5, 
                "failEndTime":934.2
            },
        },
        {   // space biker
            "title": "Ace",
            "active":false,
            "startTime":907.4,
            "endTime":908.2,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":935.6, 
                "failEndTime":937.4
            },
            "wrongMove2":{
                 "failStartTime":935.6, 
                "failEndTime":937.4
            },
        },
        {   // space biker
            "title": "Ace",
            "active":false,
            "startTime":909.2,
            "endTime":910,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
             "wrongMove1":{
                "failStartTime":935.6, 
                "failEndTime":937.4
            },
            "wrongMove2":{
                 "failStartTime":935.6, 
                "failEndTime":937.4
            },
        },
        {   // space biker
            "title": "Ace",
            "active":false,
            "startTime":910.7,
            "endTime":911.3,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
             "wrongMove1":{
                "failStartTime":935.6, 
                "failEndTime":937.4
            },
            "wrongMove2":{
                 "failStartTime":935.6, 
                "failEndTime":937.4
            },
        },
        {   // space biker
            "title": "Ace",
            "active":false,
            "startTime":912.5,
            "endTime":913.2,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
                "failStartTime":935.6, 
                "failEndTime":937.4
            },
            "wrongMove2":{
                 "failStartTime":935.6, 
                "failEndTime":937.4
            },
        },
        {   // space biker
            "title": "Ace",
            "active":false,
            "startTime":914,
            "endTime":914.7,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":935.6, 
                "failEndTime":937.4
            },
            "wrongMove2":{
                 "failStartTime":935.6, 
                "failEndTime":937.4
            },
        },
        {   // space biker
            "title": "Ace",
            "active":false,
            "startTime":915.7,
            "endTime":916.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":937.5, 
                "failEndTime":941.2
            },
            "wrongMove2":{
                 "failStartTime":937.5, 
                "failEndTime":941.2
            },
        },
        {   // space biker
            "title": "Ace",
            "active":false,
            "startTime":917.4,
            "endTime":918.4,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":937.5, 
                "failEndTime":941.2
            },
            "wrongMove2":{
                 "failStartTime":937.5, 
                "failEndTime":941.2
            },
            "endStage":919.7
        },
    ],
};
var gameSheet11 = {
    "checkPoints":[
        {   // space biker
            "newStage":992.6,
            "title": "Dexter",
            "active":false,
            "startTime":997.7,
            "endTime":998.7,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1050.1, 
                "failEndTime":1051.3
            },
            "wrongMove2":{
                 "failStartTime":1050.1, 
                "failEndTime":1051.3
            },
        },
        {   // space biker           
            "title": "Dexter",
            "active":false,
            "startTime":1000,
            "endTime":1001,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1051.3, 
                "failEndTime":1052.5
            },
            "wrongMove2":{
                 "failStartTime":1051.3, 
                "failEndTime":1052.5
            },
        },
        {   // space biker           
            "title": "Dexter",
            "active":false,
            "startTime":1002,
            "endTime":1003,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1052.7, 
                "failEndTime":1054.1
            },
            "wrongMove2":{
                "failStartTime":1052.7, 
                "failEndTime":1054.1
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1004.5,
            "endTime":1005.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1054.1, 
                "failEndTime":1055.6
            },
            "wrongMove2":{
                "failStartTime":1054.1, 
                "failEndTime":1055.6
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1008.6,
            "endTime":1009.6,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1061.7, 
                "failEndTime":1065
            },
            "wrongMove2":{
                 "failStartTime":1061.7, 
                "failEndTime":1065
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1010.7,
            "endTime":1011.7,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1061.7, 
                "failEndTime":1065
            },
            "wrongMove2":{
                 "failStartTime":1061.7, 
                "failEndTime":1065
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1013.8,
            "endTime":1014.6,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1061.7, 
                "failEndTime":1065
            },
            "wrongMove2":{
                 "failStartTime":1061.7, 
                "failEndTime":1065
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1017.5,
            "endTime":1018.3,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":1057.1, 
                "failEndTime":1058.6
            },
            "wrongMove2":{
                "failStartTime":1057.1, 
                "failEndTime":1058.6
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1019,
            "endTime":1019.7,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1057.1, 
                "failEndTime":1058.5
            },
            "wrongMove2":{
                 "failStartTime":1057.1, 
                "failEndTime":1058.5
            },
        },
        {   // space biker           
            "title": "pink ace",
            "active":false,
            "startTime":1020.7,
            "endTime":1021.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1060.2, 
                "failEndTime":1061.5
            },
            "wrongMove2":{
                 "failStartTime":1060.2, 
                "failEndTime":1061.5
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1022.2,
            "endTime":1023.2,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":1060.2, 
                "failEndTime":1061.5
            },
            "wrongMove2":{
                 "failStartTime":1060.2, 
                "failEndTime":1061.5
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1024.5,
            "endTime":1025.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":1060.2, 
                "failEndTime":1061.5
            },
            "wrongMove2":{
                 "failStartTime":1060.2, 
                "failEndTime":1061.5
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1027.6,
            "endTime":1028.6,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
           "wrongMove1":{
                "failStartTime":1061.7, 
                "failEndTime":1065
            },
            "wrongMove2":{
                 "failStartTime":1061.7, 
                "failEndTime":1065
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1029.6,
            "endTime":1030.6,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
           "wrongMove1":{
                "failStartTime":1060.2, 
                "failEndTime":1061.5
            },
            "wrongMove2":{
                 "failStartTime":1060.2, 
                "failEndTime":1061.5
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1031.6,
            "endTime":1032.6,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1061.7, 
                "failEndTime":1065
            },
            "wrongMove2":{
                 "failStartTime":1061.7, 
                "failEndTime":1065
            },
        },
         {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1035.9,
            "endTime":1036.8,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
           "wrongMove1":{
                "failStartTime":1061.7, 
                "failEndTime":1065
            },
            "wrongMove2":{
                 "failStartTime":1061.7, 
                "failEndTime":1065
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1037.7,
            "endTime":1038.7,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
           "wrongMove1":{
                "failStartTime":1061.7, 
                "failEndTime":1065
            },
            "wrongMove2":{
                 "failStartTime":1061.7, 
                "failEndTime":1065
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1039.5,
            "endTime":1040.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1061.7, 
                "failEndTime":1065
            },
            "wrongMove2":{
                 "failStartTime":1061.7, 
                "failEndTime":1065
            },
            "endStage":1039.9
        },
     ]
};
var gameSheet12 = {
    "checkPoints":[
        {   // space biker
            "newStage":1138.5,
            "title": "Dexter",
            "active":false,
            "startTime":1141.2,
            "endTime":1142,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1196.5, 
                "failEndTime":1198.9
            },
            "wrongMove2":{
                  "failStartTime":1196.5, 
                "failEndTime":1198.9
            },
        },
         {  // space biker           
            "title": "Dexter",
            "active":false,
            "startTime":1143,
            "endTime":1143.7,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":1196.5, 
                "failEndTime":1198.9
            },
            "wrongMove2":{
                  "failStartTime":1196.5, 
                "failEndTime":1198.9
            },
        },
        {  // space biker           
            "title": "Dexter",
            "active":false,
            "startTime":1144.2,
            "endTime":1145,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1196.5, 
                "failEndTime":1198.9
            },
            "wrongMove2":{
                  "failStartTime":1196.5, 
                "failEndTime":1198.9
            },
        },
         {  // space biker           
            "title": "energy ace",
            "active":false,
            "startTime":1145.2,
            "endTime":1146,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":1196.5, 
                "failEndTime":1198.9
            },
            "wrongMove2":{
                  "failStartTime":1196.5, 
                "failEndTime":1198.9
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1146.2,
            "endTime":1147,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1201.9, 
                "failEndTime":1204.4
            },
            "wrongMove2":{
                 "failStartTime":1204.4, 
                "failEndTime":1205.7
            },
        },
         {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1147.2,
            "endTime":1148,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
                "failStartTime":1201.9, 
                "failEndTime":1204.4
            },
            "wrongMove2":{
                 "failStartTime":1204.4, 
                "failEndTime":1205.7
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1148.5,
            "endTime":1149.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":1201.9, 
                "failEndTime":1204.4
            },
            "wrongMove2":{
                 "failStartTime":1204.4, 
                "failEndTime":1205.7
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1150,
            "endTime":1150.7,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
                "failStartTime":1201.9, 
                "failEndTime":1204.4
            },
            "wrongMove2":{
                 "failStartTime":1204.4, 
                "failEndTime":1205.7
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1151,
            "endTime":1151.7,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":1201.9, 
                "failEndTime":1204.4
            },
            "wrongMove2":{
                 "failStartTime":1204.4, 
                "failEndTime":1205.7
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1152.2,
            "endTime":1152.8,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1201.9, 
                "failEndTime":1204.4
            },
            "wrongMove2":{
                 "failStartTime":1204.4, 
                "failEndTime":1205.7
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1153,
            "endTime":1153.7,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1201.9, 
                "failEndTime":1204.4
            },
            "wrongMove2":{
                 "failStartTime":1204.4, 
                "failEndTime":1205.7
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1160,
            "endTime":1161,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1207.4, 
                "failEndTime":1208.8
            },
            "wrongMove2":{
                "failStartTime":1207.4, 
                "failEndTime":1208.8
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1163.4,
            "endTime":1164.4,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1205.6, 
                "failEndTime":1207.3
            },
            "wrongMove2":{
                "failStartTime":1205.6, 
                "failEndTime":1207.3
            },
        },
        /*{  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1167,
            "endTime":1168,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1050.1, 
                "failEndTime":1051.3
            },
            "wrongMove2":{
                 "failStartTime":1050.1, 
                "failEndTime":1051.3
            },
        },*/
         {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1170,
            "endTime":1171,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":1210.8, 
                "failEndTime":1212.4
            },
            "wrongMove2":{
                "failStartTime":1210.8, 
                "failEndTime":1212.4
            },
        },
         {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1171.7,
            "endTime":1172.4,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1210.8, 
                "failEndTime":1212.4
            },
            "wrongMove2":{
                "failStartTime":1210.8, 
                "failEndTime":1212.4
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1174,
            "endTime":1175,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
           "wrongMove1":{
                "failStartTime":1208.8, 
                "failEndTime":1210.8
            },
            "wrongMove2":{
                 "failStartTime":1208.8,  
                "failEndTime":1210.8
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1176.2,
            "endTime":1177.2,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1208.8, 
                "failEndTime":1210.8
            },
            "wrongMove2":{
                 "failStartTime":1208.8,  
                "failEndTime":1210.8
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1177.7,
            "endTime":1178.7,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
           "wrongMove1":{
                "failStartTime":1208.8, 
                "failEndTime":1210.8
            },
            "wrongMove2":{
                 "failStartTime":1050.1, 
                "failEndTime":1210.8
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1179,
            "endTime":1180,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1212.3, 
                "failEndTime":1213.8
            },
            "wrongMove2":{
                  "failStartTime":1212.3, 
                "failEndTime":1213.8
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1181,
            "endTime":1181.7,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1213.8, 
                "failEndTime":1217.4
            },
            "wrongMove2":{
                 "failStartTime":1213.8, 
                "failEndTime":1217.4
            },
        },
        {  // space biker           
            "title": "ace",
            "active":false,
            "startTime":1182.7,
            "endTime":1183.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                 "failStartTime":1213.8, 
                "failEndTime":1217.4
            },
            "wrongMove2":{
                 "failStartTime":1213.8, 
                "failEndTime":1217.4
            },
            "endStage":1185.9
        },
     ]
};
var gameSheet13 = {
    "checkPoints":[
        {   // space biker
            "newStage":1297.2,
            "title": "Dexter",
            "active":false,
            "startTime":1302.5,
            "endTime":1303.2,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1196.5, 
                "failEndTime":1198.9
            },
            "wrongMove2":{
                  "failStartTime":1196.5, 
                "failEndTime":1198.9
            },
        },
         {   // space biker           
            "title": "Dexter",
            "active":false,
            "startTime":1305.7,
            "endTime":1306.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1411.5, 
                "failEndTime":1413.7
            },
            "wrongMove2":{
                   "failStartTime":1411.5, 
                "failEndTime":1413.7
            },
        },
        {   // space biker           
            "title": "Dexter",
            "active":false,
            "startTime":1307,
            "endTime":1307.7,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1411.5, 
                "failEndTime":1413.7
            },
            "wrongMove2":{
                   "failStartTime":1411.5, 
                "failEndTime":1413.7
            },
        },
        {   // space biker           
            "title": "Dexter",
            "active":false,
            "startTime":1309,
            "endTime":1309.8,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1413.8, 
                "failEndTime":1418
            },
            "wrongMove2":{
                "failStartTime":1413.8, 
                "failEndTime":1418
            },
        },
        {   // space biker           
            "title": "Dexter",
            "active":false,
            "startTime":1312.8,
            "endTime":1313.7,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1413.8, 
                "failEndTime":1418
            },
            "wrongMove2":{
                "failStartTime":1413.8, 
                "failEndTime":1418
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1315,
            "endTime":1315.7,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
           "wrongMove1":{
                "failStartTime":1413.8, 
                "failEndTime":1418
            },
            "wrongMove2":{
                "failStartTime":1413.8, 
                "failEndTime":1418
            },
        },
        {   // space biker           
            "title": "ace fight1",
            "active":false,
            "startTime":1318,
            "endTime":1319,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1393.4, 
                "failEndTime":1394.8
            },
            "wrongMove2":{
                  "failStartTime":1395, 
                "failEndTime":1396.8
            },
        },
        {   // space biker           
            "title": "ace fight2",
            "active":false,
            "startTime":1319.5,
            "endTime":1320.3,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":1393.4, 
                "failEndTime":1394.8
            },
            "wrongMove2":{
                  "failStartTime":1395, 
                "failEndTime":1396.8
            },
        },
        {   // space biker           
            "title": "ace fight2 face",
            "active":false,
            "startTime":1322.5,
            "endTime":1323.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1398.1, 
                "failEndTime":1400.1
            },
            "wrongMove2":{
                "failStartTime":1395, 
                "failEndTime":1396.8
            },
        },
        {   // space biker           
            "title": "ace fight3 hole",
            "active":false,
            "startTime":1324.8,
            "endTime":1325.2,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1396.8, 
                "failEndTime":1398.1
            },
            "wrongMove2":{
                  "failStartTime":1393.4, 
                "failEndTime":1394.8
            },
        },
        {   // space biker           
            "title": "ace fight4",
            "active":false,
            "startTime":1326.8,
            "endTime":1327.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":1398.1, 
                "failEndTime":1400.1
            },
            "wrongMove2":{
                "failStartTime":1395, 
                "failEndTime":1396.8
            },
        },
        {   // space biker           
            "title": "ace fight5",
            "active":false,
            "startTime":1328,
            "endTime":1328.8,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":1398.1, 
                "failEndTime":1400.1
            },
            "wrongMove2":{
                "failStartTime":1395, 
                "failEndTime":1396.8
            },
        },
        {   // space biker           
            "title": "ace fight6",
            "active":false,
            "startTime":1330.7,
            "endTime":1331.4,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1398.1, 
                "failEndTime":1400.1
            },
            "wrongMove2":{
                "failStartTime":1395, 
                "failEndTime":1396.8
            },
        },
        {   // space biker           
            "title": "ace fight7",
            "active":false,
            "startTime":1332.8,
            "endTime":1333.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1398.1, 
                "failEndTime":1400.1
            },
            "wrongMove2":{
                "failStartTime":1395, 
                "failEndTime":1396.8
            },
        },
        {   // space biker           
            "title": "ace fight8",
            "active":false,
            "startTime":1334,
            "endTime":1334.8,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":1398.1, 
                "failEndTime":1400.1
            },
            "wrongMove2":{
                "failStartTime":1395, 
                "failEndTime":1396.8
            },
        },
          {   // space biker           
            "title": "ace fight9",
            "active":false,
            "startTime":1337,
            "endTime":1337.8,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
             "wrongMove1":{
                "failStartTime":1398.1, 
                "failEndTime":1400.1
            },
            "wrongMove2":{
                "failStartTime":1395, 
                "failEndTime":1396.8
            },
        },
        {   // space biker           
            "title": "ace fight10",
            "active":false,
            "startTime":1340,
            "endTime":1340.8,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":1393.4, 
                "failEndTime":1394.8
            },
            "wrongMove2":{
                  "failStartTime":1395, 
                "failEndTime":1396.8
            },
        },
        {   // space biker           
            "title": "ace fight11",
            "active":false,
            "startTime":1341.2,
            "endTime":1342,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1393.4, 
                "failEndTime":1394.8
            },
            "wrongMove2":{
                  "failStartTime":1395, 
                "failEndTime":1396.8
            },
        },
        {   // space biker           
            "title": "ace liana",
            "active":false,
            "startTime":1343,
            "endTime":1343.8,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1400.1, 
                "failEndTime":1402.4
            },
            "wrongMove2":{
                 "failStartTime":1400.1, 
                "failEndTime":1402.4
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1346,
            "endTime":1346.8,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1402.6, 
                "failEndTime":1403.9
            },
            "wrongMove2":{
                  "failStartTime":1402.6, 
                "failEndTime":1403.9
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1348.7,
            "endTime":1349.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1400.1, 
                "failEndTime":1402.4
            },
            "wrongMove2":{
                  "failStartTime":1400.1, 
                "failEndTime":1402.4
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1350,
            "endTime":1350.8,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
               "failStartTime":1400.1, 
                "failEndTime":1402.4
            },
            "wrongMove2":{
                "failStartTime":1400.1, 
                "failEndTime":1402.4
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1351.7,
            "endTime":1352.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1404, 
                "failEndTime":1407.3
            },
            "wrongMove2":{
                 "failStartTime":1404, 
                "failEndTime":1407.3
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1353,
            "endTime":1353.8,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":1404, 
                "failEndTime":1407.3
            },
            "wrongMove2":{
                 "failStartTime":1404, 
                "failEndTime":1407.3
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1354.9,
            "endTime":1355.7,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1404, 
                "failEndTime":1407.3
            },
            "wrongMove2":{
                 "failStartTime":1404, 
                "failEndTime":1407.3
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1357.4,
            "endTime":1358.1,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":1404, 
                "failEndTime":1407.3
            },
            "wrongMove2":{
                 "failStartTime":1404, 
                "failEndTime":1407.3
            },
        },
        {   // space biker           
            "title": "ace",
            "active":false,
            "startTime":1359.5,
            "endTime":1360.2,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1404, 
                "failEndTime":1407.3
            },
            "wrongMove2":{
                 "failStartTime":1404, 
                "failEndTime":1407.3
            },
            "endStage":1384.4
        },
        ]
};


