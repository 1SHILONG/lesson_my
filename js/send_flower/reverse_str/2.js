function isPalindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '')
    const reverseStr = str.split('').reverse().join('');
    return reverseStr === str
}

console.log(isPalindrome(''));