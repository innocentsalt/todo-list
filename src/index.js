import './style.css'
import { Project } from './logic/Project'
import { TodoList } from './logic/TodoList'
import { Todo } from './logic/Todo'

const todoList = new TodoList()

const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar')
const addProject = document.querySelector('.add-project')
const addProjectPopup = document.querySelector('.add-project-popup')
const addProjectCancel = document.querySelector('.form-container .cancel')
const projectTitle = document.querySelector('.project-title')
const addProjectOk = document.querySelector('.form-container .ok')
const userProjects = document.querySelector('.user-projects')
const defaultProjects = document.querySelector('.default-projects')
const currentProject = document.querySelector('.current-project')
const addTodoContainer = document.querySelector('.add-todo-container')
const maincontent = document.querySelector('.main-content')

function createProjectDom(project, isDefault=false) {
  const projectDom = document.createElement('li')
  projectDom.classList.add('nav-item')
  const deleteProject = document.createElement('span')
  deleteProject.classList.add('material-icons', 'clickable')
  deleteProject.textContent = 'delete_outline'
  deleteProject.addEventListener('click', () => {
    // Remove from sidebar
    userProjects.removeChild(projectDom)
    // If its the current project clear todos both from DOM and todoList
    todoList.remove(project)
    currentProject.textContent = ''
    addTodoContainer.style.display = 'none'
  })
  if (!isDefault) {
    projectDom.appendChild(deleteProject)
  }
  const projectLink = document.createElement('a')
  projectLink.classList.add('nav-link')
  projectLink.setAttribute('id', project.id)
  projectLink.setAttribute('href', '#')
  projectLink.textContent = project.title.slice(0, 10)
  projectLink.addEventListener('click', () => {
    // Mark it as current project
    const allProjects = document.querySelectorAll('.nav-link')
    allProjects.forEach(link => {
      if (link.id !== projectLink.id) {
        link.classList.remove('active')
      } else {
        link.classList.add('active')
        currentProject.textContent = link.textContent
      }
    })
    // If hamburger is active then, hide the nav-menu and add option to create new todo
    // expect Today, This week
    if (['Today', 'This week'].includes(project.title)) {
      addTodoContainer.style.display = 'none'
    } else {
      addTodoContainer.style.display = 'block'
    }
    sidebar.classList.toggle('active')
    hamburger.classList.toggle('active')
    // Render all todos for that project
  })
  projectDom.appendChild(projectLink)
  addProjectPopup.style.display = 'none'

  return projectDom
}

function loadDefaultProjects() {
  const inbox = new Project('Inbox')
  const today = new Project('Today')
  const thisWeek = new Project('This week')

  defaultProjects.append(
    createProjectDom(inbox, true),
    createProjectDom(today, true),
    createProjectDom(thisWeek, true)
  )
}

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
  const newProject = new Project(projectTitle.value)
  todoList.add(newProject)
  userProjects.appendChild(createProjectDom(newProject))
  projectTitle.value = ''
  sidebar.classList.toggle('active')
  hamburger.classList.toggle('active')
})

loadDefaultProjects()