function Chart(){
    let svg;
    let me = this;
    let width, height, min, max, axisX, axisY;
    me.init = function(min, max){
        me.min = min;
        me.max = max;
        me.svg = document.querySelector('svg');
        me.width = Number(me.svg.getAttribute('width'));
        me.height = Number(me.svg.getAttribute('height'));
        me.drawAxis();
    }
    me.drawAxis = function(){
        me.axisX = me.width/10;
        me.axisY = me.height/10;
        let rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        rect.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
        rect.setAttribute('x', me.axisX);
        rect.setAttribute('y', me.axisY);
        rect.setAttribute('width', me.axisX * 8);
        rect.setAttribute('height', me.axisY * 8);
        rect.setAttribute('fill-opacity', 1);
        rect.setAttribute('fill','white');
        me.svg.append(rect);
        let path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        path.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
        path.setAttribute('d', 'M' + me.axisX + ',' + me.axisY + ' L' + me.axisX + ',' + 
        me.axisY * 9 + ' L' + (me.axisX *9) + ',' + (me.axisY*9) );
        path.setAttribute('fill-opacity', 1);
        path.setAttribute('stroke','black');
        path.setAttribute('fill','white');
        me.svg.append(path);

        let textMax = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        textMax.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
        textMax.setAttribute('x',  me.axisX -10);
        textMax.setAttribute('y', me.axisY );
        textMax.innerHTML = me.max;
        textMax.setAttribute('dominant-baseline', 'baseline');
        textMax.setAttribute('text-anchor', 'end');
        textMax.setAttribute('font-size', 12);
        textMax.setAttribute('fill-opacity', 1);
        textMax.setAttribute('fill','black');
        me.svg.append(textMax);

        let textMin = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        textMin.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
        textMin.setAttribute('x',  me.axisX -10);
        textMin.setAttribute('y', me.axisY * 9 );
        textMin.innerHTML = me.min;
        textMin.setAttribute('dominant-baseline', 'baseline');
        textMin.setAttribute('text-anchor', 'end');
        textMin.setAttribute('font-size', 12);
        textMin.setAttribute('fill-opacity', 1);
        textMin.setAttribute('fill','black');
        me.svg.append(textMin);

        let textMiddle = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        textMiddle.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
        textMiddle.setAttribute('x',  me.axisX -10);
        textMiddle.setAttribute('y', me.axisY * 5 );
        textMiddle.innerHTML = (me.max - me.min)/2;
        textMiddle.setAttribute('dominant-baseline', 'baseline');
        textMiddle.setAttribute('text-anchor', 'end');
        textMiddle.setAttribute('font-size', 12);
        textMiddle.setAttribute('fill-opacity', 1);
        textMiddle.setAttribute('fill','black');
        me.svg.append(textMiddle);
    }
    me.setData = function(data){
        me.svg.innerHTML = '';
        me.drawAxis();
        let dataCount = data.length;
        let chartAreaWidth = me.axisX * 8;
        let chartAreaHeight = me.axisY * 8;
        let chartAreaTop = me.axisY;
        let chartAreaBottom = me.axisY * 9;
        let chartAreaLeft = me.axisX;
        let barWidthArea = chartAreaWidth/dataCount;
        let barWidth = chartAreaWidth/dataCount * 0.8;  // 여백
        let barGapX = chartAreaWidth/dataCount * 0.1;
        console.log(dataCount,chartAreaWidth,chartAreaHeight );
        console.log(chartAreaTop,chartAreaBottom,chartAreaLeft, barWidth,  barGapX);
        
        for(let i=0; i < dataCount; i++){
            let item = data[i];
            let barHeight = chartAreaHeight * (item.y- me.min)/(me.max-me.min);
            let barTop = chartAreaBottom - barHeight;
            let barLeft = chartAreaLeft + (barWidthArea * i) + barGapX;
            if(i != 0){
                barLeft += barGapX;
            }
            let fill = 'yellowgreen';
            if(item.color != undefined){
                fill = item.color;
            }
            let textPosX = barLeft + barWidth/2;
            let rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
            rect.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
            rect.setAttribute('x', barLeft);
            rect.setAttribute('y', barTop);
            rect.setAttribute('width', barWidth);
            rect.setAttribute('height', barHeight);
            rect.setAttribute('fill-opacity', 1);
            rect.setAttribute('stroke','black');
            rect.setAttribute('stroke-width','0.5');
            rect.setAttribute('fill',fill);
            me.svg.append(rect);

            let textX = document.createElementNS("http://www.w3.org/2000/svg", 'text');
            textX.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
            textX.setAttribute('x',  textPosX);
            textX.setAttribute('y', chartAreaBottom + 5);
            textX.innerHTML = item.x;
            textX.setAttribute('dominant-baseline', 'hanging');
            textX.setAttribute('text-anchor', 'middle');
            textX.setAttribute('font-size', 12);
            textX.setAttribute('fill-opacity', 1);
            textX.setAttribute('fill','black');
            me.svg.append(textX);

        }
    }
}