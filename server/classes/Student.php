<?php

class Student
{
    private ?int $id;
    private string $firstName;
    private string $middleName;
    private string $lastName;
    private ?string $extensions;
    private string $dateOfBirth;
    private string $enrollmentDate;
    private string $email;
    private string $course;
    private int $year;
    private string $section;

    public function __construct(
        ?int $id,
        string $firstName,
        string $middleName,
        string $lastName,
        ?string $extensions,
        string $dateOfBirth,
        string $enrollmentDate,
        string $email,
        string $course,
        int $year,
        string $section
    ) {
        $this->id = $id;
        $this->firstName = trim($firstName);
        $this->middleName = trim($middleName);
        $this->lastName = trim($lastName);
        $this->extensions = $extensions !== null ? trim($extensions) : null;
        $this->dateOfBirth = trim($dateOfBirth);
        $this->enrollmentDate = trim($enrollmentDate);
        $this->setEmail($email);
        $this->course = trim($course);
        $this->year = $year;
        $this->section = trim($section);
    }

    private function setEmail(string $email): void
    {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new InvalidArgumentException("Invalid email format.");
        }
        $this->email = strtolower(trim($email));
    }

    public function getId(): ?int { return $this->id; }
    public function getFirstName(): string { return $this->firstName; }
    public function getMiddleName(): string { return $this->middleName; }
    public function getLastName(): string { return $this->lastName; }
    public function getExtensions(): ?string { return $this->extensions; }
    public function getDateOfBirth(): string { return $this->dateOfBirth; }
    public function getEnrollmentDate(): string { return $this->enrollmentDate; }
    public function getFullName(): string { return "{$this->firstName} {$this->lastName}"; }
    public function getEmail(): string { return $this->email; }
    public function getCourse(): string { return $this->course; }
    public function getYear(): int { return $this->year; }
    public function getSection(): string { return $this->section; }
}