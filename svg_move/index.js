let svg;
let rect; 
let isSelect = false;
let downOffsetX;
let downOffsetY;
let bfScreenX = null;
let bfScreenY = null;
let init = function(){
    svg = document.querySelector('svg');
    const btnAddRect = document.querySelector('[ref=btnAddRect]');
    btnAddRect.onclick=function(){
        addRect();
    }
    svg.onmousemove = function(event){
        if(isSelect == true){
            let movePos = getMovementXY(event);
            let eventX = movePos.x;
            let eventY = movePos.y;
            rect.setAttribute('x', Number(rect.getAttribute('x')) + eventX);
            rect.setAttribute('y', Number(rect.getAttribute('y')) + eventY);
        }
    }
    svg.onmouseup = function(event){
        isSelect = false;
    }
}
let addRect = function(){
    rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    rect.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
    rect.setAttribute('x', 10);
    rect.setAttribute('y', 10);
    rect.setAttribute('width', 100);
    rect.setAttribute('height', 60);
    rect.setAttribute('fill-opacity', 1);
    rect.setAttribute('stroke','black');
    rect.setAttribute('fill','yellow');
    svg.append(rect);   
    rect.onmousedown = function(event){
        downOffsetX = event.screenX;
        downOffsetY = event.screenY;
        isSelect = true;
    }
    rect.onmouseup = function(event){
        isSelect = false;
    }
}
let getMovementXY= function(event){
    if(event.movementX != null && event.movementX != undefined){
        return {
            x:event.movementX,
            y:event.movementY
        };
    }
    let screenX = event.screenX;
    let screenY = event.screenY;
    let retValue = {x:0, y:0}; 
    retValue = {
        x:Number(screenX) - Number(ms.bfScreenX),
        y:Number(screenY) - Number(ms.bfScreenY) 
    };
    ms.bfScreenX = screenX;
    ms.bfScreenY = screenY;
    return retValue;
}