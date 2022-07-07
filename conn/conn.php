<?php

$hostname = "mysql.adsolucoestecnologia.com.br";
$dbname = "adsolucoestecn15";
$username = "adsolucoestecn15";
$password = "TR31NAM3NT0";

try{
    
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
    $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "<img src="."ae.png".">";

}catch(PDOException $e){

    echo "<img src="."Gru.png".">\n";
    echo "Volta lá no pois o erro está no: ".$e->getMessage();
}

