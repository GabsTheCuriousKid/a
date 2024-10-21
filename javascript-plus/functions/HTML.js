HTML.compress = function(htmlscript) {
    return htmlscript.replace(/\n/g, '').replace(/ +/g, ' ').replace(/\t/g, '').trim();
}
HTML.createElement = function(obj, text = '', idtype = '', idname = '', parent = document.body, style = '') {
    const textsupportedObj = ["h1", "h2", "h3", "p", "div"];
    const newObj = document.createElement(obj);

    if (idtype && idname) {
        newObj.setAttribute(idtype, idname);
    }

    if (textsupportedObj.includes(obj) && text !== '') {
        const textContents = document.createTextNode(text);
        newObj.appendChild(textContents);
    }

    if (style) {
        newObj.style.cssText = style;
    }

    if (parent instanceof HTMLElement) {
        parent.appendChild(newObj);
    } else {
        console.error("Parent is not a valid HTML element");
    }
};