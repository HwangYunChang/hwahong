$(function(){
  //윈도우 스크롤 이벤트 발생
    //scrollTop량이 header의 offset().top위치보다 클때<<조건
    //참:header에 sticky 클래스명 추가
    //거짓:header에 sticky 클래스명 삭제
    let $win = $(window),
        headerTop=$('header').offset().top

    $win.scroll(function(){
      if($win.scrollTop() > headerTop) {
        //조건이 true일때 실행문
        $('header').addClass('sticky');
      } else {
        $('header').removeClass('sticky');
      } 

    });

});