export class ProductInfo extends Seu{
    constructor(){
        super();       
    }
    onClick(target, evt){
        console.log('div2 onclick', target, evt);
        var parent = seuLib.getComp(this.parentEl);
        parent.onClick();
    }
    getProductInfo(id){
        seuLib.fetch(this, './services/test-info.json',this.callbackProductInfo);
    }
    callbackProductInfo(me, resObj){
        console.log('res', resObj);
        const info = resObj.data.info;
        console.log('info', info);
        me.getRef('id').value = info.id;
        me.getRef('name').value = info.name;
        me.getRef('description').value = info.description;
    }
    beforeRender(){
    }
    afterRender() {
        document.location.href = '#product-info';
    }
    render(){
        return (`<div class="w3-panel" style="border:1px solid gray;">
            <p><label onClick="seuLib.getComp(this).onClick(this, event);">Product Information</label>
            <input  class="w3-input w3-border"  ref="input1"></p>
            <div>
                <p>
                <label>Id</label>
                <input class="w3-input w3-border" ref="id">
                </p>
            </div>
            <div>
                <p>
                <label>Name</label>
                <input class="w3-input w3-border" ref="name">
                </p>
            </div>
            <div style="padding-bottom:20px">
                <label>Description</label>
                <textarea class="w3-input w3-border" ref="description" cols="4" ></textarea>
            </div>

        </div>`);
    }
}