document.addEventListener('DOMContentLoaded', async () => {
    // Cette fonction s'execute de manière asyncrone
    checkTheme()

    let res = await fetch('./recettes.json') // On attends les recettes

    if (res.ok){
        let json = await res.json()

        let index = Math.floor(Math.random() * json.length) // on récupère un nombre aléatoire correspondant a un index dans la liste de recettes ( de 0 à list.length - 1 compris)

        document.querySelector('#header-background-img').setAttribute('src', `./src/img/plats/${json[index].image}`)
    }
    else alert('Impossible de charger recettes.json')
})

// Pour changer le theme
function switchTheme() {
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark')
        document.cookie = "t="
    }
    else{
        document.body.classList.add('dark')
        document.cookie = "t=d"
    }
}

// pour charger le theme à l'arrivée sur la page
function checkTheme() {
    if(document.cookie.startsWith('t=d'))
        document.body.classList.add('dark')
}