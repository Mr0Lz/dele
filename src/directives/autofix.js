// 图片自动根据宽高比例压缩
module.exports={
    bind(el,binging,vnode){
        console.log('bind');
    },
    inserted(el,binging,vnode){
    },
    update(el,binging,vnode,oldVnode){
        console.log('update',el,binging,vnode,oldVnode);

        let img = new Image();
        let boxWidth = el.parentNode.offsetWidth;
        let boxHeight = el.parentNode.offsetHeight;
        el.style.margin="0 auto";
        img.onload=function (){
                // 以长度小的边为基准， 按比例缩放，然后偏移最长边和当前边框长度差的一半
            if (img.width < img.height) {
                el.style.height = Math.floor(img.height / img.width * boxWidth) + 'px'
                el.style.width = boxWidth + 'px'
            } else {
                el.style.width = Math.floor(img.width / img.height * boxWidth) + 'px'
                el.style.height = boxWidth + 'px'
            }
        }
        img.src = el.src;
           //指令的值
        if(binging.expression){
            binging.value(event,vnode);
        }
    },
    unbind(el,binging,vnode){
        console.log('unbind');
    }

}