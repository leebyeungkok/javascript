
let init = function(){
    const btnAdd = document.querySelector('[ref=btnAdd]');
    btnAdd.onclick=function(){
        setData();
    }
    const btnRemove = document.querySelector('[ref=btnRemove]');
    btnRemove.onclick=function(){
        removeData(2);
    }
}
let setData = function(){
    let list = [{custName:"홍길동", id:1},
        {custName:"임꺽정", id:2},
        {custName:"이순신", id:3}];
    const selCust = document.querySelector('[ref=selCust]');
    list.forEach(function(item){
        let opt =  document.createElement('option');
        opt.setAttribute('value', item.id)
        opt.innerHTML = item.custName;
        selCust.append(opt );
    });
    // <option value="1">홍길동</option>
    // <option value="2">임꺽정</option>
}
let removeData = function(selId){
    const selCust = document.querySelector('[ref=selCust]');
    let opts = selCust.querySelectorAll('option');
    opts.forEach(function(item){
        if(item.getAttribute('value') == selId){
            selCust.remove(item);
        }
    });
}