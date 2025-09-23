<?php

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "empresa2";
// $port = 3309;

$conn = new mysqli($host, $user, $pass, $dbname );

if ($conn->connect_error) {
    die("Falha na conexao!" . $conn->connect_error);
} 