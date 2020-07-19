
const debounce = (fn, delay) => {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fn(...args);
		}, delay);
	}
}


document.querySelector("#my-btn").addEventListener('click', debounce((e) => {
	console.log("Button clicked!");
}, 2000));