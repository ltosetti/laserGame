
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
            "finishStage":90,
            "gameComplete": true
        }  
        
    ],          
};


