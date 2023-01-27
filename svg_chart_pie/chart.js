
function Chart(){
    let svg;
    let me = this;
    let width, height, min, max, axisX, axisY;

    me.svg = document.querySelector('svg');
    me.width = Number(me.svg.getAttribute('width'));
    me.height = Number(me.svg.getAttribute('height'));

    me.toXY = function(cX, cY, r, degrees) {
        var rad = (degrees) * Math.PI / 180.0;
        return {
            x: cX + (r * Math.cos(rad)),
            y: cY + (r * Math.sin(rad))
        };
    }
    me.calcPie = function(x, y, r, startAngle, endAngle) {
        startAngle = startAngle - 90;
        endAngle = endAngle - 90;
        
        var startOut = me.toXY(x, y, r, endAngle);
        var endOut = me.toXY(x, y, r, startAngle);
        var arcSweep = (endAngle - startAngle) <= 180 ? "0" : "1";
        var d = [
            "M", x, y,
            "L", startOut.x, startOut.y,
            "A", r, r, 0, arcSweep, 0, endOut.x, endOut.y,
            "L", x, y,
            "A", 0, 0, 0, arcSweep, 1, x, y,
            "z"
        ].join(" ");
        return d;
    }
    me.setData = function(data){
        me.svg.innerHTML = '';
        me.r = Math.min(me.width * 0.8, me.height * 0.8)/2;
        me.centerX = me.width/2;
        me.centerY = me.height/2;
        let totValue = 0;
        for(let i=0; i < data.length; i++){
            let item = data[i];
            console.log('item',item);
            totValue = totValue + Number(item.value);
        }
        console.log('totValue', totValue);
        for(let i=0; i < data.length; i++){
           
            data[i].pieValue = Number(data[i].value) * 360/ totValue;
            if(data[i].color == undefined){
                data[i].color = 'yellowgreen';
            }
        }
        let pieValueSum = 0;
        for(let i=0; i < data.length; i++){
            let item = data[i];
            console.log(item.pieValue);
            let d = me.calcPie(me.centerX, me.centerY, me.r, 0, item.pieValue);

            console.log('d', d);
            let path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
            path.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
            path.setAttribute('d', d);
            path.setAttribute('fill-opacity', 1);
            path.setAttribute('stroke','black');
            path.setAttribute('fill', item.color);
            //rect.setAttribute('visibility','hidden'); //hidden;
            me.svg.append(path);
            path.setAttribute('transform', //'translate(' + trX + ',' + trY + ')' +  
            'rotate(' + ( pieValueSum)  + ',' + me.centerX + ',' + me.centerY + ')');  // trRo는 반영하지 않는다.
            
            
            
            
            pieValueSum += item.pieValue;
        }
        pieValueSum = 0;
        for(let i=0; i < data.length; i++){
            let item = data[i];
            console.log('pieValueSum + (item.pieValue/2)', pieValueSum + (item.pieValue/2) -90, item.key)
            let textPos = me.toXY(me.centerX, me.centerY, me.r*2/3, pieValueSum + (item.pieValue/2) -90);
            let textLabel = document.createElementNS("http://www.w3.org/2000/svg", 'text');
            textLabel.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
            textLabel.setAttribute('x',  textPos.x);
            textLabel.setAttribute('y', textPos.y);
            textLabel.innerHTML = item.key;
            textLabel.setAttribute('dominant-baseline', 'middle');
            textLabel.setAttribute('text-anchor', 'middle');
            textLabel.setAttribute('font-size', 12);
            textLabel.setAttribute('fill-opacity', 1);
            textLabel.setAttribute('fill','black');
            me.svg.append(textLabel);

            let textValue = document.createElementNS("http://www.w3.org/2000/svg", 'text');
            textValue.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
            textValue.setAttribute('x',  textPos.x);
            textValue.setAttribute('y', textPos.y + 12);
            textValue.innerHTML = item.value;
            textValue.setAttribute('dominant-baseline', 'middle');
            textValue.setAttribute('text-anchor', 'middle');
            textValue.setAttribute('font-size', 12);
            textValue.setAttribute('fill-opacity', 1);
            textValue.setAttribute('fill','black');
            me.svg.append(textValue);

            pieValueSum += item.pieValue;
        }

    }
}