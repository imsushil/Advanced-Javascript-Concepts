
const throttle = (fn, delay) => {
	let last = 0;
	return (...args) => {
		const now = new Date().getTime();
		if(now - last < delay) return;
		fn(...args);
		last = now;
	}
}

document.querySelector("#my-btn").addEventListener('click', throttle((e) => {
	console.log("Button clicked");
}, 2000));