//添加class
export const addClass = (ele,cls) => {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

//删除class
export const removeClass = (ele,cls) => {
    if (hasClass(ele, cls)) {
        let oldArr = ele.className.split(' ');
        oldArr.splice(oldArr.indexOf(cls),1);
        ele.className = oldArr.join(' ');
    }
}

//判断class是否存在
export const hasClass = (ele,cls) =>{
    try{
        let oldArr = ele.className.split(' ');
        if(oldArr.indexOf(cls)!=-1){
            return true ;
        }
    }catch(e){
        console.log(e);
        return false;
    }
    return false;
}
//当前元素所有最终使用的CSS属性值
export const elStyle = (el,fake) =>{
   return el.currentStyle? el.currentStyle : window.getComputedStyle(el, fake);
}


//FileReader或者FormData(ajax上传) 生成预览图
export const toPreviewer = (files,quality) =>{

    return new Promise(function(resolve, reject){
        for (let i = 0; i < files.length; i++) {
            try {
                let reader = new FileReader(); 
                let base64dataArr=null;
                reader.onload=function(event){
                    let result=this.result;
                    let img = new Image();
                    img.onload=function (){
                        resolve(compress(img, files[i].type, quality));
                    }
                    img.src = result;
                }
                reader.readAsDataURL(files[i]);
            }catch(err){
                reject(err);
            }
        }

    });
}


    //压缩图片 使用canvas压缩 返回base64data
 export const compress = (img, fileType, quality)  => {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext('2d');

        let width = img.width;
        let height = img.height;
        canvas.width = width;
        canvas.height = height;
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, width, height);
        let base64data = canvas.toDataURL(fileType, quality);
        canvas = ctx = null;
        return base64data;
    }