let init = function(){
    const btnAddRect = document.querySelector('[ref=btnAddRect]');
    btnAddRect.onclick=function(){
        addRect();
    }
    const btnAddCircle = document.querySelector('[ref=btnAddCircle]');
    btnAddCircle.onclick=function(){
        addCircle();
    }
    const btnAddEllipse = document.querySelector('[ref=btnAddEllipse]');
    btnAddEllipse.onclick=function(){
        addEllipse();
    }
    const btnAddLine = document.querySelector('[ref=btnAddLine]');
    btnAddLine.onclick=function(){
        addLine();
    }
    const btnAddPolygon = document.querySelector('[ref=btnAddPolygon]');
    btnAddPolygon.onclick=function(){
        addPolygon();
    }
    const btnAddPolyline = document.querySelector('[ref=btnAddPolyline]');
    btnAddPolyline.onclick=function(){
        addPolyline();
    }
    const btnAddPath = document.querySelector('[ref=btnAddPath]');
    btnAddPath.onclick=function(){
        addPath();
    }
    const btnAddText = document.querySelector('[ref=btnAddText]');
    btnAddText.onclick=function(){
        addText();
    }
}
let addRect= function(){
    let svg = document.querySelector('svg');
    let rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    rect.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
    rect.setAttribute('x', 10);
    rect.setAttribute('y', 10);
    rect.setAttribute('width', 100);
    rect.setAttribute('height', 60);
    rect.setAttribute('fill-opacity', 1);
    rect.setAttribute('stroke','black');
    rect.setAttribute('fill','yellow');
    //rect.setAttribute('visibility','hidden'); //hidden;
    svg.append(rect);
}
let addCircle= function(){
    let svg = document.querySelector('svg');
    let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
    circle.setAttribute('cx', 150);
    circle.setAttribute('cy', 60);
    circle.setAttribute('r', 50);
    circle.setAttribute('fill-opacity', 1);
    circle.setAttribute('stroke','black');
    circle.setAttribute('fill','red');
    //rect.setAttribute('visibility','hidden'); //hidden;
    svg.append(circle);
}
let addEllipse= function(){
    let svg = document.querySelector('svg');
    let ellipse = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse');
    ellipse.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
    ellipse.setAttribute('cx', 250);
    ellipse.setAttribute('cy', 60);
    ellipse.setAttribute('rx', 50);
    ellipse.setAttribute('ry', 40);
    ellipse.setAttribute('fill-opacity', 1);
    ellipse.setAttribute('stroke','black');
    ellipse.setAttribute('fill','green');
    //rect.setAttribute('visibility','hidden'); //hidden;
    svg.append(ellipse);
}
let addLine= function(){
    let svg = document.querySelector('svg');
    let line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    line.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
    line.setAttribute('x1', 350);
    line.setAttribute('y1', 10);
    line.setAttribute('x2', 410);
    line.setAttribute('y2', 100);
    line.setAttribute('fill-opacity', 1);
    line.setAttribute('stroke','black');
    line.setAttribute('fill','blue');
    //rect.setAttribute('visibility','hidden'); //hidden;
    svg.append(line);
}
let addPolygon= function(){
    let svg = document.querySelector('svg');
    let polygon = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
    polygon.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
    polygon.setAttribute('points', '50,110 100,210 0,210' );
    polygon.setAttribute('fill-opacity', 1);
    polygon.setAttribute('stroke','black');
    polygon.setAttribute('fill','white');
    //rect.setAttribute('visibility','hidden'); //hidden;
    svg.append(polygon);
}
let addPolyline= function(){
    let svg = document.querySelector('svg');
    let polyline = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
    polyline.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
    polyline.setAttribute('points', '150,110 200,210 100,210' );
    polyline.setAttribute('fill-opacity', 1);
    polyline.setAttribute('stroke','black');
    polyline.setAttribute('fill','pink');
    //rect.setAttribute('visibility','hidden'); //hidden;
    svg.append(polyline);
}
let addPath= function(){
    let svg = document.querySelector('svg');
    let path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    path.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
    path.setAttribute('d', 'M250 110 L300 210 L200 210Z' );
    path.setAttribute('fill-opacity', 1);
    path.setAttribute('stroke','black');
    path.setAttribute('fill','orange');
    //rect.setAttribute('visibility','hidden'); //hidden;
    svg.append(path);
}
let addText= function(){
    let svg = document.querySelector('svg');
    let text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    text.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
    text.setAttribute('x', '350' );
    text.setAttribute('y', '150' );
    text.innerHTML = 'TEXT';
    text.setAttribute('fill-opacity', 1);
    text.setAttribute('stroke','black');
    text.setAttribute('fill','black');
    //rect.setAttribute('visibility','hidden'); //hidden;
    svg.append(text);
}
