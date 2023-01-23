const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    console.log(e.results[0][0].transcript)
    chute = e.results[0][0].transcript
    if (chute === "game over") {
        document.body.innerHTML = `
        <h2>GAME OVER</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else {
        exibeChuteNaTela(chute) 
        verSeChuteTemValorValido(chute)
    }

}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())