document.addEventListener('DOMContentLoaded', async () => {
    
    let res = await fetch('./recettes.json')

    if (res.ok){
        let json = await res.json()

        let index = new URLSearchParams(window.location.search).get('index') // On récupère la valeur du paramètre index dans l'url
        
        if(index === null){
            alert('Aucun index de recette spécifié')
            return
        }

        let recipe = json[parseInt(index)]

        if(recipe === undefined){
            alert('La recette spécifiée n\'existe pas')
            return
        }
        
        // On formate la recette

        document.querySelector('#recipe-name').textContent = recipe.name
        document.querySelector('#recipe-author').innerHTML = `par <a href="${recipe.link}">${recipe.author || 'Unnamed'}</a>`
        document.querySelector('#recipe-image').style = `background-image: linear-gradient(180deg, #00000000 0%, #000000b0 100%), url('./src/img/plats/${recipe.image}')`

        let ingredients = recipe.ingredients
        let raw = ""
        
        ingredients.forEach(el => {
            raw += `<li><p>${el.name}</p><span>${el.quantity}</span></li>`        
        });

        document.querySelector('#recipe-ingredients').innerHTML = raw

        let steps = recipe.steps
        raw = ""
        steps.forEach(el => {
            raw += `<li>${el}</li>`
        });

        document.querySelector('#recipe-steps').innerHTML = raw
    }
    else alert('Impossible de charger recettes.json')
})