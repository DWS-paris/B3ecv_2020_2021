var title = document.querySelector('h1');
var entrance = document.querySelector('#entrance')


window.addEventListener('scroll', function (event) { 
    if( window.scrollY === entrance.offsetTop ){
        entrance.classList.add('display');
        document.querySelector('#entrance h1').classList.add('animate__bounceInRight')

        setTimeout( function (){
            document.querySelector('#entrance h2').classList.add('display');
            document.querySelector('#entrance h2').classList.add('animate__bounceInUp');
        }, 500 )
    }
})

title.addEventListener('click', function(){
    title.classList.add('animate__flip');

    setTimeout( function (){
        title.classList.remove('animate__flip');
    }, 1000 )
})