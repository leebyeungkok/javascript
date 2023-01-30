import {ProductList} from "./product-list.js";
import {ProductInfo} from "./product-info.js";
import { SellList } from "./sell-list.js";
export class App extends Seu{
    productList;
    productInfo;
    sellList;
    constructor(){
        super();
    }
    afterRender(){
        this.onMovePageProduct();
        this.sellList = new SellList();
        this.sellList.setArea(this.getRef('divSell'));
    }
    onClick(target, evt){
        console.log('div1 onclick', target, evt);
    }
    onMovePageProduct(){
        this.getRef('divProduct').style.display = 'block';
        this.getRef('divSell').style.display = 'none';
        this.onShowProductList();
    }
    onMovePageSell(id){
        this.getRef('divProduct').style.display = 'none';
        this.getRef('divSell').style.display = 'block';
    }
    onShowProductList(){
        this.productList = new ProductList();
        this.productList.setArea(this.getRef('divProduct'));
        
    }
    onShowProductDetail(id) {
        this.productInfo = new ProductInfo();
        this.productInfo.setArea(this.getRef('divProduct'));
        this.productInfo.getProductInfo(id);
    }
    render(){
        return (`<div class="w3-panel" style="border:1px solid gray;">
            <h3 >Product Management</h3>
            <div>
                <button class="w3-button w3-border" onclick="seuLib.getComp(this).onMovePageProduct()">Product</button>
                <button class="w3-button w3-border" onclick="seuLib.getComp(this).onMovePageSell();">Sale</button>
            </div>
            <div ref="divProduct" style="display:block"></div>
            <div ref="divSell" style="display:none"></div>
        </div>`);
    }
}