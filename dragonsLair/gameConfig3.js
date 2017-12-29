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
       /*
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
                "failEndTime":86.5
            },
            "wrongMove2":{
                "failStartTime":85.46, 
                "failEndTime":86.5
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
                "failEndTime":88.7
            },
            "wrongMove2":{
                "failStartTime":88.9, 
                "failEndTime":97.5
            },
            "finishStage":85
        },
        
        {    
            "id":3,
            "title": "platform mobile",
            "active":false,
            "startTime":101.35,
            "endTime":102.86,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":113.83, 
                "failEndTime":116.5
            },
            "wrongMove2":{
                "failStartTime":116.7, 
                "failEndTime":118.5
            }            
        },
        {  
            "id":3,
            "title": "platform mobile",
            "active":false,
            "startTime":104,
            "endTime":105,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":116.7, 
                "failEndTime":118.5
            },
            "wrongMove2":{
                "failStartTime":116.7, 
                "failEndTime":118.5
            }
        },
        {       
            "id":3,
            "title": "base landing",
            "active":false,
            "startTime":105.5,
            "endTime":106.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                  "failStartTime":116.7, 
                "failEndTime":118.5
            },
            "wrongMove2":{
                  "failStartTime":116.7, 
                "failEndTime":118.5
            }
        },
        {      
            "id":3,
            "title": "base landing",
            "active":false,
            "startTime":107.5,
            "endTime":108.5,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
             "wrongMove1":{
                  "failStartTime":116.7, 
                "failEndTime":118.5
            },
            "wrongMove2":{
                  "failStartTime":116.7, 
                "failEndTime":118.5
            }
        },
        {    
            "id":3,
            "title": "base landing",
            "active":false,
            "startTime":109.5,
            "endTime":110.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                 "failStartTime":118.75, 
                "failEndTime":121.25
            },
            "wrongMove2":{
                  "failStartTime":118.75, 
                "failEndTime":121.25
            }
        },
        {   
            "id":3,
            "jumpTo": 129.25,
            "title": "base landing",
            "active":false,
            "startTime":112.25,
            "endTime":113.25,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":121.75, 
                "failEndTime":128.5
            },
            "wrongMove2":{
                "failStartTime":121.75, 
                "failEndTime":128.5
            },
            "finishStage":113.5
        },
        
        
        {   
            "id":4,
            "newStage": 129.25,
            "title": "base landing",
            "active":false,
            "startTime":131,
            "endTime":132,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":140.25, 
                "failEndTime":142.25
            },
            "wrongMove2":{
                "failStartTime":140.25, 
                "failEndTime":147.25
            }
        },
        {         
            "id":4,
            "title": "base landing",
            "active":false,
            "startTime":133.25,
            "endTime":134.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                 "failStartTime":140.25, 
                "failEndTime":142.25
            },
            "wrongMove2":{
                "failStartTime":140.25,  
                "failEndTime":147.25
            }
        },
        {        
            "id":4,
            "title": "base landing",
            "active":false,
            "startTime":135.5,
            "endTime":136.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":140.25, 
                "failEndTime":142.25
            },
            "wrongMove2":{
                "failStartTime":140.25, 
                "failEndTime":147.25
            }
        },
        {  
            "id":4,
            "jumpTo": 148.75,
            "title": "base landing",
            "active":false,
            "startTime":138,
            "endTime":139,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":140.25, 
                "failEndTime":142.5
            },
            "wrongMove2":{
                "failStartTime":140.25, 
                "failEndTime":147.25
            },
            "finishStage":139
        },
        
        
        {    
            "id":5,
            "newStage": 148.75,
            "title": "base landing",
            "active":false,
            "startTime":152,
            "endTime":153,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
               "failStartTime":164, 
                "failEndTime":172
            },
            "wrongMove2":{
               "failStartTime":164, 
                "failEndTime":172
            }
        },        
        {   
            "id":5,
            "title": "base landing",
            "active":false,
            "startTime":154,
            "endTime":155,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
               "failStartTime":164, 
                "failEndTime":172
            },
            "wrongMove2":{
               "failStartTime":164, 
                "failEndTime":172
            }
        },        
        {         
            "id":5,
            "title": "base landing",
            "active":false,
            "startTime":156,
            "endTime":157,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
               "failStartTime":164, 
                "failEndTime":172.5
            },
            "wrongMove2":{
                "failStartTime":164, 
                "failEndTime":172.5
            }
        },
        {    
            "id":5,
            "jumpTo":173,
            "title": "base landing",
            "active":false,
            "startTime":158,
            "endTime":159,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{"failStartTime":161,"failEndTime":163},
            "wrongMove2":{"failStartTime":161,"failEndTime":163},           
            "finishStage":161
        },
        
        {    
            "id":6,
            "newStage": 172.75,
            "title": "base landing",
            "active":false,
            "startTime":173.75,
            "endTime":174.75,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
               "failStartTime":194.5, 
                "failEndTime":196
            },
            "wrongMove2":{
               "failStartTime":196.5, 
                "failEndTime":198
            }
        },  
        {           
            "id":6,
            "active":false,
            "startTime":175.75,
            "endTime":176.75,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
               "failStartTime":193.5, 
                "failEndTime":194
            },
            "wrongMove2":{
                "failStartTime":194.5, 
                "failEndTime":195.5
            }
        },  
        {           
            "id":6,
            "active":false,
            "startTime":177.75,
            "endTime":178.75,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
               "failStartTime":194.5, 
                "failEndTime":196
            },
            "wrongMove2":{
               "failStartTime":196.5, 
                "failEndTime":198.25
            }
        },  
        {        
            "id":6,
            "active":false,
            "startTime":179.75,
            "endTime":180.75,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
               "failStartTime":194.5, 
                "failEndTime":196
            },
            "wrongMove2":{
               "failStartTime":196.5, 
                "failEndTime":198.25
            }
        },  
        {    //water
            "id":6,
            "active":false,
            "startTime":181.75,
            "endTime":182.75,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
               "failStartTime":198.5, 
                "failEndTime":201.25
            },
            "wrongMove2":{
               "failStartTime":198.5, 
                "failEndTime":201.25
            }
        },  
        {      
            "id":6,
            "active":false,
            "startTime":183.75,
            "endTime":184.75,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
               "failStartTime":201.75, 
                "failEndTime":203
            },
            "wrongMove2":{
               "failStartTime":201.75, 
                "failEndTime":203
            }
        },  
        {   //spider  
            "id":6,
            "active":false,
            "startTime":187,
            "endTime":188,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
               "failStartTime":203.5, 
                "failEndTime":205
            },
            "wrongMove2":{
               "failStartTime":203.5, 
                "failEndTime":205
            }
        },
        {    
            "id":6,
            "jumpTo":213.75,
            "active":false,
            "startTime":191,
            "endTime":192,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
               "failStartTime":205.5, 
                "failEndTime":207.5
            },
            "wrongMove2":{
               "failStartTime":205.5, 
                "failEndTime":213.5
            },
            "finishStage":193
        },
       
        {    
            "id":7,
            "newStage":213.75,
            "active":false,
            "startTime":215,
            "endTime":216,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
               "failStartTime":227.5, 
                "failEndTime":229
            },
            "wrongMove2":{
               "failStartTime":227.5, 
                "failEndTime":229
            }
        },
        {           
            "id":7,
            "active":false,
            "startTime":217.25,
            "endTime":218.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
               "failStartTime":226.25, 
                "failEndTime":227.25
            },
            "wrongMove2":{
               "failStartTime":226.25, 
                "failEndTime":227.25
            }
        },
        {        
            "id":7,
            "active":false,
            "startTime":220.75,
            "endTime":221.75,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
               "failStartTime":229.25, 
                "failEndTime":230.75
            },
            "wrongMove2":{
               "failStartTime":229.25, 
                "failEndTime":236.75
            }
        },        
        {   "id":7,
            "jumpTo":237,       
            "active":false,
            "startTime":223.25,
            "endTime":224.25,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
               "failStartTime":227.5, 
                "failEndTime":229
            },
            "wrongMove2":{
               "failStartTime":227.5, 
                "failEndTime":229
            },
            "finishStage":226
        },
        
        {   "id":8,
            "newStage":237,       
            "active":false,
            "startTime":239,
            "endTime":240,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
               "failStartTime":254, 
                "failEndTime":258
            },
            "wrongMove2":{
              "failStartTime":254, 
                "failEndTime":258
            }
        },
        {   "id":8,           
            "active":false,
            "startTime":241,
            "endTime":242,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
               "failStartTime":254, 
                "failEndTime":258
            },
            "wrongMove2":{
              "failStartTime":254, 
                "failEndTime":258
            }
        },
        {   "id":8,
            "jumpTo":265,       
            "active":false,
            "startTime":243,
            "endTime":244,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
               "failStartTime":248, 
                "failEndTime":251.5
            },
            "wrongMove2":{
               "failStartTime":251.75, 
                "failEndTime":253.75
            },
            "finishStage":247.5
        },
        
        {   "id":9,
            "newStage":265,       
            "active":false,
            "startTime":266.75,
            "endTime":267.75,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
               "failStartTime":277.25, 
                "failEndTime":278.5
            },
            "wrongMove2":{
               "failStartTime":277.25, 
                "failEndTime":278.5
            }
        },
        {   "id":9,               
            "active":false,
            "startTime":269.75,
            "endTime":270.75,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
               "failStartTime":279.25, 
                "failEndTime":280.25
            },
            "wrongMove2":{
               "failStartTime":279.25, 
                "failEndTime":280.25
            }
        },
        {   "id":9,        
            "jumpTo":290.75,
            "active":false,
            "startTime":273.5,
            "endTime":274.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
               "failStartTime":281, 
                "failEndTime":284.5
            },
            "wrongMove2":{
                "failStartTime":281, 
                "failEndTime":290.25
            },
            "finishStage":277
        },
        
        {   "id":10,        
            "newStage":290.75,
            "active":false,
            "startTime":293.75,
            "endTime":294.75,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
               "failStartTime":312.5, 
                "failEndTime":313.5
            },
            "wrongMove2":{
                "failStartTime":313.75, 
                "failEndTime":314.5
            }            
        },
        {  "id":10,                   
            "active":false,
            "startTime":296.25,
            "endTime":297.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
               "failStartTime":315, 
                "failEndTime":316.25
            },
            "wrongMove2":{
                "failStartTime":315, 
                "failEndTime":316.25
            }            
        },
        {  "id":10,                   
            "active":false,
            "startTime":298.5,
            "endTime":299.5,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
               "failStartTime":317, 
                "failEndTime":318.75
            },
            "wrongMove2":{
                "failStartTime":317, 
                "failEndTime":318.75
            }            
        },
        {  "id":10,                   
            "active":false,
            "startTime":300.75,
            "endTime":301.75,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
               "failStartTime":319, 
                "failEndTime":319.75
            },
            "wrongMove2":{
                 "failStartTime":319, 
                "failEndTime":319.75
            }            
        },
        {  "id":10, 
            "jumpTo":329,
            "active":false,
            "startTime":307,
            "endTime":308,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
               "failStartTime":320.25, 
                "failEndTime":322.75
            },
            "wrongMove2":{
                "failStartTime":320.25, 
                "failEndTime":328.5
            },
            "finishStage":312
        },
        
        {  "id":11, 
            "newStage":329,
            "active":false,
            "startTime":339,
            "endTime":339.75,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
               "failStartTime":350.25, 
                "failEndTime":352
            },
            "wrongMove2":{
                "failStartTime":350.25, 
                "failEndTime":352
            }           
        },
        {  "id":11,            
            "active":false,
            "startTime":342.25,
            "endTime":343.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
               "failStartTime":352.5, 
                "failEndTime":355.5
            },
            "wrongMove2":{
                "failStartTime":352.5, 
                "failEndTime":355.5
            }            
        },
        {  "id":11,            
            "active":false,
            "startTime":345.5,
            "endTime":346.5,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
               "failStartTime":356.25, 
                "failEndTime":356.75
            },
            "wrongMove2":{
                "failStartTime":356.25, 
                "failEndTime":363
            }          
        },
        {  "id":11, 
            "jumpTo":363.5,
            "active":false,
            "startTime":347.75,
            "endTime":348.75,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
               "failStartTime":356.25, 
                "failEndTime":356.75
            },
            "wrongMove2":{
                "failStartTime":356.25, 
                "failEndTime":363
            },   
            "finishStage":349
        },
        
        {  "id":12,                         
            "jumpTo":381.5,
            "active":false,
            "startTime":369.5,
            "endTime":370.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
               "failStartTime":372, 
                "failEndTime":375.25
            },
            "wrongMove2":{
                "failStartTime":372, 
                "failEndTime":381
            },   
            "finishStage":372
        },
        
        {  
            "id":13,                         
            "jumpTo":397.5,
            "active":false,
            "startTime":382.75,
            "endTime":383.75,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
               "failStartTime":387.25, 
                "failEndTime":388.75
            },
            "wrongMove2":{
                "failStartTime":389.25, 
                "failEndTime":397
            },   
            "finishStage":386
        },
        
        {
            "id":14,
            "newStage":397.5,
            "active":false,
            "startTime":400,
            "endTime":401,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
              "wrongMove1":{
               "failStartTime":409.75,
                "failEndTime":411.5
            },
            "wrongMove2":{
                "failStartTime":409.75,
                "failEndTime":417.25
            }   
        },
        {  
            "id":14,
            "active":false,
            "startTime":402,
            "endTime":403,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
               "failStartTime":409.75, 
                "failEndTime":411.5
            },
            "wrongMove2":{
                "failStartTime":409.75, 
                "failEndTime":417.25
            }   
        },
        {  
            "id":14,
            "active":false,
            "startTime":404,
            "endTime":405,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
               "failStartTime":409.75, 
                "failEndTime":411.5
            },
            "wrongMove2":{
                "failStartTime":409.75, 
                "failEndTime":417.25
            }   
        },
        {  
            "id":14,
            "jumpTo":418,
            "active":false,
            "startTime":406,
            "endTime":407,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
               "failStartTime":409.75, 
                "failEndTime":411.5
            },
            "wrongMove2":{
                "failStartTime":409.75, 
                "failEndTime":417.25
            },   
            "finishStage":409
        },
        
        {  
            "id":15, 
            "newStage":418,
            "active":false,
            "startTime":420.75,
            "endTime":421.75,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
               "failStartTime":436, 
                "failEndTime":437.25
            },
            "wrongMove2":{
                "failStartTime":436, 
                "failEndTime":437.25
            }            
        },
        {   
            "id":15,             
            "active":false,
            "startTime":422.75,
            "endTime":423.75,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
               "failStartTime":438, 
                "failEndTime":440
            },
            "wrongMove2":{
               "failStartTime":436, 
                "failEndTime":437.25
            }
        },
        {   
            "id":15,             
            "active":false,
            "startTime":424.5,
            "endTime":425.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
               "failStartTime":436, 
                 "failEndTime":437.25
            },
            "wrongMove2":{
               "failStartTime":436, 
                 "failEndTime":437.25
            }
        },
        {   
            "id":15,             
            "active":false,
            "startTime":426.5,
            "endTime":427.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
               "failStartTime":438, 
                "failEndTime":440
            },
            "wrongMove2":{
               "failStartTime":436, 
                 "failEndTime":437.25
            }
        },
        {   
            "id":15,             
            "active":false,
            "startTime":428.5,
            "endTime":429.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
               "failStartTime":438, 
                "failEndTime":440
            },
            "wrongMove2":{
               "failStartTime":436, 
                "failEndTime":437.25
            }
        },
        {   
            "id":15,   
            "jumpTo":448,
            "active":false,
            "startTime":430.5,
            "endTime":431.5,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
               "failStartTime":440.75, 
                "failEndTime":447.5
            },
            "wrongMove2":{
                 "failStartTime":440.75, 
                "failEndTime":447.5
            },   
            "finishStage":435
        },
        
        {   
            "id":16,   
            "newStage":448,
            "active":false,
            "startTime":450.75,
            "endTime":451.75,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
              "wrongMove1":{
               "failStartTime":470, 
                "failEndTime":471.5
            },
            "wrongMove2":{
                 "failStartTime":470, 
                "failEndTime":471.5
            }
        },
        {   "id":16,              
            "active":false,
            "startTime":452.75,
            "endTime":453.75,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
              "wrongMove1":{
               "failStartTime":470, 
                "failEndTime":471.5
            },
            "wrongMove2":{
                 "failStartTime":470, 
                "failEndTime":471.5
            }
        },         
        {  "id":16,              
            "active":false,
            "startTime":456.25,
            "endTime":457.25,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
              "wrongMove1":{
               "failStartTime":470, 
                "failEndTime":471.5
            },
            "wrongMove2":{
                 "failStartTime":470, 
                "failEndTime":471.5
            }
        },
        {  "id":16,              
            "active":false,
            "startTime":458.25,
            "endTime":459.25,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
               "failStartTime":470, 
                "failEndTime":471.5
            },
            "wrongMove2":{
                 "failStartTime":470, 
                "failEndTime":471.5
            }
        },        
        {  "id":16,              
            "active":false,
            "startTime":460.25,
            "endTime":461.25,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
               "failStartTime":470, 
                "failEndTime":471.5
            },
            "wrongMove2":{
                 "failStartTime":470, 
                "failEndTime":471.5
            }
        },
        {  "id":16, 
           "jumpTo":479.25,
            "active":false,
            "startTime":464,
            "endTime":465,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
               "failStartTime":472, 
                "failEndTime":473
            },
            "wrongMove2":{
                "failStartTime":472, 
                "failEndTime":478.5
            },   
            "finishStage":469.5
        }, 
         
        {  "id":17, 
           "newStage":479.25,
            "active":false,
            "startTime":481.25,
            "endTime":482.25,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
               "failStartTime":495.75, 
                "failEndTime":496.5
            },
            "wrongMove2":{
               "failStartTime":495.75, 
                "failEndTime":496.5
            }
        },
        {  "id":17,            
            "active":false,
            "startTime":483,
            "endTime":484,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
               "failStartTime":497, 
                "failEndTime":497.75
            },
            "wrongMove2":{
               "failStartTime":497, 
                "failEndTime":497.75
            }
        },
        {  "id":17,            
            "active":false,
            "startTime":484.75,
            "endTime":485.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
               "failStartTime":498, 
                "failEndTime":499
            },
            "wrongMove2":{
                 "failStartTime":498, 
                "failEndTime":499
            }
        },
        {  "id":17,            
            "active":false,
            "startTime":486.25,
            "endTime":487.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
               "failStartTime":497, 
                "failEndTime":497.75
            },
            "wrongMove2":{
               "failStartTime":497, 
                "failEndTime":497.75
            }
        },
        {  "id":17,            
            "active":false,
            "startTime":488.25,
            "endTime":489.25,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
              "wrongMove1":{
               "failStartTime":498, 
                "failEndTime":499
            },
            "wrongMove2":{
                 "failStartTime":498, 
                "failEndTime":499
            }
        },
        {  "id":17,            
            "active":false,
            "jumpTo": 508.75,
            "startTime":490.25,
            "endTime":491.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
               "failStartTime":499.75, 
                "failEndTime":502
            },
            "wrongMove2":{
                "failStartTime":499.75, 
                "failEndTime":507.75
            },
            "finishStage":495
        },
        
        {  "id":18,            
            "active":false,
            "newStage": 508.75,
            "startTime":509.75,
            "endTime":510.75,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
               "failStartTime":520.75, 
                "failEndTime":522.5
            },
            "wrongMove2":{
                "failStartTime":520.75, 
                "failEndTime":522.5
            }
        },
        {  "id":18,            
            "active":false,           
            "startTime":511,
            "endTime":512,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
               "failStartTime":520.75, 
                "failEndTime":522.5
            },
            "wrongMove2":{
              "failStartTime":520.75, 
                "failEndTime":522.5
            }
        },
        {  "id":18,            
            "active":false,           
            "startTime":513,
            "endTime":514,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
               "failStartTime":523, 
                "failEndTime":524.5
            },
            "wrongMove2":{
                "failStartTime":523, 
                "failEndTime":530.25
            }
        },
        {  "id":18,            
            "active":false,           
            "startTime":515.25,
            "endTime":516.25,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
               "failStartTime":520.75, 
                "failEndTime":522.5
            },
            "wrongMove2":{
                 "failStartTime":520.75, 
                "failEndTime":522.5
            }
        },
        {  "id":18,         
            "jumpTo":596.25,
            "active":false,           
            "startTime":517,
            "endTime":518,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
               "failStartTime":520.75, 
                "failEndTime":522.5
            },
            "wrongMove2":{
                 "failStartTime":520.75, 
                "failEndTime":522.5
            },
            "finishStage":520
        },
        
        {  "id":19,         
            "newStage":596.25,
            "active":false,           
            "startTime":597.25,
            "endTime":598.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":609.75, 
                "failEndTime":611
            },
            "wrongMove2":{
                "failStartTime":609.75, 
                "failEndTime":611
            }
        },
        {  "id":19,            
            "active":false,           
            "startTime":601.25,
            "endTime":602.25,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":611.25, 
                "failEndTime":613
            },
            "wrongMove2":{
                "failStartTime":611.25, 
                "failEndTime":618.75
            }
        },
        {  "id":19, 
            "jumpTo":619.5,
            "active":false,           
            "startTime":603.75,
            "endTime":604.75,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":608, 
                "failEndTime":609
            },
            "wrongMove2":{
                "failStartTime":608, 
                "failEndTime":609
            },
            "finishStage":607
        },
        
        {  "id":20, 
            "jumpTo":641,
            "newStage":619.5,
            "active":false,           
            "startTime":628.75,
            "endTime":629.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":638.5, 
                "failEndTime":640.5
            },
            "wrongMove2":{
                "failStartTime":635, 
                "failEndTime":638
            },
            "finishStage":629.75
        },
        
        {  "id":21, 
            "newStage":641,
            "jumpTo":720,
            "active":false,           
            "startTime":642.75,
            "endTime":643.75,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":638.5, 
                "failEndTime":640.5
            },
            "wrongMove2":{
                "failStartTime":638.5, 
                "failEndTime":640.5
            },
            "finishStage":645
        },
        
        
        {  
            "id":22, 
            "newStage":720,            
            "active":false,           
            "startTime":721,
            "endTime":722,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
                "failStartTime":752.25, 
                "failEndTime":753
            },
            "wrongMove2":{
                "failStartTime":753.25, 
                "failEndTime":756.25
            }
        },
        { 
            "id":22,                   
            "active":false,           
            "startTime":725.25,
            "endTime":726.25,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":752.25, 
                "failEndTime":753
            },
            "wrongMove2":{
                "failStartTime":753.25, 
                "failEndTime":756.25
            }
        },
        { 
            "id":22,                   
            "active":false,           
            "startTime":728.5,
            "endTime":729.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":752.25, 
                "failEndTime":753
            },
            "wrongMove2":{
                "failStartTime":753.25, 
                "failEndTime":756.25
            }
        },
        { 
            "id":22,                   
            "active":false,           
            "startTime":731,
            "endTime":732,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":752.25, 
                "failEndTime":753
            },
            "wrongMove2":{
                "failStartTime":753.25, 
                "failEndTime":756.25
            }
        },
        { 
            "id":22,                   
            "active":false,           
            "startTime":735.5,
            "endTime":736.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":752.25, 
                "failEndTime":753
            },
            "wrongMove2":{
                "failStartTime":753.25, 
                "failEndTime":756.25
            }
        },
        { 
            "id":22,                   
            "active":false,           
            "startTime":737.75,
            "endTime":738.75,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":752.25, 
                "failEndTime":753
            },
            "wrongMove2":{
                "failStartTime":753.25, 
                "failEndTime":756.25
            }
        },
        { 
            "id":22,                   
            "active":false,           
            "startTime":741.5,
            "endTime":742.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":752.25, 
                "failEndTime":753
            },
            "wrongMove2":{
                "failStartTime":753.25, 
                "failEndTime":756.25
            }
        },
        { 
            "id":22,                   
            "active":false,           
            "startTime":743.5,
            "endTime":744.5,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
             "wrongMove1":{
                "failStartTime":752.25, 
                "failEndTime":753
            },
            "wrongMove2":{
                "failStartTime":753.25, 
                "failEndTime":756.25
            }
        },       
        { 
            "id":22,  
            "jumpTo":762.25,
            "active":false,           
            "startTime":746,
            "endTime":747,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":752.25, 
                "failEndTime":753
            },
            "wrongMove2":{
                "failStartTime":753.25, 
                "failEndTime":762
            },
            "finishStage":752
        },
        
        { 
            "id":23,  
            "jumpTo":842,
            "newStage":762.25,
            "active":false,           
            "startTime":763.25,
            "endTime":764.25,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":766.5, 
                "failEndTime":770.5
            },
            "wrongMove2":{
                "failStartTime":771, 
                "failEndTime":777.75
            },
            "finishStage":766
        },
       
        { 
            "id":22,  
            "newStage":842,           
            "active":false,           
            "startTime":845,
            "endTime":846,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":854.5, 
                "failEndTime":856
            },
            "wrongMove2":{
                "failStartTime":853, 
                "failEndTime":854
            }
        },
         { 
            "id":23,  
            "jumpTo":862.5,           
            "active":false,           
            "startTime":848,
            "endTime":849,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":850.25, 
                "failEndTime":852.25
            },
            "wrongMove2":{
                "failStartTime":854.5, 
                "failEndTime":777.75
            },
            "finishStage":850
        },
         
        { 
            "id":24,  
            "newStage":862.5,           
            "active":false,           
            "startTime":863.5,
            "endTime":864.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":873, 
                "failEndTime":875.5
            },
            "wrongMove2":{
                "failStartTime":876, 
                "failEndTime":876.75
            }           
        },        
        { 
            "id":24,                   
            "active":false,           
            "startTime":865.5,
            "endTime":866.5,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":876, 
                "failEndTime":876.75
            },
            "wrongMove2":{
                 "failStartTime":876, 
                "failEndTime":876.75
            }
        },
        { 
            "id":24,       
            "jumpTo":949,
            "active":false,           
            "startTime":869,
            "endTime":870,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":877.5, 
                "failEndTime":878.5
            },
            "wrongMove2":{
                "failStartTime":877.5, 
                "failEndTime":884.25
            },
            "finishStage":872
        },
        */
        { 
            "id":25,       
            "newStage":949,
            "active":false,           
            "startTime":956.25,
            "endTime":957.25,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":998.5, 
                "failEndTime":999
            },
            "wrongMove2":{
               "failStartTime":998.5, 
                "failEndTime":999
            }
        },
        { 
            "id":25,                   
            "active":false,           
            "startTime":958.25,
            "endTime":959.25,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":999.5, 
                "failEndTime":1000.25
            },
            "wrongMove2":{
               "failStartTime":999.5, 
                "failEndTime":1000.25
            }
        },
        { 
            "id":25,                   
            "active":false,           
            "startTime":960.25,
            "endTime":961.25,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1000.5, 
                "failEndTime":1001
            },
            "wrongMove2":{
                "failStartTime":1000.5, 
                "failEndTime":1001
            }
        },
        { 
            "id":25,                   
            "active":false,           
            "startTime":962.25,
            "endTime":963.25,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1001.5, 
                "failEndTime":1002
            },
            "wrongMove2":{
                 "failStartTime":1001.5, 
                "failEndTime":1002
            }
        },
        { 
            "id":25, 
            //rapids
            "active":false,           
            "startTime":967.5,
            "endTime":968.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1002.5, 
                "failEndTime":1004.5
            },
            "wrongMove2":{
                 "failStartTime":1002.5, 
                "failEndTime":1004.5
            }
        },
        { 
            "id":25, 
            //rapids
            "active":false,           
            "startTime":970,
            "endTime":971,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":1002.5, 
                "failEndTime":1004.5
            },
            "wrongMove2":{
                 "failStartTime":1002.5, 
                "failEndTime":1004.5
            }
        },
        { 
            "id":25, 
            //rapids
            "active":false,           
            "startTime":972.25,
            "endTime":973.25,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":1002.5, 
                "failEndTime":1004.5
            },
            "wrongMove2":{
                 "failStartTime":1002.5, 
                "failEndTime":1004.5
            }
        },
        { 
            "id":25, 
            //rapids
            "active":false,           
            "startTime":975,
            "endTime":976,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":1002.5, 
                "failEndTime":1004.5
            },
            "wrongMove2":{
                 "failStartTime":1002.5, 
                "failEndTime":1004.5
            }
        },
        { 
            "id":25,            
            "active":false,           
            "startTime":980.75,
            "endTime":981.75,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1005, 
                "failEndTime":1007
            },
            "wrongMove2":{
                "failStartTime":1005, 
                "failEndTime":1007
            }
        },
        { 
            "id":25,            
            "active":false,           
            "startTime":983.75,
            "endTime":984.75,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1005, 
                "failEndTime":1007
            },
            "wrongMove2":{
                "failStartTime":1005, 
                "failEndTime":1007
            }
        },
        { 
            "id":25,            
            "active":false,           
            "startTime":986.25,
            "endTime":987.25,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1005, 
                "failEndTime":1007
            },
            "wrongMove2":{
                "failStartTime":1005, 
                "failEndTime":1007
            }
        },
        { 
            "id":25,            
            "active":false,           
            "startTime":989,
            "endTime":990,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1005, 
                "failEndTime":1007
            },
            "wrongMove2":{
                "failStartTime":1005, 
                "failEndTime":1007
            }
        },
        { 
            "id":25,      
            "jumpTo":1017,
            "active":false,           
            "startTime":994,
            "endTime":995,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1007.75, 
                "failEndTime":1010.25
            },
            "wrongMove2":{
                 "failStartTime":1007.75, 
                "failEndTime":1016.25
            },
            "finishStage":998
        },
        
    ]
};

