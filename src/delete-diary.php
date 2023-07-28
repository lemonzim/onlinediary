<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Set the CORS headers for the preflight request
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Max-Age: 86400"); // Cache the preflight request for 24 hours

    // Return an HTTP 200 OK status
    http_response_code(200);

    // Rest of your PHP code for handling the DELETE request
    define('db_user', 'hazim');
    define('db_password', 'password');
    define('db_host', 'localhost');
    define('db_name', 'itt632');
    
    $conn = mysqli_connect(db_host, db_user, db_password, db_name);
    if (mysqli_connect_errno()) {
        echo json_encode(["error" => "Failed to connect to MySQL: " . mysqli_connect_error()]);
        exit();
    }

    $datetimes = $_POST['datetimes'];
    $query = "DELETE FROM diary WHERE datetimes='$datetimes'";

    if (mysqli_query($conn, $query)) {
        echo json_encode(["message" => "Record deleted successfully", "datetimes" => $datetimes]);
    } else {
        echo json_encode(["error" => "Error deleting record: " . mysqli_error($conn)]);
    }

    mysqli_close($conn);
    exit();
}
?>
