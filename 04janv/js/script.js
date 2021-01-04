document.addEventListener('DOMContentLoaded', () => {
    const hideAll = () => {
        localStorage.removeItem('color');
        document.querySelector('body').classList.remove('green', 'yellow', 'red', 'blue');
        let articles = document.querySelectorAll('article');
        for( let article of articles ){ article.classList.remove('display') };
    }

    const displayColor = color => {
        document.querySelector('body').classList.add(color);
        document.querySelector(`#${color}`).classList.add('display');
        localStorage.setItem('color', color)
    }

    document.querySelector('select').addEventListener('change', event => {
        hideAll()
        if( event.target.value !== "NULL" ){ displayColor(event.target.value) };
    })

    if( localStorage.getItem('color') !== null ){ displayColor(localStorage.getItem('color')) }
});