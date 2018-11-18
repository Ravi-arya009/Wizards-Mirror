<?php
//paster APIkey/ APPid in line number 5.
$question=$_GET['question'];
$question = preg_replace('/\s+/', '%20', $question);
$wolfram_api_url ="http://api.wolframalpha.com/v1/spoken?appid=YourAPPidHere&i=".$question."&units=metric";
$result = file_get_contents($wolfram_api_url);
echo $result;
?>
