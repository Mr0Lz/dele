(function (d, w) {
  let docEle = document.documentElement,
  resizeE = 'orientationchange' in window ? 'orientationchange' : 'resize',
  wResize = function () {
      let clientWidth = docEle.clientWidth;
      if (!clientWidth) return;
      //px转换rem:px/100    设计图375   基数:100  
      docEle.style.fontSize = 100 * (clientWidth / 375) + 'px';
    }
    if (!d.addEventListener) return;
      w.addEventListener(resizeE , wResize , false);
      //在dom加载完后执行一遍
      d.addEventListener('DOMContentLoaded' , wResize ,false);
    
})(document, window)
