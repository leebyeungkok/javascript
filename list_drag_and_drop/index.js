let dragEl;
let dropEl;

let drag = function(ev){
    dragEl = ev.target;
    ev.dataTransfer.setData('myData', ev.target.innerHTML);
}
let allowDrop = function(ev){
    ev.preventDefault();
}
let drop = function(ev){
    if(ev.target.tagName == 'ul' || ev.target.tagName == 'UL'){
        dropEl = ev.target;
        dropEl.append(dragEl);
    } else if(ev.target.tagName == 'li' || ev.target.tagName == 'LI'){
        dropEl = ev.target;
        let ul = ev.target.parentNode;
        ul.insertBefore(dragEl, dropEl);
    }
    document.querySelector('[ref=result]').innerHTML = ev.dataTransfer.getData('myData')
}