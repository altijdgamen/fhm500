let prijs = 0;
let aantal = 0;

totaalbedragdiv = document.getElementById("totaal")
let totaalbedrag1 = 0;
let totaalbedrag2 = 0;
let totaalbedrag3 = 0;
let totaalbedrag4 = 0;
let totaalbedrag5 = 0;


function vrouw1()
{
    let prijs = 250;
    totaalbedrag1 = prijs;
    bekijkTotaal();
}
function vrouw2()
{
    let prijs = 200;
    totaalbedrag2 = prijs;
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
    let totaal = totaalbedrag1 
    totaalbedragdiv.innerHTML = totaal
}