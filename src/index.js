module.exports = function zeros(expression) {

    let Arr = expression.split("*");
    let Count = 0;

    let Result = Arr.reduce((prev, curr) => {
            let currentRes;
    if (curr.includes('!!')) {
        currentRes = _doubleFactorial(curr.slice(0, -2));
    }
    else {
        currentRes = _factorial(curr.slice(0, -1));
    }
    return multiply(prev, currentRes);
}, '1');

    function _factorial(m) {
        if (+m == 1){
            return '1'
        } else{
            return multiply(_factorial((m - 1) + ''), m);
        }
    }

    function _doubleFactorial(m) {
        if (+m % 2 == 0) {
            if(+m == 2){
                return '2'
            } else {
                return multiply(_doubleFactorial((m - 2) + ''), m);
            }
        }
        else {
            if(+m == 1){
                return '1';
            } else {
                return multiply(_doubleFactorial((m - 2) + ''), m);
            }
        }
    }

    for(let i = Result.length - 1; i >= 0; i--) {
        if (Result[i] == '0') {
            Count++;
        }
        else {
            break;
        }
    }
    return Count;
}

function multiply(first, second) {
    let Arr = [];

    first = first.split('');
    second = second.split('');

    first.reverse();
    second.reverse();

    for(let i = 0; first[i] >= 0; i++) {
        for (let j = 0; second[j] >= 0; j++) {
            if (!Arr[i + j]) Arr[i + j] = 0;
            Arr[i + j] += first[i] * second[j];
        }
    }

    for(let i = 0; Arr[i] >= 0; i++) {
        if (Arr[i] >= 10) {
            if (!Arr[i + 1]) Arr[i + 1] = 0;
            Arr[i + 1] += parseInt(Arr[i] / 10);
            Arr[i] %= 10;
        }
    }

    Arr.reverse();
    return Arr.join('');
}