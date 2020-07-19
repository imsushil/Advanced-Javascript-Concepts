const person = {
	name: 'John',
	greeting(greetmsg, botname) {
		console.log(greetmsg + " " + this.name + ". I'm " + botname + ', a chatbot.');
	}
};

person.greeting("Hello");

person.greeting.call({name:'Sushil'}, "Good Afternoon!", "Akula");