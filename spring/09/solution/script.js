$(function() {
	scroll();
	button_listener();
});
$( scroll );
$( button_listener );

function scroll() {

  /* スクロールするにつれてheaderを透明にしていく */
  $(document).scroll(function(){

    /* 画面最上部から何pxスクロールしたかを取得  */
    var pos = $(document).scrollTop();

    /* 画面の合計の高さを取得  */
    var window_height = $(window).height();

    /* 
     * ヘッダーの半透明度を、スクロール量に比例して決定。 
     * ヘッダーが完全に見えなくなったら完全に透明になるように 
     * する。
     */
    var alpha = 1 - pos/window_height;

    /* jQueryのcss関数でヘッダーのCSSの背景色をいじる。  */
    $("div#header").css("opacity", alpha);
  });
}

/* ページ内リンクを自動スクロール */
function button_listener() {
  $(".scroll_link").click(function(e){

    /* 標準のリンククリック時の動作を無効化 */
    e.preventDefault();

    /* リンクのhrefからスクロール先のidを取得 */
    var target = $(this).attr("href");
    
    /* スクロール先の要素の、上から何ピクセルかを取得 */
    var offset = $(target).offset().top;

    /* navbarの分の90ピクセルをスクロール量から引く */
    var scroll_distance = offset - 90;

    /* 実際のスクロール動作 */
    $("body, html").animate({
      scrollTop: scroll_distance
    }, 1000);
  });
}

/* メンター画像のcarouselの部分 */
window.setInterval(function() {
  var $scroll_frame = $(".scroll_frame");
  if ($scroll_frame.scrollLeft() != 0)
    $scroll_frame.animate({scrollLeft: 0}, 1000);
  else
    $scroll_frame.animate({scrollLeft: $(window).width()}, 1000);
		console.log("----------")
		console.log($(window).width())
		console.log($().width())
}, 8000);
