let svg;
let downOffsetX;
let downOffsetY;
let bfScreenX = null;
let bfScreenY = null;
let selectedFigure = null;
let selectedDownFigure = null;

let init = function(){
    svg = document.querySelector('svg');
    const btnAddRect = document.querySelector('[ref=btnAddRect]');
    btnAddRect.onclick=function(){
        addRect();
    }
    const btnSetFill = document.querySelector('[ref=btnSetFill]');
    btnSetFill.onclick=function(){
        selectedFigure.setFill('blue');
    }
    const btnMove = document.querySelector('[ref=btnMove]');
    btnMove.onclick=function(){
        selectedFigure.move(200, 200);
    }
    const btnSetSize = document.querySelector('[ref=btnSetSize]');
    btnSetSize.onclick=function(){
        selectedFigure.setSize(300, 250);
    }
    svg.onmousemove = function(event){
        if(selectedDownFigure != null){
            let movePos = getMovementXY(event);
            let eventX = movePos.x;
            let eventY = movePos.y;
            selectedDownFigure.moveTo(eventX, eventY);
        }
    }
    svg.onmouseup = function(event){
        selectedDownFigure = null;
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
let addRect= function(){
    let rect = new Rect(svg);
    rect.setFill('red');
    rect.move(100,100);
}
