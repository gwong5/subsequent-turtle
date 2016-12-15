var update = document.getElementById('edit')
var taskSubmission = document.getElementById('taskSubmission')

update.addEventListener('click', () => {
  taskSubmission.setAttribute("contentEditable", "true");
    taskSubmission.addEventListener('keypress', function (e) {
      console.log('works')
    var key = e.which || e.keyCode;
    if (key === 13) {
      taskSubmission.setAttribute("contentEditable", "false")
    }
  })
})
  // fetch('todoList',
  //   method: 'put',
  //   headers: {'Content-Type': 'application/json'},
  //   body: JSON.stringify({
  //     'task': 'Darth Vader'
    // })
