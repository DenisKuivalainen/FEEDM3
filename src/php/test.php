<?php
$conn = new mysqli("localhost", "pi", "MariaPass", "DEVdb");
$id = $_GET['id'];
$sql= "select Id, Name, Description from recipe where id = " . $id;
$result = $conn->query($sql);
while($row = $result->fetch_assoc()) {
echo $row['Id'] . "<br/><br/>" . $row['Name'] . "<br/><br/>" . $row['Description'];
}
?>