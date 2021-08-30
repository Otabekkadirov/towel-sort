// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) {
        return [];
    }
    let result = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            let currentIndex =
                row % 2 === 0 ? column : matrix[row].length - 1 - column;
            result.push(matrix[row][currentIndex]);
        }
    }
    return result;
};
