function Tree(ul){
    var me = this;
    me.ul = ul;
    me.setData = function(data){
        me.setLoop(data, me.ul)
    }
    me.setLoop = function(data, parent){
        if(data.children == undefined){
            return;
        }
        for(let i=0; i < data.children.length; i++){
            item = data.children[i];
            let li = document.createElement('li');
            li.setAttribute('folder', true);
            li.setAttribute('style', 'width:100%;');
            let div = document.createElement('div');
            div.setAttribute('style', 'display:flex;display-direction:row;');
            let icon = document.createElement('div');
            icon.setAttribute('icon', 'true')
   
            let span = document.createElement('span');
            span.setAttribute('style', 'flex:1')
            span.innerHTML = item.name;
            div.append(icon);
            div.append(span);
            li.append(div)
            parent.append(li);
            
            if(item.children != undefined && item.children.length > 0){
                icon.setAttribute('style', 'width:10px;height:10px;margin:5px 5px 0 5px;background-size:cover;background-image:url(expand.png)');
                let childUl = document.createElement('ul');
                childUl.setAttribute('style', 'margin-left:20px')
                li.appendChild(childUl);
                me.setLoop(item, childUl);
            } else {
                icon.setAttribute('style', 'width:10px;height:10px;margin:5px 5px 0 5px;background-size:cover;');
            }
            div.addEventListener('click', function(event){
                let tempUl = this.parentNode.querySelector('ul');
                //console.log('tempUl',this.parentNode, tempUl);
                if(tempUl != undefined){
                    if(tempUl.style.display == 'none'){
                        this.parentNode.querySelector('div[icon=true]').setAttribute('style', 'width:10px;height:10px;margin:5px 5px 0 5px;background-size:cover;background-image:url(expand.png)');
                        tempUl.style['display'] = 'block';
                    } else {
                        this.parentNode.querySelector('div[icon=true]').setAttribute('style', 'width:10px;height:10px;margin:5px 5px 0 5px;background-size:cover;background-image:url(shrink.png)');
                        tempUl.style['display'] = 'none';
                    }
                } else {
                    // 폴더가 아님.
                    // 여러분의 이벤트나 일반 사용자 이벤트를 만들어 사용할것.

                }
            });
        }
    }
    me.expandAll = function(){
        let folders = me.ul.querySelectorAll('[folder=true]');
        for(let i = 0;i < folders.length; i++){
            if(folders[i].querySelector('ul') != undefined){
                folders[i].querySelector('div[icon=true]').setAttribute('style', 'width:10px;height:10px;margin:5px 5px 0 5px;background-size:cover;background-image:url(expand.png)');         
                folders[i].querySelector('ul').style['display'] = 'block';
            }
        }
    }
    me.shrinkAll = function(){
        let folders = me.ul.querySelectorAll('[folder=true]');
        for(let i = 0;i < folders.length; i++){
            if(folders[i].querySelector('ul') != undefined){
                folders[i].querySelector('div[icon=true]').setAttribute('style', 'width:10px;height:10px;margin:5px 5px 0 5px;background-size:cover;background-image:url(shrink.png)');         
                folders[i].querySelector('ul').style['display'] = 'none';
            }
        }
    }
}