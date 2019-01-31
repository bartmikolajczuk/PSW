using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Produkt
/// </summary>
public class Produkt
{
    public string Nazwa { get; set; }
    public string Opis { get; set; }
    public string DaneTechniczne { get; set; }
    public decimal Cena { get; set; }
    
		

        public Produkt(string nazwa, string opis, string daneTechniczne, decimal cena)
        {
            Nazwa = nazwa;
            Opis = opis;
            DaneTechniczne = daneTechniczne;
            Cena = cena;
	    }

}