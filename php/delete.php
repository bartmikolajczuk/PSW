<?php
session_start();

$db=mysqli_connect("localhost","root","","test");

$username = $_SESSION['username'];
$query = "DELETE FROM users WHERE username='$username'";
$result=mysqli_query($db,$query);
if($result) {
    echo 'alert("Usunięto Twoje konto.")';
    header("location:login.php");
}
else{
    echo 'alert("Coś poszło nie tak.")';
}
session_destroy();
unset($_SESSION['username']);
$_SESSION['message']="You are now logged out";
header("location:login.php");
?>