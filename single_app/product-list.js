export class ProductList extends Seu{
    constructor(){
        super();
    }
    onSearch(){
        seuLib.fetch(this, './services/test.json', this.callbackSearch);
    }
    callbackSearch(me, resObj){
        const list = resObj.data.list;
        const listEl = me.getRef('list');
        let strList = '';
        for(let i=0; i < list.length; i++){
            strList += '<li onclick="seuLib.getComp(this).onSelectProduct(' + list[i].id + ')">' + list[i].name + '</li>';
        }
        listEl.innerHTML = strList;
    }
    onSelectProduct(id){
        seuLib.getComp(this.parentEl).onShowProductDetail(id);
    }
    afterRender() {
        this.onSearch();
    }
    render(){
        return (`<div class="w3-panel" style="border:1px solid gray;">
            <p>
                <label>name</label>
                <input  class="w3-input w3-border" ref="input1">
            </p>
            <p class="w3-center" style="text-align:middle">
                <button class="w3-btn w3-border" onClick="seuLib.getComp(this).onSearch();">Search</button>
            </p>
            <div class="w-panel" style="padding-bottom:20px">
                <ul ref="list" class="w3-ul w3-border">
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                </ul>
            </div>
        </div>`);
    }
}