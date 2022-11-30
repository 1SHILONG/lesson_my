function isPalindrome(str) {
    // 缓存字符的长度
    const len = str.length
    // 对称思想
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false
        }
    }
    return true;
}