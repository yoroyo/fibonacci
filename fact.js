'use strict';
const memo = new Map(); //連想配列 Map
memo.set(0,1);


function fact(n) {
    if (memo.has(n)) {
        return memo.get(n);
      } 
    const value = n * fact(n-1);
    memo.set(n, value);
    return value;
  }
  const length = 10;
  for (let i = 1; i <= length; i++) {
    console.log(fact(i));
  }