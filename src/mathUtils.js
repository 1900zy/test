// 创建一个工具类
function add(num1, num2) {
  return num1 + num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

// CommonJS模块化写法,导出方法
module.exports = {
  add,
  mul
}