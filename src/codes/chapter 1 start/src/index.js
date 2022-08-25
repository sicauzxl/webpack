/*
 * @Author: sicauzxl@qq.com
 * @Date: 2022-08-25 15:50:35
 * @LastEditors: sicauzxl@qq.com
 * @LastEditTime: 2022-08-25 15:54:37
 * @Description: file content
 */
import _ from 'lodash';
function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());