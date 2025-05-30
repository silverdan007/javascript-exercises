const sumAll = function(top, bottom) {
    let sum = 0;
    if (!Number.isInteger(top) || !Number.isInteger(bottom)) return "ERROR";
    if (top < 0 || bottom < 0){
        return "ERROR"

    }

    if (top > bottom){
        [top, bottom ] = [bottom, top];
    }

    for(let i = top; i <= bottom; i++){
        sum += i; 
     }
     return sum


};

// Do not edit below this line
module.exports = sumAll;
