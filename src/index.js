import './style.css'

const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar')
const addProject = document.querySelector('.add-project')
const addProjectPopup = document.querySelector('.add-project-popup')
const addProjectCancel = document.querySelector('.form-container .cancel')
const projectTitle = document.querySelector('.project-title')

hamburger.addEventListener('click', () => {
  if (addProjectPopup.style.display !== 'none') {
    addProjectPopup.style.display = 'none'
  }
  sidebar.classList.toggle('active')
  hamburger.classList.toggle('active')
})

addProject.addEventListener('click', () => {
  addProjectPopup.style.display = 'block'
  if (sidebar.classList.contains('active')) {
    sidebar.classList.toggle('active')
    hamburger.classList.toggle('active')
  }
})

addProjectCancel.addEventListener('click', () => {
  projectTitle.value = ''
  addProjectPopup.style.display = 'none'
  sidebar.classList.toggle('active')
  hamburger.classList.toggle('active')
})