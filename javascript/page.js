const repasRecherche = window.location.search.split("=")[1];
const apiKey = "1df5cf61f212447095f3f5bee3952e05"
if(!((repasRecherche)) || repasRecherche.length != (repasRecherche).length){
    alert("arguments invalide");
    window.location.href = 'accueil.html';
}
console.log(window.location.search.split("=")[1]);

document.getElementById("rechercheRepas").textContent = repasRecherche
console.log(repasRecherche);
let real_list = document.getElementById("resultatRepas");
let list = document.createElement("table");

document.getElementById("retour").addEventListener("click", () => {
    window.location.href = 'accueil.html';
})

	
fetch("https://api.spoonacular.com/food/menuItems/search?apiKey="+ apiKey +"&query="+ repasRecherche)
    .then(function (result) {
		return result.json();
    })
	 .then(function (data) {
		let menuItems = data.menuItems;
		console.log(data.menuItems);
        let ligneTitre = document.createElement("thead");
        let titreRepas = document.createElement("th");
		let titreRestaurant = document.createElement("th");
        titreRepas.textContent = "Repas";
		titreRestaurant.textContent = "Restaurant";
		ligneTitre.appendChild(titreRestaurant);
        ligneTitre.appendChild(titreRepas);
        list.append(ligneTitre)
        for (let i = 0; i < menuItems.length; i++) {
            let ligne = document.createElement("tr");
            let repas = document.createElement("td");
			let restaurant = document.createElement("td");
            repas.textContent = menuItems[i].title;
			restaurant.textContent = menuItems[i].restaurantChain;
			ligne.appendChild(restaurant);
            ligne.appendChild(repas);	
            list.appendChild(ligne)
        }
    })

real_list.append(list)