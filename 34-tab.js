$('.list').click(function(e){
    탭열기(e.target.dataset.id);
});

function 탭열기(숫자){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}

var pants = [28, 30, 32, 34];
var shirts = [95, 100, 105];

$('.form-select').eq(0).on('input', function(){
    var value = this.value;

    if(value == '셔츠'){
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        shirts.forEach((b) => {
            $('.form-select').eq(1).append(`<option>${b}</option>`);
        });

    } else if(value == '바지'){
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        pants.forEach(function(a){
            $('.form-select').eq(1).append(`<option>${a}</option>`);
        });
    }

    
});

var obj = {name : 'kim', age: 20};

for(var key in obj){
    console.log(obj[key]);
}