function gameData(options){
    this.checkpoints = options.checkPoints; 
    this.startG = options.checkPoints[0].newStage;
    this.keyDirection = [];
    this.moveArrayCheckStart = [];
    this.moveArrayCheckEnd = [];
    this.moveArrayfailed1Start = [];
    this.moveArrayfailed1End = [];
    this.moveArrayfailed2Start = [];
    this.moveArrayfailed2End = [];
    this.stageJump = [];
    this.stageJumpDlay = [];
    this.stageActive = [];
    this.stageComplete = [];
    this.stagePressed = [];
    this.finishStage = [];
    this.assignMove();
   
    console.log(
        this.keyDirection,
        this.moveArrayCheckStart, 
        this.moveArrayCheckEnd, 
        this.moveArrayfailed1Start, 
        this.moveArrayfailed1End,
        this.moveArrayfailed2Start, 
        this.moveArrayfailed2End,
        this.stageJump,
        this.stageJumpDlay,
        this.stageActive,
        this.stageComplete,
        this.stagePressed
    );
    
};
gameData.prototype.assignMove = function(){
    //console.log(this.checkpoints);  
    for (var i=0; this.checkpoints.length > i; i++){
        this.keyDirection[i] = this.checkpoints[i].correctMove;
        this.moveArrayCheckStart[i] = this.checkpoints[i].startTime;
        this.moveArrayCheckEnd[i] = this.checkpoints[i].endTime;
        this.moveArrayfailed1Start[i] = this.checkpoints[i].wrongMove1.failStartTime;
        this.moveArrayfailed1End[i] = this.checkpoints[i].wrongMove1.failEndTime;
        this.moveArrayfailed2Start[i] = this.checkpoints[i].wrongMove2.failStartTime;
        this.moveArrayfailed2End[i] = this.checkpoints[i].wrongMove2.failEndTime;
        this.stageJump[i] = this.checkpoints[i].jumpTo;
        this.stageJumpDlay[i] = this.checkpoints[i].jumpToDelay;
        this.stageActive[i] = this.checkpoints[i].active;
        this.stageComplete[i] = this.checkpoints[i].complete;
        this.stagePressed[i] = this.checkpoints[i].pressed;
        this.finishStage[i] = this.checkpoints[i].finishStage;
    }
};

