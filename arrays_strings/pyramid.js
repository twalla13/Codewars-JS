function pyramid(n){
    const colNum = 2*n - 1;
    const mid = Math.floor(colNum/2);
    for(let row = 0; row < n; row++){
        let line = '';
        //For pyramid number of columns will be 2n-1
        for(let col = 0; col < colNum; col++){ //want to have space for non-hastag cells
            //In a pyramid the # will be inserted 
            // when the col >= middleColumn(math.floor(2n-1/2)) - row 
            // and when col <=middleColumn
            if( col >= mid - row && col <= mid + row){
                line += '#';
            } else {
                line += ' ';
            }
        }

        console.log(line);
    }
}

pyramid(3);