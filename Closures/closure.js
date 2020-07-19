/* ====== Counter Example ======
 
 Both the counter variable and logger method are private members and are still accessible
 outside the function(using the increment/decrement public methods) even though the scope
 is over. This concept of having access to variables even though the scope is over is called as Closures.
 Closures = functions + envrionment(local variable/methods that were in-scope at the time of closure was created)

*/

const counterObj = (function() {
	let counter = 0; // private variable

	// private method
	let log = function() {
		console.log("The value of counter is " + counter);
	}

	// Everything that we are returning in the object is public
	return {
		increment(){
			counter++;
			log();
		},

		decrement(){
			counter--;
			log();
		},
	};
})(); // IIFE: Immediately invoked function expression(Calling a function right when it's created)

console.dir(counterObj);
// Before the method calls:
// increment -> [[scopes]] -> Closure {counter: 0, logger: f()}
// decrement -> [[scopes]] -> Closure {counter: 0, logger: f()}

counterObj.increment();
counterObj.increment();
counterObj.decrement();

// After the method calls:
// increment -> [[scopes]] -> Closure {counter: 1, logger: f()}
// decrement -> [[scopes]] -> Closure {counter: 1, logger: f()}