<!DOCTYPE html>
<html>

<head>
	<title>Mad Dog</title>
    <style>
        html,body {
            width:100%;
            height:100%;
            padding:0; 
            margin:0;
            position: relative;
            overflow: hidden;
            background: #4860a6;
            font-family: sans-serif;
        }
        #formContainer {
            width:500px; 
            height:335px; 
            position: absolute; 
            top:0; 
            bottom:0; 
            left:0; 
            right:0; 
            margin:auto; 
            border-radius: 15px 15px 9px 9px;
            display: none;
            font-size:3vmin;
            background:#ffffff; 
        }      
        #formContainer #formContainerHeader {
            width:100%; 
            height:90px; 
            background:#4860a6;
            /*background:#5fceca; */
            color:#fff;
            border-radius: 15px 15px 0 0;
        }
        #formContainer #formContainerHeader h1{
            margin:0; 
            padding:0;
            line-height:90px; 
            text-align: center; 
            font-size:3vmin;
        }
        #formContainer #formContainerBody {
            width:95%; 
            height:75%; 
            color:#414141;            
            margin:auto;
            position:absolute; top:90px; left:0; right:0;
            text-align: center;
            
        }
        #formContainer #formContainerBody #newScore{
            /*margin:0 auto;
            border:none;
            font-size:3vmin;
            text-align: right;*/
            /*width:180px;*/
            background:#4860a6;
            margin-top:30px;
            color:#fff;
            
        }
        #formContainer #formContainerBody #newName, #newScore{
            border:none;
            border:1px solid #e35d5d;
            width:180px;
            padding:5px;
            color:#fff;
            /*background:#5fceca; */
            box-shadow: 6px 5px #e35d5d;
            background:#fff;
            font-size:2.5vmin;
            border-radius: 10px;
            color:#323a45
        }
        .row{
            position :relative; 
            /*width:55%; */
            width:90%;
            height:65px;/*45px;*/
            margin: 0 auto;
            line-height: 60px;
            background: #e35d5d;
            /*border: 3px solid #fff;*/
            border-radius: 10px;           
            box-shadow: 6px 5px #fff;
        }
        .itemScore{
            /*width:60%; */
            width:25%;
            height:auto;
            display:inline-block; 
            position:absolute; 
            top:0; 
            left:5%;
            font-size: 4vmin;                       
            color: #fff;  
            padding-left:5px;
        }
        .itemDivided {
            width:50%;
            height: 100%;
            position:absolute;
            top:0; left:25%;
            text-align: center;
        }
        .itemName{
            width:25%; 
            height:auto;
            display:inline-block;
            position:absolute; 
            top:0; 
            right:2%;
            color:#fff;  
        }
        #status {opacity:0; visibility:hidden; height:0; width:0;}
        #rankContainer {
            /*width:80%;
            height:100%;
            height: 95%;*/
            width:1024px;
            height:100%;
            position: absolute; 
            top:0; 
            left:0; 
            right:0; 
            bottom:0; 
            margin:auto;
        }
        .rankTitle {
            width:100%;
            height: 60px;
            text-align: center;
            color:#fff;
            margin-bottom:0;
        }
        #submit {            
            width: 230px;
            height: 50px;
            /*line-height: 50px;*/
            color: #fff;
            text-align: center;
            border-radius: 10px;
            background: #323a45;
            border: 3px solid #fff;
            cursor: pointer;
            margin: 0 auto;
            display: inline-block;
            text-decoration: none;
            vertical-align: middle;
            font-size:2.5vmin;        
        }
        #submit:hover {
            border: 3px solid #323a45;
            color: #323a45;
            box-shadow: 6px 5px #e35d5d;
            background: #fff;
        }
    </style>    
     <script src="../lib/fitText.js" type="text/javascript"></script>
</head>
<body>    
<?php
    // define variables and set to empty values
    $score = $name = "";
?>  
    
    <div id="rankContainer">
        <h1 class="rankTitle">Esh Aurunmilla Ranking - TOP TEN</h1>
        <div id="row_1" class="row"></div><br>
        <div id="row_2" class="row"></div><br>
        <div id="row_3" class="row"></div><br>
        <div id="row_4" class="row"></div><br>
        <div id="row_5" class="row"></div><br>
        <div id="row_6" class="row"></div><br>
        <div id="row_7" class="row"></div><br>
        <div id="row_8" class="row"></div><br>
        <div id="row_9" class="row"></div><br>
        <div id="row_10" class="row"></div>
    </div>    
    <div id="formContainer"> 
        <div id="formContainerHeader"><h1>Nice job you are in the Top Ten</h1></div>
        <div id="formContainerBody">
            <!--<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">-->
            <form method="post" action="">  
                <label>score: </label><input id="newScore" type="number" name="score" value="<?php echo (int)$score;?>" disabled="disabled">         
                <br><br>
                <label>name: </label> <input id="newName" type="text" name="name" value="<?php echo $name;?>" input autocomplete="off" required>         
                <br><br>       
                <input id="submit" type="submit" name="submit" value="send ranking">  
                <!--<input autocomplete="off">-->
            </form> 
        </div>
        <div id="status"></div>
    </div>
    <script>
