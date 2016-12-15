var update = document.getElementById('update')

update.addEventListener('click', () => {
  fetch('todoList',
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'task': 'Darth Vader'
    })
})
