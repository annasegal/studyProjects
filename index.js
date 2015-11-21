(function(){

var checkAge2 = function(age) { //Function Expression
  age = age || 10;
  return (age > 18) ? true : confirm('Родители разрешили?');
};

function checkAge(age) { //Function Declaration
  age = age || 10;
  return (age > 18) ? true : confirm('Родители разрешили?');
}


})();

checkAge();
