import { differenceInHours, differenceInDays } from 'date-fns'

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
    // Trigger localStorage
    updateLocalStorage()
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
    // Render all todos after clearing the todos
    todos.textContent = ''
    // If hamburger is active then, hide the nav-menu and add option to create new todo
    // expect Today, This week
    if (['Today', 'This week'].includes(project.title)) {
      addTodoContainer.style.display = 'none'
      todoList.projects.forEach(projectItem => {
        projectItem.todos.forEach(todoItem => {
          if (project.title === 'Today') {
            let hours = differenceInHours(new Date(), new Date(todoItem.dueDate))
            if (hours >= 0 && hours < 24) todos.appendChild(createTodoDom(todoItem, projectItem, true))
          } else if (project.title === 'This week') {
            let days = differenceInDays(new Date(), new Date(todoItem.dueDate))
            if (days >= 0 && days < 7) todos.appendChild(createTodoDom(todoItem, projectItem, true))
          }
        })
      })
    } else {
      addTodoContainer.style.display = 'block'
      todos.append(...project.todos.map(item => createTodoDom(item, project, false)))
    }
    sidebar.classList.toggle('active')
    hamburger.classList.toggle('active')
  })

  projectDom.appendChild(projectLink)
  addProjectPopup.style.display = 'none'

  return projectDom
}

function createTodoDom(todo, project, infoProject = false) {
  const todoDom = document.createElement('div')
  todoDom.classList.add('todo-container')
  const todoDelete = document.createElement('div')
  todoDelete.classList.add('material-icons', 'md-30', 'clickable')
  todoDelete.textContent = 'delete_outline'
  todoDelete.addEventListener('click', () => {
    // Remove the todo from DOM as well as from the respective project
    todos.removeChild(todoDom)
    project.remove(todo)
    // Trigger localStorage
    updateLocalStorage()
  })
  const todoTitle = document.createElement('div')
  todoTitle.classList.add('todo-title')
  todoTitle.textContent = todo.title
  if (infoProject) {
    todoTitle.textContent = ' [' + project.title + '] ' + todo.title
  }
  const todoComplete = document.createElement('div')
  todoComplete.classList.add('material-icons', 'md-30', 'clickable')
  todoComplete.textContent = todo.complete ? 'check_circle' : 'check_circle_outline'
  todoComplete.addEventListener('click', () => {
    // Toggle the complete status both DOM & todo object
    todo.complete = !todo.complete
    todoComplete.textContent = todo.complete ? 'check_circle' : 'check_circle_outline'
    // Trigger localStorage
    updateLocalStorage()
  })
  todoDom.append(todoDelete, todoTitle, todoComplete)
  return todoDom
}

function loadDefaultProjects() {
  const inbox = new Project('Inbox')
  const today = new Project('Today')
  const thisWeek = new Project('This week')

  todoList.add(inbox, today, thisWeek)

  /** Nothing great */
  const should = new Project('Should')
  should.add(new Todo('like the project if you really liked it'))
  should.add(new Todo('star the project on github if you like'))
  should.add(new Todo('provide the feedback if you feel')) 
  todoList.add(should)
  userProjects.appendChild(createProjectDom(should))

  defaultProjects.append(
    createProjectDom(inbox, true),
    createProjectDom(today, true),
    createProjectDom(thisWeek, true)
  )
}

function loadProjects() {
  todoList.projects.forEach(project => {
    if (['Inbox', 'Today', 'This week'].includes(project.title)) {
      defaultProjects.appendChild(createProjectDom(project, true))
    } else {
      userProjects.appendChild(createProjectDom(project))
    }
  })
}

// Hamburger listeners
hamburger.addEventListener('click', () => {
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
  const newProject = new Project(projectTitle.value, undefined, new Date(), false)
  todoList.add(newProject)
  userProjects.appendChild(createProjectDom(newProject))
  projectTitle.value = ''
  sidebar.classList.toggle('active')
  hamburger.classList.toggle('active')
  // Trigger localStorage
  updateLocalStorage()
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
  const newTodo = new Todo(todoTitle.value, todoDescription.value ?? 'No description added!', todoDueDate.value ?? new Date(), false)
  const project = todoList.projects.find(item => item.id === currentProject.id)
  project.add(newTodo)
  todos.appendChild(createTodoDom(newTodo, project))
  todoTitle.value = ''
  todoDescription.value = ''
  todoDueDate.value = ''
  addTodoPopup.style.display = 'none'
  // Trigger localStorage
  updateLocalStorage()
})

function updateLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList))
}

function setupLocalStorage() {
  if (localStorage.getItem('todoList')) {
    todoList.clear()
    // Retrive all projects along with todos
    const parsed = JSON.parse(localStorage.getItem('todoList'))
    parsed['_items'].forEach(projectItem => {
      const newProject = new Project(projectItem['_title'])
      projectItem['_items'].forEach(todoItem => {
        const newTodo = new Todo(
          todoItem['_title'],
          todoItem['_description'],
          new Date(todoItem['_dueDate']),
          todoItem['_complete']
        )
        newProject.add(newTodo)
      })
      todoList.add(newProject)
    })
    loadProjects()
  } else {
    loadDefaultProjects()
  }
}

setupLocalStorage()