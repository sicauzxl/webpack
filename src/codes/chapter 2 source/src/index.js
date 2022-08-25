/*
 * @Author: sicauzxl@qq.com
 * @Date: 2022-08-25 15:50:35
 * @LastEditors: sicauzxl@qq.com
 * @LastEditTime: 2022-08-25 16:21:29
 * @Description: file content
 */
import './style.css';
import _ from 'lodash';
import Icon from './icon.jpg';
function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());