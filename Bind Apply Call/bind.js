
const person = {
	name: 'John',
	greeting(greetmsg, botname) {
		console.log(greetmsg + " " + this.name + ". I'm " + botname + ', a chatbot.');
	}
};

person.greeting("Hello");

const boundFunc = person.greeting.bind({name: 'Sushil'});
boundFunc("Good Morning!", "Akula");