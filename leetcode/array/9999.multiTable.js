/**
 * 9999.九九乘法表
 *
 * 描述：输出九九乘法表
 *
 */
const multiTable = function () {
  let table = new Array(10);
  for (let i = 1; i < table.length; i++) {
    table[i] = new Array(10);
  }

  for (let row = 1; row < table.length; row++) {
    for (let col = 1; col < table[row].length; col++) {
      table[row][col] = row * col;
      console.log(`${row}*${col}=${row * col}`);
    }
  }
};
