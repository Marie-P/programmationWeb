window.addEventListener("load", main)

var people = [];

function main()
{
	console.log(faker.fake("{{name.lastName}}"));
}

