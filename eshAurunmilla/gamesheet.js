
var gameCfg = {
    "levels": [
        {
            "label":"easy", 
            "description":"It can't get easier than this! You have 7 lives!! Good luck ;)", 
            "lives":7, 
            "score":150
        },
        {
            "label":"medium",
            "description":"Ok, This might be a little more tricky. You have 5 lives! Save Sindi!",
            "lives":5,
            "score":200
        },    
        {
            "label":"hard", 
            "description":"Are you a hero? Complete the saga with 3 lives", 
            "lives":3,
            "score":300
        }       
    ],
    "stageTitle":[
        "Esh's Aurunmilla Meteor Empire",
        "Rockets Plants", 
        "Circular platform of venom Worms and giant Gorilla Monster", 
        "Desert of the Piranhas",
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
        "Ride Don Davis's Spaceship trough the Meteor Island hangar",
        "Avoid the Rockets and catch the teleportation",
        "Pass the circular stairs and defeat the monsters with your sword",
        "Use your skill to fight with the big Piranha",
        "Mummy, Golems and Zombies cand you do it?","welcom to the city of Empire, destroy all robots and run away of the fire",
        "First meeting with Orishala (the Queen of Esh's Empire), try to defeat her but pay attention to her Black Magic",
        "Flight on your Super Hang Glider, fight the Bats, and pay attention to the turbo boost and the landing",
        "Dont fall, use your reflex to ride Don Davis on the disappearing floating platform"
    ]
};
var gameSheet = {
    "checkPointScore":0,
    "checkPoints":[                
        {   // meteor island enter
            "newStage": 190,
            "title": "meteor island enter",
            "active":false,
            "startTime":205.7,                                      
            "endTime":207,
            "complete": false,
            "pressed": false,
            "correctMove":"right",                     
            "wrongMove1":{
                "kind": "left",
                "failStartTime":270, 
                "failEndTime":275
            },
            "wrongMove2":{
                "kind": "none",
                "failStartTime":277, 
                "failEndTime":280
            },                    
        },              
        {   //hangar direction 
            "title": "hangar direction",
            "active":false,
            "startTime":210.5,
            "endTime":211.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":282, 
                "failEndTime":284
            },
            "wrongMove2":{
                "failStartTime":282, 
                "failEndTime":284
            }
        },  
        {   // electric wall
            "title": "electric wall",
            "active":false,
            "startTime":214.5,
            "endTime":216,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":287, 
                "failEndTime":289.5
            },
            "wrongMove2":{
                "failStartTime":292, 
                "failEndTime":294
            }
        },  
        {   // electric wall
            "title": "electric wall",
            "active":false,
            "startTime":218.5,
            "endTime":220,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":287, 
                "failEndTime":289.5
            },
            "wrongMove2":{
                "failStartTime":292, 
                "failEndTime":294
            }
        },
        {   // electric wall
            "title": "electric wall",
            "active":false,
            "startTime":221.5,
            "endTime":223,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":287, 
                "failEndTime":289.5
            },
            "wrongMove2":{
                "failStartTime":292, 
                "failEndTime":294
            }
        },
        {   // direnction
            "title":"direction",
            "active":false,
            "startTime":224,
            "endTime":225.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":282, 
                "failEndTime":284
            },
            "wrongMove2":{
                "failStartTime":282, 
                "failEndTime":284
            }
        },
        {   // blade 
            "title": "blade",
            "active":false,
            "startTime":233,
            "endTime":234.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":306, 
                "failEndTime":310
            },
            "wrongMove2":{
                "failStartTime":301, 
                "failEndTime":303
            }
        },
        {   // platform mobile 
            "title": "platform mobile",
            "active":false,
            "startTime":239,
            "endTime":240.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":312.5, 
                "failEndTime":315
            },
            "wrongMove2":{
                "failStartTime":312.5, 
                "failEndTime":315
            }
        },
        {   // platform light
            "title": "platform light",
            "active":false,
            "startTime":247,
            "endTime":248,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":317, 
                "failEndTime":319.5
            },
            "wrongMove2":{
                "failStartTime":317, 
                "failEndTime":319.5
            },
            "endStage":269
        }                               
    ],          
};
var gameSheet2 = {
    "checkPoints":[
        {   // missile plants
            "newStage":323,
            "title": "plant growing",
            "active":false,
            "startTime":328,
            "endTime":330,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":364.5, 
                "failEndTime":368
            },
            "wrongMove2":{
                "failStartTime":364.5, 
                "failEndTime":368
            },
        },
        {   // missile plants jump 1
            "title": "platform light",
            "active":false,
            "startTime":331.5,
            "endTime":332.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":364.5, 
                "failEndTime":368
            },
            "wrongMove2":{
                "failStartTime":364.5, 
                "failEndTime":368
            },
        },
        {   // missile plants jump 2
            "title": "platform light",
            "active":false,
            "startTime":333.7,
            "endTime":334.7,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":364.5, 
                "failEndTime":368
            },
            "wrongMove2":{
                "failStartTime":364.5, 
                "failEndTime":368
            },
        },
        {   // missile plants jump 3
            "title": "platform light",
            "active":false,
            "startTime":337.5,
            "endTime":338.5,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":364.5, 
                "failEndTime":368
            },
            "wrongMove2":{
               "failStartTime":364.5, 
                "failEndTime":368
            },
        },
        {   // missile plants zig zag
            "title": "platform light",
            "active":false,
            "startTime":340,
            "endTime":341,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":364.5, 
                "failEndTime":368
            },
            "wrongMove2":{
               "failStartTime":364.5, 
                "failEndTime":368
            },
        },
        {   // missile plants zig zag
            "title": "platform light",
            "active":false,
            "startTime":341.7,
            "endTime":342.7,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":364.5, 
                "failEndTime":368
            },
            "wrongMove2":{
               "failStartTime":364.5, 
                "failEndTime":368
            },
        },
        {   // missile plants zig zag
            "title": "platform light",
            "active":false,
            "startTime":343.5,
            "endTime":344.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":364.5, 
                "failEndTime":368
            },
            "wrongMove2":{
               "failStartTime":364.5, 
                "failEndTime":368
            },
        },
        {   // missile plants zig zag
            "title": "platform light",
            "active":false,
            "startTime":345.5,
            "endTime":346.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":364.5, 
                "failEndTime":368
            },
            "wrongMove2":{
               "failStartTime":364.5, 
                "failEndTime":368
            },
        },
        {   // missile plants sword
            "title": "platform light",
            "active":false,
            "startTime":352,
            "endTime":353,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":372, 
                "failEndTime":377
            },
            "wrongMove2":{
               "failStartTime":372, 
                "failEndTime":377
            },
            "endStage":362
        }
    ]
 };
