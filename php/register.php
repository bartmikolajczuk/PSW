<?php
session_start();
if(  isset($_SESSION['username']) ) {
    header("location:home.php");
    die();
}
$db=mysqli_connect("localhost","root","","test");

if(isset($_POST['register_btn'])) {
    $username=mysqli_real_escape_string($db,$_POST['username']);
    $email=mysqli_real_escape_string($db,$_POST['email']);
    $password=mysqli_real_escape_string($db,$_POST['password']);
    $password2=mysqli_real_escape_string($db,$_POST['password2']);  
    $query = "SELECT * FROM users WHERE username = '$username'";
    $result=mysqli_query($db,$query);
    if($result) {
        if( mysqli_num_rows($result) > 0) {
            echo '<script language="javascript">';
            echo 'alert("Username already exists")';
            echo '</script>';
        }
        else{
            if($password==$password2) {
                $password=md5($password);
                $sql="INSERT INTO users(username, email, password ) VALUES('$username','$email','$password')"; 
                mysqli_query($db,$sql);  
                $_SESSION['message']="You are now logged in"; 
                $_SESSION['username']=$username;
                header("location:home.php");
            }
            else {
                $_SESSION['message']="The two password do not match";   
            }
        }
    }
}

if (isset($_POST['username_check'])) {
    $username = $_POST['username'];
    $sql = "SELECT * FROM users WHERE username='$username'";
    $results = mysqli_query($db, $sql);
    if(!$results){
        echo mysqli_error();
    }
    if (mysqli_num_rows($results) > 0) {
        echo "taken";
    }else{
        echo 'not_taken';
    }
    exit();
}

if (isset($_POST['email_check'])) {
    $email = $_POST['email'];
    $sql = "SELECT * FROM users WHERE email='$email'";
    $results = mysqli_query($db, $sql);
    if (mysqli_num_rows($results) > 0) {
        echo "taken";
    }else{
        echo 'not_taken';
    }
    exit();
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
    <script src="script.js"></script>
    <link rel="stylesheet" href="register.css">

</head>

<body>
    <div class="container">
        <br>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav center" id="nav">
                <li><a href="login.php">Logowanie</a></li>
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
                <h2>Rejestracja</h2>
                <div id="error_msg"></div>
                <form method="post" action="register.php" id="register_form">
                    <h6>Login</h6>
                    <div><input type="text" name="username" class="textInput" id="username"><br>
                        <span></span>
                    </div>
                    <h6>Email</h6>
                    <div><input type="email" name="email" class="textInput" id="email" ><br>
                    <span></span>
                    </div>
                    <h6>Hasło</h6>
                    <div><input type="password" name="password" class="textInput" id="password"><br>
                    <span></span>
                    </div>
                    <h6>Powtorz Hasło</h6>
                    <div><input type="password" name="password2" class="textInput" id="password2"><br>
                    <span id="message"></span>
                    </div>
                    <input type="submit" name="register_btn" class="Register" id="reg_btn" value="Zarejestruj">
                </form>
            </div>
        </div>
    </div>
</body>
</html>




