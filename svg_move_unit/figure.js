function Rect(svg){
    var me = this;
    me.x = 0;
    me.y = 0;
    me.width = 100;
    me.height = 60;
    me.opacity = 1;
    me.stroke = 'black';
    me.fill = 'yellow';
    me.isSelect = false;
    me.svg = svg;

    me.figure = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    me.figure.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
    me.figure.setAttribute('x', me.x);
    me.figure.setAttribute('y', me.y);
    me.figure.setAttribute('width', me.width);
    me.figure.setAttribute('height', me.height);
    me.figure.setAttribute('fill-opacity', me.opacity);
    me.figure.setAttribute('stroke', me.stroke);
    me.figure.setAttribute('fill', me.fill);
    me.svg.append(me.figure);
    
    me.figure.onmousedown = function(event){
        me.downOffsetX = event.screenX;
        me.downOffsetY = event.screenY;
        me.isSelect = true;
        selectedFigure = me;
        selectedDownFigure = me;
    }
    me.figure.onmouseup = function(event){
        me.isSelect = false;
        selectedDownFigure = null;
    }
    me.moveTo = function(x, y){
        me.x = me.x + x;
        me.y = me.y + y;
        me.figure.setAttribute('x', me.x);
        me.figure.setAttribute('y', me.y);
    }
    me.move = function(x, y){
        me.x = x;
        me.y = y;
        me.figure.setAttribute('x', me.x);
        me.figure.setAttribute('y', me.y);
    }
    me.setSize = function(width, height){
        me.width = width;
        me.height = height;
        me.figure.setAttribute('width', me.width);
        me.figure.setAttribute('height', me.height);
    }
    me.setFill = function(fill){
        me.fill = fill;
        me.figure.setAttribute('fill', me.fill);
    }
    
}