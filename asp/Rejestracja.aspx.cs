using System;

public partial class Rejestracja : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        
        if (IsPostBack)
        {
            Validate(); 

            
            if (IsValid)
            {
                string surname = surnameTextBox.Text;
                string email = emailTextBox.Text;
                string phone = phoneTextBox.Text;

                outputLabel.Text = "Dziękujemy za rejestracje<br/>" +
                   "Zanotowaliśmy twoje dane:<br/>";
                outputLabel.Text +=
                   String.Format("Nazwisko: {0}{1}E-mail: {2}{1}Telefon: {3}",
                      surname, "<br/>", email, phone);
                outputLabel.Visible = true; 
            }
        }
    }
}