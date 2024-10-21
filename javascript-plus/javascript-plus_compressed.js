import './functions/localStorage.js';
import './functions/JSON.js';
import './functions/prototype.js';
import './functions/HTML.js';
import './functions/Math.js';
const JSPlus = {
    localStorage: {
        isItemNotNull: localStorage.isItemNotNull,
    },
    JSON: {
        isValid: JSON.isValid,
        jsonify: JSON.jsonify,
    },
    String: {
        reverse: String.prototype.reverse,
        trimAllSpaces: String.prototype.trimAllSpaces,
    },
    Array: {
        unique: Array.prototype.unique,
    },
    HTML: {
        compress: HTML.compress,
        createElement: HTML.createElement,
    },
    Math: {
        randomInt: Math.randomInt,
        randomBaseInt: Math.randomBaseInt,
        clamp: Math.clamp,
        roundInDigit: Math.roundInDigit,
    },
}
export default JSPlus