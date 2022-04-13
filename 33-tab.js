$('.list').click(function(e){
    탭열기(e.target.dataset.id);
});

function 탭열기(숫자){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}

$('.form-select').eq(0).on('input', function(e){
    var value = $(e.currentTarget).val();

    if(value == '셔츠'){
        $('.form-select').eq(1).removeClass('form-hide');
        //과제
        var 템플릿1 = `<option>95</option><option>100</option>`;
        $('.form-select').eq(1).html(템플릿1);
    } else if(value == '바지'){
        $('.form-select').eq(1).removeClass('form-hide');
        var 템플릿 = `<option>28</option><option>30</option>`;
        $('.form-select').eq(1).html(템플릿);
    }
});

// var a = document.createElement('p');
// a.innerHTML = '안녕';
// document.querySelector('#test').appendChild(a);

// var 템플릿 = '<p>안녕</p>';
// document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿); //하단에 생성
// $('#test').append(템플릿);
//document.querySelector('#test').innerHTML = 템플릿;//갈아치움
//$('#test').html(템플릿);