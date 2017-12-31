<?php
$myfile = fopen("getCard.json", "r") or die("Unable to open file!");
echo fread($myfile,filesize("getCard.json"));
fclose($myfile);
?>