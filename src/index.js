
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    return matrix.map((a, index) => {
        if (index % 2 === 0) return a;
        return a.reverse();
  }).flat()
}
