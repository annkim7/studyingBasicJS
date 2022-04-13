$('.list').click(function(e){
    탭열기(e.target.dataset.id);
});

function 탭열기(숫자){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}

var car = ['소나타', 5000, 'white']; //array
var car2 = {name: '소나타', price: 5000}; //object

//과제
$('.name').text(car2.name);
$('.price').text(car2.price);