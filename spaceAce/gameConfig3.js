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
    this.gameComplete = [];
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
        this.gameComplete[i] = this.checkpoints[i].gameComplete;
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
    this.completeAllGames;
    this.gameFinished;
    //this.start();
    this.playThrough();
};
gamePlay.prototype.playThrough = function(){
    var pressed = false, success = false, error = false, moved = false, jumpActive = false, current,prev,next, failStart, failEnd;
    var len = this.gd.checkpoints.length;
    this.videoEl.addEventListener('timeupdate', function(){
        //console.log(Math.round(this.videoEl.currentTime*100)/100)
        
        for (var i = 0; this.gd.checkpoints.length > i; i++) { 
            if (this.gameOver)break;
            (function(index){                
                if (!success && !pressed && this.videoEl.currentTime > this.gd.moveArrayCheckStart[index] && this.videoEl.currentTime < this.gd.moveArrayCheckEnd[index] && !this.gd.stageActive[index] && !this.gd.stageComplete[index]){
                    document.getElementById("showMoving").style.display = "block";
                    document.getElementById("showMoving").src = "img/"+this.gd.keyDirection[i]+".png";
                    this.current = [
                        this.gd.keyDirection[index], this.gd.moveArrayCheckStart[index], this.gd.moveArrayCheckEnd[index],this.gd.moveArrayfailed1Start[index], this.gd.moveArrayfailed1End[index],this.gd.moveArrayfailed2Start[index], this.gd.moveArrayfailed2End[index],this.gd.stageJump[index],this.gd.stageJumpDlay[index],true,this.gd.stageComplete[index],this.gd.stagePressed[index],this.gd.finishStage[index],this.gd.gameComplete[index]
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
                            pressed = true;
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
                                    this.current[11] = true;
                                    //pressed = true;
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
                                    this.current[11] = true;
                                    //pressed = true;
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
                                    this.current[11] = true;
                                    //pressed = true;
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
                                    this.current[11] = true;
                                    //pressed = true;
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
                                    this.current[11] = true;
                                    //pressed = true;                            
                                    break;
                            }   
                        }                    
                        //key down end
                    }.bind(this);                     
                }
                
                if (this.current != undefined && Math.round(this.videoEl.currentTime*100)/100 > this.current[2] && this.current[9] && !this.current[10]){ 
                    this.current[9] = false;
                    if (this.current[11] || pressed){ 
                        //if you pressed a right key
                        if (success){                        
                            this.current[10] = true;
                            //this.prev[10] = true;this.prev[10] = true;this.prev[9] = false;
                            this.count++;
                            console.log("******************** success *******************" , this.count);
                            this.scoreUpdater();
                            error=false;
                            pressed = false;
                            if (this.current[13] != undefined && this.current[13] == true){
                                console.log("***************************** congrataz.... **************************");
                                this.completeAllGames = true;
                                this.gameFinished = document.createElement("h1");
                                this.gameFinished.id = "gameComplete"; 
                                this.gameFinished.setAttribute("style","width:90%; height:40%; position:absolute; top:0; bottom:0; left:0; right:0; margin:auto;color:#fff;text-align:center;");
                                //this.gameFinished.innerHTML = "CONGRATULATION!!!!<br> You finish all stages and released the princess";
                                this.gameFinished.innerHTML = "CONGRATULATION!!!!<br> You finish all stages and released Kimberly";
                                setTimeout(function(){
                                    document.body.appendChild(this.gameFinished); 
                                    fitText(document.querySelectorAll('#gameComplete'), 1);    
                                }.bind(this),2500)
                               
                            }
                            
                        } else if (!success && error) {
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
                        //this.prev[10] = true;this.prev[10] = true;this.prev[9] = false;
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
                //if (!success && error && pressed && this.videoEl.currentTime > failEnd && !this.current[10]){
                if (!success && error && pressed && this.videoEl.currentTime > this.current[4] && !this.current[10]){
                    document.getElementById("showMoving").style.display = "none";
                    pressed = false;
                    this.current[11] = false;
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
                        this.game_over(error, pressed);                       
                    } 
                } 
                //else if (!success && error && !pressed && this.videoEl.currentTime > failEnd && !this.gd.stageComplete[i]){
                else if (!success && error && !pressed && this.videoEl.currentTime > this.current[6] && !this.gd.stageComplete[i]){
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
                            this.videoEl.play();   
                        }.bind(this),2500);
                        error = false;                          
                    } else {                    
                        this.game_over(error, pressed);                       
                    }                

                }
                if ((this.completeAllGames != undefined || this.completeAllGames) && Math.round(this.videoEl.currentTime*100)/100 > this.current[12]){
                    document.body.removeChild(this.gameFinished);
                    this.videoEl.pause();                    
                    this.game_over(error, pressed);                                   
                }
                //function index end
            }.bind(this))(i);
           //for end 
        }
        //timeupdate end
    }.bind(this));                
};
gamePlay.prototype.start = function(){
    this.videoEl.currentTime = this.gd.startG;
    document.getElementById("tutorialBtn").style.display = "none";
    document.getElementById("backToLg").style.display = "none";
    this.videoEl.play();  
};
gamePlay.prototype.game_over = function(error, pressed){
    console.log("%%%%%%%%%%%%%%%%%%% Game over %%%%%%%%%%%%%%%%%%%%");
    this.videoEl.pause();    
    this.gameOver = true;
    error = false;
    pressed = false;
    
    TweenMax.to("#ModalGameOver",0.5,{autoAlpha:1});
    
    var percentage = parseFloat((this.count/this.gd.checkpoints.length)*100).toFixed(1);
    console.log(this.currentScore.score, percentage+"%");
    document.getElementById("recapScore").innerHTML = this.currentScore.score;
    document.getElementById("inputScore").value = this.currentScore.score;
    document.getElementById("recapTrough").innerHTML = percentage+"%";
    document.getElementById("backToLg").style.display = "block";
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
    /*
    =================
    modal game over
    =================
    */
    this.ModalGameOver = document.createElement("div");
    this.ModalGameOver.id = "ModalGameOver";    
    this.ModalGameOver.innerHTML = 
        "<div id='ModalGameOverHead'>"+
            "<div id='gameOver'>GAME OVER</div>"+
        "</div>"+
        "<div id='ModalGameOverBody'>"+
            "<div id='labelRecapScore'>Total score:</div>"+
            "<div id='recapScore'>0</div>"+
            "<hr style='width:75%;'>"+
            "<div id='labelRecapTrough'>Game complete</div>"+
            "<div id='recapTrough'>0%</div>"+
            "<hr style='width:75%;'>"+
            "<div id='gameReplayBtn'>Try Again</div>"+
            "<a class='shareFb btnShare modalBtn' href='' target='_blank'></a>"+
        "</div>";
    this.parent.appendChild(this.ModalGameOver);
    
    /*
    =================
    GAME OVER
    =================
    */
    
    /*
    this.gOver = document.createElement("div");
    this.gOver.id = "gameOver";
    this.gOver.setAttribute("style","width:35%; height:20%; position:absolute; top:0; bottom:0; left:0; right:0; margin:auto; visibility:hidden; color:#fff;text-align:center;");
    this.gOver.innerHTML = "GAME OVER";    
    this.parent.appendChild(this.gOver);
    */
    /*
    =================
    Replay game button
    =================
    */
    /*
    this.gReplay = document.createElement("div");
    this.gReplay.id = "gameReplayBtn";
    this.gReplay.setAttribute("style","width:230px; height:50px; line-height:50px; position:absolute; bottom:20%;left:0; right:0; margin:auto; visibility:hidden; color:#fff;text-align:center; border-radius:10px; background:#808ed2; border: 1px solid #fff; cursor:pointer;");
    this.gReplay.innerHTML = "Try Again";    
    this.parent.appendChild(this.gReplay);
    
    */
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
    //fitText(document.querySelectorAll('#gdScore'), 0.3);
    
    fitText(document.querySelectorAll('#getReady'), 0.5);    
    
    fitText(document.querySelectorAll('#labelRecapScore'), 1.5);
    fitText(document.querySelectorAll('#recapScore'), 1.9);
    fitText(document.querySelectorAll('#labelRecapTrough'), 1.5);
    fitText(document.querySelectorAll('#recapTrough'), 1.9);
    fitText(document.querySelectorAll('#gameOver'), 1);
    fitText(document.querySelectorAll('#gameReplayBtn'), 0.8);
    
    
};
gameView.prototype.hoverEffect = function(button){    
    button.onmouseenter = function(){      
        TweenMax.to(button, 1, {className: "+=blueGlow"})         
    }    
    button.onmouseout = function(){       
        TweenMax.to(button, 1, {className: "-=blueGlow"})
    }
};

