<?php

require_once __DIR__ . '/../classes/Student.php';

class StudentRepository
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function getAll(): array
    {
        $stmt = $this->pdo->query("SELECT * FROM students ORDER BY id DESC");
        return $stmt->fetchAll();
    }

    public function create(Student $student): string
    {
        $stmt = $this->pdo->prepare("
            INSERT INTO students
                (first_name, middle_name, last_name, extensions, date_of_birth, enrollment_date, email, course, year, section)
            VALUES
                (:firstName, :middleName, :lastName, :extensions, :dateOfBirth, :enrollmentDate, :email, :course, :year, :section)
        ");
        $stmt->execute($this->paramsFrom($student));

        return $this->pdo->lastInsertId();
    }

    public function update(Student $student): int
    {
        $stmt = $this->pdo->prepare("
            UPDATE students SET
                first_name = :firstName,
                middle_name = :middleName,
                last_name = :lastName,
                extensions = :extensions,
                date_of_birth = :dateOfBirth,
                enrollment_date = :enrollmentDate,
                email = :email,
                course = :course,
                year = :year,
                section = :section
            WHERE id = :id
        ");
        $params = $this->paramsFrom($student);
        $params[':id'] = $student->getId();
        $stmt->execute($params);

        return $stmt->rowCount();
    }

    public function delete(int $id): int
    {
        $stmt = $this->pdo->prepare("DELETE FROM students WHERE id = :id");
        $stmt->execute([':id' => $id]);
        return $stmt->rowCount();
    }

    private function paramsFrom(Student $student): array
    {
        return [
            ':firstName' => $student->getFirstName(),
            ':middleName' => $student->getMiddleName(),
            ':lastName' => $student->getLastName(),
            ':extensions' => $student->getExtensions(),
            ':dateOfBirth' => $student->getDateOfBirth(),
            ':enrollmentDate' => $student->getEnrollmentDate(),
            ':email' => $student->getEmail(),
            ':course' => $student->getCourse(),
            ':year' => $student->getYear(),
            ':section' => $student->getSection(),
        ];
    }
}