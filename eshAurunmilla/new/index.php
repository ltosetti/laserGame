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
    $metas['title'] = "Esh Aurunmilla";
    $metas['description'] = "share Esh Aurunmilla";
} else {
    $metas['image'] = "sample";
    $metas['score'] = isset($_GET['score']);
    $metas['name'] = isset($_GET['name']);
    $metas['title'] = "Esh Aurunmilla";
    //$metas['description'] = ucfirst($params['n'])." ha totalizzato ".ucfirst($params['n'])." punti";
    $metas['description'] = "ha totalizzato ".$params['c']." punti";
}
?>
<!DOCTYPE html>
<html>

<head>
	<title>Mad Dog</title>
    <style>
        @import url('https://fonts.googleapis.com/css?family=Roboto');
        html,body {
            width:100%;
            height:100%;
            padding:0; 
            margin:0;
            position: relative;
            font-family: 'Roboto', sans-serif; 
            overflow: hidden;
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
            background:#028282;
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
            color:#fff;        
        }
        .levelBtn.blueGlow {
            color:#ffffff;
            text-shadow: 0 0 10px #FFF, 0 0 20px #FFF, 0 0 30px #FFF, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;  
        }
        #gdScoreWrap {           
            width:18%;
            height:10%;
            position:absolute; 
            top:2%; 
            right:2%;
            opacity:0;
        }
        #gdScoreLabel {
            width:40%; 
            height:100%;
            position:absolute; 
            top:0; 
            left:0;
            color:#fff;
            font-family: 'Roboto', sans-serif;             
            text-align:center;
        }
        #gdScore {
            width:60%; 
            height:100%;
            position:absolute; 
            top:0; 
            right:0;
            color:#fff;
            font-family: 'Roboto', sans-serif;            
            text-align:right;
        }
        #gdLivesWrap {            
            width:300px;
            height:55px;            
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
            width:30px;
            height:100%;
            position:absolute; 
            top:0;            
            font-size:53px;
            left:222px;
            color:#fff;
            font-family: 'Roboto', sans-serif;            
            text-align:right;
        }
        button{
            outline:none;
            cursor:pointer;
            border:none;
            padding:0; 
            margin:0;
            font-family: 'Roboto', sans-serif;
            color:#fff;           
        }
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
        video{object-fit: fill;}       
        button span.btnStagesSpanHover{
            position:absolute;
            top:-100%;            
            left:0;            
            background-color:#e6775d;
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
            color:#fff;
        }
        button.btnStages span.subtitle {
            text-align:left;
            position:absolute;
            width:50%; 
            height:25%;
            bottom:23%; 
            left:2%;
            color:#fff;
        }
        button.btnStages hr {
            width:40%; 
            height:4%;
            position:absolute;
            bottom:22%;
            margin:0;
            padding:0; 
            left:2%;            
            background:#fff;
            border:none;
        }
        button.btnStages span.btnPlayStage {
            width:30%;
            height:45px;
            line-height:45px;
            background:#e35d5d;
            border:3px solid #fff; 
            color:#fff;
            text-align:center;
            position:absolute; 
            top:0;
            right:10%;
            bottom:0;
            margin:auto;
            border-radius:10px;           
            display:block;
            box-shadow: 6px 5px #fff;
        }
        button.btnStages span.btnPlayStage:hover {                      
            background:#fff;            
            color:#4ca5a2; 
            box-shadow: 6px 5px #4ca5a2;
        }
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
        #replayGame, .shareFb{
            width:35%;
            height:45px;
            /*position:absolute;
            bottom:5%;
            left:0; right:0; margin:auto;
            */
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
            display: inline-block;
            margin-right: 4%;
            vertical-align: middle;
        }
        .shareFb {
            background: url(img/fbBtnBg.png)no-repeat center #395b9a;
            background-size: contain;            
            margin-right: 0;
        }
        #countdownW {
            width:15px;
        }
        #ifrRanking, #ifrRankingOnlyShow{
            width:100%; 
            height:100%;
            position:absolute; 
            visibility:hidden;
            opacity:0;
            top:-100%; 
            left:0;              
            right: 0;
            margin: auto; 
            overflow: hidden;
            border:0; padding:0;
        }
        #closeRanking {
            border:none; 
            background:none;
            width:20%; 
            height:10%; 
            position:absolute; 
            top:0%; 
            right:0%;            
            visibility:hidden;
            opacity:0;
        } 
        #showRanking, #closeRanking {
            width:7.8%;
            height:4.1%;
            /*font-size: 25px;*/
            position: absolute;
            top:20px;
            right:20px;
            background: transparent;            
            color: #fff;
            border: 2px solid #fff;
            border-radius: 10px;
        }
        #backToLg, #showRanking, #closeRanking {   
            font-size: 20px;
            position: absolute;
            top: 2%;
            left:2%; 
            right:auto;   
            background: #41b2b2;
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
            width: 250px;
            height: 50px;
            line-height: 50px;    
            text-decoration: none;
            text-align: center;
        }
    #backToLg:hover, #showRanking:hover, #closeRanking:hover {
            color: #41b2b2;    
            background: #fff;  
            border: 2px solid #41b2b2;
            box-shadow: 10px 9px #41b2b2;
        }
    #showRanking, #closeRanking {
            width: 150px;
            height: 50px;
            position: absolute;
            top:20px;
            right:20px;
            left:auto;
            line-height: normal;    
            /*background: transparent;*/
        }
    </style>    
    <script src="../lib/fitText.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
</head>
<body>
    <div id="mainArea">    
        <!--<video id="scene" width="400" controls src="EshsAurunmilla.ogv" type="video/mp4"></video>-->
        <video id="scene" width="400" src="../videointeri/EshsAurunmilla.webm" type="video/mp4"></video>
        <audio id="audioError" src="../sound/dl2_bad.wav" ></audio>
        <audio id="audioSuccess" src="../sound/dl2_good.wav" ></audio>
        <div id="tutorial"></div>
        <img id="showMoving" src="">
        <a id="backToLg" class="" href="../main/index.html">Back to game selection</a>
    </div>
    <!--<div id="ifrWrapper">-->
        <iframe id="ifrRanking" src="">postmessage</iframe>
        <iframe id="ifrRankingOnlyShow" src=""></iframe>
        <button id="closeRanking">X Close</button>
    <!--<button id="pmessage" style="width:100px; height:20px;"></button>-->
    <!--</div>-->    
    <script src="gamesheet.js"></script>
    <script src="gameConfig.js"></script>
     <script>
        
    </script>       
</body>
</html>