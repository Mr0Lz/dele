module.exports={
    bind(el,binging,vnode){
        console.log('bind');
    },
    inserted(el,binging,vnode){
        console.log('inserted',el,binging,vnode);
    },
    update(el,binging,vnode,oldVnode){
        console.log('update',el,binging,vnode,oldVnode);
    },
    unbind(el,binging,vnode){
        console.log('unbind');
    }

}