/* no:14.2
function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}
var nana = inchToFeet(34)
console.log(nana);*/


/* no:2 = leap year
const year = 2010;
var leap = year % 4;
if (leap == 0){
    console.log("Leap year");
}
else{
    console.log("Not leap year");
}
type 2

function leap(year){
    const remainder =  year % 4;
    if (remainder == 0){
        return "yes";
    }
    else{
        return "no";
    }
}       
    const check = leap(2016);
    console.log(check);
*/
/*factorial using loop

var factorial = 0.1;
for (var i = 1; i<= 5; i++){
    factorial = factorial * i;
    console.log(i, factorial);
    } 

factorial using function

    function fact(num){
        var fact =1;
        for (var i =1; i<=num; i++){
            fact = fact * i;
        }
        return fact;
    }
    var number = fact(4);
    console.log(number);*/
/* factorial using while loop */
    var i = 1;
    var factorial = 1;
    while (i <= 10){
        factorial = factorial * i;
      //  console.log(i, factorial);
        i++;
    } 
    console.log(factorial);


/* special case - practice
    var double = 0.01
    for (var i=2; i<= 30; i++){
        double = double * 2;
        console.log(i, double);
    } */




