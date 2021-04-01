//back.js
//뒤로가기 차단
//새로고침 차단

(function($){

  // 뒤로가기 버튼 방지
  var killBackSpace = function(e) {
    e = e ? e : window.event;
    var t = e.target ? e.target : e.srcElement ? e.srcElement : null;
    if(t && t.tagName && (t.type && /(password)|(text)|(file)/.test(t.type.toLowerCase())) 
    || t.tagName.toLowerCase() == 'textarea') {
      return true; 
    }
    
    var k = e.keyCode ? e.keyCode : e.which ? e.which : null;
    if(k == 8) {
      if(e.preventDefault) { 
        e.preventDefault();
      }
      
      return false;
    } 
    
    return true;
  }; 

  history.pushState(null, document.title, location.href); 
  window.addEventListener('popstate', function(event) { 
  history.pushState(null, document.title, location.href); });

})(jQuery);