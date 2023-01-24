let init = function(){
    const btnReceive = document.querySelector('[ref=btnReceive]');
                    //document.querySelectorAll('[ref=btnReceive]')[0];

    btnReceive.onclick=function(){
        getJsonData();
    }
    const btnSend = document.querySelector('[ref=btnSend]');
    btnSend.onclick=function(){
        setJsonData();
    }
}
let getJsonData = function(){
    const xhttp = new XMLHttpRequest();
    const output = document.querySelector('[ref=output]');
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const resObj = JSON.parse(this.responseText);
            console.log('resObj', resObj);
            const list = resObj.data.list;
            list.forEach(function(item){
                output.append(item.custName );
                // decodeURI(..) // 한글끄내어씀.
                // append(객체) element.
                // output.innerHTML += item.custName;
            });
        } 
    };
    xhttp.open("GET", "./data.json", true);
    xhttp.setRequestHeader('Content-type', "application/x-www-form-urlencoded; charset=utf-8");       
    xhttp.send(); 
}
let setJsonData = function(){
    let data = {
        list:[{custName:'강감찬', phone:'010-999-6666'}]
    };

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        } 
    };
    let params = 'src=' + encodeURI(JSON.stringify(data));
    console.log('encodeURI(data.stringify(data))',encodeURI(JSON.stringify(data)))
    xhttp.open("POST", "/서비스명", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(params);
}