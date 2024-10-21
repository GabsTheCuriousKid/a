String.prototype.trimAllSpaces = function() {
    return this.replace(/\s+/g, '').trim();
};
Array.prototype.unique = function() {
    return [...new Set(this)];
};
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};