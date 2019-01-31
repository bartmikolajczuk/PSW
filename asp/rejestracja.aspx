<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Rejestracja.aspx.cs" Inherits="Rejestracja"%>
 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 
<script runat="server">
 
</script>
 
<html xmlns="http://www.w3.org/1999/xhtml">
 
<head id="Head1" runat="server">
        <meta charset="UTF-8">
        <title> Rejestracja </title>
 
        <script src="scripts/rejestracja.js"></script>
 
 
    <script type="text/javascript">

        function showHideElement() {
            var header = document.getElementById("show-hide");

            if (header.style.display === "block") {
                header.style.display = "none";
            } else {
                header.style.display = "block";
            }
        }
</script>
<style>
<style>
 * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background-color: #bbb;
        }
        #izMniejsze {
            width: 50%;
        }

        table, td, th {
            border: 1px solid gray
        }

        .navbar {
            overflow: hidden;
            background-color: #333;
            text-align: center;
            padding: 20px;
        }

        .navbar a {

            color: #f2f2f2;
            padding: 20px 16px;
            text-decoration: none;
            font-size: 17px;
        }

        .navbar a:active{
            color: #f27283;
            padding: 20px 16px;
            text-decoration: none;
            font-size: 17px;
        }

        .column {
            float: left;
            width: 50%;
            padding: 10px;
        }

        .row:after {
            content: "";
            display: table;
            clear: both;
        }

        .footer {
            right: 0;
            bottom: 0;
            left: 0;
            padding: 1rem;
            background-color: #efefef;
            text-align: center;
        }
</style>
</style>
</head>
<body>
<nav class="navbar">
        <a class="active" href="index.html">Strona główna</a>
        <a href="rejestracja.aspx">Rejestracja</a>
        <a href="mojeKonto.html">Moje konto</a>
    </nav>
	
    <form id="form1" runat="server">
        <div id="content">
                <form id="myForm" method="POST" action="" autocomplete="on">
 
                        <div>
            Imię: 
                                <asp:TextBox ID="nameTextBox" runat="server"></asp:TextBox>
                        </div>
 
                        <div>
                                Nazwisko:
                <asp:TextBox ID="surnameTextBox" runat="server"></asp:TextBox>
 
                <asp:RequiredFieldValidator ID="surnameRequiredFieldValidator" runat="server" 
                   ControlToValidate="surnameTextBox" Display="Dynamic" 
                   ErrorMessage="Wprowadź swoje nazwisko" ForeColor="Red"></asp:RequiredFieldValidator>
                        </div>
 
                        <div>
            Data urodzenia:
                                <asp:TextBox runat="server" id="txtDate" />
                <asp:RangeValidator runat="server" id="rngDate" controltovalidate="txtDate" type="Date" minimumvalue="01-01-1900" maximumvalue="01.01.2010" errormessage="Wpisz poprawną datę urodzenia" ForeColor="Red" />
 
                        </div>
 
 
                        <div>
                                E-mail:
                                        <asp:TextBox ID="emailTextBox" runat="server"></asp:TextBox>
                &nbsp; email@domain.com<br />
 
                <asp:RequiredFieldValidator ID="emailRequiredFieldValidator" runat="server" 
                   ControlToValidate="emailTextBox" Display="Dynamic" 
                   ErrorMessage="Wpisz swój adres e-mail" ForeColor="Red"></asp:RequiredFieldValidator>
 
                <asp:RegularExpressionValidator ID="emailRegularExpressionValidator" 
                   runat="server" ControlToValidate="emailTextBox" Display="Dynamic" 
                   ErrorMessage="Proszę wpisać e-mail w prawidłowym formacie" ForeColor="Red" 
                   ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>
             
                        </div>
 
 
 
                        <div>
                                Telefon:
                <asp:TextBox ID="phoneTextBox" runat="server"></asp:TextBox>
                &nbsp;(555) 555-123-321<br />
 
                <asp:RequiredFieldValidator ID="phoneRequiredFieldValidator" runat="server" 
                   ControlToValidate="phoneTextBox" Display="Dynamic" 
                   ErrorMessage="Wpisz swój numer telefonu" ForeColor="Red"></asp:RequiredFieldValidator>
                
                <asp:RegularExpressionValidator ID="phoneRegularExpressionValidator" 
                   runat="server" ControlToValidate="phoneTextBox" Display="Dynamic" 
                   ErrorMessage="Proszę wpisać telefon w prawidłowym formacie" ForeColor="Red" 
                   ValidationExpression="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{3}-\d{3}"></asp:RegularExpressionValidator>
             
                        </div>
 
            <div>
            Hasło:
            <asp:TextBox ID="passwordTextBox" runat="server" TextMode="Password"></asp:TextBox>
 
             <asp:RequiredFieldValidator ID="passwordRequiredFieldValidator" runat="server" 
                   ControlToValidate="passwordTextBox" Display="Dynamic" 
                   ErrorMessage="Wpisz swoje hasło" ForeColor="Red"></asp:RequiredFieldValidator>
 
            </div>
 
            <div>
            Potwierdź hasło:
              <asp:TextBox ID="confimrPasswordTextBox" runat="server" TextMode="Password"></asp:TextBox>
 
              <asp:CompareValidator ID="cmpPwd" runat="server" ControlToCompare="confimrPasswordTextBox" ControlToValidate="passwordTextBox" ErrorMessage="Hasłą różnią się" ForeColor="Red" ></asp:CompareValidator>
 
               <asp:RequiredFieldValidator ID="confimrPasswordRequiredFieldValidator" runat="server" 
                   ControlToValidate="confimrPasswordTextBox" Display="Dynamic" 
                   ErrorMessage="Powtórz swoje hasło" ForeColor="Red"></asp:RequiredFieldValidator>
            </div>
 
                        <p>
            <asp:Button ID="submitButton" runat="server" Text="Rejestruj" />
            </p>
            <p>
            <asp:Label ID="outputLabel" runat="server" Visible="False"></asp:Label>
            </p>
 
                        
                        <p style="color:chartreuse" id = "helpText"></p>                
 
                </form>
 
                
 
        </div>
    </form>
   
</body>
</html>