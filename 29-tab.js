$('.list').click(function(e){
    탭열기(e.target.dataset.id);
});

function 탭열기(숫자){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}

// var car = ['소나타', 5000, 'white']; //array
// var car2 = {name: '소나타', price: 5000}; //object

// document.querySelector('car-title').innerHTML = car2['name'];

var car2 = {name: '소나타', price: [5000, 3000, 4000]};

document.querySelector('car-title').innerHTML = car2['name'];
document.querySelector('car-price').innerHTML = car2.price[0];