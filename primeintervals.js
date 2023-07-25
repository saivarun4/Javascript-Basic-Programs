low = parseInt( prompt( 'Enter the lower range: ' ) );
high = parseInt( prompt( 'Enter the upper range: ' ) );
let c =0;
for( let i = low; i <= high; i++){
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