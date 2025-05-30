const reverseString = function(string) {
    let block = string.split("");
    let reversed = "";
    for (let i = block.length - 1; i >= 0; i--){
        reversed += block[i]

    }
    return reversed

};

// Do not edit below this line
module.exports = reverseString;
