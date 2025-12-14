<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

include "koneksi.php";

$input = json_decode(file_get_contents("php://input"), true);

if (!isset($input['title'], $input['author'], $input['year'])) {
  echo json_encode([
    "error" => "Data tidak lengkap",
    "data" => $input
  ]);
  exit;
}

$title  = $koneksi->real_escape_string($input['title']);
$author = $koneksi->real_escape_string($input['author']);
$year   = (int) $input['year'];

$query = "INSERT INTO books (title, author, year, status)
          VALUES ('$title', '$author', $year, 'tersedia')";

if ($koneksi->query($query)) {
  echo json_encode(["success" => true]);
} else {
  echo json_encode([
    "success" => false,
    "error" => $koneksi->error
  ]);
}
