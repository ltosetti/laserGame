function AccordionIntImg(centerWrapper, centerContent, leftWrapper, leftContent, rightWrapper, rightContent, btnCloseC, btnCloseL, btnCloseR, logo){
    accordion = this;
    this.bgCenter = document.querySelector(centerWrapper);
    this.bgCenterContent = document.querySelector(centerContent);
    this.animCenter = new TimelineMax();
    this.animCenterBack = new TimelineMax();
    this.btnClosePanelC = document.getElementById(btnCloseC);
    
    this.bgLeft = document.querySelector(leftWrapper);
    this.bgLeftContent = document.querySelector(leftContent);
    this.animLeft = new TimelineMax();
    this.animLeftBack = new TimelineMax();   
    this.btnClosePanelL = document.getElementById(btnCloseL);
    this.logo = document.querySelectorAll(logo);
    
    this.bgRight = document.querySelector(rightWrapper);
    this.bgRightContent = document.querySelector(rightContent);
    this.animRight = new TimelineMax();
    this.animRightBack = new TimelineMax();
    
    this.btnClosePanelR = document.getElementById(btnCloseR);
    
    this.skew = 15;
    this.distance = 72;
    this.openCenter = false;
    this.openLeft = false;
    this.openRight = false;
};
AccordionIntImg.prototype.setLayout = function(){
    this.animLeft.set(this.logo[1], {transformOrigin: 'right top',skewType: "simple",skewX: this.skew});
    this.animLeft.set(this.bgLeft, {transformOrigin: 'center center',skewType: "simple",skewX: -this.skew,visibility: 'visible',xPercent: -this.distance});  
    
    this.animRight.set(this.logo[2], {transformOrigin: 'right bottom',skewType: "simple",skewX: this.skew});
    this.animRight.set(this.bgRight, {transformOrigin: 'center center',skewType: "simple",skewX: -this.skew,visibility: 'visible',xPercent: this.distance});
};
AccordionIntImg.prototype.openLeftImg = function(){
    TweenMax.set(this.bgLeft,{zIndex:11});
    this.animLeft.to(this.bgLeft, 0.5, { skewX: '0deg',borderRight:0+"px solid #fff", xPercent: 0 }, 0.2)
    //.to(this.bgLeftContent, 0.5, { skewX: '0deg'}, 0.2)
    .to("#LogoLeft", 0.2, {autoAlpha:0})
    .to(this.btnClosePanelL, 0.2, {autoAlpha:1, onComplete:function(){
        this.bgLeftContent.play();
        this.bgLeftContent.loop = true;
        TweenMax.to("#showContentL",0.5,{autoAlpha:1});
        TweenMax.to("#playGameL",0.5,{autoAlpha:1});
    }.bind(this)}).play();
    //.to(this.logo, 0.2, {autoAlpha:1},"-=0.2")
}; 
AccordionIntImg.prototype.closeLeftImg = function(){
    TweenMax.to("#showContentL",0.5,{autoAlpha:0});
    TweenMax.to("#playGameL",0.5,{autoAlpha:0});
    this.animLeftBack.to(this.bgLeft, 0.5, {skewX: -this.skew, borderRight:10+"px solid #fff", xPercent: -this.distance }, 0.2)
    //.to(this.bgLeftContent, 0.5, {skewX: this.skew, }, 0.2)
    .to("#LogoLeft", 0.2, {autoAlpha:1})
    .to(this.btnClosePanelL, 0.2, {autoAlpha:0, onComplete:function(){
        TweenMax.set(this.bgLeft,{zIndex:0});   
        this.bgLeftContent.pause();
        this.bgLeftContent.load();
        //this.bgLeftContent.currentTime = 0;
    }.bind(this)},"-=0.4").play();
    //.to(this.logo, 0.2, {autoAlpha:0},"-=0.2").play();
};
AccordionIntImg.prototype.openRightImg = function(){
    TweenMax.set(this.bgRight,{zIndex:11});
    this.animRight.to(this.bgRight, 0.5, { skewX: '0deg', borderLeft:0+"px solid #fff", xPercent: 0 }, 0.2)
    //.to(this.bgRightContent, 0.5, { skewX: '0deg' }, 0.2)
    .to("#LogoRight", 0.2, {autoAlpha:0})
    .to(this.btnClosePanelR, 0.2, {autoAlpha:1, onComplete:function(){
        this.bgRightContent.play();
        this.bgRightContent.loop = true;
        TweenMax.to("#showContentR",0.5,{autoAlpha:1});
        TweenMax.to("#playGameR",0.5,{autoAlpha:1});
    }.bind(this)}).play();   
}; 
AccordionIntImg.prototype.closeRightImg = function(){
    TweenMax.to("#showContentR",0.5,{autoAlpha:0});
    TweenMax.to("#playGameR",0.5,{autoAlpha:0});
    this.animRightBack.to(this.bgRight, 0.5, {skewX: -this.skew, borderLeft:10+"px solid #fff", xPercent: this.distance }, 0.2)
    //.to(this.bgRightContent, 0.5, {skewX: this.skew, }, 0.2)
    .to("#LogoRight", 0.2, {autoAlpha:1})
    .to(this.btnClosePanelR, 0.2, {autoAlpha:0, onComplete:function(){
        TweenMax.set(this.bgRight,{zIndex:0});
        this.bgRightContent.pause();
        this.bgRightContent.load();
        //this.bgRightContent.currentTime = 0;
    }.bind(this)},"-=0.4").play();
};
AccordionIntImg.prototype.openCenterImg = function(){
    //TweenMax.set(this.bgRight,{zIndex:11});
    this.animCenter.to(this.bgRight, 0.5, { skewX: '0deg', borderLeft:0+"px solid #fff", xPercent: 100 }, 0.2)
    .to("#LogoCenter", 0.2, {autoAlpha:0})
    .to(this.bgLeft, 0.5, { skewX: '0deg', borderLeft:0+"px solid #fff", xPercent: -100 }, 0.2)
    .to(this.btnClosePanelC, 0.2, {autoAlpha:1,onComplete:function(){
        this.bgCenterContent.play();
        this.bgCenterContent.loop = true;
        TweenMax.to("#showContentC",0.5,{autoAlpha:1});
        TweenMax.to("#playGameC",0.5,{autoAlpha:1});
    }.bind(this)}).play();   
    //.to(this.bgRightImg, 0.5, { skewX: '0deg' }, 0.2)
    //.to(this.btnClosePanelR, 0.2, {autoAlpha:1})
}; 
AccordionIntImg.prototype.closeCenterImg = function(){
    //TweenMax.set(this.bgRight,{zIndex:11});
    TweenMax.to("#showContentC",0.5,{autoAlpha:0});
    TweenMax.to("#playGameC",0.5,{autoAlpha:0});
    this.animCenterBack.to(this.btnClosePanelC, 0.2, {autoAlpha:0}).to(this.bgRight, 0.5, { skewX: -this.skew, borderLeft:10+"px solid #fff", xPercent: this.distance }, 0.2)
    .to("#LogoCenter", 0.2, {autoAlpha:1})
    .to(this.bgLeft, 0.5, { skewX: -this.skew, borderRight:10+"px solid #fff", xPercent: -this.distance, onComplete:function(){
        this.bgCenterContent.pause();
        this.bgCenterContent.load();       
        //this.bgCenterContent.currentTime = 0;
    }.bind(this) }, 0.2)
    .play();   
    //.to(this.bgRightImg, 0.5, { skewX: '0deg' }, 0.2)
    //.to(this.btnClosePanelR, 0.2, {autoAlpha:1})
}; 
AccordionIntImg.prototype.init = function(){
    this.setLayout();
    this.bgCenter.addEventListener("click", function(e){
        e.stopPropagation();
        e.preventDefault();
        if (!this.openCenter){
            this.animCenterBack.clear();
            this.openCenterImg();
            this.openCenter = true;
        }  
    }.bind(this));
    this.btnClosePanelC.addEventListener("click", function(e){
        e.stopPropagation();
        e.preventDefault();
        if (this.openCenter){            
            this.animCenter.clear();
            this.closeCenterImg();
            this.openCenter = false;  
        }
    }.bind(this));
    this.bgLeft.addEventListener("click", function(e){
        e.stopPropagation();
        e.preventDefault();
        if (!this.openLeft){
            this.animLeftBack.clear();
            this.openLeftImg();
            this.openLeft = true;
        }  
    }.bind(this));
    this.btnClosePanelL.addEventListener("click", function(e){
        e.stopPropagation();
        e.preventDefault();
        if (this.openLeft){            
            this.animLeft.clear();
            this.closeLeftImg();
            this.openLeft = false;  
        }
    }.bind(this));
    this.bgRight.addEventListener("click", function(e){
        e.stopPropagation();
        e.preventDefault();
        if (!this.openRight){
            this.animRightBack.clear();
            this.openRightImg();
            this.openRight = true;        }       
    }.bind(this));
    this.btnClosePanelR.addEventListener("click", function(e){
        e.stopPropagation();
        e.preventDefault();
        if (this.openRight){
            this.animRight.clear();
            this.closeRightImg();
            this.openRight = false;
        }
    }.bind(this));
    document.getElementById("playGameR").onclick = function(){ location.href='../eshAurunmilla/madDog.html'};
    document.getElementById("playGameL").onclick = function(){ location.href='../spaceAce/index.html'};
};
        
var a = new AccordionIntImg(
    ".c-topic__center",
    ".c-topic3__content-instrumentalist",
    ".c-topic__instrumentalist",
    ".c-topic__content-instrumentalist",
    ".c-topic2__instrumentalist",
    ".c-topic2__content-instrumentalist",
    "btnCloseCenter",
    "btnCloseLeft",
    "btnCloseRight",
    ".logo"
);
    a.init();