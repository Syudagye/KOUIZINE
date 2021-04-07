document.addEventListener('DOMContentLoaded', async () => {
    
    let res = await fetch('./recettes.json')

    if (res.ok){
        let json = await res.json()

        let raw = ""
        for (let i = 0; i < json.length; i++) {
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