export class SellInfo extends Seu{
    constructor(){
        super();      
    }
    onShow(id){
        this.el.style.display='block';
        this.getSellInfo(id);
    }
    onHide(){
        this.el.style.display='none';
    }
    getSellInfo(id){
        seuLib.fetch(this, './services/test-info.json',this.callbackProductInfo);
    }
    callbackProductInfo(me, resObj){
        const info = resObj.data.info;
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
        return(`<div ref="popWindow" class="w3-modal">
            <div class="w3-modal-content">
            <header class="w3-container w3-teal"> 
                <span onclick="seuLib.getComp(this).onHide()" 
                class="w3-button w3-display-topright">&times;</span>
                <h2>Sale Information</h2>
            </header>
            <div class="w3-container" style="padding-bottom:20px">
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
                <div>
                    <label>Description</label>
                    <textarea class="w3-input w3-border" ref="description" cols="4" ></textarea>
                </div>
            </div>
            <footer class="w3-container w3-teal">
                <p class="w3-right"><button class="w3-button w3-border" onclick="seuLib.getComp(this).onHide()">Close</button></p>
            </footer>
            </div>
        </div>`);
    }
}