//详细请看https://cn.vuejs.org/v2/guide/custom-directive.html 
module.exports={
    bind(el,binging,vnode){//只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
        console.log('bind');
    },
    inserted(el,binging,vnode){//被绑定元素插入父节点时调用，如果说我们希望我们的动作只执行一次，但又需要和其他节点关联（如获取父元素宽高，修改他们属性值等）
        console.log('inserted',el,binging,vnode);
    },
    update(el,binging,vnode,oldVnode){//任何节点变化，属性值变化等都会执行该钩子，所以可以作为一个监听事件，而且他有其他钩子不具备的oldValue等参数值
        console.log('update',el,binging,vnode,oldVnode);
    },
    unbind(el,binging,vnode){//只调用一次，指令与元素解绑时调用
        console.log('unbind');
    }

}