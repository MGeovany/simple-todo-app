/* globals  expect, test, describe */

/**
 * @jest-environment jsdom
 */

const addItem = require('./src/main')

describe('GREEN', () => {
  test('renderiza ToDo', () => {
    const newTask = document.getElementsByClassName('todo__text')
    expect(addItem('New task added')).toBe(newTask.innerText === 'New task added')
  })
})
