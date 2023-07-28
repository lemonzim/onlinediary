<?php
define('db_user', 'hazim');
define('db_password', 'password');
define('db_host', 'localhost');
define('db_name', 'itt632');
header("Access-Control-Allow-Origin: *");
$conn = mysqli_connect(db_host, db_user, db_password, db_name);
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
    $query=mysqli_query($conn, "SELECT * FROM diary");
    while($row = mysqli_fetch_assoc($query)) {
            $response[] = $row; 
        }
    echo json_encode($response);
mysqli_close($conn);
?>
