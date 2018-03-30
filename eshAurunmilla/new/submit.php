<?php    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $score = test_input($_POST["score"]);
        $stage = test_input($_POST["stage"]);
        $name = test_input($_POST["name"]);   
    }
    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
?>
<?php
    echo "<h2>Your Input:</h2>";
    echo $score;
    echo "<br><hr>";
    echo $name;
    echo "<br><hr>";
    echo $stage;
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";

    $myJson = "hiScore.json";
    //$myJson = "http://www.shaa.it/demo/maddog/hiScore.json";
    $file = file_get_contents($myJson);
    $json = json_decode($file, true);
    $getScore = $json['detail']['highScore'];
    $getStage = $json['detail']['stage'];
    $getName = $json['detail']['namePlayer'];    
    
    $scoreList = $json['scoreList'];   
    $scoreListLenght = count($scoreList);
    echo $scoreListLenght;
    echo "<br>";
    for ($i = 0; $scoreListLenght > $i; $i++) {
       //echo $scoreList[$i];
        //echo "<br>"; 
    }
    echo $scoreList["one"];
    echo $scoreList["oneName"];
    
    if ($json['scoreList']["one"] < $score){
        $json['scoreList']["one"] = (int)$score;      
        $json['scoreList']["oneStage"] = (int)$stage;      
        $json['scoreList']["oneName"] = $name;
        $newJsonString = json_encode($json);
        file_put_contents($myJson, $newJsonString);
    } elseif ($json['scoreList']["two"] < $score) {
        $json['scoreList']["two"] = (int)$score;
        $json['scoreList']["twoStage"] = (int)$stage;      
        $json['scoreList']["twoName"] = $name;  
        $newJsonString = json_encode($json);
        file_put_contents($myJson, $newJsonString);
    } elseif ($json['scoreList']["three"] < $score) {
        $json['scoreList']["three"] = (int)$score;
        $json['scoreList']["threeStage"] = (int)$stage;      
        $json['scoreList']["threeName"] = $name;  
        $newJsonString = json_encode($json);
        file_put_contents($myJson, $newJsonString);
    } elseif ($json['scoreList']["four"] < $score) {
        $json['scoreList']["four"] = (int)$score;
        $json['scoreList']["fourStage"] = (int)$stage;
        $json['scoreList']["fourName"] = $name;  
        $newJsonString = json_encode($json);
        file_put_contents($myJson, $newJsonString);
    } elseif ($json['scoreList']["five"] < $score) {
        $json['scoreList']["five"] = (int)$score;
        $json['scoreList']["fiveStage"] = (int)$stage;
        $json['scoreList']["fiveName"] = $name;  
        $newJsonString = json_encode($json);
        file_put_contents($myJson, $newJsonString);
    } elseif ($json['scoreList']["six"] < $score) {
        $json['scoreList']["six"] = (int)$score; 
        $json['scoreList']["sixStage"] = (int)$stage;
        $json['scoreList']["sixName"] = $name;  
        $newJsonString = json_encode($json);
        file_put_contents($myJson, $newJsonString);
    } elseif ($json['scoreList']["seven"] < $score) {
        $json['scoreList']["seven"] = (int)$score;
        $json['scoreList']["sevenStage"] = (int)$stage;
        $json['scoreList']["sevenName"] = $name;  
        $newJsonString = json_encode($json);
        file_put_contents($myJson, $newJsonString);
    } elseif ($json['scoreList']["height"] < $score) {
        $json['scoreList']["height"] = (int)$score;
        $json['scoreList']["heightStage"] = (int)$stage;
        $json['scoreList']["heightName"] = $name;  
        $newJsonString = json_encode($json);
        file_put_contents($myJson, $newJsonString);
    } elseif ($json['scoreList']["nine"] < $score) {
        $json['scoreList']["nine"] = (int)$score; 
        $json['scoreList']["nineStage"] = (int)$stage;
        $json['scoreList']["nineName"] = $name;  
        $newJsonString = json_encode($json);
        file_put_contents($myJson, $newJsonString);
    } elseif ($json['scoreList']["ten"] < $score) {
        $json['scoreList']["ten"] = (int)$score;
        $json['scoreList']["tenStage"] = (int)$stage;
        $json['scoreList']["tenName"] = $name;  
        $newJsonString = json_encode($json);
        file_put_contents($myJson, $newJsonString);
    }    

    echo $file;
    echo "<br>";
    echo (int)$getScore;
    echo "<br>";
    echo $getStage;
    echo "<br>";
    echo $getName;
    
    if ($json['detail']['highScore'] < $score) {
        $json['detail']['highScore'] = (int)$score;      
        $json['detail']['stage'] = (int)$stage;      
        $json['detail']['namePlayer'] = $name;
        $newJsonString = json_encode($json);
        file_put_contents($myJson, $newJsonString);
    }
 ?>