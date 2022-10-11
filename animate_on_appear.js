//https://codepen.io/zvona/pen/RwyyNK

var onAppear = [];

document.addEventListener("DOMContentLoaded", function() {
  onAppear = [].map.call(document.querySelectorAll(".content3"), function(item ) {
    return item;
  });
}, false);

window.addEventListener("scroll", function() {
  onAppear.forEach(function(elem) {
    var vwTop = window.pageYOffset;
    var vwBottom = (window.pageYOffset + window.innerHeight);
    var elemTop = elem.offsetTop;
    var elemHeight = elem.offsetHeight;
    
    if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
     elem.classList.add("content3_visible");
    } else {
      elem.classList.remove("content3_visible");
    }
  });
}, false);




/*window.addEventListener("onload", function() {
  onAppear.forEach(function(elem) {
    var vwTop = window.pageYOffset;
    var vwBottom = (window.pageYOffset + window.innerHeight);
    var elemTop = elem.offsetTop;
    var elemHeight = elem.offsetHeight;
    
    if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
     elem.classList.add("content3_visible");
    } else {
      elem.classList.remove("content3_visible");
    }
  });
}, false);*/

//repeat for content4
//nvm it breaks everything
/*
var c_onAppear=[];
document.addEventListener("DOMContentLoaded", function() {
    onAppear=[].map.call(document.querySelectorAll(".content4"),function(item ){
        return item;
    });
}, false);

window.addEventListener("scroll", function() {
    onAppear.forEach(function(elem) {
      var vwTop = window.pageYOffset;
      var vwBottom = (window.pageYOffset + window.innerHeight);
      var elemTop = elem.offsetTop;
      var elemHeight = elem.offsetHeight;
      
      if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
       elem.classList.add("content4_visible");
      } else {
        elem.classList.remove("content4_visible");
      }
    });
  }, false);*/