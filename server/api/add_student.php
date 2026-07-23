<?php
require_once '../config/Cors.php';
require_once '../config/Database.php';
require_once '../controllers/StudentController.php';

Cors::allow();

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true) ?? [];
$controller = new StudentController(new StudentRepository(Database::getConnection()));

if ($method === 'POST') {
    $controller->store($input);
} elseif ($method === 'PUT') {
    $id = $_GET['id'] ?? null;
    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Missing student id."]);
        exit();
    }
    $controller->update((int)$id, $input);
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed."]);
}