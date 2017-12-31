<?php

$set = $_GET['setCode'];
$number = $_GET['cardNumber'];

function writeFile($txt, $fileName) {
    $myFile = fopen($fileName, "a") or die("it broke");
    fwrite($myFile, $txt);
    fclose($myFile);

};

$output= array($set => $number);

$jsonOutput = json_encode($output);


writeFile($jsonOutput, "testFile.json");
echo $jsonOutput;


?>