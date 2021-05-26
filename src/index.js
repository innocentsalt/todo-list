import './style.css'

const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar')
const addProject = document.querySelector('.add-project')
const addProjectPopup = document.querySelector('.add-project-popup')
const addProjectCancel = document.querySelector('.form-container .cancel')
const projectTitle = document.querySelector('.project-title')
const addProjectOk = document.querySelector('.form-container .ok')
const userProjects = document.querySelector('.user-projects')

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

addProjectOk.addEventListener('click', () => {
  if (!projectTitle.value) return
  const project = document.createElement('li')
  project.classList.add('nav-item')
  const deleteProject = document.createElement('span')
  deleteProject.classList.add('material-icons', 'clickable')
  deleteProject.textContent = 'delete_outline'
  deleteProject.addEventListener('click', () => {
    userProjects.removeChild(project)
  })
  project.appendChild(deleteProject)
  const projectLink = document.createElement('a')
  projectLink.classList.add('nav-link')
  projectLink.setAttribute('href', '#')
  projectLink.textContent = projectTitle.value
  project.appendChild(projectLink)
  addProjectPopup.style.display = 'none'
  userProjects.appendChild(project)
  projectTitle.value = ''
})