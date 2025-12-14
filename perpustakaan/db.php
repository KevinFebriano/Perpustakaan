<?php

function getConnection(){
    $host = "localhost";
    $db_name = "perpus";
    $username = "root";
    $password = "";

    $conn = new mysqli($host, $username, $password, $db_name);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connection_error);
    }

    return $conn;
}