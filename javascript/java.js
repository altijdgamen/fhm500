let prijs = 0;
let naam = "";

let naam1 = "";
let naam2 = "";
let naam3 = "";
let naam4 = "";
let naam5 = "";

totaalbedragdiv = document.getElementById("totaal")
totaalAantalNaam = document.getElementById("naam")
let totaalbedrag1 = 0;
let totaalbedrag2 = 0;
let totaalbedrag3 = 0;
let totaalbedrag4 = 0;
let totaalbedrag5 = 0;


function vrouw1()
{
    let naam = "Juultje"
    let prijs = 250;
    totaalbedrag1 = prijs;
    naam1 = naam
    bekijkTotaal();
}
function vrouw2()
{
    let naam = "Olivia";
    let prijs = 200;
    totaalbedrag2 = prijs;
    naam2 = naam
    bekijkTotaal();
}
function vrouw3()
{
    let prijs = 250;
    totaalbedrag3 = prijs;
    bekijkTotaal();
}
function vrouw4()
{
    let prijs = 250;
    totaalbedrag4 = prijs;
    bekijkTotaal();
}
function vrouw5()
{
    let prijs = 250;
    totaalbedrag5 = prijs;
    bekijkTotaal();
}







function bekijkTotaal()
{
    let totaal = totaalbedrag1 + totaalbedrag2;
    totaalbedragdiv.innerHTML = totaal;
    let aantalNaam = naam1 + ", " + naam2;
    totaalAantalNaam.innerHTML = "je hebt de volgende NFT'S gekocht: " + aantalNaam + ","
    

}