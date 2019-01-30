/**
 * Funcion que retorna la dirección final, basandose
 * en los si las filas|columnas son pares|impares y|o
 * iguales, mayores o menores
 *
 * @param int r numero de filas
 * @param {*} c numero de columnas
 * @return string
 */

function testCase(r, c) {
    if (isEven(c) && !isEven(r) && c > r) {
        return 'R';
    }

    if (!isEven(c) && !isEven(r) && c > r) {
        return 'R';
    }

    if (!isEven(c) && !isEven(r) && c == r) {
        return 'R';
    }

    if (!isEven(c) && !isEven(r) && c < r) {
        return 'D';
    }

    if (!isEven(c) && isEven(r) && c < r) {
        return 'D';
    }

    if (!isEven(c) && isEven(r) && c > r) {
        return 'L';
    }

    if (isEven(c) && isEven(r) && c > r) {
        return 'L';
    }

    if (isEven(c) && isEven(r) && c == r) {
        return 'L';
    }

    if (isEven(c) && !isEven(r) && c < r) {
        return 'U';
    }

    if (isEven(c) && isEven(r) && c < r) {
        return 'U';
    }
}

function isEven(val) {
    return val % 2 == 0;
}

$(document).ready(function() {
    $('#runTest').on('click', function(e) {
        e.preventDefault();
        var testInput = $('#test_input')
            .val()
            .split('\n');
        var numTest = parseInt(testInput[0]);
        var results = [];

        if (isNaN(testInput[0])) {
            return;
        }

        for (var i = 1; i <= numTest; i++) {
            if (testInput[i] !== undefined) {
                var nm = testInput[i].trim().split(' ');

                if (isNaN(nm[0]) || isNaN(nm[1])) {
                    continue;
                }

                results.push(testCase(parseInt(nm[0]), parseInt(nm[1])));
            }
        }

        $('#result').html(results.join('<br>'));
    });
});
