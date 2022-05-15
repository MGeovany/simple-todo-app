/* globals addEventListener */

const tasksList = document.getElementById('todo__items-container')
const taskform = document.getElementById('new_task_form')
const container = document.getElementById('todo__body')
const taskInput = document.getElementById('todo__input')

const taskEmptyImage = document.createElement('div')

const taskCompleted = 'task-completed'

const addItem = (itemText) => {
  taskEmptyImage.remove()

  const newTaskItem = document.createElement('li')
  newTaskItem.setAttribute('id', 'task_item')

  const newCheckBtn = document.createElement('div')
  newCheckBtn.setAttribute('class', 'todo__toggle')

  const newTaskBio = document.createElement('div')
  newTaskBio.setAttribute('class', 'todo__text')

  const divDel = document.createElement('div')
  divDel.setAttribute('class', 'todo__delete')
  divDel.setAttribute('id', 'todo__delete')

  newTaskBio.innerText = itemText

  tasksList.appendChild(newTaskItem)
  newTaskItem.appendChild(newCheckBtn)

  newTaskItem.appendChild(newTaskBio)
  newTaskItem.appendChild(divDel)

  onTaskComplete(newCheckBtn)
  onTaskDelete(divDel)
}

function onTaskDelete (btns) {
  btns.addEventListener('click', (e) => {
    const parentlis = e.target.parentNode
    parentlis.setAttribute('class', 'task-deleted')

    parentlis.remove(btns)

    if (tasksList.childNodes.length === 1) {
      taskEmptyImage.setAttribute('class', 'task_list_empty')
      container.appendChild(taskEmptyImage)
      setTimeout(() => {
      }, 200)
    }
  })
}

function onTaskComplete (btns) {
  btns.addEventListener('click', function (e) {
    const parentli = e.target.parentNode

    if (parentli.className === taskCompleted) {
      parentli.setAttribute('class', '')
      btns.setAttribute('class', 'todo__toggle')
    } else {
      const parent = e.target.parentNode

      btns.setAttribute('class', 'todo__toggle__completed')
      parent.setAttribute('class', taskCompleted)
    }
  })
}

addEventListener('load', () => {
  addItem('Read the description please')
  addItem('Solve the task')
  addItem('Submit the solution')

  const date = new Date()
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const optionsDay = { weekday: 'long' }

  document.getElementById('day').innerHTML = date.toLocaleDateString(undefined, optionsDay)
  document.getElementById('date').innerHTML = date.toLocaleDateString(undefined, options)
})

taskform.addEventListener('submit', function (e) {
  e.preventDefault()

  if (taskInput.value !== '') { addItem(taskInput.value) }
  taskInput.value = ''
})

taskform.addEventListener('keyup', (e) => {
  e.preventDefault()

  if (e.code === 'Enter') {
    if (taskInput.value !== '') { addItem(taskInput.value) }
    taskInput.value = ''
  }
})
