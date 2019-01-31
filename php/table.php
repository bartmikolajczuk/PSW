<?php
session_start();
$db=mysqli_connect("localhost","root","","test");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="table.css">

</head>
<body>
    <div class="container">
        <?php
        if(  isset($_SESSION['username']) ) {
            echo "<br>
            <nav class='navbar navbar-inverse'>
                <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                    <ul class='nav navbar-nav center' id='nav'>
                        <li><a href='home.php'>Konto</a></li>
                    </ul>
                </div>
            </nav>";
        }
        else{
            echo "<br>
            <nav class='navbar navbar-inverse'>
                <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                    <ul class='nav navbar-nav center' id='nav'>
                        <li><a href='login.php'>Logowanie</a></li>
                        <li><a href='register.php'>Rejestrowanie</a></li>
                    </ul>
                </div>
            </nav>";
        }
        ?>

        <?php
        if(isset($_SESSION['message']))
        {
            echo "<div id='error_msg'>".$_SESSION['message']."</div>";
            unset($_SESSION['message']);
        }
        ?>
        <div id="form">
            <div id="inner">
                <h2 style="text-align: center">Baza</h2>
                <?php
                $sql = "SELECT * FROM users";
                $result = mysqli_query($db, $sql);
                if (mysqli_num_rows($result) > 0) {
                    echo "<table class='table'><tr><th scope='col'>User</th><th>Email</th><th>Password</th></tr>";
                    while($row = mysqli_fetch_assoc($result)) {
                        echo "<tr><td>".$row["username"]."</td><td>".$row["email"]."</td><td>".$row["password"]."</td></tr>";
                    }
                    echo "</table>";
                }
                else {
                    echo "0 results";
                }
                ?>
            </div>
        </div>
    </div>

</body>
</html>