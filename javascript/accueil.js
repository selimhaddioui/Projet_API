let buttonObjCalorique = document.getElementById("btnObjectifCalorie")
let inputObjCalorique = document.getElementById("inputObjectifCalorie")
let buttonRec = document.getElementById("btnRechercher")
let inputrechercheRepas = document.getElementById("inputrechercheRepas")

function checkInput(input){
    let isEmpty = input.value.length === 0;
    let isNumeric = Number.isInteger(parseInt(input.value))
    if(isEmpty){
        input.border
    }
    return !isEmpty && isNumeric
}

buttonObjCalorique.addEventListener('click', () => {
    checkInput(inputObjCalorique)
    window.location.href = 'page2.html?cal=' + inputObjCalorique.value;
})

buttonRec.addEventListener('click', () => {
    window.location.href = 'page1.html?recherche=' + inputrechercheRepas.value;
})
