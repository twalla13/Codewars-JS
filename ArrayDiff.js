function arrayDiff(a, b) {
  
  //Filter function for arrays to find each element in b list
  //forEach function for arrays so we filter for each elemen
  // 
//   let result = [];
  
//Doesnt work because repeatedly rewrites result for each b element
//   b.forEach((b_element) => {
//     result = a.filter((a_element) => a_element !== b_element);
    
//   });
  
//use filter function with condition if b.includes(a_element) is true then exclude it from the result
// Use `filter` to keep elements in `a` that are not in `b`.
    const result = a.filter((a_element)=> !b.includes(a_element));
  
  console.log(result);
}

arrayDiff([1,1,1,1,2,3,3,3],[1,3]);