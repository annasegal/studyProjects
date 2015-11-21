function composer(name, a){ //function wich calls anonymus function

a(name);

}

composer('Abdullo', function(name){ //anonymus function
  alert("hello " + name );
});

var new_function = new Function('arg1, arg2', 'return arg1 + arg2'); // function creation from string

alert(new_function(10,20));
