// Generar Frase Aleatoria

/* 
Pagina que cuando, yo le de a un boton me genere
una frase aleatoria. 
*/

const resultado = document.querySelector('#resultado')
const btnGenerar = document.querySelector('#btn-generar')

const frases = [
  'Lo unico que se es que no se nada',
  'A la prima se le arrima',
  'Ganaste el juego',
  'Primero pienso, luego existo',
  'Bien jugado'
]

btnGenerar.addEventListener('click', () => {
  const numeroAleatorio = Math.floor(Math.random() * 5)
  resultado.textContent = frases[numeroAleatorio]
})