function gameTutorial(){
    document.getElementById("tutorialBtn").onclick = function(){
        document.getElementById("ifrTutorial").src = "tutorial/index_tutorial.html";      
        TweenMax.to("#ifrTutorial",0.5,{top:0});
        TweenMax.to("#tutorialBtn",0.5,{autoAlpha:0});
        TweenMax.to("#exitTutorialBtn",0.5,{autoAlpha:1});
        document.getElementById("backToLg").style.display = "none";
    }.bind(this);   
    document.getElementById("exitTutorialBtn").onclick = function(){        
        TweenMax.to("#ifrTutorial",0.5,{
            top:"-100%",
            onComplete: function(){
                document.getElementById("ifrTutorial").src = "";                  
            }
        });
        TweenMax.to("#tutorialBtn",0.5,{autoAlpha:1});        
        TweenMax.to("#exitTutorialBtn",0.5,{autoAlpha:0});
        document.getElementById("backToLg").style.display = "block";
    }.bind(this);   
};

function Init(data){
    var _this = this;
    this.gamePlay = new gamePlay(data);    
    this.view = new gameView();
    this.view.render(); 
    gameTutorial();
    document.getElementById("gameReplayBtn").onclick = function(){
        location.reload();    
    };
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

//var vid = document.querySelector('#scene');
//video.load();
/*vid.onloadstart = function() {
  log('loadstart at ' + this.currentTime);
};

vid.onloadedmetadata = function() {
  log('loadedmetadata at ' + this.currentTime);
  vid.currentTime = 55;
  vid.setAttribute('preload', "auto");
  vid.play();    
  //vid.pause();
};

vid.onloadeddata = function() {
  log('loadeddata at ' + this.currentTime);   
    //video.load();
};

function log(datas) {
  document.querySelector('#log').innerHTML += '<p>' + datas + '</p>';
}*/
/*
vid.bind('loadeddata', function(e) {
  console.log(e.target.duration);
});
*/
