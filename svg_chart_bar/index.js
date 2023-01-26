let init = function(){
    let chart = new Chart();
    chart.init(0, 100);
    var chartData = [{ x:'국어', y:40},
        { x:'영어', y:82},
        { x:'수학', y:77},
        { x:'국사', y:53},
        { x:'사회', y:66},
        { x:'과학', y:32},
        { x:'미술', y:100}];
    chart.setData(chartData);
    const btnSetData = document.querySelector('[ref=btnSetData]');
    btnSetData.onclick=function(){
        var chartData = [{ x:'국어', y:Math.random()*100,  color:'red'},
            { x:'영어', y:Math.random()*100, color:'orange'},
            { x:'수학', y:Math.random()*100, color:'yellow'},
            { x:'국사', y:Math.random()*100, color:'yellowgreen'},
            { x:'사회', y:Math.random()*100, color:'green'},
            { x:'과학', y:Math.random()*100, color:'blue'},
            { x:'미술', y:Math.random()*100, color:'purple'}];
        chart.setData(chartData);
    }
}