function testCase(n, m) {
    if (n == 1) {
        return 'R';
    }

    if (m == 1) {
        return 'D';
    }

    /**
     * se llama a la funcion recursiva
     */
    var result = tryMove(0, 0, n, m, 'R');
    return result[result.length - 1]['direction'];
}

/**
 *
 * @param int x Posicion en x del elemento que se esta validando
 * @param int y Posicion en y del elemento que se esta validando
 * @param int n Número de filas del grid
 * @param int m Número de columnas del grid
 * @param string direction Dirección a la que se quiere desplazar
 * @param array store Colección de objetos para controlar las coliciones
 * @return array
 */

function tryMove(x, y, n, m, direction, store = []) {
    if (store.length == n * m) {
        return store;
    }

    var canMove = false;

    if (canMoveToCoordenates(x, y, n, m, store)) {
        canMove = true;
        store = saveToStore(x, y, direction, store);
    }

    if (direction == 'R') {
        if (canMove) {
            return tryMove(x, y + 1, n, m, direction, store);
        }

        return tryMove(x + 1, y - 1, n, m, 'D', store);
    }

    if (direction == 'D') {
        if (canMove) {
            return tryMove(x + 1, y, n, m, direction, store);
        }

        return tryMove(x - 1, y - 1, n, m, 'L', store);
    }

    if (direction == 'L') {
        if (canMove) {
            return tryMove(x, y - 1, n, m, direction, store);
        }

        return tryMove(x - 1, y + 1, n, m, 'U', store);
    }

    if (direction == 'U') {
        if (canMove) {
            return tryMove(x - 1, y, n, m, direction, store);
        }

        return tryMove(x + 1, y + 1, n, m, 'R', store);
    }
}

/**
 * Función para guardar objectos en la colección
 *
 * @param int x Posicion en x del elemento que se esta guardand
 * @param int y Posicion en y del elemento que se esta guardand
 * @param string direction Dirección de la posición
 * @param array store Colección de objetos
 * @return array
 */
function saveToStore(x, y, direction, store) {
    store.push({ x: x, y: y, direction: direction });
    return store;
}

/**
 * Función para validar si nos podemos desplazar a las coordenas (x, y)
 *
 * @param int x Posicion en x del elemento que se esta guardand
 * @param int y Posicion en y del elemento que se esta guardand
 * @param string direction Dirección de la posición
 * @param array store Colección de objetos
 * @return boolean
 */
function canMoveToCoordenates(x, y, n, m, store) {
    if (x < 0 || x > n - 1) {
        return false;
    }

    if (y < 0 || y > m - 1) {
        return false;
    }

    if (onStore(x, y, store)) {
        return false;
    }

    return true;
}

/**
 * Función para validar si las coordenas (x, y)
 * existe en la colección de objetos
 *
 * @param int x Posicion en x del elemento que se esta guardand
 * @param int y Posicion en y del elemento que se esta guardand
 * @param string direction Dirección de la posición
 * @param array store Colección de objetos
 * @return boolean
 */
function onStore(x, y, store) {
    let check = store.find(function(item) {
        return item.x == x && item.y == y;
    });

    return check === undefined ? false : true;
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
