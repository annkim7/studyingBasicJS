//버튼 0 누르면
//- 모든 버튼에 붙은 orange 클래스명 제거
//- 버튼 0에 orange 클래스명 추가
//- 모든 div에 붙은 show 클래스명 제거
//- div0에 show 클래스명 추가

$('.tab-button').eq(0).on('click', function(){
    //과제
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(0).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(0).addClass('show');
});
//과제
$('.tab-button').eq(1).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(1).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(1).addClass('show');
});
//과제
$('.tab-button').eq(2).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(2).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(2).addClass('show');
});