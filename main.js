window.addEventListener("load", main)

// On crée un tableau qui va stocker les personnes
let people = [];

// On crée un tableau html
let table = document.createElement("table")

function main()
{
	document.body.appendChild(table);

	//Génère 50 identités
	for(let i = 0; i < 50; i++)
		
	{
		// Génère 1 identité
		let person =
		{
			last : faker.fake("{{name.lastName}}"),
			first : faker.fake("{{name.firstName}}"),
			age : randRange(18, 100),
			job : faker.fake("{{name.jobTitle}}"),
			tel : faker.fake("{{phone.phoneNumberFormat}}"),
			address : faker.fake("{{address.streetAddress}}, {{address.country}}")
		};

		// On stocke les personnes dans people
		people.push(person);
	}
	afficherTableau();
}


function randRange(min, max){
	// Permet de générer des éléments aléatoires

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function afficherTableau()
{
	// Permet d'effacer le contenu du tableau à chaque fois que la fonction est rappelée
	table.innerHTML = "";

	// On met les boutons en ligne
	let buttonsOnLine = document.createElement("tr");

	// Va nous renvoyer les noms des propriétés de people
	let peoplePropertyName = Object.keys(people[0]);

	// Pour chaque propriété
	for(let propertyName of peoplePropertyName)
	{
		// Va mettre un bouton pour chaque colonne que l'on va créer
		let cellButtons = document.createElement("td");

		// On crée ce bouton
		let button = document.createElement("button");

		// On écrit son nom
		button.innerText = propertyName;

		// Lorsqu'on clique sur le bouton
		button.onclick = () =>
		{
			// On peut trier la colonne
			people.sort((a, b) => 
			{
				return a[propertyName] > b[propertyName];
			});
			// On réaffiche alors la page avec la colonne triée
			afficherTableau();
		}

		// Ajoute le bouton à la cellule
		cellButtons.appendChild(button);

		// Ajoute la cellule contenant les boutons à la ligne
		buttonsOnLine.appendChild(cellButtons);
	}
	// Ajoute la ligne au tableau
	table.appendChild(buttonsOnLine);

	// Boucle sur tous les éléments du tableau qui pour chaque personne dans le tableau crée une ligne
	for(let person of people)
	{
		let line = document.createElement("tr");

		// Boucle sur les propriétés des objets qui pour chaque personne crée une cellule
		for(let property in person)
		{
			let cell = document.createElement("td");
			cell.textContent = person[property];
			line.appendChild(cell); // Ajoute la cellule à la ligne
		}
		// Ajoute la ligne au tableau
		table.appendChild(line);
	}
}