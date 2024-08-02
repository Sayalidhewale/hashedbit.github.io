function repeatedSumOfDigits(num) {
    while (num > 9) {
        num = num.toString().split('').reduce((a, b) => a + Number(b), 0);
    }
    return num;
}

console.log(repeatedSumOfDigits(456));