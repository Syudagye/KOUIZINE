document.addEventListener('DOMContentLoaded', async () => {
    
    let res = await fetch('./recettes.json')

    if (res.ok){
        let json = await res.json()

        let raw = ""
        for (let i = 0; i < json.length; i++) { // Pour chaque recette, on crée une ligne dans la table. ici on a besoin de l'index a chaque tour donc on préfère une boucle for à un boucle forEach
            const el = json[i];
            console.log(el);
            raw += `<tr class=\"recipe-tab\" onclick=\"window.location.href = \'/recette.html?index=${i}\'\">`
            raw += `<td class=\"recipe-name\">${el.name}</td>`
            raw += `<td class=\"centered\">${el.author}</td>`
            raw += `<td class=\"centered\">${el.steps.length}</td>`
            raw += `<td class=\"centered\">${el.mark} / 10</td>`
            raw += `</tr>`
        }

        document.querySelector('#recipe-list').innerHTML = raw
    }
    else alert('Impossible de charger recettes.json')
})