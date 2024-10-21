JSON.isValid = function (json) {
    try {
        JSON.parse(json || "{}");
        return true;
    } catch {
        return false;
    }
}
JSON.jsonify = function (json) {
    if (typeof json !== 'string') return false;
    try {
        return JSON.parse(json || "{}");
    } catch {
        return false;
    }
}