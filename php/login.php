<?php
    session_start();
    if(  isset($_SESSION['username']) ) {
      header("location:home.php");
      die();
    }
    $db=mysqli_connect("localhost","root","","test");
    if($db) {
          if(isset($_POST['login_btn'])) {
              $username=mysqli_real_escape_string($db,$_POST['username']);
              $password=mysqli_real_escape_string($db,$_POST['password']);
              $password=md5($password); //Remember we hashed password before storing last time
              $sql="SELECT * FROM users WHERE  username='$username' AND password='$password'";
              $result=mysqli_query($db,$sql);
              if($result) {
                    if( mysqli_num_rows($result)>=1) {
                        $_SESSION['message']="You are now Loggged In";
                        $_SESSION['username']=$username;
                        header("location:home.php");
                    }
                    else {
                          $_SESSION['message']="Username and Password combiation incorrect";
                    }
              }
          }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="container">
        <br>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav center" id="nav">
                    <li><a href="login.php">Logowanie</a></li>
                    <li><a href="register.php">Rejestracja</a></li>
                    <li><a href="table.php">Baza</a></li>
                </ul>
            </div>
            </div>
        </nav>
        <?php
            if(isset($_SESSION['message']))
            {
                 echo "<div id='error_msg'>".$_SESSION['message']."</div>";
                 unset($_SESSION['message']);
            }
        ?>
        <div id="form">
            <div id="inner">
                <h2>Logowanie</h2>
                <form method="post" action="login.php">
                    <h6>Login</h6>
                    <input type="text" name="username" class="textInput"><br>
                    <h6>Hasło</h6>
                    <input type="password" name="password" class="textInput"><br>
                    <input type="submit" name="login_btn" class="Log In" value="Loguj">
                </form>
            </div>
        </div>
    </div>
</body>
</html>
