<?php
$params = array();
$metas = array();
$params = $_GET;
// defaults
$params['url'] = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$params['type'] = (isset($_GET['type']) ? $_GET['type'] : 'article');
$params['c'] = (isset($_GET['c']) ? $_GET['c'] : '0'); //read querystring
if(isset($params['c']) && $params['c'] == "0"){
    $metas['image'] = "sample";
    $metas['score'] = isset($_GET['score']);
    $metas['name'] = isset($_GET['name']);
    $metas['title'] = "Dragon's Lair";
    $metas['description'] = "share Dragon's Lair";
} else {
    $metas['image'] = "sample";
    $metas['score'] = isset($_GET['score']);
    $metas['name'] = isset($_GET['name']);
    $metas['title'] = "Dragon's Lair";
    //$metas['description'] = ucfirst($params['n'])." ha totalizzato ".ucfirst($params['n'])." punti";
    $metas['description'] = "ha totalizzato ".$params['c']." punti";
}
?>
<!DOCTYPE html>
<html>

<head>
	<title>Mad Dog</title>
    <meta property="og:url" content="<?php echo $params['url']; ?>" />
    <meta property="og:type" content="<?php echo $params['type']; ?>"/>        
    <meta property="og:title" content="<?php echo $metas['title']; ?>"/>
    <meta property="og:image" content="http://www.shaa.it/demo/luca/<?php echo $metas['image']; ?>.jpg"/>
    <meta property="og:description" content="<?php echo $metas['description']; ?>"/>       

    <meta itemprop="name" content="">        
    <meta itemprop="image" content="">
    <meta itemprop="description" content="<?php echo $metas['description']; ?>">
    <style>
        @import url('https://fonts.googleapis.com/css?family=Roboto');
        html,body {
            width:100%;
            height:100%;
            padding:0; 
            margin:0;
            position: relative;
            font-family: 'Roboto', sans-serif; 
        }
        .wrapper{
            cursor: pointer;
        }
        .visible {
            z-index: 99999;
        }
        .hidden{
            z-index: -1;
        }
        #mainArea {
            width:100%;
            height:100%; 
            position:absolute; 
            top:0; 
            left:0;
            background:#028282;
            overflow: hidden;
        }
        #scene {
            width:100%;
            height:100%;           
            position:absolute; top:0; left:0;
        }
        .targetArea {
            position:absolute;
            opacity:0.5;
            cursor:url(target2.png) 50 50, auto;
        }
        #tutorial {
            text-align:center;
            width:200px; 
            height:100px; 
            position:absolute; 
            top:0;left:0;bottom:0;right:0; 
            margin:auto;
            line-height: 100px;
            background:rgba(20, 20, 20, 0.85); 
            font-size:18px; 
            color:#fff;
            display:none;
        }
        #showMoving {
            display:none;           
            max-width: 100%;
            max-height: 100%;            
            position:absolute; 
            top:auto;left:auto;bottom:10%;right:25%; 
        }
        #gdLivesWrap, #gdScoreWrap {visibility:hidden;}
        #levelWrapper {
            overflow: hidden;
            width:100%; 
            height:100%;
            position:absolute; 
            top:0%; 
            left:0;
            /*background: #fff;*/
            /*background:#fff #028282;*/
            background:#4860a6;
        }
        #stageWrapper {
            opacity:0;
            background:#000;
            width:100%; 
            height:100%; 
            overflow: hidden; 
            visibility:hidden;
            position:absolute; 
            top:0; 
            left:0;
        }
        #levelBtnWrapper {
            width:80%; 
            height:18%;
            position:absolute; 
            top:0%; 
            left:0;
            bottom:0; 
            right:0;
            margin:auto;
            text-align:center;
        }
        #levelWrapper .levelTitle {
            width:80%; 
            height:15%; 
            text-align:center; 
            position:absolute; 
            top:30px; 
            left:0; 
            right:0; 
            margin:auto; 
            /*color:#fff; */
            color:#fda83b;
            text-shadow: #000 1px 1px 5px;
        }
        .levelBtn.blueGlow {
            color:#ffffff;
            text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #ff8a00, 0 0 25px #ff8a00, 0 0 30px #ff8a00, 0 0 35px #ff8a00, 0 0 40px #ff8a00;  
        }
        #gdScoreWrap {
            /*width:15%; */
            width:300px;
            height:55px;
            position:absolute; 
            top:2%; 
            right:2%;
            opacity:0;
        }
        #gdScoreLabel {
            width:50%; 
            height:100%;
            position:absolute; 
            top:0; 
            left:0;
            color:#fff;
            font-family: 'Roboto', sans-serif;             
            text-align:center;
        }
        #gdScore {
            width:50%; 
            height:100%;
            position:absolute; 
            top:0; 
            right:0;
            color:#fff;
            font-family: 'Roboto', sans-serif;            
            text-align:right;
            font-size:48px;
        }
        #gdLivesWrap {
            /*width:15%; */
            width:300px;
            height:55px;
            /*height:10%;*/
            position:absolute; 
            top:2%; 
            left:2%;
            opacity:0;
        }
        #gdLivesLabel {
            width:50%; 
            height:100%;
            position:absolute; 
            top:0; 
            left:0;
            color:#fff;
            font-family: 'Roboto', sans-serif;           
            text-align:center;
        }
        #gdLivesImg {
            width:65px; 
            height:50px;
            position:absolute;
            top:0; 
            left:155px;
        }
        #gdLivesImg img {
            max-width:50px; 
            max-height:100%;
            display:inline-block;
        }
        #gdLivesImg span {
            width:10px; 
            height:100%;
            color:#fff;
            font-size:20px;
        }
        #gdLives{
            /*width:50%; */
            width:30px;
            height:100%;
            position:absolute; 
            top:0; 
            /*right:0%;*/
            font-size:53px;
            left:222px;
            color:#fff;
            font-family: 'Roboto', sans-serif;            
            text-align:right;
        }
        video{object-fit: fill;}  
        #ModalGameOver {
            max-width:600px;
            max-height:500px; 
            position:absolute; 
            top:0; 
            bottom:0; 
            left:0; 
            right:0; 
            margin:auto; 
            text-align:center;
            border-radius:20px 20px 0 0; 
            visibility:hidden; 
            opacity:0;        
        }
        #ModalGameOver #ModalGameOverHead {
            width:100%; 
            height:90px; 
            background:#808ed2;
            border-radius:20px 20px 0 0;
        }
        #ModalGameOver #ModalGameOverHead #gameOver {
            width:100%; 
            height:100%; 
            line-height:90px; 
            color:#fff;
        }
        #ModalGameOver #ModalGameOverBody {
            width:100%; 
            height:calc(100% - 90px); 
            background:#fff; 
            border-radius:0 0 20px 20px;            
        }
        #ModalGameOver #ModalGameOverBody #labelRecapScore {
            color:#808ed2;
            padding:25px 0 0 0;
        }
        #ModalGameOver #ModalGameOverBody #recapScore {
            padding:10px 0 10px 0;
            color:#999;
        }
        
        #ModalGameOver #ModalGameOverBody #labelRecapTrough {
            color:#808ed2;
            padding:10px 0 0 0;
        }
        #ModalGameOver #ModalGameOverBody #recapTrough {
            padding:10px 0 10px 0;
            color:#999;
        }
        #ModalGameOver #ModalGameOverBody #gameReplayBtn {
            width:230px; 
            height:50px; 
            line-height:50px; 
            color:#fff;
            text-align:center; 
            border-radius:10px; 
            background:#808ed2; 
            border: 1px solid #fff; 
            cursor:pointer;
            margin:40px 3px 0 auto;
            display: inline-block;
            vertical-align: middle;
        }
        #ModalGameOver #ModalGameOverBody .shareFb {
            background: url(img/fbBtnBg.png)no-repeat center;
            background-size: contain;            
        }
        #ModalGameOver #ModalGameOverBody .modalBtn {
            width: 230px;
            height: 50px;
            line-height: 50px;
            color: #fff;
            text-align: center;
            border-radius: 10px;           
            border: 1px solid #fff;
            cursor: pointer;
            margin: 0 auto;
            display: inline-block;
            text-decoration: none;
            vertical-align: middle;
            margin: 40px auto 0 3px;
        }
        #ModalGameOver #ModalGameOverBody .modalBtn:hover,
        #ModalGameOver #ModalGameOverBody #gameReplayBtn:hover {
            border: 1px solid #000;
            color: #000;
        }
        button{
            outline:none;
            cursor:pointer;
            border:none;
            padding:0; 
            margin:0;
            font-family: 'Roboto', sans-serif;
            color:#fff;  
            text-shadow: rgb(0, 0, 0) 1px 1px 5px;
        }        
        /*
        button.btnStages{
            overflow: hidden;
            z-index: 20;           
            background-position:50% 50% !important;
            z-index: 9999;
        }
        button.btnStages.active{
            text-shadow: 0 0 10px #FFF, 0 0 20px #FFF, 0 0 30px #FFF, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;
            box-sizing: border-box;                       
            box-shadow: inset 0 0 70px #5fceca;
            
        }
        button.btnStages.completed {border: none; box-shadow: none;}
        button.btnStages #padlock {
            position:absolute; 
            width:50px; 
            height:50px; 
            right:10px; 
            bottom:10px; 
            display:block;
            z-index: 10;
        }
        button.btnStages #padlock.locked{
            background: url(img/locked.png)no-repeat center;
            background-size: contain;
        }
        button.btnStages #padlock.unLocked{
            background: url(img/unlocked.png)no-repeat center;
            background-size: contain;
        }
        button.btnStages.completed #padlock {
            background:none;
        }          
           
        button span.btnStagesSpanHover{
            position:absolute;
            top:-100%;            
            left:0;                      
            background-color:#fff;
            color:#000;            
            width:100%;
            height:100%;
        }
        button span.btnStagesSpanHover:hover, button span.btnStagesSpanHover:hover span,
        button span.btnStagesSpanHover, button span.btnStagesSpanHover span{
            text-shadow: none; 
        }
        button span.title {
            position:absolute; 
            bottom:5%; 
            left:2%; 
            width:50%; 
            height:75%;
            text-align:left;
            color:#ff8400;
        }
        button.btnStages span.subtitle {
            text-align:left;
            position:absolute;
            width:50%; 
            height:25%;
            bottom:23%; 
            left:2%;           
            color:#ff8400;
        }
        button.btnStages hr {
            width:40%; 
            height:4%;
            position:absolute;
            bottom:22%;
            margin:0;
            padding:0; 
            left:2%;            
            background:#ff8400;
            border:none;
        }
        button.btnStages span.btnPlayStage {
            width:30%;
            height:45px;
            line-height:45px;                       
            text-align:center;
            position:absolute; 
            top:0;
            right:10%;
            bottom:0;
            margin:auto;
            border-radius:10px;           
            display:block;         
            background:#fff;           
            color:#ff8400;
            box-shadow: 6px 5px #ff8400;
            border:3px solid #ff8400;
        }
        button.btnStages span.btnPlayStage:hover {                      
            background:#ff8400;           
            color:#fff;
            box-shadow: 6px 5px #ff8400;           
        }
        */
        /*
        #recapWrap {
            width:30%; 
            height:65%; 
            background:#fff;
            position: absolute; 
            color:#000; 
            left:0; 
            top:0; 
            bottom:0; 
            right:0; 
            margin:auto;
            border-radius: 15px; 
            z-index: 9999;
            text-align: center; 
            min-width:500px; 
            min-height:700px;  
        }
        #recapHeader{
            width:100%; 
            height:150px; 
            background:#5fceca; 
            color:#fff;
            border-radius: 15px 15px 0 0;
        }
        #headerTitle {
            margin:0; 
            padding:0;
            line-height:150px; 
            text-align: center; 
            font-size:5vmin
        }
        #recapBody {
            width:95%; 
            height:70%; 
            color:#414141;
            border-radius: 15px 15px 0 0;
            margin: 0 auto;
        }
        #replayGame {
            width:50%;
            height:45px;
            position:absolute;
            bottom:5%;
            left:0; right:0; margin:auto;
            color:#000;
            border: 3px solid #4ca5a2;
            background: #fff;
            color: #4ca5a2;
            box-shadow: 6px 5px #4ca5a2;
            border-radius: 10px;
            display: block;
            line-height: 45px;
            text-align: center;
            font-size:27px;
            cursor:pointer;
        }
        #countdownW {
            width:15px;
        }
        #ifrRanking{
            width:98%; 
            height:0%;
            position:absolute; 
            top:0; 
            left:0;              
            right: 0;
            margin: auto;
        }
        #closeRanking {
            border:none; 
            background:none;
            width:20%; 
            height:10%; 
            position:absolute; 
            top:5%; 
            right:5%; 
            display:none;           
        }   
        .levelDesc {
            text-shadow: none;
            color:#fda83b;
        }
 */       
        #log {
  position: fixed;
  bottom: 0;
  right: 1em;
  color: #FFF;
  background-color: rgba(0, 0, 0, .5);
            z-index: 99;
}
#backToLg, #exitTutorialBtn, #tutorialBtn  {   
    font-size: 20px;
    position: absolute;
    top: 2%;
    left:2%; 
    right:auto;   
    background: #81a1fe;
    color: rgb(243, 223, 67);
    border: 2px solid rgb(243, 223, 67);
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    z-index: 10;
    box-shadow: 10px 9px #fda83b;
    width: 250px;
    height: 50px;
    line-height: 50px;    
    text-decoration: none;
    text-align: center;
    }
