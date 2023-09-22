<?php
// Create a simple PHP API for comments

// Enable CORS (Cross-Origin Resource Sharing) if needed
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST");
// header("Content-Type: application/json");

// Initialize an array to store comments (replace with a database in a real implementation)
$comments = [];

// Handle GET request to retrieve comments
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    // Return comments as JSON
    echo json_encode($comments);
}

// Handle POST request to submit a comment
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve and sanitize user input (replace with proper validation and database storage)
    $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);
    $comment = filter_input(INPUT_POST, "comment", FILTER_SANITIZE_STRING);

    // Create a new comment object
    $newComment = [
        "name" => $name,
        "comment" => $comment,
    ];

    // Push the new comment to the comments array
    array_push($comments, $newComment);

    // Return a JSON response (you can customize the response as needed)
    echo json_encode(["message" => "Comment submitted successfully"]);
}
?>
