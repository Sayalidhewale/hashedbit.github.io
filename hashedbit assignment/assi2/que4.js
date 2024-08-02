//Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
    
    let str1 = n1.toString();
    let str2 = n2.toString();
    
    
    let sum = 0;
    
    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        let digit1 = parseInt(str1.charAt(i)) || 0;
        let digit2 = parseInt(str2.charAt(i)) || 0;
        
        sum += digit1 * digit2;
    }
    
    return sum;
}

console.log(sumOfProducts(6, 34)); 
console.log(sumOfProducts(123, 456)); 
console.log(sumOfProducts(9876, 54321));