$('.list').click(function(e){
    탭열기(e.target.dataset.id);
});

function 탭열기(숫자){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}

//과제
// $('.form2').css('display', 'none');
// $('.form-select').click(function(){
//     $('.form2').css('display', 'block');
// });

$('.form-select').eq(0).on('input', function(e){
    var value = e.currentTarget.val();

    if(value == '셔츠'){
        $('.form-select').eq(1).removeClass('form-hide');
    }
});

