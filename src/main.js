/* variables
const xmlns = 'http://www.w3.org/2000/svg'
const xlinkns = 'http://www.w3.org/1999/xlink'
*/

/* globals addEventListener */

const tasksList = document.getElementById('todo__items-container')
const taskform = document.getElementById('new_task_form')
const container = document.getElementById('todo__body')
const taskInput = document.getElementById('todo__input')
const todoDel = document.getElementById('todo__delete')

const imgU = 'https://www.svgrepo.com/show/42437/cross-remove-sign.svg'
const taskCompleted = 'task-completed'
const taskEmptyImage = document.createElement('div')

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

  const imgDel = document.createElement('img')
  imgDel.setAttribute('src', imgU)

  newTaskBio.innerText = itemText

  tasksList.appendChild(newTaskItem)
  newTaskItem.appendChild(newCheckBtn)

  newTaskItem.appendChild(newTaskBio)
  newTaskItem.appendChild(divDel)

  divDel.appendChild(imgDel)

  onTaskComplete(newCheckBtn)
}

function onTaskComplete (btns) {
  btns.addEventListener('click', function (e) {
    const parentli = e.target.parentNode

    if (parentli.className === taskCompleted) {
      parentli.setAttribute('class', '')
    } else {
      const parent = e.target.parentNode

      parent.setAttribute('class', taskCompleted)
    }

    setTimeout(() => {
    }, 200)

    if (tasksList.childNodes.length === 2) {
      taskEmptyImage.setAttribute('class', 'task_list_empty')
      setTimeout(() => {
        container.appendChild(taskEmptyImage)
      }, 200)
    }
  })
}

addEventListener('load', () => {
  addItem('Read the description please')
  addItem('Solve the task')
  addItem('Submit the solution')
})

taskform.addEventListener('submit', function (e) {
  e.preventDefault()

  addItem(taskInput.value)

  taskInput.value = ''
})

taskform.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
    addItem(taskInput.value)
    taskInput.value = ''
  }
})
