import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Contagem Positiva ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export function setupCounterMinus(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Contagem Negativa ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter - 1))
  setCounter(0)
}

setupCounter(document.querySelector('#counter'))
setupCounterMinus(document.querySelector('#counterminus'))

