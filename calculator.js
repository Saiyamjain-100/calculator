(function () {
    let screen = document.querySelector('.screen')
    let button = document.querySelector('.btn')
    let button = document.querySelector('.equal')


    button.forEach(function (button) {
        button.addEventListner('click', function (e) {
            let v = e.target.dataset.action;
            screen.v += v;
        })
    });
    equal.addEventListner('click', function (e) {
        if (screen.v == '') {
            screen.v = 'enter some number';
        }
        else {
            let answer = eval(screen.v);
            screen, v = answer;
        }
    })
})();
