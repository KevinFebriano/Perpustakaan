<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include "koneksi.php";

$result = $koneksi->query("SELECT id, title, author, year, status FROM books");

$data = [];
while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}

echo json_encode($data);
