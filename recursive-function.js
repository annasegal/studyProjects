function sumToN(n) {
  if (n != 1)
    return n + sumToN(--n);
  return 1;
}

function sum(n) {
var sum = 0 ;

while(n){
  sum += n
  n--
}

return sum
}

console.log(sum(5));
