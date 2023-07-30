"use strict";

var offsetTop;
var pagetopposition = $('.page-top-position').offset().top;
$(window).scroll(function () {
  offsetTop = $(window).scrollTop(); // 捲軸高度>=900，會出現page-top的按鈕

  if (offsetTop >= 900) {
    $('.page-top').addClass('active');
  } else {
    $('.page-top').removeClass('active');
  }
}); //scroll end
// 點按page-top回到最上方

$('.page-top').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  });
}); //.page-top
//====bread-tab-link=====//

document.getElementById('btn-nav-toggle').addEventListener('click', openNav); // 函式名稱

function openNav() {
  console.log('點按鈕打開主導覽');

  if (document.getElementById('primary-navigation').classList.contains('active') == true) {
    // 假如主導覽有active類別時執行
    document.getElementById('primary-navigation').classList.remove('active'); // document.getElementById('btn-nav-toggle').textContent = 'menu'
  } else {
    // 假如主導覽沒有active類別時執行
    document.getElementById('primary-navigation').classList.add('active'); // document.getElementById('btn-nav-toggle').textContent = 'X'
  } // openNav if end

} //openNav end


var modal = document.getElementById('id01'); // When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

new WOW().init();