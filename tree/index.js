let tree;
let init = function(){
    let data= {
        children:[
            {
                key:'1', name:'동물', folder:true,
                children:[{
                    key:'11', name:'포유류',
                    children:[{
                        key:'11', name:'사자'
                    },{
                        key:'12', name:'호랑이'
                    },{
                        key:'12', name:'파충류',
                        children:[{
                            key:'121', name:'악어'
                        },{
                            key:'122', name:'비단구렁이'
                        }]
                    }],
                }]
            },{
                key:'2', name:'식물', folder:true,
                children:[{
                    key:'21', name:'나팔꽃'
                },{
                    key:'12', name:'호박꽃'
                }]
            }
        ]
    }
    let ul = document.querySelector('ul');
    tree = new Tree(ul);
    tree.setData(data);
}
let expandAll = function(){
    tree.expandAll()
}
let shrinkAll = function(){
    tree.shrinkAll();
}