#backToLg:hover, #exitTutorialBtn:hover, #tutorialBtn:hover {
    color: #81a1fe;    
    background: #fff;  
    border: 2px solid #81a1fe;
    box-shadow: 10px 9px #81a1fe;
    }
/*
==============================
tutorial section
==============================
*/        
#exitTutorialBtn {
    visibility:hidden;opacity:0;
}
        #exitTutorialBtn, #tutorialBtn {left:auto; right:2%;}
        /*
#exitTutorialBtn, #tutorialBtn {
    width: 13%;
    height: 6.1%;
    font-size: 20px;
    position: absolute;
    top: 2%;
    right: 2%;
    background: #fda83b;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    z-index: 10;
    box-shadow: 10px 9px #fff;
    }
#exitTutorialBtn:hover, #tutorialBtn:hover {
    color: #fda83b;    
    background: #fff;  
    border: 2px solid #fda83b;
    box-shadow: 10px 9px #fda83b;
}
*/
iframe#ifrTutorial {
    position:absolute;
    width:100%; height:100%;
    top:-100%;
    left:0; 
    z-index: 10;
    border: none;
}
#inputScore {visibility: hidden; opacity: 0;}
    </style>    
    <script src="../lib/fitText.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
</head>
<body>
    <div id="log"></div>
    <div id="mainArea">    
        <!--<video id="scene" width="400" controls src="EshsAurunmilla.ogv" type="video/mp4"></video>-->
        <video id="scene" width="400" src="../videointeri/dragonsLair.mp4" type="video/mp4" preload="metadata"></video>
        <audio id="audioError" src="../sound/dl2_bad.wav" ></audio>
        <audio id="audioSuccess" src="../sound/dl2_good.wav" ></audio>
        <div id="tutorial"></div>
        <img id="showMoving" src="">
        <iframe id="ifrTutorial" src="tutorial/index_tutorial.html"></iframe>
        <button id="exitTutorialBtn">Back</button>
        <button id="tutorialBtn" class="">Tutorial</button>
        <a id="backToLg" class="" href="../main/index.html">Back to game selection</a>
    </div>
    <!--<div id="ifrWrapper">-->
        <iframe id="ifrRanking" class="hidden" src="">postmessage</iframe>
        <button id="closeRanking" class="hidden">X Close</button>
    <!--<button id="pmessage" style="width:100px; height:20px;"></button>-->
    <!--</div>-->
    <input type="text" name="score" id="inputScore" value="0" style="position:absolute;bottom:0;">
    <script src="gameSheetDl.min.js"></script>
    <script src="gameConfig3.js"></script>
    <script>
        var fb_pre= "https://www.facebook.com/sharer/sharer.php?u=";          
        var url = "http://www.shaa.it/demo/maddog/index.php?c=";
        document.querySelector(".shareFb").addEventListener("click",function(event){
            event.preventDefault();                
            prepend = fb_pre;              
            //window.open(prepend+escape(url+"&n="+document.querySelector("#"+" input").value));
            var d = new Date();
            window.open(prepend+escape(url+document.querySelector("#"+"inputScore").value)+"&t="+d.getTime());  
        });
    </script>        
</body>
</html>