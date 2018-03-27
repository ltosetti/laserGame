/*        
- checkpoint Area 1 (startTime, endTime)      

---- success(correctMove, keyMove).        
------ continue next checkPoint (startTimeNext).

---- wrong (wrongMove, keyMove).
------ update score (score +1).
------ check lives number(lives > 0).        
-------- minus 1 live (lives (-1)).
-------- type of mistake(kindWrongMove).
---------- mistake 1(checkMistake).
------------ load mistake 1 scene(failStartTime, failEndTime).
------------ at the end of scene reload the miss checkpoint (startTimeCurrent).

---------- mistake 2.
------------ load mistake 1 scene.
------------ at the end of scene reload the miss checkpoint.       
......         

*/
function GameData(options, options2, options3, options4, options5, options6, options7, options8, options9,options10,options11,options12,options13,options14, option15, option16, gameCfg) {
    _this = this;
    this.parent = document.getElementById("mainArea");
    this.videoEl = document.getElementById("scene");  
    this.levelChoiceEl;
    this.media = this.videoEl.src;
    this.preload();

    this.stages = [options, options2, options3, options4, options5, options6, options7, options8, options9,options10,options11,options12,options13,options14,option15,option16];
    //this.stages = [options, options2];     
    
    this.isMsIe = this.ieDetection();    
    this.isMsEdge = /Edge\/\d./i.test(navigator.userAgent);    

    this.btnStage = [];               
    this.levels = gameCfg.levels;  
    this.stageTitle = gameCfg.stageTitle;
    this.stageSubTitle = gameCfg.stageSubTitle;
    this.btnLevels = [];  
    this.btnLevelDesc = [];
    this.render();
    this.setRatio = 4/3;
    this.resizeRatio;    
    this.setSize();
    this.checkPoint = options.checkPoints;    
    this.settingCheckPoint();   
    this.audioError = document.getElementById("audioError");
    this.audioSuccess = document.getElementById("audioSuccess"); 
    this.audioSuccess.volume = .1; 
    this.audioError.volume = .1; 
    this.lives;
    this.score;    
    this.currentScore;
    this.currentStage;
    this.currentLevel;
    this.levelChoose;
    this.stageSuccesMove = 0; 
    this.stageTotalCheckpoints;
};
GameData.prototype.render = function(){
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
    //title.setAttribute("style","width:80%; height:15%; text-align:center; position:absolute; top:30px; left:0; right:0; margin:auto; color:#fff;");
    title.innerHTML = "Select Level";
    this.levelChoiceEl.appendChild(title);     
    /* 
    =============================
    stage Choice landing
    =============================
    */
    this.stageChoiceEl = document.createElement("div");
    this.stageChoiceEl.id = "stageWrapper";
    this.parent.appendChild(this.stageChoiceEl);       
    /*
    =============================
    button stage selection render
    =============================
    */
    var wW = window.innerWidth;
    var wH = window.innerHeight;
    var elW = wW/4;
    var elH = wH/4;
    for (var j = 0; this.stages.length > j; j++){
        this.btnStage[j] = document.createElement("button");
        this.btnStage[j].id = "stage_"+(j+1);
        this.btnStage[j].classList.add("btnStages");
        this.btnStage[j].setAttribute("style","width:"+elW+"px; height:"+elH+"px;position:absolute;");
        this.btnStage[j].style.background = "url(img/stage_"+(j+1)+".jpg)no-repeat";
        if (window.innerWith > 1400) {
            this.btnStage[j].style.backgroundSize = "110%";
        } else {
            this.btnStage[j].style.backgroundSize = "cover";
        }
        if (j >= 0 && j <= 3){
            this.btnStage[j].style.left = parseInt(this.btnStage[j].style.width)*j+"px";
            this.btnStage[j].style.top = 0;
            //console.log("row1: ",j,this.btnStage[j].style.top);
        } else if (j >= 4 && j <= 7){
            this.btnStage[j].style.left = parseInt(this.btnStage[j].style.width)*(j-4)+"px";
            this.btnStage[j].style.top = elH+"px";            
            //console.log("row2: ",j,this.btnStage[j].style.top);
        } else if (j >= 8 && j <= 11){
            this.btnStage[j].style.left = parseInt(this.btnStage[j].style.width)*(j-8)+"px";
            this.btnStage[j].style.top = (elH*2)+"px";
            //console.log("row3: ",j,this.btnStage[j].style.top);
        } else if (j >= 12 && j <= 16){
            this.btnStage[j].style.left = parseInt(this.btnStage[j].style.width)*(j-12)+"px";
            this.btnStage[j].style.top = (elH*3)+"px";
            //console.log("row3: ",j,this.btnStage[j].style.top);
        }
        this.btnStage[j].innerHTML = "stage "+(j+1);//this.btnStage[j].id;
        this.stageChoiceEl.appendChild(this.btnStage[j]);       
        
        this.btnStage[j].style.opacity = 0;
        this.btnStage[j].style.visibility = "hidden";
        if (j > 0){            
            this.btnStage[j].disabled = true;
            this.btnStage[j].setAttribute("data-active","false");  
            this.btnStage[j].setAttribute("data-current","false");  
        } else {
            this.btnStage[j].innerHTML = "Start adventure";
            this.btnStage[j].setAttribute("data-active","true"); 
            this.btnStage[j].setAttribute("data-current","true");  
        }
        if (j == (this.stages.length-1)){
            this.btnStage[j].setAttribute("data-id","last");  
        }
        this.btnStage[j].setAttribute("data-complete","false");
        this.btnStage[j].padlockImg = document.createElement("span");
        this.btnStage[j].padlockImg.id = "padlock";
        this.btnStage[j].padlockImg.className += " locked";                    
        this.btnStage[j].appendChild(this.btnStage[j].padlockImg);
        if (this.btnStage[j].getAttribute("data-active") == "true"){
            this.btnStage[j].padlockImg.classList.remove("locked");
            this.btnStage[j].padlockImg.classList.add("unLocked");   
        }       
        
        this.btnStage[j].spanHoverEl = document.createElement("span");
        this.btnStage[j].spanHoverEl.id = "spanStage_"+(j+1);
        this.btnStage[j].spanHoverEl.classList.add("btnStagesSpanHover");        
        this.btnStage[j].spanHoverEl.innerHTML = 
            "<span class='title'>"+this.stageTitle[j]+"</span>"+
            "<span class='subtitle'>"+this.stageSubTitle[j]+"</span>"+
            "<hr>"+
            "<span class='btnPlayStage'>Play</span>";
        this.btnStage[j].appendChild(this.btnStage[j].spanHoverEl); 
        this.selectStage(this.btnStage[j], this.stages[j]);
        this.hoverStageBtn(this.btnStage[j],this.btnStage[j].spanHoverEl);
        
        
    }
    /* 
    =============================
    button level selection render 
    =============================
    */
    for (var l = 0; this.levels.length > l; l++){
        this.btnLevels[l] = document.createElement("button");
        this.btnLevels[l].id = "level_"+(l+1);
        this.btnLevels[l].classList.add("levelBtn");
        this.btnLevels[l].setAttribute("style","width:"+100/3+"%; height:100%;position:absolute; top:0%; bottom:0;margin:auto; left:"+l*(100/3)+"%;background:none; color:#fff; border:none; cursor:pointer");
        //this.btnLevels[l].style.fontSize = "10vmin";
        this.btnLevels[l].innerHTML = this.levels[l].label;
        this.btnLevelWprapEl.appendChild(this.btnLevels[l]);
        this.selectLevel(this.btnLevels[l],this.levels[l],l);
        this.hoverEffect(this.btnLevels[l]);
        
        this.btnLevelDesc[l] = document.createElement("span");
        this.btnLevelDesc[l].classList.add("levelDesc");
        this.btnLevelDesc[l].innerHTML = "<br>"+this.levels[l].description;
        this.btnLevelDesc[l].setAttribute("style","width:60%; height:100%;display:block;text-align:center; margin:0 auto;");
        this.btnLevels[l].appendChild(this.btnLevelDesc[l]);
        
    }
    this.btnLevels[0].style.width = "30%";
    this.btnLevels[1].style.width = "40%";
    this.btnLevels[2].style.width = "30%";
    this.btnLevels[0].style.left = "0%";
    this.btnLevels[1].style.left = "30%";
    this.btnLevels[2].style.left = "70%";    
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
    
    if (this.isMsIe || this.isMsEdge){
        this.videoEl.src = "../videointeri/EshsAurunmilla.m4v";
    }        
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
    
    this.btnLevels[0].style.textAlign = "center";
    this.btnLevels[1].style.borderRight = "4px solid #fff";
    this.btnLevels[1].style.borderLeft = "4px solid #fff";    
    this.btnLevels[2].style.textAlign = "center";
    this.textFormatting();
    this.tlLevel =  new TimelineMax({
        paused:true, 
        onComplete:function(){}           
    });
    this.tlStageOpen =  new TimelineMax({
        paused:true, 
        onComplete:function(){}           
    });
    this.tlStageClose =  new TimelineMax({
        paused:true, 
        onComplete:function(){console.log("open")}           
    });
};
GameData.prototype.textFormatting = function(){   
    fitText(document.querySelectorAll('.levelBtn'), 0.38);  
    fitText(document.querySelectorAll('#level_2.levelBtn'), 0.48); 
    fitText(document.querySelectorAll('#levelTitle'), 2.3); 
    fitText(document.querySelectorAll('.levelDesc'), 1.7); 
    fitText(document.querySelectorAll('#level_2.levelBtn .levelDesc'), 2.1); 
    
    fitText(document.querySelectorAll('.btnStages'), 1);
    fitText(document.querySelectorAll('.btnStages .btnStagesSpanHover .title'), 1);
    fitText(document.querySelectorAll('.btnStages .btnStagesSpanHover .subtitle'), 2);    
    fitText(document.querySelectorAll('.btnStages .btnStagesSpanHover .btnPlayStage'), 0.4);    
    fitText(document.querySelectorAll('#gdLivesLabel'), 0.3); 
    fitText(document.querySelectorAll('#gdScoreLabel'), 0.3);
    //fitText(document.querySelectorAll('#gdLives'), 0.3);
    fitText(document.querySelectorAll('#gdScore'), 0.4);
    fitText(document.querySelectorAll('#getReady'), 0.5);
    
};
GameData.prototype.setSize = function(){
    var a = this.parent//document.querySelector("body");
    var b = this.videoEl;
    var c = this.setRatio;   
    this.resizeRatio = new TosnelloObj(a,b, {   
        contentMaxWidth : 1920,
        contentMaxHeight : 1280,
        contentRatio: c,
        top:0,
        bottom:0,
        left:0,
        right:0,
        //margin:0        
    });     
    //this.resizeRatio.init();
    this.videoEl.style.margin = "auto";
    this.videoEl.style.visibility = "hidden";
    this.btnStage[0].style.visibility = "hidden";
    
    var gameInfoWidth = window.innerWidth - this.resizeRatio.dimensions[0];     
    
};
GameData.prototype.selectStage = function(el, options){
    el.onclick = function(){
        this.checkPoint = options.checkPoints;        
        this.stageTotalCheckpoints = this.checkPoint.length;
        this.stageSuccesMove = 0;
        this.videoEl.currentTime = options.checkPoints[0].newStage;        
        this.videoEl.play(); 
        this.stageSlideUpPanel();
        /*this.tlStageOpen.to(_this.stageChoiceEl,0.5,{top:"-100%"})
        .to(_this.scoreWrap,0.5,{autoAlpha:1})
        .to(_this.livesWrap,0.5,{autoAlpha:1},"-=0.5").play();*/
    }.bind(this);    
};
GameData.prototype.stageSlideUpPanel = function(){
    this.tlStageOpen.to(_this.stageChoiceEl,0.5,{top:"-100%"})
    .to(_this.scoreWrap,0.5,{autoAlpha:1})
    .to(_this.livesWrap,0.5,{autoAlpha:1},"-=0.5").play();
};
GameData.prototype.stageSlideDownPanel = function(){
    this.tlStageClose.to(_this.stageChoiceEl,0.5,{top:0})
    .to(_this.scoreWrap,0.5,{autoAlpha:0})
    .to(_this.livesWrap,0.5,{autoAlpha:0},"-=0.5").play();
};
GameData.prototype.hoverStageBtn = function(el, child){    
    el.onmouseenter = function(e){
        TweenMax.to(child,0.3,{top:0});
        //child.style.top = 0;         
    }//.bind(this);
    el.onmouseout = function(event){ 
        var e = event.toElement || event.relatedTarget;
        if (e.parentNode == this || e == this || e.parentNode.parentNode == this) { 
            //console.log(e);
           return;            
        } else {
            console.log('MouseOut');
            TweenMax.to(child,0.3,{top:"-100%"});
        }
        //TweenMax.to(child,0.3,{top:"-100%"});
    },false//.bind(this);
};
GameData.prototype.selectLevel = function(el, options,l){
    el.onclick = function(){
        this.lives = options.lives; 
        this.score = options.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");        
        this.livesEl.innerHTML = this.lives;
        //this.livesEl.innerHTML = "<img src='img/liveImg.png' />"+this.lives;
        
        var allBtn = document.querySelectorAll(".btnStages");
        this.stageChoiceEl.style.visibility = "visible";
        for (var n = 0; allBtn.length; n++){
            if (n == allBtn.length){break;}
            allBtn[n].style.visibility = "visible";            
        }   
        if (l == 0){
            this.currentLevel = "Easy";
            this.levelChoose = l;
            this.tlLevel.to(_this.btnLevels[2],0.5,{autoAlpha:0})            
            .to(_this.btnLevels[1],0.5,{autoAlpha:0})
            .to(_this.btnLevelDesc[0],0.5,{autoAlpha:0})
            .to(_this.btnLevels[0],1,{className:"-=blueGlow",width:"100%"})
            .to(_this.btnLevels[0],1,{scale:5, autoAlpha:0})  
            .to(_this.btnLevels[0],1,{visibility:"hidden"})            
            .to(_this.levelChoiceEl,1,{autoAlpha:0,visibility:"hidden"},"-=0.8")
            .to(_this.stageChoiceEl,1,{autoAlpha:1})
            .staggerTo(allBtn, 0.2,{autoAlpha:0.5},0.1)
            .to(allBtn[0], 1,{autoAlpha:1, className:"+=active"}).play();                  
        } else if (l == 1){
            this.currentLevel = "Medium";
            this.levelChoose = l;
            this.tlLevel.to(_this.btnLevels[0],0.5,{autoAlpha:0})            
            .to(_this.btnLevels[2],0.5,{autoAlpha:0})
            .to(_this.btnLevelDesc[1],0.5,{autoAlpha:0})
            .to(_this.btnLevels[1],1,{className:"-=blueGlow",borderLeft:"none",borderRight:"none",width:"100%", left:0})
            .to(_this.btnLevels[1],1,{scale:5, autoAlpha:0})  
            .to(_this.btnLevels[1],1,{visibility:"hidden"})
            //.to(_this.levelChoiceEl,1,{visibility:"hidden"})
            .to(_this.levelChoiceEl,1,{autoAlpha:0,visibility:"hidden"},"-=0.8")
            .to(_this.stageChoiceEl,1,{autoAlpha:1})
            .staggerTo(allBtn, 0.2,{autoAlpha:0.5},0.1)
            .to(allBtn[0], 1,{autoAlpha:1, className:"+=active"}).play();            
        } else {
            this.currentLevel = "Hard";
            this.levelChoose = l;
             this.tlLevel.to(_this.btnLevels[0],0.5,{autoAlpha:0})            
            .to(_this.btnLevels[1],0.5,{autoAlpha:0})
            .to(_this.btnLevelDesc[2],0.5,{autoAlpha:0})
            .to(_this.btnLevels[2],1,{className:"-=blueGlow",width:"100%", left:0})
            .to(_this.btnLevels[2],1,{scale:5, autoAlpha:0})  
            .to(_this.btnLevels[2],1,{visibility:"hidden"})
            //.to(_this.levelChoiceEl,1,{visibility:"hidden"}) 
            .to(_this.levelChoiceEl,1,{autoAlpha:0,visibility:"hidden"},"-=0.8")
            .to(_this.stageChoiceEl,1,{autoAlpha:1})
            .staggerTo(allBtn, 0.2,{autoAlpha:0.5},0.1)
            .to(allBtn[0], 1,{autoAlpha:1, className:"+=active"}).play();
        }        
        this.videoEl.style.visibility = "visible";
        this.videoEl.style.opacity = 1;       
        this.scoreWrap.style.visibility = "visible";
        this.livesWrap.style.visibility = "visible";
    }.bind(this);  
};
GameData.prototype.ieDetection = function(){
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var is_safari = ua.indexOf("Safari") > -1;
    var is_not_crhome = ua.indexOf('Chrome') == -1

    if (msie > 0) {
        return true;
        console.log("ie: ", msie);
    } else if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        return true;
        console.log("edge: ", msie);        
    } else if (is_safari && is_not_crhome) {
        return true;
        console.log("safari: ", is_safari); 
    }    
    return false;
};
GameData.prototype.settingCheckPoint = function(){
    var current, 
        //next, 
        //prev, 
        success = false, 
        error = false , 
        moved = false, 
        tutorial = undefined, 
        pressed = false;   
    var wrogTimeStart, wrongTimeEnd;
    var areaTime = false;

    this.videoEl.addEventListener('timeupdate', function(){ 
        var currentime = this.videoEl.currentTime;        
        this.duration = this.videoEl.duration;
       

        for(var i = 0; this.checkPoint.length > i; i++){  
            //var index = i;                    
            if(this.videoEl.currentTime > this.checkPoint[i].startTime && this.videoEl.currentTime < this.checkPoint[i].endTime && !this.checkPoint[i].complete && !success) {                     

                current = this.checkPoint[i];
                console.log("reiniziato", current.correctMove);
                /*
                //next = this.checkPoint[i+1];                        
                //prev = this.checkPoint[i-1];
                //start = this.checkPoint[i].startTime;
                //end = this.checkPoint[i].endTime;  
                */
                current.active = true;
                console.log("start");                         
                if (!error){
                    //show tutorial
                    /*
                    document.getElementById("tutorial").style.display = "block";
                    document.getElementById("tutorial").innerHTML = "Move "+current.correctMove;
                    */
                    document.getElementById("showMoving").style.display = "block";
                    document.getElementById("showMoving").src = "img/"+this.checkPoint[i].correctMove+".png";
                    this.checkPoint[i].active = true;
                    areaTime = true;
                } else {
                    //show tutorial
                    /*
                    document.getElementById("tutorial").style.display = "block";
                    document.getElementById("tutorial").innerHTML = "wrong move";
                    */
                    areaTime = true;
                } 

                var index = i;
                document.onkeydown = function(e){
                    if (!pressed && this.checkPoint[index].active){
                    switch (e.keyCode) {
                        case 37:                        
                            key = "left";    
                            moved = true;
                            if (!this.checkPoint[index].complete){
                                if (key == this.checkPoint[index].correctMove) {                                         
                                    success=true;                                        
                                    console.log("continue", this.checkPoint[index].correctMove); 
                                    this.audioSuccess.play();
                                } else {
                                    console.log("load error");
                                    error = true;       
                                    this.audioError.play();
                                } 
                            }
                            //hide tutorial
                            /*
                            document.getElementById("tutorial").style.display = "none";
                            */
                            document.getElementById("showMoving").style.display = "none";                            
                            pressed = true;
                            break;
                        case 39:                        
                            key = "right";    
                            moved = true;
                            if (!this.checkPoint[index].complete){
                                if (key == this.checkPoint[index].correctMove) {                                         
                                    success=true;                                        
                                    console.log("continue", this.checkPoint[index].correctMove); 
                                    this.audioSuccess.play();
                                } else {
                                    console.log("load error");
                                    error = true;  
                                    this.audioError.play();
                                }
                            }
                            //hide tutorial
                            /*
                            document.getElementById("tutorial").style.display = "none";
                            */
                            document.getElementById("showMoving").style.display = "none";                            
                            pressed = true;
                            break;                                    
                        case 38:                        
                            key = "up";    
                            moved = true;
                            if (!this.checkPoint[index].complete){
                                if (key == this.checkPoint[index].correctMove) {                                       
                                    success=true;
                                    console.log("continue", success);
                                    this.audioSuccess.play();
                                } else {
                                    console.log("load error");
                                    error = true; 
                                    this.audioError.play();
                                }
                            }
                            //hide tutorial
                            /*
                            document.getElementById("tutorial").style.display = "none";
                            */
                            document.getElementById("showMoving").style.display = "none";                            
                            pressed = true;
                            break;

                        case 40:                        
                            key = "down";    
                            moved = true;
                            if (!this.checkPoint[index].complete){
                                if (key == this.checkPoint[index].correctMove) {                                         
                                    success=true;                 
                                    console.log("continue");
                                    this.audioSuccess.play();
                                } else {
                                    console.log("load error");
                                    error = true;  
                                    this.audioError.play();
                                } 
                            }
                            //hide tutorial
                            /*
                            document.getElementById("tutorial").style.display = "none";
                            */
                            document.getElementById("showMoving").style.display = "none";                            
                            pressed = true;
                            break;

                        case 83:                        
                            key = "fire";    
                            moved = true;
                            if (!this.checkPoint[index].complete){
                                if (key == this.checkPoint[index].correctMove) {                                       
                                    success=true;
                                    console.log("continue", success);
                                    this.audioSuccess.play();
                                } else {
                                    console.log("load error");
                                    error = true;  
                                    this.audioError.play();
                                }
                            }
                            //hide tutorial
                            /*
                            document.getElementById("tutorial").style.display = "none";
                            */
                            document.getElementById("showMoving").style.display = "none";
                            pressed = true;
                            break;
                        }   
                    }
                    //this.checkMove(e, index, pressed, moved, success, error);
                }.bind(this);
                console.log("fine mossa:", success, "titolo",this.checkPoint[i].title);

            }
            if (this.videoEl.currentTime > this.checkPoint[i].endTime && this.checkPoint[i].active && !this.checkPoint[i].complete) { 
                console.log("check mossa", success)
                //hide tutorial
                /*
                document.getElementById("tutorial").style.display = "none";
                */
                document.getElementById("showMoving").style.display = "none";
                if (!success){
                    error = true;                             
                }
                if (success){
                    this.checkPoint[i].active = false; 
                    console.log("success");
                    this.checkPoint[i].complete = true;                    
                    //this.scoreEl.innerHTML = parseInt(this.scoreEl.innerHTML)+this.score;
                    //this.currentScore = this.scoreEl.innerHTML;
                    this.scoreUpdater();
                    success = this.checkPoint[i].endStage == undefined?false:true;
                    pressed = false;
                    this.stageSuccesMove = this.stageSuccesMove+1;
                    console.log(this.stageSuccesMove +"/"+ this.stageTotalCheckpoints);
                } else if (!success && error && moved) {
                    wrongTimeStart = this.checkPoint[i].wrongMove1.failStartTime;
                    wrongTimeEnd = this.checkPoint[i].wrongMove1.failEndTime;
                    this.videoEl.currentTime = this.checkPoint[i].wrongMove1.failStartTime;//wrongTimeStart;                           
                    this.checkPoint[i].active = false;
                    this.lives = this.lives - 1;
                    this.livesEl.innerHTML = this.livesEl.innerHTML -1;
                    console.log("wrongMove");
                } else if (!success && error && !moved){                            
                    wrongTimeStart = this.checkPoint[i].wrongMove2.failStartTime;
                    wrongTimeEnd = this.checkPoint[i].wrongMove2.failEndTime;
                    this.videoEl.currentTime = this.checkPoint[i].wrongMove2.failStartTime;//wrongTimeStart;
                    this.checkPoint[i].active = false;
                    this.lives = this.lives - 1;
                    this.livesEl.innerHTML = this.livesEl.innerHTML -1;
                    console.log("no move");
                }
                console.log("finish", "complete: ",this.checkPoint[i].complete);                        
            }
            if (wrongTimeEnd != undefined && this.videoEl.currentTime > wrongTimeEnd && !this.checkPoint[i].complete){  
                if (this.lives != 0){
                    console.log(current);
                    if (i == 0){
                        this.videoEl.currentTime = this.checkPoint[i].newStage;
                    } else {                        
                        this.videoEl.currentTime = this.checkPoint[i-1].endTime; 
                        this.videoEl.pause();
                        TweenMax.to("#getReady",0.5,{autoAlpha:1});                                 
                        setTimeout(function(){
                            TweenMax.to("#getReady",0.5,{autoAlpha:0});      
                            //document.getElementById("getReady").style.visibility = "hidden";
                            this.videoEl.play();   
                        }.bind(this),2500);                        
                    }                    
                } else {
                    //this.videoEl.pause();
                    this.videoEl.currentTime = 1493; 
                    var cStage;
                    setTimeout(function(){
                        for (var a = 0; this.btnStage.length > 0; a++){
                            if (this.btnStage[a].getAttribute("data-complete") == "false" && this.btnStage[a].getAttribute("data-current") == "true"){
                                cStage = a+1;
                                
                                //setTimeout(function(){
                                var pm = new Postmessage();                                
                                    pm.sendJson(document.getElementById("ifrRanking"),pm.pmObj);
                                this.showRanking();
                                //document.getElementById("ifrRanking").style.height = "100%";
                                //},1000);
                                
                                
                                this.gameRecap(cStage, a, this.levels[this.levelChoose]);
                                break;
                            } /*else if(a = 0){
                                cStage = 0;
                                this.gameRecap(cStage, a);
                                break;
                            } */                        
                        }
                    }.bind(this),5000);
                    console.log("endGame");
                    
                }
                //this.checkPoint[i].active = true;                        
                error = false, success = false, moved = false, wrongTimeEnd = undefined, pressed = false;
            }
            if (success && this.checkPoint[i].endStage != undefined){
                if (this.videoEl.currentTime > this.checkPoint[i].endStage && this.checkPoint[i].complete){
                    this.videoEl.pause();                           
                    success = false;
                    for (var a = 0; this.btnStage.length > 0; a++){
                        if(this.btnStage[a].getAttribute("data-active") != "true" && this.btnStage[a].getAttribute("data-id") != "last") {
                            this.btnStageStatusComplete(a);                            
                            break;
                        } else if (this.btnStage[a].getAttribute("data-id") == "last" && this.btnStage[a].getAttribute("data-active") != "true") {                           
                            this.btnStageStatusComplete(a);  
                            console.log("last stage");
                            break;
                        } else if (this.btnStage[a].getAttribute("data-id") == "last" && this.btnStage[a].getAttribute("data-active") == "true") {
                            console.log("game finished");
                            break;
                        }
                    }
                }
            }          
        }
    }.bind(this));
};
GameData.prototype.btnStageStatusComplete = function(n){
    /* current stage button */
    this.btnStage[n].style.opacity = 1;
    this.btnStage[n].disabled = false;
    this.btnStage[n].classList.add("active");
    this.btnStage[n].setAttribute("data-active","true"); 
    this.btnStage[n].setAttribute("data-current","true"); 
    this.btnStage[n].padlockImg.classList.remove("locked");
    this.btnStage[n].padlockImg.classList.add("unLocked"); 
    /* previous stage button */
    this.btnStage[n-1].disabled = true;
    this.btnStage[n-1].style.background = "url(img/stage_"+(n)+"_completed.jpg)";
    this.btnStage[n-1].innerHTML = "Completed"+"<br>"+this.checkPoint.length+"/"+this.stageSuccesMove;
    this.btnStage[n-1].classList.add("completed");
    //this.btnStage[n-1].setAttribute("data-active","false");
    this.btnStage[n-1].setAttribute("data-current","false");
    this.btnStage[n-1].setAttribute("data-complete","true"); 
    this.stageSlideDownPanel();
    console.log("correct move: ", this.checkPoint.length, this.stageSuccesMove);
};
GameData.prototype.scoreUpdater = function(){
    _this.currentScore = {score:parseInt(_this.scoreEl.innerHTML)};
    _this.addScore();          
};
GameData.prototype.addScore = function(){
    TweenLite.to(_this.currentScore, 0.5, {score:"+="+_this.score+"", onUpdate:_this.updateHandler});    
};
GameData.prototype.updateHandler = function(){    
    _this.scoreEl.innerHTML = parseInt(_this.currentScore.score);
    this.score = _this.currentScore.score;
};
GameData.prototype.hoverEffect = function(button){    
    button.onmouseenter = function(){      
        TweenMax.to(button, 1, {className: "+=blueGlow"})         
    }    
    button.onmouseout = function(){       
        TweenMax.to(button, 1, {className: "-=blueGlow"})
    }
};
GameData.prototype.showRanking = function(){
    var cd = new Countdown(11);
    var iframeRanking = document.getElementById("ifrRanking");
    iframeRanking.classList.add("visible");
    iframeRanking.classList.remove("hidden");
    iframeRanking.style.height = "100%";
    var closeRanking = document.getElementById("closeRanking");
    closeRanking.classList.add("visible");
    closeRanking.classList.remove("hidden");
    closeRanking.style.display = "block";
    closeRanking.onclick = function(evt){
        iframeRanking.style.height = 0;  
        iframeRanking.classList.remove("visible");
        iframeRanking.classList.add("hidden");
        evt.target.classList.remove("visible");
        evt.target.classList.add("hidden");
        cd.render(document.getElementById("countdownW"));
        cd.start(); 
    }.bind(this);
};
GameData.prototype.gameRecap = function(stage, stagesComplete, options){
    if (document.getElementById("recapWrap") != undefined){
        document.getElementById("mainArea").removeChild(document.getElementById("recapWrap"));
    }
    var recapWrap = document.createElement("div");
    recapWrap.id="recapWrap";
    //recapWrap.setAttribute("style","width:30%; height:65%; background:#fff;position: absolute; color:#000; left:0; top:0; bottom:0; right:0; margin:auto;border-radius: 15px; z-index: 9999;text-align: center; min-width:500px; min-height:700px;");
    var recapHeader = document.createElement("div");
        recapHeader.id="recapHeader";
        //recapHeader.setAttribute("style","width:100%; height:150px; background:#5fceca; color:#fff;border-radius: 15px 15px 0 0;");
        recapHeader.innerHTML = "<h1 id='headerTitle'>Game over</h1>"
    var recapBody = document.createElement("div");
        recapBody.id="recapBody";
        //recapBody.setAttribute("style","width:95%; height:70%; color:#414141;border-radius: 15px 15px 0 0;margin: 0 auto;");
        recapBody.innerHTML = 
            "<br><h1 style=''>Level:  "+this.currentLevel+"</h1><hr>"+
            "<h1 style=''>Total scores:  "+this.scoreEl.innerHTML + "</h1><hr>"+
            "<h1 style=''>Current Stage:  " + stage + "</h1><hr>"+
            "<h1 style=''>Stages Complete:  " + stagesComplete +"</h1><hr>"+
            "<h1 style=''>Game Complete:  "+((stagesComplete/this.btnStage.length)*100)+"%"+"</h1>";            
    moveComplete = this.stageSuccesMove+"/"+this.checkPoint.length;
    console.log("total score: ", this.scoreEl.innerHTML);
    console.log("current stage: ", stage);
    console.log("stages complete: ", stagesComplete);
    console.log("percentage game complete: ", ((stagesComplete/this.btnStage.length)*100)+"%");
    console.log("correct Moves: ", moveComplete);
    //recapWrap.innerHTML = "Total scores:  "+this.scoreEl.innerHTML + "<br> Current Stage:  " + stage + "<br>Stages Complete:  " + stagesComplete +"<br>Game Complete:  "+((stagesComplete/this.btnStage.length)*100)+"%";
    
    //var cd = new Countdown(11);
    
    //cd.render(document.body);
    //cd.start();  
    var btnReplay = document.createElement("div");
    btnReplay.id = "replayGame";
    btnReplay.classList.add("continue");
    /*btnReplay.setAttribute("style",
                           "width:50%;"+
                           "height:45px;"+
                           "position:absolute;"+
                           "bottom:5%;"+
                           "left:0; right:0; margin:auto;"+
                           "color:#000;"+
                           "border: 3px solid #4ca5a2;background: #fff;color: #4ca5a2;box-shadow: 6px 5px #4ca5a2;border-radius: 10px;display: block;line-height: 45px;text-align: center;font-size:27px;cursor:pointer;"
                          );*/
    btnReplay.innerHTML = "continue (<span id='countdownW'></span>)";
    btnReplay.onclick = function(){
        console.log("restore all levels");
        recapWrap.style.display = "none";
        for (var i=0; this.checkPoint.length > i; i++){
            this.checkPoint[i].complete = false;            
        }
        this.stageSlideDownPanel();
        this.lives = options.lives; 
        this.score = options.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.scoreEl.innerHTML = 0;
        this.livesEl.innerHTML = this.lives;
        //location.reload()
    }.bind(this);
     
    this.parent.appendChild(recapWrap);
    recapWrap.appendChild(recapHeader);
    recapWrap.appendChild(recapBody);
    recapBody.appendChild(btnReplay);    
    
    //cd.render(document.getElementById("countdownW"));
    //cd.start();    
};
GameData.prototype.refresh = function(){
    var btnRefresh = document.getElementById("replayGame");   
    btnRefresh.innerHTML = "try again";
    btnRefresh.onclick = function(){
        location.reload();  
    }    
};
GameData.prototype.preload = function(){
    this.videoEl.currentTime = 185;
    this.videoEl.setAttribute("preload", "auto");
    /*
    var req = new XMLHttpRequest();
    req.open('GET', 'EshsAurunmilla.webm', true);
    req.responseType = 'blob';
    req.onload = function() {
        // Onload is triggered even on 404
        // so we need to check the status code
        if (this.status === 200) {
            var videoBlob = this.response;
            var vid = URL.createObjectURL(videoBlob); // IE10+           
            
            // Video is now downloaded
            // and we can set it as source on the video element
            
            //video.src = vid;
        }
    }
    req.onerror = function() {
        console.log("error");
        // Error
    }
    //req.send();
    */
};
/* ======================================================================================================================================
COUNTDOWN if contdown is required ======================================================================================================================================
*/
function Countdown(seconds){
    thisCount = this;
    this.countdownAltDuration = null;    
    //this.seconds = this.countdownAltDuration!==null?this.countdownAltDuration + 1 : 11;
    this.seconds = seconds;
    this.counter;
    this.startCountdown;   
    //this.parent = document.getElementById("countdown");
};
Countdown.prototype.render = function(parent){
    this.counter = document.createElement("span");
    this.counter.id = "countdown";
    this.counter.style.width = "15px";
    this.counter.style.height = "30px";
    this.counter.style.zIndex = 99999999999;
    //this.counter.style.position = "fixed";
    this.counter.classList.add("countdown");    
    parent.appendChild(this.counter);    
};
Countdown.prototype.start =  function(seconds){    
    thisCount.seconds--;
    console.log(parent);
    thisCount.counter.innerHTML = String(thisCount.seconds);
    if(thisCount.seconds >= 0 ) {
        thisCount.startCountdow = setTimeout(thisCount.start, 1000);
        if (thisCount.seconds == 0){
            thisCount.stop(); 
            document.getElementById("countdownW").removeChild(thisCount.counter);
            gameData.refresh();
        }       
    }
};
Countdown.prototype.stop =  function(){
    clearTimeout(thisCount.startCountdow);   
};
/*
======================================================================================================================================
TOSNELLO 2.0.1
authors: Nello Staibano, Luca Tosetti
last update: 2016/11/09
======================================================================================================================================
*/
function TosnelloObj(parent, children, objSet){   
    this.wrapper = parent instanceof String?document.querySelector(parent):parent;
    this.content = children instanceof String?document.querySelector(children):children;
    
    this.objSet = (objSet === "undefined") ? null : objSet;
    if (this.objSet != null){    
        this.contentRatio = (this.objSet.contentRatio === undefined) ? 16/9 : this.objSet.contentRatio;        
        this.top = (this.objSet.top === undefined)? 0.05 : this.objSet.top;
        this.bottom = (this.objSet.bottom === undefined)? 0.05 : this.objSet.bottom;
        this.left = (this.objSet.left === undefined)? 0.05 : this.objSet.left;
        this.right = (this.objSet.right === undefined)? 0.05 : this.objSet.right;
        this.bottomBarFixedHeight = (this.objSet.bottomBarFixedHeight === undefined)? 0 : this.objSet.bottomBarFixedHeight;
        this.sideBarPercWidth = (this.objSet.sideBarPercWidth === undefined)? 0 : this.objSet.sideBarPercWidth;
        this.contentMaxWidth = (this.objSet.contentMaxWidth === undefined)? 1024 : this.objSet.contentMaxWidth;
        this.contentMaxHeight = (this.objSet.contentMaxHeight === undefined)? 576 : this.objSet.contentMaxHeight;
        this.contentMinWidth = (this.objSet.contentMinWidth === undefined)? 20 : this.objSet.contentMinWidth;
        this.contentMinHeight = (this.objSet.contentMinHeight === undefined)? 20 : this.objSet.contentMinHeight;
        this.margin = (this.objSet.margin === undefined) ? "auto" : this.objSet.margin;
    } else {
        this.contentRatio = 16/9; //c;
        this.top = 0.05;//d;
        this.bottom = 0.05;//e;
        this.left = 0.05;//f;
        this.right = 0.05;//g;       
        this.bottomBarFixedHeight = 0;//h;    
        this.sideBarPercWidth = 0;//i;
        this.contentMaxWidth = 1024;
        this.contentMaxHeight = 576;
        this.contentMinWidth = 20;
        this.contentMinHeight = 20;
        this.margin = "auto";
       
    }
    
    this.contentWidth;
    this.contentHeight;
    
    this.dimensions = [];
    this.reducePercentageH;
    this.reducePercentageW;
    this.reducePercentage;   
};    
TosnelloObj.prototype.ratio = function(){
    
    this.containerWidth = this.wrapper.offsetWidth;
    this.containerHeight = (window.innerHeight < this.wrapper.offsetHeight)?window.innerHeight:this.wrapper.offsetHeight;        
    
    var totalHeightDelta = this.top + this.bottom;    
    var totalWidthDelta = this.left + this.right;  
    var containerAvailableHeight = this.containerHeight * (1 - totalHeightDelta);  
    var containerAvailableWidth = this.containerWidth * (1 - totalWidthDelta);  
    if (containerAvailableHeight > this.contentMaxHeight) {
        containerAvailableHeight = this.contentMaxHeight;
    } else if (containerAvailableHeight < this.contentMinHeight) {
        containerAvailableHeight = this.contentMinHeight;
    }
    if (containerAvailableWidth > this.contentMaxWidth) {
        containerAvailableWidth = this.contentMaxWidth;
    } else if (containerAvailableWidth < this.contentMinWidth) {
        containerAvailableWidth = this.contentMinWidth;
    }
    if (containerAvailableWidth > containerAvailableHeight) {
        this.contentHeight = containerAvailableHeight;
        this.contentWidth = (this.contentHeight * this.contentRatio);
        if (this.contentWidth >= containerAvailableWidth) {
            this.contentWidth = containerAvailableWidth;
            this.contentHeight = (this.contentWidth / this.contentRatio);
        }
    } else {
        this.contentWidth = containerAvailableWidth;
        this.contentHeight = (this.contentWidth / this.contentRatio);
        if (this.contentHeight >= containerAvailableHeight) {
            this.contentHeight = containerAvailableHeight;
            this.contentWidth = (this.contentHeight * this.contentRatio);
        }
    }
    this.reducePercentageH = 1 - (this.bottomBarFixedHeight / this.contentHeight);
    this.reducePercentageW = 1 / (1 + this.sideBarPercWidth);
    this.reducePercentage = Math.min(this.reducePercentageH, this.reducePercentageW);    
    this.dimensions[0] = this.contentWidth * this.reducePercentage;
    this.dimensions[1] = this.contentHeight * this.reducePercentage;   
    return this.dimensions;
};
TosnelloObj.prototype.setContentRatio = function(){ 
    this.ratio();    
    this.content.style.position = "absolute";
    this.content.style.width = this.dimensions[0]  +"px";
    this.content.style.height = this.dimensions[1] + "px";
    this.content.style.top = this.top * 100 + "%";
    this.content.style.bottom = this.bottom * 100 + "%";
    this.content.style.left = this.left * 100 + "%";
    this.content.style.right = this.right * 100 + "%";
    this.content.style.margin = this.margin;      
};
TosnelloObj.prototype.init = function(){    
    this.setContentRatio();    
    //window.addEventListener("resize", this.setContentRatio.bind(this));    
};

/* ======================================================================================================================================
POSTMESSAGE ======================================================================================================================================
*/
function Postmessage(options){
    postM                       = this;           
    this.parentUrl              = window.location.href;//location.protocol + "//192.168.32.137";        
    this.pmObj                  = gameData.scoreEl.innerHTML;      
    this.targetMessage;    
};
Postmessage.prototype.sendJson = function(target, message){     
    //target.contentWindow.postMessage(JSON.stringify(postM.pmObj),postM.parentUrl);    
    target.contentWindow.postMessage(postM.pmObj,postM.parentUrl);    
};
/*
======================================================================================================================================
** instance o f main variable
======================================================================================================================================
*/
var gameData = new GameData(gameSheet, gameSheet2, gameSheet3, gameSheet4, gameSheet5, gameSheet6, gameSheet7, gameSheet8, gameSheet9, gameSheet10,gameSheet11,gameSheet12,gameSheet13,gameSheet14,gameSheet15,gameSheet16,gameCfg);       
console.log(gameData);

document.getElementById("ifrRanking").src = "rank.php";
                                
