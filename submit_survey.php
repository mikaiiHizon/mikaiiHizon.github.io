<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize inputs
    $name = htmlspecialchars(trim($_POST["name"] ?? ''));
    $age = htmlspecialchars(trim($_POST["age"] ?? ''));
    $gender = htmlspecialchars(trim($_POST["gender"] ?? ''));
    $year = htmlspecialchars(trim($_POST["year"] ?? ''));
    $satisfaction = htmlspecialchars(trim($_POST["satisfaction"] ?? ''));
    $comments = htmlspecialchars(trim($_POST["comments"] ?? ''));

    // Simple validation (optional)
    if (!$name || !$age || !$gender || !$year) {
        http_response_code(400);
        echo "Missing required fields.";
        exit;
    }

    // Save to file (CSV-style)
    $data = [$name, $age, $gender, $year, $satisfaction, $comments];
    $line = implode(",", $data) . "\n";
    file_put_contents("survey_responses.csv", $line, FILE_APPEND);

    echo "success";
} else {
    http_response_code(405);
    echo "Method not allowed";
}
?>
