const removeFromArray = function(array, ...args) {
    // let testArray = [];
    // array.forEach(element => {
    //     if (!args.includes(element)){
    //         testArray.push(element);
    //     }
    //     return array
    // }); 

    test2 = array.filter(item => !args.includes(item))
    return test2
}
    // if (!array.includes(a) && !array.includes(b)){
    //     return array
    //     }
    // }
    // //b has a value that is unchecked
    // if (array.includes(a) || array.includes(b)){
    //     let checkA = 0;
    //     let checkB = 0;
    //     for (let i = 0; i <array.length; i++){
    //         if (array[i] === a){
    //             checkA ++;
    //         }
    
    //     }
    //     // remove repetitions in a
    //     for (let i = 0; i < checkA; i++){
    //         array.splice(array.indexOf(a), 1);
    
    //     }
    //     if (b === undefined){
    //         return array
    //     }
    //     for (let i = 0; i <array.length; i++){
    //         if (array[i] === b){
    //             checkB ++;
    //         }
    
    //     }
    //     for (let i = 0; i < checkB; i++){
    //         array.splice(array.indexOf(b), 1);}

    // }



    // array.splice(array.indexOf(a), 1);


    



  
   


// Do not edit below this line
module.exports = removeFromArray;
