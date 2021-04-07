document.addEventListener('DOMContentLoaded', async () => {

    checkTheme()

    let res = await fetch('./recettes.json')

    if (res.ok){
        let json = await res.json()

        let index = Math.floor(Math.random() * json.length)
        console.log(index);

        document.querySelector('#header-background-img').setAttribute('src', `./src/img/plats/${json[index].image}`)
    }
    else alert('Impossible de charger recettes.json')
})

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

function checkTheme() {
    if(document.cookie.startsWith('t=d'))
        document.body.classList.add('dark')
}