var gameSheet3 = {
    "checkPoints":[
        {   // circular tricky
            "newStage":379,
            "title": "platform light left",
            "active":false,
            "startTime":384,
            "endTime":386,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":418, 
                "failEndTime":422
            },
            "wrongMove2":{
                "failStartTime":418, 
                "failEndTime":422
            },
        },
        {   // circular tricky
            "title": "platform light right",
            "active":false,
            "startTime":388,
            "endTime":390,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":418, 
                "failEndTime":422
            },
            "wrongMove2":{
                "failStartTime":418, 
                "failEndTime":422
            },
        },
        {   // circular tricky
            "title": "worm cut",
            "active":false,
            "startTime":392.5,
            "endTime":393.7,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":424, 
                "failEndTime":427
            },
            "wrongMove2":{
                "failStartTime":428, 
                "failEndTime":432
            },
        },
        {   // circular tricky
            "title": "platform light up",
            "active":false,
            "startTime":399.5,
            "endTime":400.7,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":418, 
                "failEndTime":422
            },
            "wrongMove2":{
                "failStartTime":418, 
                "failEndTime":422
            },
        },
        {   // circular tricky
            "title": "platform light escape",
            "active":false,
            "startTime":403.5,
            "endTime":404.7,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":441, 
                "failEndTime":444
            },
            "wrongMove2":{
                "failStartTime":441, 
                "failEndTime":444
            },
        },
        {   // circular tricky
            "title": "avoid the gorilla's hand",
            "active":false,
            "startTime":405.5,
            "endTime":406.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
               "failStartTime":441, 
                "failEndTime":444
            },
            "wrongMove2":{
                "failStartTime":441, 
                "failEndTime":444
            },
        },
        {   // circular tricky
            "title": "avoid gorilla's hand 2",
            "active":false,
            "startTime":407.5,
            "endTime":408.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":441, 
                "failEndTime":444
            },
            "wrongMove2":{
               "failStartTime":441, 
                "failEndTime":444
            },
        },
        {   // circular tricky
            "title": "kill the gorilla's hand",
            "active":false,
            "startTime":409.5,
            "endTime":411.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":441, 
                "failEndTime":444
            },
            "wrongMove2":{
                "failStartTime":441, 
                "failEndTime":444
            },
            "endStage":415
        }
    ]
 };       
