//添加class
export const addClass = (ele,cls) => {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

//删除class
export const removeClass = (ele,cls) => {
    if (hasClass(ele, cls)) {
        let reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        ele.className = ele.className.replace(reg, "");
    }
}

//判断class是否存在
export const hasClass = (ele,cls) =>{
    return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}