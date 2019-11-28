var choice = prompt ("What unit would you like to convert? "+ 1 + ". Gallons to Litres "+ 2 + ". Litres to Gallons "+ 3 + ". Pounds to Kgs "+ 4 + ". Kgs to Pounds ");

if (choice == 1){
function gallonsToLitres(number1){
return number1 * 3.78549;
}
var number1 = parseFloat (prompt ("Enter the number of gallons"));
alert(gallonsToLitres(number1) + " litres");
}
else if(choice == 2){

function litresToGallons(number2){
return number2 / 3.78549;
}
var number2 = parseFloat (prompt ("Enter the number of Litres"));
alert(litresToGallons(number2) + " gallons");
}
else if (choice == 3){
function poundsToKgs(number3){
return number3 * 0.453592;
}
var number3 = parseFloat (prompt ("Enter the number of Pounds"));
alert(poundsToKgs(number3) + " kgs");
}
else if (choice == 4){
function kgsToPounds(number4){
return number4 / 0.453592;
}
var number4 = parseFloat (prompt ("Enter the number of Kgs"));
alert(kgsToPounds(number4) + " pounds");
}

else {
alert("This is not one of the choices.")
}