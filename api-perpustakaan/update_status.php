<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

include "koneksi.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['id'], $data['status'])) {
  echo json_encode(["error" => "Data tidak lengkap"]);
  exit;
}

$id = (int) $data['id'];
$status = $koneksi->real_escape_string($data['status']);

$query = "UPDATE books SET status='$status' WHERE id=$id";

if ($koneksi->query($query)) {
  echo json_encode(["success" => true]);
} else {
  echo json_encode(["error" => $koneksi->error]);
}