function gamePlay(options){
    _that = this;
    this.gd = new gameData(options);
    this.videoEl = document.getElementById("scene");
    this.audioError = document.getElementById("audioError");
    this.audioSuccess = document.getElementById("audioSuccess");
    this.audioSuccess.volume = .1; 
    this.audioError.volume = .1; 
    this.current, this.prev, this.next, this.count = 0;
    this.level = gameCfg.levels;
    this.lives;
    this.score;
    this.currentScore;
    this.gameOver = false;
    //this.start();
    this.playThrough();
};
gamePlay.prototype.playThrough = function(){
    var pressed = false, success = false, error = false, moved = false, jumpActive = false, current,prev,next, failStart, failEnd;
    var len = this.gd.checkpoints.length;
    this.videoEl.addEventListener('timeupdate', function(){
        
        for (var i = 0; this.gd.checkpoints.length > i; i++) { 
            (function(index){                
                if (!success && this.videoEl.currentTime > this.gd.moveArrayCheckStart[index] && this.videoEl.currentTime < this.gd.moveArrayCheckEnd[index] && !this.gd.stageActive[index] && !this.gd.stageComplete[index]){
                    document.getElementById("showMoving").style.display = "block";
                    document.getElementById("showMoving").src = "img/"+this.gd.keyDirection[i]+".png";
                    this.current = [
                        this.gd.keyDirection[index], this.gd.moveArrayCheckStart[index], this.gd.moveArrayCheckEnd[index],this.gd.moveArrayfailed1Start[index], this.gd.moveArrayfailed1End[index],this.gd.moveArrayfailed2Start[index], this.gd.moveArrayfailed2End[index],this.gd.stageJump[index],this.gd.stageJumpDlay[index],true,this.gd.stageComplete[index],this.gd.stagePressed[index],this.gd.finishStage[index]
                    ]; 
                    //this.current
                    if (index > 0){
                        this.prev = [
                            this.gd.keyDirection[(index+len-1)%len], //0
                            this.gd.moveArrayCheckStart[(index+len-1)%len], //1
                            this.gd.moveArrayCheckEnd[(index+len-1)%len], //2
                            this.gd.moveArrayfailed1Start[(index+len-1)%len], //3 
                            this.gd.moveArrayfailed1End[(index+len-1)%len], //4
                            this.gd.moveArrayfailed2Start[(index+len-1)%len], //5
                            this.gd.moveArrayfailed2End[(index+len-1)%len], //6
                            this.gd.stageJump[(index+len-1)%len], //7
                            this.gd.stageJumpDlay[(index+len-1)%len], //8
                            false,//this.gd.stageActive[(index+len-1)%len], //9
                            true,//this.gd.stageComplete[(index+len-1)%len], //10
                            this.gd.stagePressed[(index+len-1)%len], //11
                            this.gd.finishStage[(index+len-1)%len] //12
                        ];
                    } else {
                        this.prev = false;
                    }
                    if (i != (this.gd.checkpoints.length-1)){
                        this.next = [
                            this.gd.keyDirection[(index+1)%len], this.gd.moveArrayCheckStart[(index+1)%len],this.gd.moveArrayCheckEnd[(index+1)%len],this.gd.moveArrayfailed1Start[(index+1)%len], this.gd.moveArrayfailed1End[(index+1)%len],this.gd.moveArrayfailed2Start[(index+1)%len], this.gd.moveArrayfailed2End[(index+1)%len],this.gd.stageJump[(index+1)%len],this.gd.stageJumpDlay[(index+1)%len],false,this.gd.stageComplete[(index+1)%len],this.gd.stagePressed[(index+1)%len],this.gd.finishStage[(index+1)%len]
                        ];
                    } else {
                        this.next = false
                    }
                    console.log("Prev: " ,this.prev);
                    console.log("Current: ", this.current);
                    console.log("Next: " ,this.next);
                    console.log(i, index, this.gd.checkpoints.length-1);
                    console.log(this.prev[9],this.current[9], this.next[9])
                    console.log("---------------------------------------");
                    
                    //check the key pressed
                    document.onkeydown = function(e){                            
                        if (this.current != undefined && this.current[9] && !this.current[11]){                        
                            switch (e.keyCode) {
                                case 37:                        
                                    key = "left";
                                    this.current[11] = true;                                
                                    if (!this.current[10]){
                                        if (key == this.current[0]) {                                          
                                            success = true;                                                                             
                                            this.audioSuccess.play();                                       
                                            console.log("******************** success *******************" , this.count);     
                                            error=false;
                                        } else {                                                                               
                                            this.audioError.play();
                                            error=true;
                                            console.log("**************** error ******************");
                                        }
                                    }
                                    document.getElementById("showMoving").style.display = "none";                                
                                    pressed = true;
                                    break;
                                case 39:                        
                                    key = "right";
                                    this.current[11] = true;
                                    if (!this.current[10]){
                                        if (key == this.current[0]) {                                          
                                            success = true;                                                                             
                                            this.audioSuccess.play();                                       
                                            console.log("******************** success *******************" , this.count);     
                                            error=false;
                                        } else {                                                                               
                                            this.audioError.play();
                                            error=true;
                                            console.log("**************** error ******************");                                        
                                        } 
                                    }                          
                                    document.getElementById("showMoving").style.display = "none";                            
                                    pressed = true;
                                    break;                                    
                                case 38:                        
                                    key = "up";
                                    this.current[11] = true;
                                    if (!this.current[10]){
                                        if (key == this.current[0]) {                                          
                                            success = true;                                                                             
                                            this.audioSuccess.play();                                       
                                            console.log("******************** success *******************" , this.count);     
                                            error=false;
                                        } else {                                                                               
                                            this.audioError.play();
                                            error=true;
                                            console.log("**************** error ******************");                                        
                                        } 
                                    }                    
                                    document.getElementById("showMoving").style.display = "none";                            
                                    pressed = true;
                                    break;

                                case 40:                        
                                    key = "down";
                                     this.current[11] = true;
                                     if (!this.current[10]){
                                        if (key == this.current[0]) {                                          
                                            success = true;                                                                             
                                            this.audioSuccess.play();                                       
                                            console.log("******************** success *******************" , this.count);     
                                            error=false;
                                        } else {                                                                               
                                            this.audioError.play();
                                            error=true;
                                            console.log("**************** error ******************");                                        
                                        } 
                                    }                         
                                    document.getElementById("showMoving").style.display = "none";                            
                                    pressed = true;
                                    break;

                                case 83:                        
                                    key = "fire";                               
                                    this.current[11] = true;
                                     if (!this.current[10]){
                                        if (key == this.current[0]) {                                          
                                            success = true;                                                                             
                                            this.audioSuccess.play();                                       
                                            console.log("******************** success *******************" , this.count);     
                                            error=false;
                                        } else {                                                                               
                                            this.audioError.play();
                                            error=true;
                                            console.log("**************** error ******************");                                        
                                        } 
                                    }                        
                                    document.getElementById("showMoving").style.display = "none";
                                    pressed = true;                            
                                    break;
                            }   
                        }                    
                        //key down end
                    }.bind(this);                     
                }
                
                if (this.current != undefined && this.videoEl.currentTime > this.current[2] && this.current[9]){ 
                    this.current[9] = false;
                    if (pressed){ 
                        //if you pressed a right key
                        if (success){                        
                            this.current[10] = true
                            this.count++;
                            console.log("******************** success *******************" , this.count);
                            this.scoreUpdater();
                            error=false;
                        } else {
                            //if you pressed a wrong key
                            failEnd = this.current[4]
                            this.videoEl.currentTime =  this.current[3];
                            document.getElementById("showMoving").style.display = "none";                       
                            console.log("**************** error ******************");
                            this.current[11] = false;
                            error=true;
                        }                    
                    } else {
                        //if you dont pressed a key                    
                        error=true;
                        console.log(error);                        
                        failEnd = this.current[6]
                        this.videoEl.currentTime =  this.current[5];
                        document.getElementById("showMoving").style.display = "none";                                       
                        console.log("******************* error *****************");
                    }
                    if (success && this.current[7] != undefined){                   
                        var gotoNextStep = setInterval(function(){ 
                            if (parseInt(this.videoEl.currentTime) >= this.current[12]){
                                clearInterval(gotoNextStep);
                                this.videoEl.currentTime = this.current[7];                                                
                            }                            
                        }.bind(this), 250);                   
                    }               
                success = false;
                }
                if (!success && error && pressed && this.videoEl.currentTime > failEnd && !this.current[10]){
                    document.getElementById("showMoving").style.display = "none";
                    pressed = false;
                    if (this.lives > 0) {
                        this.lives = parseInt(document.getElementById("gdLives").innerHTML) - 1;                                   
                        document.getElementById("gdLives").innerHTML = this.lives;              
                        TweenMax.to("#gdLives",0.3,{
                            scale:2,
                            opacity:0.4,
                            //color:"#ff0000",
                            onComplete: function(){
                                TweenMax.to("#gdLives",0.3,{
                                    scale:1, 
                                    //color:"#fff",
                                    opacity:1
                                });
                            }.bind(this)
                        });                    
                        this.videoEl.pause();
                        if (this.prev == false){
                            this.videoEl.currentTime = this.gd.startG;
                        } else if (this.prev[7] != undefined){
                            this.videoEl.currentTime = this.prev[7];                            
                        } else {
                            this.videoEl.currentTime = this.prev[2];
                        }
                        TweenMax.to("#getReady",0.5,{autoAlpha:1});                                 
                        setTimeout(function(){
                            TweenMax.to("#getReady",0.5,{autoAlpha:0});      
                            //document.getElementById("getReady").style.visibility = "hidden";
                            this.videoEl.play();   
                        }.bind(this),2500);
                        error = false;                          
                    } else {                                      
                        this.videoEl.pause();
                        console.log("%%%%%%%%%%%%%%%%%%% Game over %%%%%%%%%%%%%%%%%%%%");
                        this.gameOver = true;
                        error = false;                          
                    } 
                } else if (!success && error && !pressed && this.videoEl.currentTime > failEnd && !this.gd.stageComplete[i]){
                     document.getElementById("showMoving").style.display = "none";
                     if (this.lives > 0) {
                        this.lives = parseInt(document.getElementById("gdLives").innerHTML) - 1;                                   
                        document.getElementById("gdLives").innerHTML = this.lives;              
                        TweenMax.to("#gdLives",0.3,{
                            scale:2,
                            opacity:0.4,
                            //color:"#ff0000",
                            onComplete: function(){
                                TweenMax.to("#gdLives",0.3,{
                                    scale:1, 
                                    //color:"#fff",
                                    opacity:1
                                });
                            }.bind(this)
                        });                    
                        this.videoEl.pause();
                        if (this.prev == false){                        
                            this.videoEl.currentTime = this.gd.startG;
                        } else if (this.prev[7] != undefined){
                            this.videoEl.currentTime = this.prev[7];                            
                        } else {
                            this.videoEl.currentTime = this.prev[2];
                        }
                        TweenMax.to("#getReady",0.5,{autoAlpha:1});                                  
                        setTimeout(function(){
                            TweenMax.to("#getReady",0.5,{autoAlpha:0});      
                            //document.getElementById("getReady").style.visibility = "hidden";
                            this.videoEl.play();   
                        }.bind(this),2500);
                        error = false;                          
                    } else {                    
                        //this.lives = parseInt(document.getElementById("gdLives").innerHTML)-1;                    
                        //document.getElementById("gdLives").innerHTML = this.lives;                    
                        this.videoEl.pause();
                        console.log("%%%%%%%%%%%%%%%%%%% Game over %%%%%%%%%%%%%%%%%%%%");
                        this.gameOver = true;
                        error = false;  
                        //break;
                    }                

                }
                          
                //function index end
            }.bind(this))(i);
           //for end 
        }
        //timeupdate end
    }.bind(this));
                
                
                
                
                
                
                
                
                
                
                
                
                
                /*
                
                if (!success && this.videoEl.currentTime > this.gd.moveArrayCheckStart[index] && this.videoEl.currentTime < this.gd.moveArrayCheckEnd[index] && !this.gd.stageActive[index] && !this.gd.stageComplete[index]){
                    document.getElementById("showMoving").style.display = "block";
                    document.getElementById("showMoving").src = "img/"+this.gd.keyDirection[i]+".png";
                    if (index > 0){
                        this.prev = [
                            this.gd.keyDirection[(index+len-1)%len], //0
                            this.gd.moveArrayCheckStart[(index+len-1)%len], //1
                            this.gd.moveArrayCheckEnd[(index+len-1)%len], //2
                            this.gd.moveArrayfailed1Start[(index+len-1)%len], //3 
                            this.gd.moveArrayfailed1End[(index+len-1)%len], //4
                            this.gd.moveArrayfailed2Start[(index+len-1)%len], //5
                            this.gd.moveArrayfailed2End[(index+len-1)%len], //6
                            this.gd.stageJump[(index+len-1)%len], //7
                            this.gd.stageJumpDlay[(index+len-1)%len], //8
                            this.gd.stageActive[(index+len-1)%len], //9
                            this.gd.stageComplete[(index+len-1)%len], //10
                            this.gd.stagePressed[(index+len-1)%len], //11
                            this.gd.finishStage[(index+len-1)%len] //12
                        ];
                    } else {
                        this.prev = false;
                    }          
                    this.current = [
                            this.gd.keyDirection[index], 
                            this.gd.moveArrayCheckStart[index], 
                            this.gd.moveArrayCheckEnd[index],
                            this.gd.moveArrayfailed1Start[index], 
                            this.gd.moveArrayfailed1End[index],
                            this.gd.moveArrayfailed2Start[index], 
                            this.gd.moveArrayfailed2End[index],
                            this.gd.stageJump[index],
                            this.gd.stageJumpDlay[index],
                            this.gd.stageActive[index],
                            this.gd.stageComplete[index],
                            this.gd.stagePressed[index],
                            this.gd.finishStage[index]
                    ]; 
                    if (i != (this.gd.checkpoints.length-1)){
                        this.next = [
                            this.gd.keyDirection[(index+1)%len], 
                            this.gd.moveArrayCheckStart[(index+1)%len],
                            this.gd.moveArrayCheckEnd[(index+1)%len],
                            this.gd.moveArrayfailed1Start[(index+1)%len], 
                            this.gd.moveArrayfailed1End[(index+1)%len],
                            this.gd.moveArrayfailed2Start[(index+1)%len], 
                            this.gd.moveArrayfailed2End[(index+1)%len],
                            this.gd.stageJump[(index+1)%len],
                            this.gd.stageJumpDlay[(index+1)%len],
                            this.gd.stageActive[(index+1)%len],
                            this.gd.stageComplete[(index+1)%len],
                            this.gd.stagePressed[(index+1)%len],
                            this.gd.finishStage[(index+1)%len]
                        ];
                    } else {
                        this.next = false
                    } 
                    console.log("Prev: " ,this.prev);
                    console.log("Current: ", this.current);
                    console.log("Next: " ,this.next);
                    console.log(i, this.gd.checkpoints.length-1);
                    console.log(this.prev[9],this.current[9], this.next[9])
                    console.log("---------------------------------------");
                }
                if (this.current!=undefined){
                    this.current[9]=true;
                }else{
                    this.current == undefined;
                }
                //this.current[9]=true;
                document.onkeydown = function(e){
                    //if (this.gd.stageActive[i] &&  !this.gd.stagePressed[i]){     
                    if (this.current[9] && !this.current[11]){                    
                    switch (e.keyCode) {
                        case 37:                        
                            key = "left";    
                            moved = true;
                            this.current[11] = true;
                            if (!this.current[10]){
                                if (key == this.current[0]) {                                         
                                    success = true; 
                                    console.log("%%%%%%%%%%%% right %%%%%%%%%%%%%%%");
                                    //console.log("continue", this.checkPoint[index].correctMove); 
                                    this.audioSuccess.play();
                                } else {
                                    //console.log("load error");
                                    error = true;       
                                    console.log("%%%%%%%%%%%%% wrong %%%%%%%%%%%%%%%%");
                                    this.audioError.play();
                                } 
                            }                            
                            document.getElementById("showMoving").style.display = "none";                            
                            pressed = true;
                            break;
                        case 39:                        
                            key = "right";    
                            moved = true;
                             this.current[11] = true;
                            if (!this.current[10]){
                                if (key == this.current[0]) {                                         
                                    success = true; 
                                    console.log("%%%%%%%%%%%%%% right %%%%%%%%%%%%%");
                                    //console.log("continue", this.checkPoint[index].correctMove); 
                                    this.audioSuccess.play();
                                } else {
                                    //console.log("load error");
                                    error = true;       
                                    console.log("%%%%%%%%%%%%% wrong %%%%%%%%%%%%%%%%");
                                    this.audioError.play();
                                } 
                            }                            
                            document.getElementById("showMoving").style.display = "none";                            
                            pressed = true;
                            break;                                    
                        case 38:                        
                            key = "up";    
                            moved = true;
                             this.current[11] = true;
                            if (!this.current[10]){
                                if (key == this.current[0]) {                                          
                                    success = true; 
                                    console.log("right");
                                    //console.log("continue", this.checkPoint[index].correctMove); 
                                    this.audioSuccess.play();
                                } else {
                                    //console.log("load error");
                                    error = true;       
                                    console.log("wrong");
                                    this.audioError.play();
                                } 
                            }                            
                            document.getElementById("showMoving").style.display = "none";                            
                            pressed = true;
                            break;

                        case 40:                        
                            key = "down";    
                            moved = true;
                             this.current[11] = true;
                            if (!this.current[10]){
                                if (key == this.current[0]) {                                        
                                    success = true; 
                                    console.log("right");
                                    //console.log("continue", this.checkPoint[index].correctMove); 
                                    this.audioSuccess.play();
                                } else {
                                    //console.log("load error");
                                    error = true;       
                                    console.log("wrong");
                                    this.audioError.play();
                                }  
                            }                           
                            document.getElementById("showMoving").style.display = "none";                            
                            pressed = true;
                            break;

                        case 83:                        
                            key = "fire";    
                            moved = true;
                            this.current[11] = true;
                            if (!this.current[10]){
                                if (key == this.current[0]) {                                          
                                    success = true; 
                                    console.log("right");
                                    //console.log("continue", this.checkPoint[index].correctMove); 
                                    this.audioSuccess.play();
                                } else {
                                    //console.log("load error");
                                    error = true;       
                                    console.log("wrong");
                                    this.audioError.play();
                                } 
                            }                           
                            document.getElementById("showMoving").style.display = "none";
                            pressed = true;                            
                            break;
                        }   
                    }                    
                }.bind(this);
                if (this.videoEl.currentTime > this.current[2] && this.current[9]){                
                this.current[9] = false;               
                //if you pressed a key
                    if (pressed){ 
                        //if you pressed a right key
                        if (success){                        
                            this.current[10] = true;
                            this.count++;
                            console.log("******************** success *******************" , this.count);
                            this.scoreUpdater();
                            error=false;
                        } else {
                            //if you pressed a wrong key
                            error=true;
                            var indice = i;
                            failStart = this.current[3];
                            failEnd = this.current[4];
                            this.videoEl.currentTime =  failStart;
                            document.getElementById("showMoving").style.display = "none";                       
                            console.log("**************** error ******************");
                            this.current[11] = false;
                            
                        } 
                    } else {
                        error = true
                         console.log(error);
                        failStart = this.current[5];
                        failEnd = this.current[6];
                        this.videoEl.currentTime =  failStart;
                        document.getElementById("showMoving").style.display = "none";                                       
                        console.log("******************* error *****************");
                    }
                    
                   
                    // if there jump in that scene
                    //if (success && this.current[7] != undefined){
                    if (success && this.current[7] != undefined){                   

                        var gotoNextStep = setInterval(function(){ 
                            if (parseInt(this.videoEl.currentTime) >= this.current[12]){
                                clearInterval(gotoNextStep);
                                this.videoEl.currentTime = this.current[7];
                                //console.log("arrivato");                            
                            }
                            //console.log(this.videoEl.currentTime); 
                        }.bind(this), 250);                   
                    }

                    success = false;
                    this.current[9] = false;
                    //pressed = false;
                    //error = false;                
                }
                if (!success && error && pressed && this.videoEl.currentTime > failEnd && !this.current[10]){
                    //console.log(this.gd.moveArrayfailed1Start[i],this.gd.moveArrayfailed1End[i],failEnd);

                    document.getElementById("showMoving").style.display = "none";
                    pressed = false;
                    if (this.lives > 0) {
                        this.lives = parseInt(document.getElementById("gdLives").innerHTML) - 1;                                   
                        document.getElementById("gdLives").innerHTML = this.lives;              
                        TweenMax.to("#gdLives",0.3,{
                            scale:2,
                            opacity:0.4,
                            //color:"#ff0000",
                            onComplete: function(){
                                TweenMax.to("#gdLives",0.3,{
                                    scale:1, 
                                    //color:"#fff",
                                    opacity:1
                                });
                            }.bind(this)
                        });                    
                        this.videoEl.pause();
                        if (this.prev == false){
                            this.videoEl.currentTime = this.gd.startG;
                        } else if (this.gd.stageJump[i-1] != undefined){
                            this.videoEl.currentTime = this.prev[7];
                            //this.videoEl.currentTime = this.gd.stageJump[i-1];
                        } else {
                            this.videoEl.currentTime = this.prev[2];
                        }
                        TweenMax.to("#getReady",0.5,{autoAlpha:1});          
                        //document.getElementById("getReady").style.visibility = "visible";
                        //this.videoEl.currentTime = this.prev == false?this.gd.startG:this.prev[2];
                        setTimeout(function(){
                            TweenMax.to("#getReady",0.5,{autoAlpha:0});      
                            //document.getElementById("getReady").style.visibility = "hidden";
                            this.videoEl.play();   
                        }.bind(this),2500);
                        error = false;  
                        //break;
                    } else {                    
                        //this.lives = parseInt(document.getElementById("gdLives").innerHTML)-1;                    
                        //document.getElementById("gdLives").innerHTML = this.lives;                    
                        this.videoEl.pause();
                        console.log("%%%%%%%%%%%%%%%%%%% Game over %%%%%%%%%%%%%%%%%%%%");
                        this.gameOver = true;
                        error = false;  
                        //break;
                    } 
                    //if the second wrong video is loaded
                } 
                else if (!success && error && !pressed && this.videoEl.currentTime > failEnd && !this.current[10]){
                    //console.log(i,this.gd.moveArrayfailed2Start[i],this.gd.moveArrayfailed2End[i],failEnd);            
                     document.getElementById("showMoving").style.display = "none";
                     if (this.lives > 0) {
                        this.lives = parseInt(document.getElementById("gdLives").innerHTML) - 1;                                   
                        document.getElementById("gdLives").innerHTML = this.lives;              
                        TweenMax.to("#gdLives",0.3,{
                            scale:2,
                            opacity:0.4,
                            //color:"#ff0000",
                            onComplete: function(){
                                TweenMax.to("#gdLives",0.3,{
                                    scale:1, 
                                    //color:"#fff",
                                    opacity:1
                                });
                            }.bind(this)
                        });                    
                        this.videoEl.pause();
                        if (this.prev == false){
                        //if (prev == false){
                            this.videoEl.currentTime = this.gd.startG;
                        } else if (this.gd.stageJump[i-1] != undefined){
                            this.videoEl.currentTime = this.prev[7];
                            //this.videoEl.currentTime = this.gd.stageJump[i-1];
                        } else {
                            this.videoEl.currentTime = this.prev[2];
                        }
                        TweenMax.to("#getReady",0.5,{autoAlpha:1});          
                        //document.getElementById("getReady").style.visibility = "visible";
                        //this.videoEl.currentTime = this.prev == false?this.gd.startG:this.prev[2];
                        setTimeout(function(){
                            TweenMax.to("#getReady",0.5,{autoAlpha:0});      
                            //document.getElementById("getReady").style.visibility = "hidden";
                            this.videoEl.play();   
                        }.bind(this),2500);
                         error = false;  
                        //break;
                    } else {                    
                        //this.lives = parseInt(document.getElementById("gdLives").innerHTML)-1;                    
                        //document.getElementById("gdLives").innerHTML = this.lives;                    
                        this.videoEl.pause();
                        console.log("%%%%%%%%%%%%%%%%%%% Game over %%%%%%%%%%%%%%%%%%%%");
                        this.gameOver = true;
                        error = false;  
                        //break;
                    }                

                }
                
            }.bind(this))(i);           
            //if (this.gameOver){break;}
        }
        
    }.bind(this));
    */
};
gamePlay.prototype.start = function(){
    this.videoEl.currentTime = this.gd.startG;
    this.videoEl.play();  
};
gamePlay.prototype.selectLevel = function(index){         
    if (index==0) {
        this.score = this.level[0].score;   
        this.lives = this.level[0].lives;
    } else if (index==1) {
        this.score = this.level[1].score;
        this.lives = this.level[1].lives;
    } else if (index==2) {
        this.score = this.level[2].score;
        this.lives = this.level[2].lives;
    }
};
gamePlay.prototype.scoreUpdater = function(){
    _that.currentScore = {score:parseInt(document.getElementById("gdScore").innerHTML)};
    _that.addScore();          
};
gamePlay.prototype.addScore = function(){
    TweenMax.to(_that.currentScore, 0.5, {score:"+="+_that.score+"", onUpdate:_that.updateHandler});    
};
gamePlay.prototype.updateHandler = function(){    
    document.getElementById("gdScore").innerHTML = parseInt(_that.currentScore.score);
    this.score = _that.currentScore.score;
};

