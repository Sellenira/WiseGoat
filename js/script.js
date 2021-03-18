const conselho = document.querySelector('h3')
const imagem = document.getElementById('imagem');
const btn = document.getElementById('btn');

const advRequest = new Request('https://api.adviceslip.com/advice')

function adv() {
    fetch(advRequest)
        .then(res => res.json())
            .then(final => {
                let conselhoBode = final.slip.advice;
                conselho.innerText = `"${conselhoBode}"`
            })
}

adv()