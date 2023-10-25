
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return matrix.map((a, index) => {
        return (index % 2 === 0) a: a.reverse();
  })
}