//inserire il close buttun della classifica
var newScores;
var rankingCall = {};
var dataInsered = false;        
window.addEventListener("message", function (evt) {  
    newScores = parseFloat(evt.data);    
    console.log(newScores);
    var rankingCall = new RankingCall();
    rankingCall.init();
    document.getElementById("submit").addEventListener("click", function(e){
        e.preventDefault(); 
        dataInsered = true;
        var allRow = document.querySelectorAll(".row");
        for (var i = 0; allRow.length > i; i++){
            allRow[i].innerHTML = "";
        }
        rankingDataSend(); 
        setTimeout(function(){
            rankingCall.init();
        },2000);
        setTimeout(function(){
            document.getElementById("formContainer").style.display="none";
        },1000);           
    });   
});

//var newScore = 1500;
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}        
var hsObj = {};
        
function Ranking(){
    this.number = ["one","two","three","four","five","six","seven","height","nine","ten"];
    this.name = ["oneName","twoName","threeName","fourName","fiveName","sixName","sevenName","heightName","nineName","tenName"];
    this.data;
    this.scoreList;
    //console.log(this.data);
};
Ranking.prototype.render = function(data){
    this.data = hsObj;
    this.scoreList = this.data.scoreList
    var userNum = 10;
    var getAllNum = [];
    var elScore = [];  
    var elScoreName = []; 
    var elDiv = [];
    
    for (var i = 0; userNum > i; i++){  
        var rows = document.querySelectorAll(".row");
        elScore[i] = document.createElement("div");
        elScore[i].id = "item_"+(i+1);
        elScore[i].classList.add("itemScore");
        //elScore[i].setAttribute("style", "width:450px; height:auto;display:inline-block; position:absolute; top:0; left:0;color:#fff; font-size: 4vmin;");        
        rows[i].appendChild(elScore[i]);               
        elScore[i].innerHTML = numberWithCommas(this.scoreList[this.number[i]]);
        elScoreName[i] = document.createElement("div");
        elScoreName[i].classList.add("itemName");
        //elScoreName[i].setAttribute("style", "width:40%; height:auto;display:inline-block;position:absolute; top:0; left:60%;color:#fff;");
        console.log(this.scoreList[this.name[i]]);
        
        elDiv[i] = document.createElement("div");
        elDiv[i].classList.add("itemDivided");
        //elDiv[i].innerHTML = "..........................................";
        rows[i].appendChild(elDiv[i]);
        
        elScoreName[i].innerHTML = this.scoreList[this.name[i]];        
        rows[i].appendChild(elScoreName[i]);  
        getAllNum.push(this.scoreList[this.number[i]]);        
    }  
    if (!dataInsered){
        for (var x = 0; getAllNum.length > x; x++){   
            if (newScores > getAllNum[x]){
                console.log(getAllNum[x], elScore[x]);
                //elScore[x].innerHTML = newScore;           
                document.getElementById("formContainer").style.display = "block";
                document.getElementById("newScore").value = newScores;                
                break;
            }  
        }   
    }    
    console.log(getAllNum);
    fitText(document.querySelectorAll('.itemScore'), 0.7);
    fitText(document.querySelectorAll('.itemDivided'), 0.9);
    fitText(document.querySelectorAll('.itemName'), 0.9);  
};
        
function RankingCall(options){  
    self = this;
    this.rank = {}; 
    this.ranking = new Ranking();
};
RankingCall.prototype.getManifestUrl = function() {      
    //var path = 'http://www.shaa.it/demo/maddog/hiScore.json';//'hiScore.json';
    var path = 'hiScore.json';      
    return path;
};
RankingCall.prototype.request = function(url,success,fail) {
    var request = new XMLHttpRequest();
        // Do the usual XHR stuff
        if ("withCredentials" in request) {
            request.open('GET', url, true);
        } else if (typeof XDomainRequest != "undefined") {
            request = new XDomainRequest();
            request.open('GET', url);
        } else {
        request = null;
    }
    request.onload = function() {
        if (request.status == 200) {
            success(request);               
        } else {
            if(fail)fail(request);
        }
        return request.status;
    };
    // Handle network errors
    request.onerror = function() {
       if(fail)fail(request);
    };
    // Make the request
    request.send();
};
RankingCall.prototype.init = function(){    
    self.request(self.getManifestUrl(),function(data){        
        self.rank = JSON.parse(data.responseText); 
        //console.log(this.rank); 
        hsObj = this.rank;
        /*render*/
        /*for (key in this.rank){           
            if (key == "scoreList"){
                 //console.log(this.rank.scoreList);
            }
        } */               
        
        self.ranking.render(self.rank);
        
        return true;
    }.bind(this), function(data){
        console.log("manifest error"); 
        return false;
    }.bind(this), function(data){
        console.log(" account error");
        return false;
    });   
};

function rankingDataSend(){
// Create our XMLHttpRequest object
    var hr = new XMLHttpRequest();
    // Create some variables we need to send to our PHP file
    //var url = "http://www.shaa.it/demo/maddog/submit.php";//"submit.php";
    var url = "submit.php";//"submit.php";
    var nS = document.getElementById("newScore").value;
    var nN = document.getElementById("newName").value;
    var vars = "score="+nS+"&name="+nN;
    hr.open("POST", url, true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
        console.log(hr);

        if(hr.readyState == 4 && hr.status == 200) {
            var return_data = hr.responseText;
            document.getElementById("status").innerHTML = return_data;
        }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    document.getElementById("status").innerHTML = "processing...";    
};
/*
document.getElementById("submit").addEventListener("click", function(e){
            e.preventDefault(); 
            var allRow = document.querySelectorAll(".row");
            for (var i = 0; allRow.length > i; i++){
                allRow[i].innerHTML = "";
            }
            rankingDataSend(); 
            setTimeout(function(){
                rankingCall.init();
            },1000);
            
           
        });
*/
    </script>
</body>
</html>