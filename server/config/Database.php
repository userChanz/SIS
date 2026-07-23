<?php

class Database
{
    private static ?PDO $instance = null;

    public static function getConnection(): PDO
    {
        if (self::$instance === null) {
            $host = '127.0.0.1';
            $db   = 'SIS_Database';
            $user = 'root';
            $pass = '';

            try {
                self::$instance = new PDO(
                    "mysql:host=$host;dbname=$db;charset=utf8mb4",
                    $user,
                    $pass,
                    [
                        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    ]
                );
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
                exit();
            }
        }

        return self::$instance;
    }
}