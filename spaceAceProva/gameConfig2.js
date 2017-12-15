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
                "failStartTime":96.5, 
                "failEndTime":97.8
            },
            "wrongMove2":{               
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
    this.current, this.prev, this.next, this.count = 0;
    this.level = gameCfg.levels;
    this.lives;
    this.score;
    //this.start();
    this.playThrough();
};
gamePlay.prototype.playThrough = function(){
    var pressed = false, success = false, error = false, moved = false;
   
    this.videoEl.addEventListener('timeupdate', function(){
        for (var i = 0; this.gd.checkpoints.length > i; i++) {
            /* enable space to play a move */
            if (!success && this.videoEl.currentTime > this.gd.moveArrayCheckStart[i] && this.videoEl.currentTime < this.gd.moveArrayCheckEnd[i] && !this.gd.stageActive[i] && !this.gd.stageComplete[i]){
                document.getElementById("showMoving").style.display = "block";
                document.getElementById("showMoving").src = "img/"+this.gd.keyDirection[i]+".png";
                console.log("---------------------------------------");
                this.gd.stageActive[i] = true;                
                if (i > 0){
                    this.prev = [
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
                    this.prev = false;
                }                
                this.current = [
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
                    this.next = [
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
                    this.next = false
                }                               
                console.log("Prev: " ,this.prev);
                console.log("Current: ", this.current);
                console.log("Next: " ,this.next);
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
            /* check the move or not move */
            if (this.videoEl.currentTime > this.gd.moveArrayCheckEnd[i] && this.gd.stageActive[i]){
                this.gd.stageActive[i] = false;
                console.log(success, error, pressed);
                if (pressed){                    
                    if (success){
                        this.gd.stageComplete[i] = true;
                        this.count++;
                        console.log("******************** success *******************" , this.count);                           
                    } else {
                        var index = i;
                        var failStart = this.gd.moveArrayfailed1Start[i];
                        var failEnd = this.gd.moveArrayfailed1End[i]
                        this.videoEl.currentTime =  failStart;
                        /*
                        setTimeout(function(){
                            this.videoEl.currentTime = this.prev == false?this.gd.startG:this.prev[2];
                            this.videoEl.pause();
                            setTimeout(function(){
                                this.videoEl.play();   
                            }.bind(this),1500);
                        }.bind(this), (failEnd - failStart)*1000);                        
                        */
                        console.log("**************** error ******************");
                        this.gd.stagePressed[index] = false;
                    }                    
                } else {
                    var failStart = this.gd.moveArrayfailed2Start[i];
                    var failEnd = this.gd.moveArrayfailed2End[i];
                    this.videoEl.currentTime =  failStart;         
                    document.getElementById("showMoving").style.display = "none";
                    console.log("******************* error *****************");
                }
                if (success && this.gd.stageJump[i] != undefined){
                    this.videoEl.currentTime = this.gd.stageJump[i];    
                }
                success = false;
                pressed = false;
                error = false;                
            }
            /* if the move is wrong goto prev currentime and remade a move */
            if (!success && (this.videoEl.currentTime > this.gd.moveArrayfailed1End[i] || this.videoEl.currentTime > this.gd.moveArrayfailed1End[i]) && !this.gd.stageComplete[i]){
                this.videoEl.pause();
                if (this.prev == false){
                    this.videoEl.currentTime = this.gd.startG;
                } else if (this.gd.stageJump[i-1] != undefined){
                    this.videoEl.currentTime = this.prev[7];
                } else {
                    this.videoEl.currentTime = this.prev[2];
                }
                //this.videoEl.currentTime = this.prev == false?this.gd.startG:this.prev[2];
                setTimeout(function(){
                    this.videoEl.play();   
                }.bind(this),1500);
                
            }
        }
    }.bind(this));
};
gamePlay.prototype.start = function(){
    this.videoEl.currentTime = this.gd.startG;
    this.videoEl.play();  
};
gamePlay.prototype.score = function(){};
gamePlay.prototype.selectLevel = function(){      
    //choose level
    //if level 1 assign 7 lives and right score method 
    //if level 2 assign 5 lives and right score method
    //if level 3 assign 3 lives and right score method
    for (var i = 0; this.level.length > i; i++){
        this.score = this.level.score[i];
        this.lives = this.level.score[i];               
    }
    if (btn1){
        this.score = this.level.score[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
        this.lives = this.level.score[0];
    } else if (btn2){
        this.score = this.level.score[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
        this.lives = this.level.score[1];
    } else {
        this.score = this.level.score[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
        this.lives = this.level.score[2];
    }
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
    this.textFormatting();
};
gameView.prototype.textFormatting = function(){
    fitText(document.querySelectorAll('.levelBtn'), 0.38);  
    fitText(document.querySelectorAll('#level_2.levelBtn'), 0.48); 
    fitText(document.querySelectorAll('#levelTitle'), 2.3); 
    fitText(document.querySelectorAll('.levelDesc'), 1.7); 
    fitText(document.querySelectorAll('#level_2.levelBtn .levelDesc'), 2.1); 
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
    this.gamePlay = new gamePlay(data);    
    this.view = new gameView();
    this.view.render();
    this.gamePlay .start();    
};

var init = new Init(data);    
