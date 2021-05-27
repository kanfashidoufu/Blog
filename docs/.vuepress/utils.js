/*
 * @Date: 2021-05-27 11:44:09
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2021-05-27 15:31:11
 * @Description: 生成sidebar工具函数
 */
const fs = require('fs');
const path = require('path');
const getFile = (prefixPath) => {
  return fs.readdirSync(path.join(process.cwd(), '/docs' + prefixPath))
           .map(item => `${prefixPath}/${item.replace('.md', '')}`)
}

const createSideBarConfig = (title, prefixPath, collapsable = true) => {
  return  {
    title,
    collapsable,
    children: getFile(prefixPath)
  }
}

module.exports = {
  createSideBarConfig
}
