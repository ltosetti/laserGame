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
            "finishStage":85
        },
        
        {    
            "id":3,
            "newStage": 98.35,
            "title": "platform mobile",
            "active":false,
            "startTime":101.35,
            "endTime":102.86,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":113.83, 
                "failEndTime":116
            },
            "wrongMove2":{
                "failStartTime":116.7, 
                "failEndTime":118.25
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
                "failEndTime":118.25
            },
            "wrongMove2":{
                "failStartTime":116.7, 
                "failEndTime":118.25
            }
        },        
        {      
            "id":3,
            "title": "base landing",
            "active":false,
            "startTime":106.5,
            "endTime":107.5,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
             "wrongMove1":{
                  "failStartTime":116.7, 
                "failEndTime":118.25
            },
            "wrongMove2":{
                  "failStartTime":116.7, 
                "failEndTime":118.25
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
            "jumpTo": 129,
            "title": "base landing",
            "active":false,
            "startTime":112.25,
            "endTime":113.25,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":121.75, 
                "failEndTime":128.25
            },
            "wrongMove2":{
                "failStartTime":121.75, 
                "failEndTime":128.25
            },
            "finishStage":113
        },        
        
        {   
            "id":4,
            "newStage": 129,
            "title": "base landing",
            "active":false,
            "startTime":130.75,
            "endTime":131.75,
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
            "startTime":132.75,
            "endTime":133.75,
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
            "startTime":137.5,
            "endTime":138.5,
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
        
        //liane
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
                "failEndTime":172
            },
            "wrongMove2":{
                "failStartTime":164, 
                "failEndTime":172
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
            "finishStage":160
        },
        
        //uscita schiaccia corpo
        {    
            "id":6,
            "newStage": 173,
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
               "failStartTime":194.5, 
                "failEndTime":195.5
            },
            "wrongMove2":{
                "failStartTime":193.5, 
                "failEndTime":194                
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
                "failEndTime":202.75
            },
            "wrongMove2":{
               "failStartTime":201.75, 
                "failEndTime":202.75
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
                "failEndTime":204.75
            },
            "wrongMove2":{
               "failStartTime":203.5, 
                "failEndTime":204.75
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
                "failEndTime":236.25
            }
        },        
        {   "id":7,
            "jumpTo":237.5,       
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
            "finishStage":225.25
        },
         
        
        {   
            "id":8,
            "newStage":237.5,       
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
            "jumpTo":264.75,       
            "active":false,
            "startTime":243,
            "endTime":244,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
               "failStartTime":248, 
                "failEndTime":251.25
            },
            "wrongMove2":{
               "failStartTime":251.75, 
                "failEndTime":253.75
            },
            "finishStage":247
        },
        
         
        {   "id":9,
            "newStage":264.75,       
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
                "failEndTime":284.25
            },
            "wrongMove2":{
                "failStartTime":281, 
                "failEndTime":290
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
                "failEndTime":319.5
            },
            "wrongMove2":{
                 "failStartTime":319, 
                "failEndTime":319.5
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
                "failEndTime":322.5
            },
            "wrongMove2":{
                "failStartTime":320.25, 
                "failEndTime":328.25
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
                "failEndTime":351.75
            },
            "wrongMove2":{
                "failStartTime":350.25, 
                "failEndTime":351.75
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
                "failEndTime":362.75
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
            "newStage":381.5,
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
            "finishStage":469
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
                "failEndTime":530
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
                "failEndTime":608.75
            },
            "wrongMove2":{
                "failStartTime":608, 
                "failEndTime":608.75
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
                "failEndTime":637.75
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
                "failStartTime":753.25, 
                "failEndTime":756
            },
            "wrongMove2":{
                "failStartTime":752.25, 
                "failEndTime":752.75
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
                "failStartTime":753.25, 
                "failEndTime":756
            },
            "wrongMove2":{
                "failStartTime":752.25, 
                "failEndTime":752.75
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
                "failStartTime":753.25, 
                "failEndTime":756
            },
            "wrongMove2":{
                "failStartTime":752.25, 
                "failEndTime":752.75
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
                "failStartTime":753.25, 
                "failEndTime":756
            },
            "wrongMove2":{
                "failStartTime":752.25, 
                "failEndTime":752.75
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
                "failStartTime":753.25, 
                "failEndTime":756
            },
            "wrongMove2":{
                "failStartTime":752.25, 
                "failEndTime":752.75
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
                "failStartTime":753.25, 
                "failEndTime":756
            },
            "wrongMove2":{
                "failStartTime":752.25, 
                "failEndTime":752.75
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
                "failStartTime":753.25, 
                "failEndTime":756
            },
            "wrongMove2":{
                "failStartTime":752.25, 
                "failEndTime":752.75
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
                "failStartTime":753.25, 
                "failEndTime":756
            },
            "wrongMove2":{
                "failStartTime":752.25, 
                "failEndTime":752.75
            }
        },       
        { 
            "id":22,  
            "jumpTo":762.5,
            "active":false,           
            "startTime":746,
            "endTime":747,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{                
                "failStartTime":753.25, 
                "failEndTime":756
            },
            "wrongMove2":{
                "failStartTime":752.25, 
                "failEndTime":752.75
            },
            "finishStage":751.75
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
            "id":24,  
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
            "id":24,  
            "jumpTo":862.5,           
            "active":false,           
            "startTime":847.75,
            "endTime":848.75,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":850.25, 
                "failEndTime":852.25
            },
            "wrongMove2":{
                "failStartTime":854.5, 
                "failEndTime":861.75
            },
            "finishStage":849.75
        },
        
         
        { 
            "id":25,  
            "newStage":862.5,           
            "active":false,           
            "startTime":863.5,
            "endTime":864.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":873, 
                "failEndTime":875.25
            },
            "wrongMove2":{
                "failStartTime":876, 
                "failEndTime":876.75
            }           
        },        
        { 
            "id":25,                   
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
            "id":25,       
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
       /*
        { 
            "id":26,       
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
            "id":26,                   
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
            "id":26,                   
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
            "id":26,                   
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
            "id":26, 
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
            "id":26, 
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
            "id":26, 
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
            "id":26, 
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
            "id":26,            
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
            "id":26,            
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
            "id":26,            
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
            "id":26,            
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
            "id":26,      
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
        
        { 
            "id":27,      
            "newStage":1016.75,
            "active":false,           
            "startTime":1021.75,
            "endTime":1022.75,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1055.25, 
                "failEndTime":1057.25
            },
            "wrongMove2":{
                "failStartTime":1055.25, 
                "failEndTime":1057.25
            }            
        },
        { 
            "id":27,            
            "active":false,           
            //"startTime":1026.75,
            //"endTime":1027.75,
            "startTime":1027,
            "endTime":1028,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1050.75, 
                "failEndTime":1054.75
            },
            "wrongMove2":{
                "failStartTime":1058, 
                "failEndTime":1058.75
            }
            
        },
        { 
            "id":27,            
            "active":false,           
            "startTime":1030.25,
            "endTime":1031.25,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1058, 
                "failEndTime":1058.75
            },
            "wrongMove2":{
                "failStartTime":1058, 
                "failEndTime":1058.75
            }
        },
        { 
            "id":27,            
            "active":false,           
            "startTime":1030.25,
            "endTime":1031.25,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
           "wrongMove1":{
                "failStartTime":1046.75, 
                "failEndTime":1047.5
            },
            "wrongMove2":{
                 "failStartTime":1047.75, 
                "failEndTime":1048.5
            }
        },
        { 
            "id":27,            
            "active":false,           
            "startTime":1032.25,
            "endTime":1033.25,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1050.75, 
                "failEndTime":1054.75
            },
            "wrongMove2":{
                "failStartTime":1050.75, 
                "failEndTime":1054.75
            }
        },
        { 
            "id":27,   //bridge         
            "active":false,           
            "startTime":1034.5,
            "endTime":1035.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1048.75, 
                "failEndTime":1050.5
            },
            "wrongMove2":{
                "failStartTime":1048.75, 
                "failEndTime":1050.5
            }
        },
        { 
            "id":27,
            "active":false,           
            "startTime":1037.5,
            "endTime":1038.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1050.75, 
                "failEndTime":1054.75
            },
            "wrongMove2":{
                "failStartTime":1050.75, 
                "failEndTime":1054.75
            }
        },
        { 
            "id":27,
            "jumpTo": 1065,
            "active":false,           
            "startTime":1042,
            "endTime":1043,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":1050.75, 
                "failEndTime":1054.75
            },
            "wrongMove2":{
                 "failStartTime":1058, 
                "failEndTime":1058.75
            },
            "finishStage":1046
        },
        
        { 
            "id":28,
            "newStage": 1065,
            "active":false,           
            "startTime":1067,
            "endTime":1068,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":1078.25, 
                "failEndTime":1079.25
            },
            "wrongMove2":{
                 "failStartTime":1079.75, 
                "failEndTime":1082.25
            }
        },
        { 
            "id":28,            
            "active":false,           
            "startTime":1071.25,
            "endTime":1072.25,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
                "failStartTime":1078.25, 
                "failEndTime":1079.25
            },
            "wrongMove2":{
                 "failStartTime":1079.75, 
                "failEndTime":1082.25
            }
        },
        { 
            "id":28,            
            "active":false,           
            "startTime":1074.5,
            "endTime":1075.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":1078.25, 
                "failEndTime":1079.25
            },
            "wrongMove2":{
                 "failStartTime":1079.75, 
                "failEndTime":1082.25
            }
        },
        { 
            "id":28,
            "jumpTo":1088.5,
            "active":false,           
            "startTime":1076.25,
            "endTime":1077.25,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1078.25, 
                "failEndTime":1079.25
            },
            "wrongMove2":{
                 "failStartTime":1079.75, 
                "failEndTime":1088
            },
            "finishStage":1078
        },
       
        { 
            "id":29,
            "newStage":1088.5,
            "active":false,           
            "startTime":1093.25,
            "endTime":1094.25,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
            "wrongMove1":{
                "failStartTime":1110, 
                "failEndTime":1110.75
            },
            "wrongMove2":{
                "failStartTime":1108.5, 
                "failEndTime":1109.5
            }
        },
         { 
            "id":29,            
            "active":false,           
            "startTime":1095.25,
            "endTime":1096.25,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
             "wrongMove1":{
                "failStartTime":1110, 
                "failEndTime":1110.75
            },
            "wrongMove2":{
                "failStartTime":1108.5, 
                "failEndTime":1109.5
            }
        },
         { 
            "id":29,            
            "active":false,           
            "startTime":1097.25,
            "endTime":1098.25,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
             "wrongMove1":{
                "failStartTime":1110, 
                "failEndTime":1110.75
            },
            "wrongMove2":{
                "failStartTime":1108.5, 
                "failEndTime":1109.5
            }
        },
        { 
            "id":29,            
            "active":false,           
            "startTime":1099.25,
            "endTime":1100.25,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
             "wrongMove1":{
                "failStartTime":1110, 
                "failEndTime":1110.75
            },
            "wrongMove2":{
                "failStartTime":1108.5, 
                "failEndTime":1109.5
            }
        },
         { 
            "id":29,            
            "active":false,           
            "startTime":1101.25,
            "endTime":1102.25,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
             "wrongMove1":{
                "failStartTime":1110, 
                "failEndTime":1110.75
            },
            "wrongMove2":{
                "failStartTime":1108.5, 
                "failEndTime":1109.5
            }
        },
        { 
            "id":29,            
            "active":false, 
            "jumpTo": 1117,
            "startTime":1103.25,
            "endTime":1104.25,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
             "wrongMove1":{
                "failStartTime":1110, 
                "failEndTime":1116.5
            },
            "wrongMove2":{
                "failStartTime":1108.5, 
                "failEndTime":1109.5
            },
            "finishStage":1108
        },
        
         { 
            "id":30,            
            "active":false, 
            "newStage": 1117,
            "startTime":1120,
            "endTime":1121,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":1128.25, 
                "failEndTime":1129.25
            },
            "wrongMove2":{
                "failStartTime":1128.25, 
                "failEndTime":1129.25
            },
            "finishStage":1108
        },
        { 
            "id":30,
            "jumpTo":1207.25,
            "active":false,             
            "startTime":1126,
            "endTime":1127,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
                "failStartTime":1129.75, 
                "failEndTime":1130.75
            },
            "wrongMove2":{
                "failStartTime":1131.25, 
                "failEndTime":1137.75
            },
            "finishStage":1127.5
        },
         
        { 
            "id":31,
            "newStage":1207.25,
            "active":false,             
            "startTime":1210.5,
            "endTime":1211.5,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1301, 
                "failEndTime":1302.5
            },
            "wrongMove2":{
                 "failStartTime":1301, 
                "failEndTime":1302.5
            }
        },
        { 
            "id":31,            
            "active":false,             
            "startTime":1230.25,
            "endTime":1231.25,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
            "wrongMove1":{
                "failStartTime":1301, 
                "failEndTime":1302.5
            },
            "wrongMove2":{
                 "failStartTime":1301, 
                "failEndTime":1302.5
            }
        },
        { 
            "id":31,            
            "active":false,             
            "startTime":1253.75,
            "endTime":1254.75,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
                "failStartTime":1303, 
                "failEndTime":1305
            },
            "wrongMove2":{
                "failStartTime":1303, 
                "failEndTime":1305
            }
        },
        { 
            "id":31,            
            "active":false,             
            "startTime":1256.75,
            "endTime":1257.75,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
              "wrongMove1":{
                "failStartTime":1301, 
                "failEndTime":1302.5
            },
            "wrongMove2":{
                 "failStartTime":1301, 
                "failEndTime":1302.5
            }
        },        
        { 
            "id":31,            
            "active":false,             
            "startTime":1260.75,
            "endTime":1261.75,
            "complete": false,
            "pressed": false,
            "correctMove":"down",
             "wrongMove1":{
                "failStartTime":1303, 
                "failEndTime":1305
            },
            "wrongMove2":{
                "failStartTime":1309.5, 
                "failEndTime":1311.5
            }
        },
        { 
            "id":31,            
            "active":false,             
            "startTime":1266.75,
            "endTime":1267.75,
            "complete": false,
            "pressed": false,
            "correctMove":"right",             
            "wrongMove1":{
                "failStartTime":1301, 
                "failEndTime":1302.5
            },
            "wrongMove2":{
                 "failStartTime":1301, 
                "failEndTime":1302.5
            }
        },
        { 
            "id":31,            
            "active":false,             
            "startTime":1270,
            "endTime":1271,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":1305.5, 
                "failEndTime":1307
            },
            "wrongMove2":{
                 "failStartTime":1305.5, 
                "failEndTime":1307
            }
        },
        { 
            "id":31,            
            "active":false,             
            "startTime":1271.75,
            "endTime":1272.75,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
             "wrongMove1":{
                "failStartTime":1301, 
                "failEndTime":1302.5
            },
            "wrongMove2":{
                 "failStartTime":1301, 
                "failEndTime":1302.5
            }
        },
        { 
            "id":31,            
            "active":false,             
            "startTime":1275,
            "endTime":1276,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",
             "wrongMove1":{
                "failStartTime":1307.5, 
                "failEndTime":1309
            },
            "wrongMove2":{
                "failStartTime":1307.5, 
                "failEndTime":1309
            }
        },
        { 
            "id":31,            
            "active":false,             
            "startTime":1279,
            "endTime":1280,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
             "wrongMove1":{
                "failStartTime":1301, 
                "failEndTime":1302.5
            },
            "wrongMove2":{
                 "failStartTime":1312, 
                "failEndTime":1313.5
            }
        },
        { 
            "id":31,            
            "active":false,             
            "startTime":1281,
            "endTime":1282,
            "complete": false,
            "pressed": false,
            "correctMove":"fire",            
             "wrongMove1":{
                "failStartTime":1301, 
                "failEndTime":1302.5
            },
            "wrongMove2":{
                 "failStartTime":1312, 
                "failEndTime":1313.5
            }
        },
        { 
            "id":31,            
            "active":false, 
            "theEnd":1317.75,
            "startTime":1283.5,
            "endTime":1284.5,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{
                "failStartTime":1312, 
                "failEndTime":1313.5
            },
            "wrongMove2":{
                "failStartTime":1312, 
                "failEndTime":1313.5
            },
            "finishStage": 1300.5
        },
    ]
};
