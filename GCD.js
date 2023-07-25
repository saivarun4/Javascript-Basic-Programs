var num1 = prompt( "Enter the number: " );
var num2 = prompt( "Enter the second number: " );
var gcd = 1;
for(  let i = 1; i <= num1 & i <= num2 ; i++ ){
    if( num1 % i ==0 & num2 % i == 0 ){
        gcd = i;
    }
}
console.log( `GCD of ${ num1 } and ${ num2 } is ${ gcd }` );
