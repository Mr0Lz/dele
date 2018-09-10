(function (d, w) {
  let docEle = document.documentElement,resizeE = 'orientationchange' in w ? 'orientationchange' : 'resize',
    wResize = function () {
      let clentWidth = docEle.clentWidth;
      if (!clentWidth) return;
      //px转换rem:px/100    设计图375   基数:100  
      docEle.style.fontSize = 100 * (clentWidth / 375) + 'px';
    }
    if(w.addEventListener){
      w.addEventListener(resizeE , wResize , false);
      w.addEventListener('DOMContentLoaded',wResize ,false);
    }
})(document, window)
