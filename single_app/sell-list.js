import { SellInfo } from "./sell-info.js";

export class SellList extends Seu{
    sellInfo;
    constructor(){
        super();    
    }
    onSearch(){
        seuLib.fetch(this, './services/test-table.json',this.callbackSearch);
    }
    callbackSearch(me, resObj){
        const list = resObj.data.list;
        const tableEl = me.getRef('table');
        var strList = '<tr><th>Date</th><th>Product</th><th>Description</th></tr>';
        for(let i=0; i < list.length; i++){
            strList += '<tr onclick="seuLib.getComp(this).onSelectSell(' + list[i].id + ')">' + 
            '<td>' + list[i].date + '</td>' +
            '<td>' + list[i].name + '</td>' +
            '<td>' + list[i].description + '</td>' +
            '</tr>';
        }
        tableEl.innerHTML = strList;
    }
    onSelectSell(id){
        const sellInfo = new SellInfo();    
        sellInfo.setArea(this.getRef('modalSellInfo'))
        sellInfo.onShow(id);
    }
    beforeRender(){
    }
    afterRender() {
        document.location.href = '#product-list';
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
                <table ref="table" class="w3-table w3-striped w3-border">
                </table>
            </div>
            <div ref="modalSellInfo">
            </div>
        </div>`);
    }
}