var data = {    
    "checkPointScore":0,
    "checkPoints":[                
        {   // meteor island enter
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
                "failStartTime":96.5, 
                "failEndTime":97.8
            },
            "wrongMove2":{
                //"kind": "none",
                "failStartTime":96.5, 
                "failEndTime":97.8
            },                    
        },                     
        {   // electric wall
            "title": "spying enemy basement3",
            "active":false,
            "startTime":56,
            "endTime":57,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
             "wrongMove1":{               
                "failStartTime":96.5, 
                "failEndTime":97.8
            },
            "wrongMove2":{                
                "failStartTime":96.5, 
                "failEndTime":97.8
            },  
        },  
        {   // electric wall
            "jumpToDelay":3,
            "jumpTo": 80,
            "title": "run to take spaceship1",
            "active":false,
            "startTime":59.7,
            "endTime":60.7,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":96.5, 
                "failEndTime":97.8
            },
            "wrongMove2":{
                "failStartTime":96.5, 
                "failEndTime":97.8
            }
        },
          {   // platform mobile 
            "title": "platform mobile",
            "active":false,
            "startTime":81,
            "endTime":81.7,
            "complete": false,
            "pressed": false,
            "correctMove":"right",
            "wrongMove1":{
                "failStartTime":102.6, 
                "failEndTime":104.1
            },
            "wrongMove2":{
                 "failStartTime":102.6, 
                "failEndTime":104.1
            }
        },
        
        {   // platform mobile    
            "jumpToDelay":5,
            "jumpTo":112.1,
            "title": "platform mobile",
            "active":false,
            "startTime":91.2,
            "endTime":92.2,
            "complete": false,
            "pressed": false,
            "correctMove":"left",
            "wrongMove1":{
                "failStartTime":102.6, 
                "failEndTime":104.1
            },
            "wrongMove2":{
                 "failStartTime":102.6, 
                "failEndTime":104.1
            }
            //,"endStage":96
        }, 
        {   // spaceship labirynt
           
            "title": "labirynt move",
            "active":false,
            "startTime":125.5,
            "endTime":126.5,
            "complete": false,
            "pressed": false,
            "correctMove":"up",
            "wrongMove1":{
                "failStartTime":153, 
                "failEndTime":154.3
            },
            "wrongMove2":{
                "failStartTime":153, 
                "failEndTime":154.3
            },
        },
    
    ],
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
    console.log(this.checkpoints);  
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
    }
};
function gamePlay(options){
    this.gd = new gameData(options);
    this.videoEl = document.getElementById("scene");
    this.audioError = document.getElementById("audioError");
    this.audioSuccess = document.getElementById("audioSuccess"); 
    this.audioSuccess.volume = .1; 
    this.audioError.volume = .1; 
    this.start();
    this.playThrough();
};
gamePlay.prototype.playThrough = function(){
    var pressed = false, success = false, error = false, moved = false, current, prev, next; 
    this.videoEl.addEventListener('timeupdate', function(){
        for (var i = 0; this.gd.checkpoints.length > i; i++) {
            
            if (this.videoEl.currentTime > this.gd.moveArrayCheckStart[i] && this.videoEl.currentTime < this.gd.moveArrayCheckEnd[i] && !this.gd.stageActive[i]){
                document.getElementById("showMoving").style.display = "block";
                document.getElementById("showMoving").src = "img/"+this.gd.keyDirection[i]+".png";
                console.log("---------------------------------------");
                this.gd.stageActive[i] = true;                
                if (i > 0){
                    prev = [
                        this.gd.keyDirection[i-1], 
                        this.gd.moveArrayCheckStart[i-1], 
                        this.gd.moveArrayCheckEnd[i-1],
                        this.gd.moveArrayfailed1Start[i-1], 
                        this.gd.moveArrayfailed1End[i-1],
                        this.gd.moveArrayfailed2Start[i-1], 
                        this.gd.moveArrayfailed2End[i-1],
                        this.gd.stageJump[i-1],
                        this.gd.stageJumpDlay[i-1],
                        this.gd.stageActive[i-1],
                        this.gd.stageComplete[i-1],
                        this.gd.stagePressed[i-1]
                    ];
                } else {
                    prev = false;
                }                
                current = [
                        this.gd.keyDirection[i], 
                        this.gd.moveArrayCheckStart[i], 
                        this.gd.moveArrayCheckEnd[i],
                        this.gd.moveArrayfailed1Start[i], 
                        this.gd.moveArrayfailed1End[i],
                        this.gd.moveArrayfailed2Start[i], 
                        this.gd.moveArrayfailed2End[i],
                        this.gd.stageJump[i],
                        this.gd.stageJumpDlay[i],
                        this.gd.stageActive[i],
                        this.gd.stageComplete[i],
                        this.gd.stagePressed[i]
                ];                
                if (i != (this.gd.checkpoints.length-1)){
                    next = [
                        this.gd.keyDirection[i+1], 
                        this.gd.moveArrayCheckStart[i+1],
                        this.gd.moveArrayCheckEnd[i+1],
                        this.gd.moveArrayfailed1Start[i+1], 
                        this.gd.moveArrayfailed1End[i+1],
                        this.gd.moveArrayfailed2Start[i+1], 
                        this.gd.moveArrayfailed2End[i+1],
                        this.gd.stageJump[i+1],
                        this.gd.stageJumpDlay[i+1],
                        this.gd.stageActive[i+1],
                        this.gd.stageComplete[i+1],
                        this.gd.stagePressed[i+1]
                    ];
                } else {
                    next = false
                }                               
                console.log("Prev: " ,prev);
                console.log("Current: ", current);
                console.log("Next: " ,next);
                console.log(i, this.gd.checkpoints.length-1);
                console.log("---------------------------------------");
                //break;   
                var index = i;
                document.onkeydown = function(e){
                    if (this.gd.stageActive[index] &&  !this.gd.stagePressed[index]){
                    switch (e.keyCode) {
                        case 37:                        
                            key = "left";    
                            moved = true;
                            this.gd.stagePressed[index] = true;
                            if (!this.gd.stageComplete[index]){
                                if (key == this.gd.keyDirection[index]) {                                         
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
                            this.gd.stagePressed[index] = true;
                            if (!this.gd.stageComplete[index]){
                                if (key == this.gd.keyDirection[index]) {                                         
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
                            this.gd.stagePressed[index] = true;
                            if (!this.gd.stageComplete[index]){
                                if (key == this.gd.keyDirection[index]) {                                         
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
                            this.gd.stagePressed[index] = true;
                            if (!this.gd.stageComplete[index]){
                                if (key == this.gd.keyDirection[index]) {                                         
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
                            this.gd.stagePressed[index] = true;
                            if (!this.gd.stageComplete[index]){
                                if (key == this.gd.keyDirection[index]) {                                         
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
                
            }
            if (this.videoEl.currentTime > this.gd.moveArrayCheckEnd[i] && this.gd.stageActive[i]){
                this.gd.stageActive[i] = false;
                console.log(success, error, pressed);
                if (pressed){                    
                    if (success){
                        console.log("******************** success *******************");                           
                    } else {
                        this.videoEl.currentTime =  this.gd.moveArrayfailed1Start[i];
                        var index = i;
                        setTimeout(function(){
                            this.videoEl.currentTime = this.gd.moveArrayCheckStart[index];
                            this.videoEl.pause();
                            setTimeout(function(){
                                this.videoEl.play();   
                            }.bind(this),1500);
                        }.bind(this), (this.gd.moveArrayfailed1End[index] - this.gd.moveArrayfailed1Start[index])*1000);    
                                   
                        
                        console.log("**************** error ******************");
                    }                    
                } else {
                    document.getElementById("showMoving").style.display = "none";
                    console.log("******************* error *****************");  
                }
                success = false;
                pressed = false;
                error = false;
                
            }
        }
    }.bind(this));
};
gamePlay.prototype.start = function(){
    this.videoEl.currentTime = this.gd.startG;
    this.videoEl.play();  
};
var a = new gamePlay(data);

