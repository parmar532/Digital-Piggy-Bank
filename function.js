// Self invoked function
(function(a) {
    console.log("Self function");
    return a * a;
})(5);

// Constructor function
var cCal = new Function("a", "return a*a;");

// Named Function
function nadd(a, b) {
    return a + b;
}

// Anonymous Function
var addd = function(a, g) { return a + g; };

// Print in web console
console.log(nadd(9, 1));

var add = (function() {
    var counter = 0;
    return function() { return counter += 1; }
})();