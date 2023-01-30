class Seu {
    parentEl;
    el;
    sheets = [];
    constructor(){
    }
    addStyleSheet(sheet){
        this.sheets.push(sheet);
    }
    init(){
    }
    setArea(area, shadowDom){         
        this.parentEl = area;

        if(shadowDom == null || shadowDom == true){
            if(area.shadowRoot == null){
                this.shadowEl = area.attachShadow({mode:'open'})
            } else {
                this.shadowEl = area.shadowRoot;
            }
        } else {
            this.shadowEl = area;
        }
        if(this.beforeRender != undefined){
            this.beforeRender();
        }
        var sheets = [];
        for(var i=0; i < seuLib.sheets.length; i++){
            sheets.push(seuLib.sheets[i]);
        }
        for(var i=0; i < this.sheets.length; i++){
            sheets.push(this.sheets[i]);
        }
        this.shadowEl.adoptedStyleSheets = sheets;
        this.shadowEl.innerHTML = this.render();
        this.el = this.shadowEl.childNodes[0];
        this.el.setAttribute('root', true);
        this.el.comp = this;
        if(this.afterRender != undefined){
            this.afterRender();
        }
    }
    getRef(ref){
        return this.el.querySelector('[ref=' + ref + ']');
    }
    getRefs(ref){
        return this.el.querySelectorAll('[ref=' + ref + ']');
    }
}

window.addEventListener('hashchange', function (evt) {
    console.log('hashchange!************************',arguments);
    window.history.pushState({}, null, evt.newURL)
})

// Common Library
seuLib = {};
seuLib.sheets = [];
seuLib.addStyleSheet = function(sheet){
    seuLib.sheets.push(sheet);
}
seuLib.removeStyleSheetAll = function(){
    seuLib.sheets = [];
}
seuLib.getRoot = function(el){
    var parentNode = null
    while(true){
        if(el.parentNode == null){
            return null;
        }
        parentNode = el.parentNode;
        if(parentNode.getAttribute('root') == 'true'){
            return parentNode;
        }
        el = parentNode;
    }
    return null;
}
seuLib.getComp = function(el){
    var parentNode = null
    while(true){
        if(el.parentNode == null){
            return null;
        }
        parentNode = el.parentNode;
        if(parentNode.getAttribute('root') == 'true'){
            console.log('true')
            return parentNode.comp;
        }
        el = parentNode;
    }
    return null;
}
seuLib.fetch = function(me, url, callback, options){
    fetch(url)
    .then((response) => response.json()
    .then((data) => {
        console.log(data);
        callback(me, data);
    }));
}