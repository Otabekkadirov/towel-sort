// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            result.push(matrix[row][column]);
        }
    }
    return result;
};
