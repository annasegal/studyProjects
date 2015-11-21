var calc = {};

calc.sum = function sum(n){
  if (n != 1)
    return n + sum(--n);
  return 1;
}


console.log(calc.sum(5));
