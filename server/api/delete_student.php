<?php
require_once '../config/Cors.php';
require_once '../config/Database.php';
require_once '../controllers/StudentController.php';

Cors::allow();

if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed."]);
    exit();
}

$id = $_GET['id'] ?? null;
if (!$id) {
    http_response_code(400);
    echo json_encode(["error" => "Missing student id."]);
    exit();
}

$controller = new StudentController(new StudentRepository(Database::getConnection()));
$controller->destroy((int)$id);