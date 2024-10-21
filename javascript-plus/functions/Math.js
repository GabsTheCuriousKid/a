Math.randomInt = function(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}
Math.randomBaseInt = function(num1, num2, base) {
    if (base < 2 || base > 36) base = 10;
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1).toString(base);
}
Math.clamp = function(value, min, max) {
    return Math.min(Math.max(value, min), max);
};
Math.roundInDigit = function(value, digit) {
    const factor = Math.pow(10, digit);
    return Math.round(value * factor) / factor;
}