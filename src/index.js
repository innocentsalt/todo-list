import './style.css'
import { Project } from './logic/Project'
import { TodoList } from './logic/TodoList'
import { Todo } from './logic/Todo'

const todoList = new TodoList()

const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar')

const userProjects = document.querySelector('.user-projects')
const defaultProjects = document.querySelector('.default-projects')
const currentProject = document.querySelector('.current-project')
const addTodoContainer = document.querySelector('.add-todo-container')
const maincontent = document.querySelector('.main-content')
const todos = document.querySelector('.todos')
const disableDiv = document.querySelector('.disable-div')

// Project
const addProject = document.querySelector('.add-project')
const addProjectPopup = document.querySelector('.add-project-popup')
const addProjectCancel = document.querySelector('.form-container .cancel')
const projectTitle = document.querySelector('.project-title')
const addProjectOk = document.querySelector('.form-container .ok')

// Todo
const addTodo = document.querySelector('.add-todo')
const addTodoPopup = document.querySelector('.add-todo-popup')
const addTodoClose = document.querySelector('.form-container .close')
const todoTitle = document.querySelector('.todo-title')
const todoDescription = document.querySelector('.todo-description')
const todoDueDate = document.querySelector('.todo-duedate')
const addTodoSave = document.querySelector('.form-container .save')

function createProjectDom(project, isDefault=false) {
  const projectDom = document.createElement('li')
  projectDom.setAttribute('id', project.id)
  projectDom.classList.add('nav-item')
  const deleteProject = document.createElement('span')
  deleteProject.classList.add('material-icons', 'clickable')
  deleteProject.textContent = 'delete_outline'
  deleteProject.addEventListener('click', () => {
    // Remove from sidebar
    userProjects.removeChild(projectDom)
    // If it's the current project clear todos both from DOM and todoList
    todoList.remove(project)
    currentProject.textContent = ''
    todos.textContent = ''
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
        currentProject.setAttribute('id', project.id)
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
    todos.textContent = ''
    todos.append(...project.items.map(createTodoDom))
  })
  projectDom.appendChild(projectLink)
  addProjectPopup.style.display = 'none'

  return projectDom
}

function createTodoDom(todo, project) {
  const todoDom = document.createElement('div')
  todoDom.classList.add('todo-container')
  const todoDelete = document.createElement('div')
  todoDelete.classList.add('material-icons', 'md-30', 'clickable')
  todoDelete.textContent = 'delete_outline'
  todoDelete.addEventListener('click', () => {
    // Remove the todo from DOM as well as from the respective project
    todos.removeChild(todoDom)
    project.remove(todo)
  })
  const todoTitle = document.createElement('div')
  todoTitle.classList.add('todo-title')
  todoTitle.textContent = todo.title
  const todoComplete = document.createElement('div')
  todoComplete.classList.add('material-icons', 'md-30', 'clickable')
  todoComplete.textContent = 'check_circle_outline'
  todoComplete.addEventListener('click', () => {
    // Toggle the complete status both DOM & todo object
    todo.complete = !todo.complete
    todoComplete.classList.toggle('complete')
  })
  todoDom.append(todoDelete, todoTitle, todoComplete)
  return todoDom
}

function loadDefaultProjects() {
  const inbox = new Project('Inbox')
  const today = new Project('Today')
  const thisWeek = new Project('This week')

  todoList.add(inbox, today, thisWeek)

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

// Project event listeners
addProject.addEventListener('click', () => {
  disableDiv.style.display = 'block'
  addTodoPopup.style.display = 'none'
  addProjectPopup.style.display = 'block'
  sidebar.classList.toggle('active')
  hamburger.classList.toggle('active')
})

addProjectCancel.addEventListener('click', () => {
  disableDiv.style.display = 'none'
  projectTitle.value = ''
  addProjectPopup.style.display = 'none'
  sidebar.classList.toggle('active')
  hamburger.classList.toggle('active')
})

addProjectOk.addEventListener('click', () => {
  if (!projectTitle.value) return
  disableDiv.style.display = 'none'
  const newProject = new Project(projectTitle.value)
  todoList.add(newProject)
  userProjects.appendChild(createProjectDom(newProject))
  projectTitle.value = ''
  sidebar.classList.toggle('active')
  hamburger.classList.toggle('active')
})


// Todo event listeners
addTodo.addEventListener('click', () => {
  addProjectPopup.style.display = 'none'
  disableDiv.style.display = 'block'
  addTodoPopup.style.display = 'block'
})

addTodoClose.addEventListener('click', () => {
  todoTitle.value = ''
  todoDescription.value = ''
  todoDueDate.value = ''
  addTodoPopup.style.display = 'none'
  disableDiv.style.display = 'none'
})

addTodoSave.addEventListener('click', () => {
  if (!todoTitle.value) return
  disableDiv.style.display = 'none'
  const newTodo = new Todo(todoTitle.value, todoDescription.value, todoDueDate.value)
  const project = todoList.items.find(item => item.id === currentProject.id)
  project.add(newTodo)
  todos.appendChild(createTodoDom(newTodo, project))
  todoTitle.value = ''
  todoDescription.value = ''
  todoDueDate.value = ''
  addTodoPopup.style.display = 'none'
})

loadDefaultProjects()