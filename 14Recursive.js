/*function num(n){
    if (n == 0){
        return 1;
    }
    else {
        return n* num(n-1);
    }
}
var result = num(5);
console.log(result); 

febonacci 


var fib = [0, 1];
for (var i =2; i <= 10; i++){
    fib[i] = fib[i-1] + fib[i-2];

}
console.log(fib);

recursive way for fibonacci

function fibs(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        return fibs(n-1)+fibs(n-2)
    }
}
var last = fibs(1);
console.log(last);*/


function prime(n){
    for(i =2; i< n; i++){
        result = n % i;
       // console.log(i, result);
        if(result == 0){
            return 'Not Prime number';
    
        }
    }   
    return 'Number is prime';
}
var result = prime(91);
console.log(result);


