<?php
// controllers/StudentController.php
require_once __DIR__ . '/../models/StudentRepository.php';

class StudentController
{
    private StudentRepository $repository;

    public function __construct(StudentRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(): void
    {
        echo json_encode($this->repository->getAll());
    }

    public function store(array $input): void
    {
        try {
            $student = $this->buildStudentFromInput($input, null);
            $id = $this->repository->create($student);

            http_response_code(201);
            echo json_encode(["id" => $id, "message" => "Student created."]);
        } catch (InvalidArgumentException $e) {
            http_response_code(400);
            echo json_encode(["error" => $e->getMessage()]);
        } catch (PDOException $e) {
            $this->handlePdoException($e, "Could not save student.");
        }
    }

    public function update(int $id, array $input): void
    {
        try {
            $student = $this->buildStudentFromInput($input, $id);
            $affected = $this->repository->update($student);

            if ($affected === 0) {
                http_response_code(404);
                echo json_encode(["error" => "Student not found."]);
                return;
            }

            echo json_encode(["message" => "Student updated."]);
        } catch (InvalidArgumentException $e) {
            http_response_code(400);
            echo json_encode(["error" => $e->getMessage()]);
        } catch (PDOException $e) {
            $this->handlePdoException($e, "Could not update student.");
        }
    }

    public function destroy(int $id): void
    {
        try {
            $affected = $this->repository->delete($id);

            if ($affected === 0) {
                http_response_code(404);
                echo json_encode(["error" => "Student not found."]);
                return;
            }

            echo json_encode(["message" => "Student deleted."]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["error" => "Could not delete student."]);
        }
    }

    private function buildStudentFromInput(array $input, ?int $id): Student
    {
        return new Student(
            $id,
            $input['firstName'] ?? '',
            $input['middleName'] ?? '',
            $input['lastName'] ?? '',
            $input['extensions'] ?? null,
            $input['dateOfBirth'] ?? '',
            $input['enrollmentDate'] ?? '',
            $input['email'] ?? '',
            $input['course'] ?? '',
            (int)($input['year'] ?? 0),
            $input['section'] ?? ''
        );
    }

    private function handlePdoException(PDOException $e, string $fallbackMessage): void
    {
        if ($e->getCode() === '23000') {
            http_response_code(409);
            echo json_encode(["error" => "A student with this email already exists."]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => $fallbackMessage]);
        }
    }
}