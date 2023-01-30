
import sheet from './w3.css' assert { type: 'css' };
import {App} from "./app.js";
window.onload = function(){
    seuLib.addStyleSheet(sheet);
    const app = new App();
    app.setArea(document.getElementById('app'));    
}