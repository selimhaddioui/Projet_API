const nbCal = window.location.search.split("=")[1];
const apiKey = "1df5cf61f212447095f3f5bee3952e05"
if(!Number.isInteger(parseInt(nbCal)) || nbCal.length != parseInt(nbCal).toString().length){
    alert("arguments invalide");
    window.location.href = 'accueil.html';
}

document.getElementById("objectifCalorique").textContent = nbCal

let real_list = document.getElementById("resultatCalcul");
let list = document.createElement("table");

document.getElementById("retour").addEventListener("click", () => {
    window.location.href = 'accueil.html';
})

fetch("https://api.spoonacular.com/recipes/findByNutrients?apiKey=" + apiKey + "&minCalories=" + nbCal)
    .then(function (result) {
        return result.json();
    })
    .then(function (data) {
        let ligneTitre = document.createElement("thead");
        let titreNom = document.createElement("th");
        let titreCalories = document.createElement("th");
        let titreGlucide = document.createElement("th");
        let titreProteine = document.createElement("th");
        let titreGraisse = document.createElement("th");
        titreNom.textContent = "Repas";
        titreCalories.textContent = "Calories";
        titreGlucide.textContent = "Glucides";
        titreProteine.textContent = "Protéines";
        titreGraisse.textContent = "Graisses";
        ligneTitre.appendChild(titreNom);
        ligneTitre.appendChild(titreCalories); 
        ligneTitre.appendChild(titreGlucide);
        ligneTitre.appendChild(titreProteine); 
        ligneTitre.appendChild(titreGraisse);
        list.append(ligneTitre)
        for (let i = 0; i < data.length; i++) {
            let ligne = document.createElement("tr");
            let nom = document.createElement("td");
            let calories = document.createElement("td");
            let proteine = document.createElement("td");
            let glucide = document.createElement("td");
            let graisse = document.createElement("td");
            if(data[i].title.length > 32){
                let nomInfo = document.createElement("span");
                nomInfo.textContent = data[i].title;
                nom.textContent = data[i].title.substring(0, 32) + "...";
                nomInfo.classList.add("tooltiptext");
                nom.classList.add("tooltip");
                nom.appendChild(nomInfo);
            }else{
                nom.textContent = data[i].title;
            }
            calories.textContent = data[i].calories;
            proteine.textContent = data[i].protein;
            glucide.textContent = data[i].carbs;
            graisse.textContent = data[i].fat;
            ligne.appendChild(nom);
            ligne.appendChild(calories);
            ligne.appendChild(proteine);
            ligne.appendChild(glucide);
            ligne.appendChild(graisse);
            list.appendChild(ligne)
        }
    })

real_list.append(list)
