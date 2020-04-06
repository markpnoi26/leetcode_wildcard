/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = num => {
    const dp = []
    let start = 0
    while (start <= num) {
        dp[start] = bitCounter(start)
        start++
    }
    return dp
};

const bitCounter = num => {
    let div = num
    let oneCt = 0
    while (div > 0) {
        if (div%2 === 1) oneCt++
        div = Math.floor(div/2)
    }
    return oneCt
}


const countBitsN = function(num) {
    let bits_array = [],
        power_to_seek = 2,
        last_power_visited = 1;

    bits_array[0] = 0;
    
    if(num === 0)
    return bits_array;
    
    bits_array[1] = 1;

    
    for(let i=2;i<=num;++i) {
        
    	if (power_to_seek === i) {
            bits_array[i] = 1;
            last_power_visited = power_to_seek;
            power_to_seek *= 2;
            console.log("i === power_to_seek", i, bits_array[i])
        }
    	else {
            
            bits_array[i] = bits_array[last_power_visited] + bits_array[i-last_power_visited];
            console.log("not powered", bits_array[last_power_visited], bits_array[i-last_power_visited], bits_array[i] )
        }    	
    }
    
    
    return bits_array;
};

// console.log(bitCounter(1), 1)
// console.log(bitCounter(10), 2)
// console.log(bitCounter(20), 2)


// console.log(countBits(2), [0,1,1])

// console.log(countBits(5),[0,1,1,2,1,2])
// console.log(countBits(30))
console.log(countBitsN(31))