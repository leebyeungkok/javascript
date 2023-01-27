let init = function(){
    var data = [{ key:'서울', value:900, color:'red'},
        { key:'부산', value:300, color:'orange'},
        { key:'대구', value:260, color:'yellow'},
        { key:'광주', value:280, color:'yellowgreen'},
        { key:'대전', value:320, color:'green'},
        { key:'제주', value:150, color:'blue'},
        { key:'세종', value:30, color:'purple'}];
    let chart = new Chart();
    chart.setData(data);

}
