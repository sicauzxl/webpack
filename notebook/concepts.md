<!--
 * @Author: zhuxilong@bytedance.com
 * @Date: 2022-08-25 15:04:51
 * @LastEditors: sicauzxl@qq.com
 * @LastEditTime: 2022-08-25 15:47:26
 * @Description: file content
-->
# Concepts
## entry
>An entry point indicates which module webpack should use to begin building out its internal dependency graph. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

>By default its value is ./src/index.js, but you can specify a different (or multiple) entry points by setting an entry property in the webpack configuration. For example:\

**webpack.config.js**

    module.exports = {
     entry: './path/to/my/entry/file.js',
    };

entry就是webpack打包的入口，默认在```./src/index.js```下,也可以在webpack的配置文件中配置，可以是一个也可以是多个

## output
