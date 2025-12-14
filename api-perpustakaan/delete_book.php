<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

include "koneksi.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['id'])) {
  echo json_encode(["error" => "ID tidak ditemukan"]);
  exit;
}

$id = (int) $data['id'];

$query = "DELETE FROM books WHERE id=$id";

if ($koneksi->query($query)) {
  echo json_encode(["success" => true]);
} else {
  echo json_encode(["error" => $koneksi->error]);
}
