<?php
require_once '../config/Cors.php';
require_once '../config/Database.php';
require_once '../controllers/StudentController.php';

Cors::allow();

$controller = new StudentController(new StudentRepository(Database::getConnection()));
$controller->index();