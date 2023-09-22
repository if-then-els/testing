<?php
// Database connection parameters
$servername = "localhost"; // Change to your database server name (usually "localhost")
$username = "root"; // Change to your MySQL username (usually "root")
$password = ""; // Change to your MySQL password if you have set one
$dbname = "kyeni"; // Change to your database name ("kyeni" in your case)

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname); // Change $database to $dbname

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the HTML form
$name = $_POST['name'];
$email = $_POST['email'];
$department = $_POST['department'];
$date = $_POST['date'];

// SQL query to insert data into the table "appointments" using placeholders
$sql = "INSERT INTO `appointments` (`name`, `email`, `department`, `date`) VALUES (?, ?, ?, ?)";

// Prepare the statement
$stmt = $conn->prepare($sql);

if ($stmt) {
    // Bind the parameters and execute the statement
    $stmt->bind_param("ssss", $name, $email, $department, $date);

    if ($stmt->execute()) {
        echo "Appointment booked successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
} else {
    echo "Error: " . $conn->error;
}

// Close the database connection
$conn->close();
?>
