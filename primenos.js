num = parseInt( prompt( 'Enter the range of nos: ' ) );
let c = 0;
for( let i = 2; i <= num; i++){
    c = 0;
    for( let j = 1; j <= i; j++ ){
        if( i % j == 0 ){
            c++
        }
    }
    if( c ==2 ){
        console.log( i );
    }
}