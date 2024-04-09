// 引用外部模块的 str 变量
const npm_package_exmaple = require('./src/npm_package_exmaple')

function printf_npm_package_exmaple() {
  return npm_package_exmaple.str
}

console.log('[console.log(printf_npm_package_exmaple())] → ', printf_npm_package_exmaple())

// 导出本模块的 str 变量
module.exports = {
  printf_npm_package_exmaple
}