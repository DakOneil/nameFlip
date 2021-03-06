document.querySelector('#doTheThing').addEventListener('click', flipTheName)
document.querySelector('#home').addEventListener('click', homeRefresh)

async function flipTheName() {
    const firstName = document.querySelector('#firstName').value 
    const lastName = document.querySelector('#lastName').value 

    function splitName(name) {
        const vowels = 'aeiou'
        let initEnd = name.split('').findIndex(x=>vowels.includes(x))
        let init = name.slice(0,initEnd)
        let leftover = name.slice(initEnd)
        return [init, leftover]
    }

    const firstInit = splitName(firstName)[0]
    const firstLeftover = splitName(firstName)[1]
    const lastInit = splitName(lastName)[0]
    const lastLeftover = splitName(lastName)[1]

    let flippedName = `${lastInit}${firstLeftover} ${firstInit}${lastLeftover}`

    document.getElementById('introToName').innerText = `Your flipped name is:`
    document.getElementById('flippedName').innerText = `${flippedName}`

    document.getElementById('introToName').classList.remove('hidden')
    document.getElementById('flippedName').classList.remove('hidden')
}

async function homeRefresh() {
    location.reload()
}