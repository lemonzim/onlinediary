<?php
define('db_user', 'hazim');
define('db_password', 'password');
define('db_host', 'localhost');
define('db_name', 'itt632');

$conn = mysqli_connect(db_host, db_user, db_password, db_name);
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

if(isset($_POST['title'])&&isset($_POST['date'])&&isset($_POST['entry'])) {
    $title = $_POST['title'];
    $date = $_POST['date'];
    $entry = $_POST['entry'];

    $query = "INSERT into diary (title, datetimes, entrys) VALUES ('$title', '$date', '$entry')";
    if (mysqli_query($conn, $query)) {
        echo "Title: " . $title;
        echo "<br>";
        echo "Date: " . $date;
        echo "<br>";
        echo "Entry: " . $entry;
        echo "<br>";
    } else {
        echo "Error adding record: " . mysqli_error($conn);
    }
    
}

mysqli_close($conn);
?>
