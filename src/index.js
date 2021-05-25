import './style.css'

const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar')

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active')
  hamburger.classList.toggle('active')
})