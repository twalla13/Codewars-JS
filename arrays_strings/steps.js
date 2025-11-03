function steps(n){

    //Nested for loops to create steps

    for(let row = 1; row <= n; row++){
        let line = '';
        for(let col = 1; col <= n; col++){ //want to have space for non-hastag cells
            if(col <= row){
                line += '#';
            } else {
                line += ' ';
            }
        }

        console.log(line);
    }

}