var gameSheet4 = {
    "checkPoints":[
        {   // desert fish
            "newStage":446,
            "title": "beat the fish with foot",
            "active":false,
            "startTime":457.5,
            "endTime":458.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":529, 
                "failEndTime":531
            },
            "wrongMove2":{
                "failStartTime":529, 
                "failEndTime":531
            },
        },
        {   // desert fish
            "newStage":446,
            "title": "beat the fish with foot 2",
            "active":false,
            "startTime":460.5,
            "endTime":461.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":534.5, 
                "failEndTime":537.5
            },
            "wrongMove2":{
                "failStartTime":534.5, 
                "failEndTime":537.5
            },
        },
        {   // desert fish
            "newStage":446,
            "title": "dodge the piraha",
            "active":false,
            "startTime":464.5,
            "endTime":465.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":540, 
                "failEndTime":543
            },
            "wrongMove2":{
                "failStartTime":540, 
                "failEndTime":543
            },
        },
        {   // desert fish
            "newStage":446,
            "title": "dodge the piraha 2",
            "active":false,
            "startTime":466.5,
            "endTime":467.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":545, 
                "failEndTime":548.5
            },
            "wrongMove2":{
                "failStartTime":545, 
                "failEndTime":548.5
            },
        },
        {   // desert fish
            "newStage":446,
            "title": "cut piraha",
            "active":false,
            "startTime":468,
            "endTime":469,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":545, 
                "failEndTime":548.5
            },
            "wrongMove2":{
                "failStartTime":545, 
                "failEndTime":548.5
            },
        },
        {   // desert fish
            "newStage":446,
            "title": "cut piraha 2",
            "active":false,
            "startTime":470,
            "endTime":471,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":545, 
                "failEndTime":548.5
            },
            "wrongMove2":{
                "failStartTime":545, 
                "failEndTime":548.5
            },
        },
        /*{   // desert fish
            "newStage":446,
            "title": "plant growing",
            "active":false,
            "startTime":472.5,
            "endTime":473.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":545, 
                "failEndTime":548.5
            },
            "wrongMove2":{
                "failStartTime":545, 
                "failEndTime":548.5
            },
        },*/
        {   // desert fish
            "newStage":446,
            "title": "cut piraha 3",
            "active":false,
            "startTime":472,
            "endTime":473.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":545, 
                "failEndTime":548.5
            },
            "wrongMove2":{
                "failStartTime":545, 
                "failEndTime":548.5
            },
        },
        {   // desert fish
            "newStage":446,
            "title": "cut all the pirahas 4",
            "active":false,
            "startTime":475,
            "endTime":476.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":545, 
                "failEndTime":548.5
            },
            "wrongMove2":{
                "failStartTime":545, 
                "failEndTime":548.5
            },
        },
        {   // desert fish
            "newStage":446,
            "title": "dodge the p swarm",
            "active":false,
            "startTime":490.5,
            "endTime":491.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":540, 
                "failEndTime":543
            },
            "wrongMove2":{
                 "failStartTime":540, 
                "failEndTime":543
            },
        },
        {   // desert fish
            "newStage":446,
            "title": "dodge the p swarm 2",
            "active":false,
            "startTime":492.5,
            "endTime":494,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":540, 
                "failEndTime":543
            },
            "wrongMove2":{
                 "failStartTime":540, 
                "failEndTime":543
            },
        },
        {   // desert fish
            "newStage":446,
            "title": "dodge the p swarm 3",
            "active":false,
            "startTime":496,
            "endTime":497.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":540, 
                "failEndTime":543
            },
            "wrongMove2":{
                 "failStartTime":540, 
                "failEndTime":543
            },
        },
        {   // desert fish
            "newStage":446,
            "title": "choose the right way",
            "active":false,
            "startTime":500.5,
            "endTime":501.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":558, 
                "failEndTime":561
            },
            "wrongMove2":{
                 "failStartTime":554, 
                "failEndTime":556
            },
        },
        {   // desert fish
            "newStage":446,
            "title": "dont' fall down",
            "active":false,
            "startTime":503,
            "endTime":504.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":563, 
                "failEndTime":571
            },
            "wrongMove2":{
                 "failStartTime":563, 
                "failEndTime":571
            },
        },
        {   // desert fish
            "newStage":446,
            "title": "fight with big piraha",
            "active":false,
            "startTime":505.5,
            "endTime":506.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":563, 
                "failEndTime":571
            },
            "wrongMove2":{
                 "failStartTime":563, 
                "failEndTime":571
            },
        },
        {   // desert fish
            "newStage":446,
            "title": "fight with big piraha eye kick",
            "active":false,
            "startTime":509.5,
            "endTime":510.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":563, 
                "failEndTime":571
            },
            "wrongMove2":{
                 "failStartTime":563, 
                "failEndTime":571
            },
            "endStage":526
        },

   ]
 };
var gameSheet5 = {
    "checkPoints":[
        {   //1 tomb cript
            "newStage":574,
            "title": "plant growing",
            "active":false,
            "startTime":578,
            "endTime":579,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":617.5, 
                "failEndTime":620
            },
            "wrongMove2":{
                "failStartTime":617.5, 
                "failEndTime":620
            },
        },
        {   //2 tomb cript                   
            "title": "plant growing",
            "active":false,
            "startTime":580,
            "endTime":581,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":622.7, 
                "failEndTime":625
            },
            "wrongMove2":{
                "failStartTime":622.7, 
                "failEndTime":625
            },
        },
        {   //3 tomb cript                   
            "title": "plant growing",
            "active":false,
            "startTime":582,
            "endTime":583,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":627.7, 
                "failEndTime":630
            },
            "wrongMove2":{
                "failStartTime":627.7, 
                "failEndTime":630
            },
        },
        {   //4 tomb cript frank                  
            "title": "plant growing",
            "active":false,
            "startTime":585.7,
            "endTime":587,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":633.5, 
                "failEndTime":635
            },
            "wrongMove2":{
                "failStartTime":633.5, 
                "failEndTime":635
            },
        },
        {   //5 tomb cript 2 zombies               
            "title": "plant growing",
            "active":false,
            "startTime":591,
            "endTime":592,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":638.5, 
                "failEndTime":640
            },
            "wrongMove2":{
               "failStartTime":638.5, 
                "failEndTime":640
            },
        },
        {   //6 tomb cript troll               
            "title": "plant growing",
            "active":false,
            "startTime":594.7,
            "endTime":595.7,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":647.7, 
                "failEndTime":650
            },
            "wrongMove2":{
                "failStartTime":647.7, 
                "failEndTime":650
            },
        },
        {   //7 tomb cript mummie              
            "title": "plant growing",
            "active":false,
            "startTime":597,
            "endTime":598,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":643.7, 
                "failEndTime":645
            },
            "wrongMove2":{
                "failStartTime":643.7, 
                "failEndTime":645
            },
        },
        {   //7 tomb cript rock              
            "title": "plant growing",
            "active":false,
            "startTime":602,
            "endTime":603,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":657.5, 
                "failEndTime":661
            },
            "wrongMove2":{
                "failStartTime":657.5, 
                "failEndTime":661
            },
        },
        {   //8 tomb cript rock              
            "title": "plant growing",
            "active":false,
            "startTime":605,
            "endTime":606.5,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":657.5, 
                "failEndTime":661
            },
            "wrongMove2":{
                "failStartTime":657.5, 
                "failEndTime":661
            },
        },
        {   //9 tomb cript rock              
            "title": "plant growing",
            "active":false,
            "startTime":607,
            "endTime":608,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":653, 
                "failEndTime":656
            },
            "wrongMove2":{
                "failStartTime":653, 
                "failEndTime":656
            },
        },
        {   //10 tomb cript rock              
            "title": "plant growing",
            "active":false,
            "startTime":609,
            "endTime":610,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":662.5, 
                "failEndTime":665
            },
            "wrongMove2":{
                "failStartTime":662.5, 
                "failEndTime":665
            },
            "endStage":615.5
        },
    ]
 };
