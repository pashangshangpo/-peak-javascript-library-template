'use strict';

/**
 * @file index
 * @author xiaozhihua
 * @date 2018-11-24 20:56:27
 */

var index = {
  sayHello: msg => {
    console.log(`hello ${msg}`);
  },
  count: (a, b) => {
    return a + b
  }
};

module.exports = index;
