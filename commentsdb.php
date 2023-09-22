<?php

ini_set("SMTP", "smtp.gmail.com");
ini_set("smtp_port", "587");
ini_set("sendmail_from", "your_email@gmail.com");
ini_set("sendmail_path", "C:\xampp\sendmail\sendmail.exe -t");

// Database connection parameters
$servername = "localhost"; // Change to your database server name (usually "localhost")
$username = "root"; // Change to your MySQL username (usually "root")
$password = ""; // Change to your MySQL password if you have set one
$dbname = "kyeni"; // Change to your database name ("kyeni" in your case)

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the HTML form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $comment = $_POST['comment'];

    // SQL query to insert data into the table "comments"
    $sql = "INSERT INTO `comments` (`name`, `comment`) VALUES (?, ?)";

    // Prepare the statement
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Bind the parameters and execute the statement
        $stmt->bind_param("ss", $name, $comment);

        if ($stmt->execute()) {
            echo "Comment submitted successfully!";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Send an email notification to the admin
$to = "richieartsfilms@gmail.com"; // Admin's email address
$subject = "New Comment Submitted";
$message = "A new comment has been submitted on the website.\n\nName: $name\nComment: $comment";
$headers = "From: kyeni@yahoo.com"; // Your website's email address

mail($to, $subject, $message, $headers);


        // Close the statement
        $stmt->close();
    } else {
        echo "Error: " . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