var gameSheet6 = {
     "checkPoints":[
        {   //1 futur city
            "newStage":667,
            "title": "robot fire",
            "active":false,
            "startTime":671,
            "endTime":672,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":715.7, 
                "failEndTime":717
            },
            "wrongMove2":{
                "failStartTime":720.7, 
                "failEndTime":722
            },
        },
        {   //2 futur city                    
            "title": "robot fire",
            "active":false,
            "startTime":674,
            "endTime":675.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":715.7, 
                "failEndTime":717
            },
            "wrongMove2":{
                "failStartTime":720.7, 
                "failEndTime":722
            },
        },
         {   //3 futur city                   
            "title": "robot fire",
            "active":false,
            "startTime":677,
            "endTime":678,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":715.7, 
                "failEndTime":717
            },
            "wrongMove2":{
                "failStartTime":720.7, 
                "failEndTime":722
            },
        },
         {   //4 futur city                   
            "title": "robot explosion",
            "active":false,
            "startTime":682,
            "endTime":683,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":724.5, 
                "failEndTime":726
            },
            "wrongMove2":{
                "failStartTime":724.5, 
                "failEndTime":726
            },
        },
         {   //5 futur city                   
            "title": "fire escape",
            "active":false,
            "startTime":686,
            "endTime":687.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":724.5, 
                "failEndTime":726
            },
            "wrongMove2":{
                "failStartTime":724.5, 
                "failEndTime":726
            },
        },
         {   //6 futur city                   
            "title": "fire escape",
            "active":false,
            "startTime":688.5,
            "endTime":689.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":724.5, 
                "failEndTime":726
            },
            "wrongMove2":{
                "failStartTime":724.5, 
                "failEndTime":726
            },
        },
         {   //7 futur city                   
            "title": "fire escape",
            "active":false,
            "startTime":690,
            "endTime":691,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":724.5, 
                "failEndTime":726
            },
            "wrongMove2":{
                "failStartTime":724.5, 
                "failEndTime":726
            },
        },
         {   //8 futur city                   
            "title": "fire escape",
            "active":false,
            "startTime":692,
            "endTime":693,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":724.5, 
                "failEndTime":726
            },
            "wrongMove2":{
                "failStartTime":724.5, 
                "failEndTime":726
            },
        },
         {   //9 futur city                   
            "title": "stone jump",
            "active":false,
            "startTime":694.5,
            "endTime":696,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":729, 
                "failEndTime":731
            },
            "wrongMove2":{
                "failStartTime":738, 
                "failEndTime":741.5
            },
        },
         {   //10 futur city                   
            "title": "enter in electric wall",
            "active":false,
            "startTime":701,
            "endTime":701.7,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":745.5, 
                "failEndTime":748
            },
            "wrongMove2":{
                "failStartTime":745.5, 
                "failEndTime":748
            },
        },
         {   //10 futur city                   
            "title": "choice platform",
            "active":false,
            "startTime":708,
            "endTime":709,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":757.7, 
                "failEndTime":761
            },
            "wrongMove2":{
                "failStartTime":750.7, 
                "failEndTime":754
            },
            "endStage":713
        }
    ]

};
var gameSheet7 = {
     "checkPoints":[
        {   //1 witch
            "newStage":764,
            "title": "glass of venom",
            "active":false,
            "startTime":775,
            "endTime":776,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":802, 
                "failEndTime":804
            },
            "wrongMove2":{
                "failStartTime":802, 
                "failEndTime":804
            },
        },
         {  //2 witch                   
            "title": "live earth",
            "active":false,
            "startTime":781,
            "endTime":782,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":812.5, 
                "failEndTime":814
            },
            "wrongMove2":{
               "failStartTime":812.5, 
                "failEndTime":814
            },
        },
         {  //3 witch                   
            "title": "witch duel",
            "active":false,
            "startTime":785,
            "endTime":786,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":812.5, 
                "failEndTime":814
            },
            "wrongMove2":{
                "failStartTime":812.5, 
                "failEndTime":814
            },
        },
         {  //4 witch                   
            "title": "witch duel",
            "active":false,
            "startTime":787.5,
            "endTime":788.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":812.5, 
                "failEndTime":814
            },
            "wrongMove2":{
                "failStartTime":812.5, 
                "failEndTime":814
            },
        },
          {  //5 witch                   
            "title": "live earth",
            "active":false,
            "startTime":789.5,
            "endTime":790.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                 "failStartTime":812.5, 
                "failEndTime":814
            },
            "wrongMove2":{
                "failStartTime":812.5, 
                "failEndTime":814
            },
        },
         {  //6 witch                   
            "title": "live earth",
            "active":false,
            "startTime":792,
            "endTime":793,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":816.7, 
                "failEndTime":819
            },
            "wrongMove2":{
                "failStartTime":816.7, 
                "failEndTime":819
            },
            "endStage":797
        },
    ]
};
var gameSheet8 = {
     "checkPoints":[
        {   //1 head bat
            "newStage":822.7,
            "title": "fighting bat",
            "active":false,
            "startTime":827,
            "endTime":828,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":853.7, 
                "failEndTime":857
            },
            "wrongMove2":{
                 "failStartTime":853.7, 
                "failEndTime":857
            },
        },
        {   //2 head bat                   
            "title": "fighting bat",
            "active":false,
            "startTime":829,
            "endTime":830,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":853.7, 
                "failEndTime":857
            },
            "wrongMove2":{
                "failStartTime":853.7, 
                "failEndTime":857
            },
        },
        {   //3 head bat                   
            "title": "fighting bat",
            "active":false,
            "startTime":830,
            "endTime":831,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":853.7, 
                "failEndTime":857
            },
            "wrongMove2":{
                "failStartTime":853.7, 
                "failEndTime":857
            },
        },
         {   //4 head bat                   
            "title": "fighting bat",
            "active":false,
            "startTime":831,
            "endTime":832,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":853.7, 
                "failEndTime":857
            },
            "wrongMove2":{
                "failStartTime":853.7, 
                "failEndTime":857
            },
        },
         {   //5 head bat                   
            "title": "engine power",
            "active":false,
            "startTime":838,
            "endTime":838.7,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":858.7, 
                "failEndTime":862.5
            },
            "wrongMove2":{
                "failStartTime":865, 
                "failEndTime":867
            },
        },
         {   //6 head bat                   
            "title": "landing",
            "active":false,
            "startTime":845,
            "endTime":845.7,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":870.5, 
                "failEndTime":873
            },
            "wrongMove2":{
                "failStartTime":875, 
                "failEndTime":879.5
            },
            "endStage":852
        },
     ]
};
var gameSheet9 = {
     "checkPoints":[
        {   //1 floating floor
            "newStage":882,
            "title": "floating floor",
            "active":false,
            "startTime":886.5,
            "endTime":887.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":918, 
                "failEndTime":922.5
            },
            "wrongMove2":{
                 "failStartTime":918, 
                "failEndTime":922.5
            },
        },
         {  //2 floating floor                    
            "title": "floating floor",
            "active":false,
            "startTime":888.5,
            "endTime":889.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":918, 
                "failEndTime":922.5
            },
            "wrongMove2":{
                 "failStartTime":918, 
                "failEndTime":922.5
            },
        },
         {  //3 floating floor                    
            "title": "floating floor",
            "active":false,
            "startTime":891.5,
            "endTime":892.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":918, 
                "failEndTime":922.5
            },
            "wrongMove2":{
                 "failStartTime":918, 
                "failEndTime":922.5
            },
        },
         {  //4 floating floor                    
            "title": "floating floor",
            "active":false,
            "startTime":895,
            "endTime":895.7,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":924.7, 
                "failEndTime":929
            },
            "wrongMove2":{
                 "failStartTime":924.7, 
                "failEndTime":929
            },
        },

         {  //5 floating floor                    
            "title": "floating floor",
            "active":false,
            "startTime":910,
            "endTime":910.7,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":930, 
                "failEndTime":933
            },
            "wrongMove2":{
                "failStartTime":930, 
                "failEndTime":933
            },
            "endStage":915
        },
    ]
};
var gameSheet10 = {
     "checkPoints":[
        {   //1 labirint flame
            "newStage":949,
            "title": "flame catching",
            "active":false,
            "startTime":953.5,
            "endTime":954.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":986, 
                "failEndTime":988
            },
            "wrongMove2":{
                 "failStartTime":979, 
                "failEndTime":983
            },
        },
         {  //2 labirint flame                    
            "title": "flame catching",
            "active":false,
            "startTime":956.7,
            "endTime":957.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":990, 
                "failEndTime":993.5
            },
            "wrongMove2":{
                 "failStartTime":990, 
                "failEndTime":993.5
            },
        },
         {  //3 labirint flame                    
            "title": "flame catching",
            "active":false,
            "startTime":958.5,
            "endTime":959.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":990, 
                "failEndTime":993.5
            },
            "wrongMove2":{
                 "failStartTime":990, 
                "failEndTime":993.5
            },
        },
         {  //4 labirint flame                    
            "title": "flame catching",
            "active":false,
            "startTime":961,
            "endTime":962,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":990, 
                "failEndTime":993.5
            },
            "wrongMove2":{
                 "failStartTime":990, 
                "failEndTime":993.5
            },
        },
        {  //4 labirint flame                    
            "title": "flame catching",
            "active":false,
            "startTime":964,
            "endTime":965,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":990, 
                "failEndTime":993.5
            },
            "wrongMove2":{
                "failStartTime":990, 
                "failEndTime":993.5
            },
        },
        {  //5 labirint flame                    
            "title": "sword blocked",
            "active":false,
            "startTime":970,
            "endTime":971,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":995, 
                "failEndTime":998
            },
            "wrongMove2":{
                "failStartTime":995, 
                "failEndTime":998
            },
        },
          {  //6 labirint flame                    
            "title": "red cilinder",
            "active":false,
            "startTime":971,
            "endTime":972,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
               "failStartTime":995, 
                "failEndTime":998
            },
            "wrongMove2":{
                 "failStartTime":995, 
                "failEndTime":998
            },
        },
          {  //7 labirint flame                    
            "title": "secret pass",
            "active":false,
            "startTime":976,
            "endTime":977,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1000, 
                "failEndTime":1002
            },
            "wrongMove2":{
                "failStartTime":1000, 
                "failEndTime":1002
            },
            "endStage":979
        },
    ]
};
var gameSheet11 = {
     "checkPoints":[
        {   //1 castle stage
            "newStage":1006,
            "title": "bridge pass",
            "active":false,
            "startTime":1012,
            "endTime":1013,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":1036.7, 
                "failEndTime":1040.5
            },
            "wrongMove2":{
                "failStartTime":1036.7, 
                "failEndTime":1040.5
            },
        },
         {  //2 castle stage                   
            "title": "bridge pass",
            "active":false,
            "startTime":1014,
            "endTime":1015,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
           "wrongMove1":{
                "failStartTime":1036.7, 
                "failEndTime":1040.5
            },
            "wrongMove2":{
                "failStartTime":1036.7, 
                "failEndTime":1040.5
            },
        },
         {    //3 castle stage                  
            "title": "bridge pass",
            "active":false,
            "startTime":1016.5,
            "endTime":1017.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
           "wrongMove1":{
                "failStartTime":1036.7, 
                "failEndTime":1040.5
            },
            "wrongMove2":{
                "failStartTime":1036.7, 
                "failEndTime":1040.5
            },
        },
          {    //4 castle stage                  
            "title": "bridge jump",
            "active":false,
            "startTime":1020,
            "endTime":1021,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1041, 
                "failEndTime":1044
            },
            "wrongMove2":{
                 "failStartTime":1047, 
                "failEndTime":1051.5
            },
        },
         {    //5 castle stage                  
            "title": "castel balcony",
            "active":false,
            "startTime":1022.5,
            "endTime":1023.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1054, 
                "failEndTime":1056
            },
            "wrongMove2":{
                 "failStartTime":1054, 
                "failEndTime":1056
            },
        },
         {    //5 castle stage                  
            "title": "column punch",
            "active":false,
            "startTime":1026.7,
            "endTime":1027.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1058, 
                "failEndTime":1063
            },
            "wrongMove2":{
                 "failStartTime":1065.7, 
                "failEndTime":1068
            },
            "endStage":1035
        },
     ]
};
var gameSheet12 = {
     "checkPoints":[
        {   //1 internal castle stage witch
            "newStage":1069.7,
            "title": "flame",
            "active":false,
            "startTime":1077,
            "endTime":1078,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1122, 
                "failEndTime":1123
            },
            "wrongMove2":{
                "failStartTime":1122, 
                "failEndTime":1123
            },
        },
         {   //2 internal castle stage witch                    
            "title": "witch duel",
            "active":false,
            "startTime":1083,
            "endTime":1084,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1126, 
                "failEndTime":1129
            },
            "wrongMove2":{
                "failStartTime":1126, 
                "failEndTime":1129
            },
        },
         {   //3 internal castle stage witch                  
             "title": "witch duel",
            "active":false,
            "startTime":1086,
            "endTime":1087,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                 "failStartTime":1126, 
                "failEndTime":1129
            },
            "wrongMove2":{
                "failStartTime":1126, 
                "failEndTime":1129
            },
        },
         {    //4 internal castle stage witch                  
             "title": "witch duel",
            "active":false,
            "startTime":1089,
            "endTime":1090,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
            "wrongMove2":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
        },
         {   //5 internal castle stage witch                      
             "title": "witch duel",
            "active":false,
            "startTime":1091.5,
            "endTime":1092.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1141, 
                "failEndTime":1144
            },
            "wrongMove2":{
                 "failStartTime":1141, 
                "failEndTime":1144
            },
        },
          {   //6 internal castle stage witch                      
             "title": "witch duel",
            "active":false,
            "startTime":1093.5,
            "endTime":1094.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1141, 
                "failEndTime":1144
            },
            "wrongMove2":{
                 "failStartTime":1141, 
                "failEndTime":1144
            },
        },
          {    //7 internal castle stage witch                      
             "title": "witch duel",
            "active":false,
            "startTime":1096,
            "endTime":1097,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1141, 
                "failEndTime":1144
            },
            "wrongMove2":{
                 "failStartTime":1141, 
                "failEndTime":1144
            },
        },
          {    //8 internal castle stage witch                      
             "title": "witch duel",
            "active":false,
            "startTime":1098,
            "endTime":1099,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
            "wrongMove2":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
        },
         {    //9 internal castle stage witch                      
             "title": "witch duel",
            "active":false,
            "startTime":1100.5,
            "endTime":1101.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
            "wrongMove2":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
        },
         {    //10 internal castle stage witch                      
             "title": "witch duel",
            "active":false,
            "startTime":1104,
            "endTime":1105,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
            "wrongMove2":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
        },
         {    //11 internal castle stage witch                      
             "title": "witch duel",
            "active":false,
            "startTime":1106,
            "endTime":1107,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
            "wrongMove2":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
        },
         {   //12 internal castle stage witch                      
             "title": "witch duel",
            "active":false,
            "startTime":1107,
            "endTime":1108,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
            "wrongMove2":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
        },
         {    //13 internal castle stage witch                      
             "title": "witch duel",
            "active":false,
            "startTime":1111,
            "endTime":1111.7,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
            "wrongMove2":{
                "failStartTime":1135.5, 
                "failEndTime":1139
            },
        },
          {  //14 internal castle stage witch                                                             
            "title": "wall pass",
            "active":false,
            "startTime":1116,
            "endTime":1117.7,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1145, 
                "failEndTime":1148
            },
            "wrongMove2":{
                 "failStartTime":1145, 
                "failEndTime":1148
            },
            "endStage":1119
        }

      ]
 };
