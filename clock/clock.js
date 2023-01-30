function Clock(svg){

    let me = this;
    me.svg = svg;
    me.width = Number(me.svg.getAttribute('width'));
    me.height = Number(me.svg.getAttribute('height'));

    me.toXY = function(cX, cY, r, degrees) {
        var rad = (degrees) * Math.PI / 180.0;
        return {
            x: cX + (r * Math.cos(rad)),
            y: cY + (r * Math.sin(rad))
        };
    }
    me.hourHand;
    me.minuteHand;
    me.secondHand;
    me.init = function(){
        me.svg.innerHTML = '';
        me.r = Math.min(me.width * 0.8, me.height * 0.8)/2;
        me.centerX = me.width/2;
        me.centerY = me.height/2;
        me.hourHandSize = me.r * 0.5;
        me.minuteHandSize = me.r * 0.7;
        me.secondHandSize = me.r * 0.9;
        me.ro = 0;
        me.handWidth = me.r * 0.1;

        let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        circle.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
        circle.setAttribute('cx', me.centerX);
        circle.setAttribute('cy', me.centerY);
        circle.setAttribute('r', me.r);
        circle.setAttribute('fill-opacity', 3);
        circle.setAttribute('stroke','black');
        circle.setAttribute('fill','white');
        //rect.setAttribute('visibility','hidden'); //hidden;
        me.svg.append(circle);

        for(let i=0; i < 12; i++){
            let textPos = me.toXY( me.centerX, me.centerY, me.r * 0.9, (i+1)*30 - 90);
            let textLabel = document.createElementNS("http://www.w3.org/2000/svg", 'text');
            textLabel.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
            textLabel.setAttribute('x', textPos.x);
            textLabel.setAttribute('y', textPos.y);
            textLabel.innerHTML = (i+1);
            textLabel.setAttribute('dominant-baseline', 'middle');
            textLabel.setAttribute('text-anchor', 'middle');
            textLabel.setAttribute('font-size', 14);
            textLabel.setAttribute('fill-opacity', 1);
            textLabel.setAttribute('fill','black');
            me.svg.append(textLabel);
        }
        me.hourHand = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        me.hourHand.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
        me.hourHand.setAttribute('d', 'M0,' + (me.hourHandSize * -1) + ' L' + me.handWidth + ',0 L' + '0,' + (me.handWidth * 1) + 'L' + (me.handWidth *-1) + ',0Z');
        me.hourHand.setAttribute('fill-opacity', 1);
        me.hourHand.setAttribute('stroke','black');
        me.hourHand.setAttribute('fill','blue');
        me.hourHand.setAttribute('transform', 'translate(' + me.centerX + ',' + me.centerY + ') rotate(' + 0 + ', 0 ,0)')
        me.svg.append(me.hourHand);

        me.minuteHand = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        me.minuteHand.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
        me.minuteHand.setAttribute('d', 'M0,' + (me.minuteHandSize * -1) + ' L' + me.handWidth* 0.8 + ',0 L' + '0,' + (me.handWidth * 1) + 'L' + (me.handWidth * 0.8 * -1) + ',0Z');
        me.minuteHand.setAttribute('fill-opacity', 1);
        me.minuteHand.setAttribute('stroke','black');
        me.minuteHand.setAttribute('fill','yellow');
        me.minuteHand.setAttribute('transform', 'translate(' + me.centerX + ',' + me.centerY + ') rotate(' + 0 + ', 0 ,0)')
        me.svg.append(me.minuteHand);

        me.secondHand = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        me.secondHand.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); 
        me.secondHand.setAttribute('d', 'M0,' + (me.secondHandSize * -1) + ' L' + me.handWidth * 0.5 + ',0 L' + '0,' + (me.handWidth * 1) + 'L' + (me.handWidth * 0.5  *-1) + ',0Z');
        me.secondHand.setAttribute('fill-opacity', 1);
        me.secondHand.setAttribute('stroke','black');
        me.secondHand.setAttribute('fill','red');
        me.secondHand.setAttribute('transform', 'translate(' + me.centerX + ',' + me.centerY + ') rotate(' + 0 + ', 0 ,0)')
        me.svg.append(me.secondHand);

        me.hourAnimEl = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
        me.hourAnimEl.setAttributeNS(null, "attributeName", "transform");
        me.hourAnimEl.setAttributeNS(null, "attributeType", "XML");
        me.hourAnimEl.setAttributeNS(null, "type", "rotate");
        me.hourAnimEl.setAttributeNS(null, "dur", 1 + "s");          
        me.hourAnimEl.setAttributeNS(null, "repeatCount", 1);
        me.hourAnimEl.setAttributeNS(null, "from", me.ro);
        me.hourAnimEl.setAttributeNS(null, "to", 180);
        me.hourAnimEl.setAttributeNS(null, "fill", "freeze");
        me.hourAnimEl.setAttributeNS(null, "additive", "sum");
        me.hourHand.appendChild(me.hourAnimEl);
        me.hourAnimEl.beginElement();

        me.minuteAnimEl = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
        me.minuteAnimEl.setAttributeNS(null, "attributeName", "transform");
        me.minuteAnimEl.setAttributeNS(null, "attributeType", "XML");
        me.minuteAnimEl.setAttributeNS(null, "type", "rotate");
        me.minuteAnimEl.setAttributeNS(null, "dur", 1 + "s");          
        me.minuteAnimEl.setAttributeNS(null, "repeatCount", 1);
        me.minuteAnimEl.setAttributeNS(null, "from", me.ro);
        me.minuteAnimEl.setAttributeNS(null, "to", 180);
        me.minuteAnimEl.setAttributeNS(null, "fill", "freeze");
        me.minuteAnimEl.setAttributeNS(null, "additive", "sum");
        me.minuteHand.appendChild(me.minuteAnimEl);
        me.minuteAnimEl.beginElement();

        me.secondAnimEl = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
        me.secondAnimEl.setAttributeNS(null, "attributeName", "transform");
        me.secondAnimEl.setAttributeNS(null, "attributeType", "XML");
        me.secondAnimEl.setAttributeNS(null, "type", "rotate");
        me.secondAnimEl.setAttributeNS(null, "dur", 1 + "s");          
        me.secondAnimEl.setAttributeNS(null, "repeatCount", 1);
        me.secondAnimEl.setAttributeNS(null, "from", me.ro);
        me.secondAnimEl.setAttributeNS(null, "to", 180);
        me.secondAnimEl.setAttributeNS(null, "fill", "freeze");
        me.secondAnimEl.setAttributeNS(null, "additive", "sum");
        me.secondHand.appendChild(me.secondAnimEl);
        me.secondAnimEl.beginElement();

        me.loop();
    }
    me.loop = function(){
        var now = new Date();	// 현재 날짜 및 시간
        var hours = now.getHours();	// 시간
        var minutes = now.getMinutes();	// 분
        var seconds = now.getSeconds();	// 초
        if(hours > 12){
            hours = hours -12;
        }
        console.log(hours, minutes, seconds);
        me.hoursRo = (hours-1) * 30 + (minutes * 3);
        if(me.hoursRo == 0){
            me.bfHoursRo = me.bfHoursRo - 360;
        }
        me.hourAnimEl.setAttributeNS(null, "from", me.bfHoursRo);
        me.hourAnimEl.setAttributeNS(null, "to", me.hoursRo);
        me.bfHoursRo = me.hoursRo;
        me.hourAnimEl.beginElement();

        me.minutesRo = (minutes * 6);
        if(me.minutesRo == 0){
            me.bfMinutesRo = me.bfMinutesRo - 360;
        }
        me.minuteAnimEl.setAttributeNS(null, "from", me.bfMinutesRo);
        me.minuteAnimEl.setAttributeNS(null, "to", me.minutesRo);
        me.bfMinutesRo = me.minutesRo;
        me.minuteAnimEl.beginElement();

        me.secondsRo = (seconds * 6);
        if(me.secondsRo == 0){
            me.bfSecondsRo = me.bfSecondsRo - 360;
        }
        me.secondAnimEl.setAttributeNS(null, "from", me.bfSecondsRo);
        me.secondAnimEl.setAttributeNS(null, "to", me.secondsRo);
        me.bfSecondsRo = me.secondsRo;
        me.secondAnimEl.beginElement();

        setTimeout(function(){
            me.loop();
        },1000)
    }
}