function gameView(){
    _this = this;
    this.parent = document.getElementById("mainArea");
    this.videoEl = document.getElementById("scene");  
    this.level = gameCfg.levels;
    this.lives;
    this.score;
    this.btnLevels = [];  
    this.btnLevelDesc = [];
};
gameView.prototype.render = function(){
    /* 
    =============================
    level Choice landing
    =============================
    */
    this.levelChoiceEl = document.createElement("div");
    this.levelChoiceEl.id = "levelWrapper";       
    this.parent.appendChild(this.levelChoiceEl);
    
    this.btnLevelWprapEl = document.createElement("div");
    this.btnLevelWprapEl.id = "levelBtnWrapper";    
    this.levelChoiceEl.appendChild(this.btnLevelWprapEl);
    
    var title = document.createElement("h1");
    title.id = "levelTitle";
    title.classList.add("levelTitle");   
    title.innerHTML = "Select Level";
    this.levelChoiceEl.appendChild(title);   
    /* 
    =============================
    button level selection render 
    =============================
    */
    for (var l = 0; this.level.length > l; l++){
        this.btnLevels[l] = document.createElement("button");
        this.btnLevels[l].id = "level_"+(l+1);
        this.btnLevels[l].classList.add("levelBtn");
        this.btnLevels[l].setAttribute("style","width:"+100/3+"%; height:100%;position:absolute; top:0%; bottom:0;margin:auto; left:"+l*(100/3)+"%;background:none; color:#f3df43; border:none; cursor:pointer");
        //this.btnLevels[l].style.fontSize = "10vmin";
        this.btnLevels[l].innerHTML = this.level[l].label;
        this.btnLevelWprapEl.appendChild(this.btnLevels[l]);        
        this.hoverEffect(this.btnLevels[l]);        
        this.btnLevelDesc[l] = document.createElement("span");
        this.btnLevelDesc[l].classList.add("levelDesc");
        this.btnLevelDesc[l].innerHTML = "<br>"+this.level[l].description;
        this.btnLevelDesc[l].setAttribute("style","width:60%; height:100%;display:block;text-align:center; margin:0 auto;");
        this.btnLevels[l].appendChild(this.btnLevelDesc[l]);        
    }
    this.btnLevels[0].style.width = "30%";
    this.btnLevels[1].style.width = "40%";
    this.btnLevels[2].style.width = "30%";
    this.btnLevels[0].style.left = "0%";
    this.btnLevels[1].style.left = "30%";
    this.btnLevels[2].style.left = "70%";
    
    this.btnLevels[0].style.textAlign = "center";
    this.btnLevels[1].style.borderRight = "4px solid #fff";
    this.btnLevels[1].style.borderLeft = "4px solid #fff";    
    this.btnLevels[2].style.textAlign = "center";
    
    
    /* 
    =================
    lives el render 
    =================
    */
    
    this.livesWrap = document.createElement("div");
    this.livesWrap.id = "gdLivesWrap";    
    this.parent.appendChild(this.livesWrap);
    
    this.livesLabel = document.createElement("div");
    this.livesLabel.id = "gdLivesLabel";    
    this.livesLabel.innerHTML = "Lives: ";
    this.livesWrap.appendChild(this.livesLabel);
    
    this.livesImg = document.createElement("div");
    this.livesImg.id = "gdLivesImg";    
    this.livesImg.innerHTML = "<img src='img/liveImg.png' /><span> X </span>"
    this.livesWrap.appendChild(this.livesImg);
    
    this.livesEl = document.createElement("div");
    this.livesEl.id = "gdLives";     
    this.livesWrap.appendChild(this.livesEl);
    
    /* 
    =================
    score el render 
    =================
    */
    
    this.scoreWrap = document.createElement("div");
    this.scoreWrap.id = "gdScoreWrap"; 
    this.parent.appendChild(this.scoreWrap);
    
    this.scoreLabel = document.createElement("div");
    this.scoreLabel.id = "gdScoreLabel";
    this.scoreLabel.innerHTML = "Scores: ";
    this.scoreWrap.appendChild(this.scoreLabel);
    
    this.scoreEl = document.createElement("div");
    this.scoreEl.id = "gdScore";    
    this.scoreEl.innerHTML = 0;
    this.scoreWrap.appendChild(this.scoreEl);    
    
    /*
    =================
    get ready el
    =================
    */
    this.gReadyEl = document.createElement("div");
    this.gReadyEl.id = "getReady";
    this.gReadyEl.setAttribute("style","width:25%; height:20%; position:absolute; top:0; bottom:0; left:0; right:0; margin:auto; visibility:hidden; color:#fff;text-align:center;");
    this.gReadyEl.innerHTML = "GET READY";    
    this.parent.appendChild(this.gReadyEl);
    this.textFormatting();
};
gameView.prototype.textFormatting = function(){
    fitText(document.querySelectorAll('.levelBtn'), 0.38);  
    fitText(document.querySelectorAll('#level_2.levelBtn'), 0.48); 
    fitText(document.querySelectorAll('#levelTitle'), 2.3); 
    fitText(document.querySelectorAll('.levelDesc'), 1.7); 
    fitText(document.querySelectorAll('#level_2.levelBtn .levelDesc'), 2.1); 
    
    fitText(document.querySelectorAll('#gdLivesLabel'), 0.3); 
    fitText(document.querySelectorAll('#gdScoreLabel'), 0.3);    
    fitText(document.querySelectorAll('#gdScore'), 0.4);
    
    fitText(document.querySelectorAll('#getReady'), 0.5);
    
};
gameView.prototype.hoverEffect = function(button){    
    button.onmouseenter = function(){      
        TweenMax.to(button, 1, {className: "+=blueGlow"})         
    }    
    button.onmouseout = function(){       
        TweenMax.to(button, 1, {className: "-=blueGlow"})
    }
};

function Init(data){
    var _this = this;
    this.gamePlay = new gamePlay(data);    
    this.view = new gameView();
    this.view.render();    
    for (var i = 0; this.view.btnLevels.length > i; i++){   
        (function(index){
            this.view.btnLevels[i].onclick = function(){                  
                this.gamePlay.selectLevel(index);
                console.log(this.gamePlay.lives, this.gamePlay.score);
                //this.view.levelChoiceEl.style.display = "none";
                TweenMax.to(this.view.levelChoiceEl,0.5,{autoAlpha:0})
                this.gamePlay.start();
                //this.view.livesWrap.style.opacity = 1;
                //this.view.livesWrap.style.visibility = "visible";
                TweenMax.to(this.view.livesWrap,0.5,{autoAlpha:1});
                this.view.livesEl.innerHTML = this.gamePlay.lives;
                //this.view.scoreWrap.style.visibility = "visible";
                //this.view.scoreWrap.style.opacity = 1;
                TweenMax.to(this.view.scoreWrap,0.5,{autoAlpha:1});
                this.view.scoreEl.innerHTML = 0;
            }.bind(this)            
        }.bind(this))(i);
    }     
};

var init = new Init(data);