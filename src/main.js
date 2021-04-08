// 整个程序入口 main.js
// 想要用mathUtils工具类中的某些方法,导入这些方法
// 1. 利用CommonJS规范导入
const { add, mul } = require('./mathUtils.js')

// 导入方法后使用
console.log(add(20, 30));
console.log(mul(20, 30));

// 2. 使用ES6规范导入
import { name, age, tall } from './info'

// 使用导入的变量
console.log(name);
console.log(age);
console.log(tall);