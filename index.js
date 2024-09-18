function add(a, b) {
    return a + b;
}
console.log(add(4, 3));

function subtract(a, b) {
    return a - b;
}
console.log(subtract(5, 1));

function multiply(a, b) {
    return a * b;
}
console.log(multiply(8, 4));

function divide(a, b){
    return a / b;
}
console.log(divide(4, 2));

function increment(n) {
    return n + 1; 
}
console.log(increment(320));

function decrement(n) {
    return n - 1; 
}
console.log(decrement(484));

function makeInt(n) {
    return parseInt(n, 10); 
}
console.log(makeInt("123"));
console.log(makeInt("456.78"));
console.log(makeInt("abc"));

function makeInt(n) {
    return parseInt(n, 10); 
}
console.log(makeInt("123")); 
console.log(makeInt("456.78")); 
console.log(makeInt("abc"));

function makeInt(n) {
    const parsed = parseInt(n, 10); 
    return isNaN(parsed) ? NaN : parsed;
}


console.log(makeInt("123"));   
console.log(makeInt("456.78")); 
console.log(makeInt("abc"));    
console.log(makeInt(""));       
console.log(makeInt(null));   

function preserveDecimal(n) {
    return parseFloat(n); 
}
console.log(preserveDecimal("123.45")); 
console.log(preserveDecimal("456.78abc")); 
console.log(preserveDecimal("abc")); 
console.log(preserveDecimal("")); 
console.log(preserveDecimal(null)); 

function preserveDecimal(n) {
    const parsed = parseFloat(n); 
    return isNaN(parsed) ? NaN : parsed; 
}
console.log(preserveDecimal("123.45"));    
console.log(preserveDecimal("456.78abc"));
console.log(preserveDecimal("abc"));        
console.log(preserveDecimal(""));           
console.log(preserveDecimal(null)); 