var gameSheet13 = {
     "checkPoints":[
        {   //1 sindy blocked to big hand
            "newStage":1150,
            "title": "big eyes laser",
            "active":false,
            "startTime":1156,
            "endTime":1157,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1218, 
                "failEndTime":1220
            },
            "wrongMove2":{
                "failStartTime":1222.5, 
                "failEndTime":1225
            },
        },
         {  //2 sindy blocked to big hand                   
            "title": "big eyes laser",
            "active":false,
            "startTime":1158,
            "endTime":1158.7,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":1222.5, 
                "failEndTime":1225
            },
            "wrongMove2":{
                "failStartTime":1218, 
                "failEndTime":1220
            },
        },
         {  //3 sindy blocked to big hand                   
            "title": "big eyes laser",
            "active":false,
            "startTime":1159,
            "endTime":1160,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1222.5, 
                "failEndTime":1225
            },
            "wrongMove2":{
                "failStartTime":1218, 
                "failEndTime":1220
            },
        },
         {  //4 sindy blocked to big hand                   
            "title": "big eyes laser_column",
            "active":false,
            "startTime":1163,
            "endTime":1164,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":1222.5, 
                "failEndTime":1225
            },
            "wrongMove2":{
                "failStartTime":1218, 
                "failEndTime":1220
            },
        },
         {  //5 sindy blocked to big hand                   
            "title": "sword",
            "active":false,
            "startTime":1167.7,
            "endTime":1168.7,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1222.5, 
                "failEndTime":1225
            },
            "wrongMove2":{
                "failStartTime":1218, 
                "failEndTime":1220
            },
        },
         {  //6 sindy blocked to big hand                   
            "title": "pickup sword",
            "active":false,
            "startTime":1170,
            "endTime":1171,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1233.7, 
                "failEndTime":1236
            },
            "wrongMove2":{
                "failStartTime":1233.7, 
                "failEndTime":1236
            },
        },
         {  //6 sindy blocked to big hand                   
            "title": "finger",
            "active":false,
            "startTime":1183,
            "endTime":1184,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1237.7, 
                "failEndTime":1241
            },
            "wrongMove2":{
                "failStartTime":1237.7, 
                "failEndTime":1241
            },
        },
          {  //7 sindy blocked to big hand                   
            "title": "finger",
            "active":false,
            "startTime":1185,
            "endTime":1186,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1243.5, 
                "failEndTime":1246.5
            },
            "wrongMove2":{
                "failStartTime":1243.5, 
                "failEndTime":1246.5
            },
            "endStage":1215.5
        },
     ]
};
var gameSheet14 = {
     "checkPoints":[
        {   //1 space motorbike
            "newStage":1247,
            "title": "fire against enmy",
            "active":false,
            "startTime":1251,
            "endTime":1252.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1305, 
                "failEndTime":1306
            },
            "wrongMove2":{
               "failStartTime":1305, 
                "failEndTime":1306
            },
        },
          {   //2 space motorbike                   
            "title": "big eyes laser",
            "active":false,
            "startTime":1254,
            "endTime":1255,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1305, 
                "failEndTime":1306
            },
            "wrongMove2":{
               "failStartTime":1305, 
                "failEndTime":1306
            },
        },
         {   //3 space motorbike                   
            "title": "big eyes laser",
            "active":false,
            "startTime":1256.5,
            "endTime":1257.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1305, 
                "failEndTime":1306
            },
            "wrongMove2":{
               "failStartTime":1305, 
                "failEndTime":1306
            },
        },
         {   //4 space motorbike                   
            "title": "big eyes laser",
            "active":false,
            "startTime":1259,
            "endTime":1260,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1305, 
                "failEndTime":1306
            },
            "wrongMove2":{
               "failStartTime":1305, 
                "failEndTime":1306
            },
        },
         {   //5 space motorbike                   
            "title": "big eyes laser",
            "active":false,
            "startTime":1261,
            "endTime":1262,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1305, 
                "failEndTime":1306
            },
            "wrongMove2":{
               "failStartTime":1305, 
                "failEndTime":1306
            },
        },
         {   //6 space motorbike                   
            "title": "big eyes laser",
            "active":false,
            "startTime":1262.7,
            "endTime":1263.7,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1306.5, 
                "failEndTime":1309
            },
            "wrongMove2":{
                "failStartTime":1306.5, 
                "failEndTime":1309
            },
        },
         {   //7 space motorbike                   
            "title": "big eyes laser",
            "active":false,
            "startTime":1264.5,
            "endTime":1265.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1310.7, 
                "failEndTime":1313
            },
            "wrongMove2":{
                "failStartTime":1306, 
                "failEndTime":1313
            },
        },
         {   //8 space motorbike                   
            "title": "big eyes laser",
            "active":false,
            "startTime":1266,
            "endTime":1269,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1315, 
                "failEndTime":1318
            },
            "wrongMove2":{
                "failStartTime":1315, 
                "failEndTime":1318
            },
        },
         {   //9 space motorbike                   
            "title": "sword shoot",
            "active":false,
            "startTime":1271,
            "endTime":1272,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1338.7, 
                "failEndTime":1340
            },
            "wrongMove2":{
                "failStartTime":1338.7, 
                "failEndTime":1340
            },
        },
         {   //10 space motorbike                   
            "title": "big eyes laser",
            "active":false,
            "startTime":1277,
            "endTime":1278,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1325, 
                "failEndTime":1327
            },
            "wrongMove2":{
                "failStartTime":1325, 
                "failEndTime":1327
            },
        },
         {   //11 space motorbike                   
            "title": "big eyes laser",
            "active":false,
            "startTime":1280,
            "endTime":1281.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1328.7, 
                "failEndTime":1331
            },
            "wrongMove2":{
                "failStartTime":1328.7, 
                "failEndTime":1331
            },
        },
         {   //12 space motorbike                   
            "title": "wheel movement",
            "active":false,
            "startTime":1286,
            "endTime":1287,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1328.7, 
                "failEndTime":1331
            },
            "wrongMove2":{
                "failStartTime":1328.7, 
                "failEndTime":1331
            },
        },
         {   //13 space motorbike                   
            "title": "wheel movement",
            "active":false,
            "startTime":1288.5,
            "endTime":1289.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1328.7, 
                "failEndTime":1331
            },
            "wrongMove2":{
                "failStartTime":1328.7, 
                "failEndTime":1331
            },
        },
         {   //14 space motorbike                   
            "title": "big eyes laser",
            "active":false,
            "startTime":1291,
            "endTime":1292,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":1328.7, 
                "failEndTime":1331
            },
            "wrongMove2":{
                "failStartTime":1328.7, 
                "failEndTime":1331
            },
        },
         {   //15 space motorbike                   
            "title": "big ball shoot",
            "active":false,
            "startTime":1294,
            "endTime":1295,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1334, 
                "failEndTime":1336
            },
            "wrongMove2":{
                "failStartTime":1334, 
                "failEndTime":1336
            },
        },
         {   //16 space motorbike                   
            "title": "big ball shoot",
            "active":false,
            "startTime":1296,
            "endTime":1297,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1334, 
                "failEndTime":1336
            },
            "wrongMove2":{
                "failStartTime":1334, 
                "failEndTime":1336
            },
            "endStage":1303
        },                 
    ]
};
var gameSheet15 = {
     "checkPoints":[
        {   //1 under water
            "newStage":1344,
            "title": "velopendulo",
            "active":false,
            "startTime":1352,
            "endTime":1353,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1369.7, 
                "failEndTime":1371
            },
            "wrongMove2":{
                "failStartTime":1374.7, 
                "failEndTime":1376
            },
        },
         {   //2 under water                   
            "title": "velopendulo2",
            "active":false,
            "startTime":1356,
            "endTime":1357,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1369.7, 
                "failEndTime":1371
            },
            "wrongMove2":{
                "failStartTime":1369.7, 
                "failEndTime":1371
            },
        },
          {   //3 under water                    
            "title": "granade",
            "active":false,
            "startTime":1358,
            "endTime":1359,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1380, 
                "failEndTime":1382.5
            },
            "wrongMove2":{
                "failStartTime":1380, 
                "failEndTime":1382.5
            },
            "endStage":1368
        }                 
     ]
};
var gameSheet16 = {
     "checkPoints":[
        {   //1 final stage
            "newStage":1382,
            "title": "laser pool",
            "active":false,
            "startTime":1390,
            "endTime":1391,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":1469.5, 
                "failEndTime":1472
            },
            "wrongMove2":{
                "failStartTime":1469.5, 
                "failEndTime":1472
            },
        },
         {  //2 final stage                   
            "title": "laser pool",
            "active":false,
            "startTime":1392.5,
            "endTime":1393.7,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":1469.5, 
                "failEndTime":1472
            },
            "wrongMove2":{
                "failStartTime":1469.5, 
                "failEndTime":1472
            },
        },
         {  //3 final stage                   
            "title": "engine start",
            "active":false,
            "startTime":1400,
            "endTime":1402,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1479.5, 
                "failEndTime":1482
            },
             "wrongMove2":{
                "failStartTime":1479.5, 
                "failEndTime":1482
            },
        },
         {  //4 final stage                   
            "title": "engine start",
            "active":false,
            "startTime":1414,
            "endTime":1415,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1479.5, 
                "failEndTime":1482
            },
             "wrongMove2":{
                "failStartTime":1479.5, 
                "failEndTime":1482
            },
        },
         {  //5 final stage                   
            "title": "engine start 2",
            "active":false,
            "startTime":1417,
            "endTime":1418,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":1479.5, 
                "failEndTime":1482
            },
             "wrongMove2":{
                "failStartTime":1479.5, 
                "failEndTime":1482
            },
        },
         {  //6 final stage                   
            "title": "engine start joystick",
            "active":false,
            "startTime":1419,
            "endTime":1420,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
                "failStartTime":1479.5, 
                "failEndTime":1482
            },
             "wrongMove2":{
                "failStartTime":1479.5, 
                "failEndTime":1482
            },
        },
         {  //7 final stage                   
            "title": "monster escape",
            "active":false,
            "startTime":1424,
            "endTime":1425,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1484, 
                "failEndTime":1487
            },
            "wrongMove2":{
                "failStartTime":1484, 
                "failEndTime":1487
            },
        },
         {  //8 final stage                   
            "title": "monster escape",
            "active":false,
            "startTime":1428,
            "endTime":1429,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1489, 
                "failEndTime":1491.5
            },
            "wrongMove2":{
                 "failStartTime":1489, 
                "failEndTime":1491.5
            },
            "endStage":1467
        }
    ]
};
