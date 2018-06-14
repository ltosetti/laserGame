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
            "description":"Ok, This might be a little more tricky. You have 5 lives! Save Daphne!",
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
}
var data = {    
    "checkPointScore":0,
    "checkPoints":[       
        {  
            "id":1,
            "newStage": 59.7,
            "title": "spying enemy basement1",
            "active":false,
            "startTime":70.2,                                      
            "endTime":71.01,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",                     
            "wrongMove1":{
                "failStartTime":85.46, 
                "failEndTime":86.25
            },
            "wrongMove2":{
                "failStartTime":85.46, 
                "failEndTime":86.25
            }                    
        },
        
        {   "id":2,
            "jumpTo": 98.35,
            "title": "platform mobile",
            "active":false,
            "startTime":82.25,
            "endTime":83.2,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":86.85, 
                "failEndTime":88
            },
            "wrongMove2":{
                "failStartTime":88.9, 
                "failEndTime":97.5
            },
            "finishStage":90,
            "gameComplete": true
        },
        
        
    ]
};
