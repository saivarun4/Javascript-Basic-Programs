function div( num ){
    if( num > 1 ){
    for( let i = 2; i <= num; i++ ){
        if( num % i == 0 ){
        return i;  }    }
    }else{
        return 1;} }
num = parseInt( prompt( 'Enter the number: ' ) );
console.log( `Smallest divisor: ${ div( num ) }` ); 