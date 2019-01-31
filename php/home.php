<?php
    session_start();
    if(  !isset($_SESSION['username']) ) {
        header("location:login.php");
        die();
    }
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
  <link rel="stylesheet" href="home.css">
</head>

<body>

<div class="container">
    <br>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav center" id="nav">
                    <li><a href="logout.php">Wyloguj</a></li>
                    <li><a href="table.php">Baza</a></li>

                </ul>
            </div>
        </div>
    </nav>

<?php
    if(isset($_SESSION['message'])) {
         echo "<div id='error_msg'>".$_SESSION['message']."</div>";
         unset($_SESSION['message']);
    }
?>
     <div id="form">
         <div id="inner">
             <form method="post" action="home.php" id="home_form">
                 <h2>Ekran Główny</h2>
                 <h3>Witam <?php echo $_SESSION['username']; ?></h3>
                 <br>
                 <a class='button' href="logout.php">Wyloguj</a><a class='button' href="delete.php">Usuń konto</a>

                 <br>
             </form>
         </div>
     </div>
</div>
</body>
</html>
