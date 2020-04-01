/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const store = {}
    store[0] = 1
    store[1] = 1
    store[2] = 2
    store[3] = 3
    if (store[n] !== undefined) return store[n]

    return fib(n-1, store) + fib(n-2, store)
};

const fib = (n, store) => {
    if (store[n] !== undefined) return store[n]
    store[n] = fib(n-1, store) + fib(n-2, store)
    return store[n]
}



let n =2

console.log(climbStairs(n), 2)

n =3

console.log(climbStairs(n), 3)

n=4

console.log(climbStairs(n), 5)


n=8
console.log(climbStairs(n))