<?php
$servername = "your_server";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch appointments from the database
$appointments = array();
$sql = "SELECT * FROM appointments";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $appointments[] = $row;
    }
}

// Fetch patient explanations from the database
$explanations = array();
$sql = "SELECT reason FROM appointments";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $explanations[] = $row['reason'];
    }
}

// Close the database connection
$conn->close();

// Return data as JSON
$data = array(
    'appointments' => $appointments,
    'explanations' => $explanations,
);

echo json_encode($data);
?>
