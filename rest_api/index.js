let init = function(){
    const btnGET = document.querySelector('[ref=btnGET]');
    btnGET.onclick=function(){
        get();
    }
    const btnPOST = document.querySelector('[ref=btnPOST]');
    btnPOST.onclick=function(){
        post();
    }
    const btnPUT = document.querySelector('[ref=btnPUT]');
    btnPUT.onclick=function(){
        put();
    }
    const btnPATCH = document.querySelector('[ref=btnPATCH]');
    btnPATCH.onclick=function(){
        patch();
    }
    const btnDELETE = document.querySelector('[ref=btnDELETE]');
    btnDELETE.onclick=function(){
        remove();   // delete는 예약어임.
    }
}
let get = function(){
    let url = 'https://jsonplaceholder.typicode.com/users/1'   // users?parm1=aaa&parm2=bbb
    REST.get(url, callbackGet);
}
let callbackGet = function(success, jsonData){
    console.log(arguments);
    if(success == true){
        const output = document.querySelector('[ref=output]');
        output.innerHTML = JSON.stringify(jsonData);
    }
}
let post = function(){
    let data = {name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",
        address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},
        phone:"1-770-736-8031 x56442",website:"hildegard.org",
        company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}}
    let url = 'https://jsonplaceholder.typicode.com/users'
    REST.post(url, data, callbackPost);
}
let callbackPost = function(success, jsonData){
    console.log(arguments);
    if(success == true){
        const output = document.querySelector('[ref=output]');
        output.innerHTML = JSON.stringify(jsonData);
    }
}
let put = function(){
    let data = {name:"Leanne Graham change",username:"Bret",email:"Sincere@april.biz",
        address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},
        phone:"1-770-736-8031 x56442",website:"hildegard.org",
        company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}}
    let url = 'https://jsonplaceholder.typicode.com/users/1'
    REST.put(url, data, callbackPut);
}
let callbackPut = function(success, jsonData){
    console.log(arguments);
    if(success == true){
        const output = document.querySelector('[ref=output]');
        output.innerHTML = JSON.stringify(jsonData);
    }
}
let patch = function(){
    let data = {name:"Leanne Graham change",username:"Bret change"}
    let url = 'https://jsonplaceholder.typicode.com/users/1'
    REST.patch(url, data, callbackPatch);
}
let callbackPatch = function(success, jsonData){
    console.log(arguments);
    if(success == true){
        const output = document.querySelector('[ref=output]');
        output.innerHTML = JSON.stringify(jsonData);
    }
}
let remove = function(){
    let url = 'https://jsonplaceholder.typicode.com/users/11'    // POST 
    REST.delete(url, callbackRemove);
}
let callbackRemove = function(success, jsonData){
    console.log(arguments);
    if(success == true){
        // 종료
        const output = document.querySelector('[ref=output]');
        output.innerHTML = '삭제성공';
    }
}