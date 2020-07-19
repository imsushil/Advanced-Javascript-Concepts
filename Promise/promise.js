/**
 * Promises
 * A promise is an object that may produce a single value some time in the future
 * : either a resolved value, or a reason that it's not resolved (e.g., a network error occurred).
 * A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
 * 
 * It avoids callback hell.
 */

const createPromise = () => {
	const promise = new Promise((resolve, reject) => {
		// simulating a http call
		setTimeout(() => {
			resolve(10);
		}, 2000);
	});
	return promise;
}

const createAnother = () => {
	const anotherPromise = new Promise((resolve, reject) => {
		// simulating a http call
		// rejecting will
		setTimeout(() => {
			reject(20);
		}, 2000);
	});
	return anotherPromise;
}


createPromise().then(data => {
	console.log(`Resolved: ${data}`);
	return createAnother();
})
.then(data => {
	console.log(`Resolved: ${data * 2}`);
})
.catch(error => {
	console.error(`Rejected: ${error}`);
});