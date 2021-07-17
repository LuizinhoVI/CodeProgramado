<?php

$host="localhost";
$usuario="root";
$senha="";
$bd="cadastro";


$mysqli=new mysqli($host,$usuario,$senha,$bd);

if($mysqlo-> connect_errno)
echo "falha na conexão : (".$mysqli->connect_errno.").".$mysqli->connect_error;

?>