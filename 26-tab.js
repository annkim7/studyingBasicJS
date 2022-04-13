
// for(let i = 0; i<3; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         탭열기(i)
//     });
// }

$('.list').click(function(e){
    //지금 누른게 버튼0이면 탭열기(0)
    //지금 누른게 버튼1이면 탭열기(1)
    //지금 누른게 버튼2이면 탭열기(2)

    // if(e.target == document.querySelectorAll('.tab-button')[0]){
    //     탭열기(0);
    // }
    // if(e.target == document.querySelectorAll('.tab-button')[1]){
    //     탭열기(1);
    // }
    // if(e.target == document.querySelectorAll('.tab-button')[2]){
    //     탭열기(2);
    // }

    탭열기(e.target.dataset.id);
});


// console.log(document.querySelector('.tab-button').dataset.id);

function 탭열기(숫자){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}