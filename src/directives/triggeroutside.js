//触发目标以外的区域关闭目标
module.exports={
    bind(el,binging,vnode){
        console.log('bind');
    
        function documentHandler(event){
            //触发的不是绑定目标的范围里 不执行
            if(el.contains(event.target)){
                return false;
            }

        }

        el.__vueClickOutside__ = documentHandler;
        document.addEventListener(binging.arg, documentHandler);

        //指令的值
        if(binging.expression){
            binging.value(event,vnode);
        }
    },
    unbind(el,binging,vnode){
        console.log('unbind');
        document.removeEventListener(binging.arg, el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }

}