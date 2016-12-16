function renderItem(index) {
  var update = document.getElementById('edit' + index)
  var taskSubmission = document.getElementById('taskSubmission' + index)
  var complete = document.getElementById('complete')
  var check = document.getElementById('check' + index)

  complete.addEventListener('click', () => {
    console.log("asdf")
    console.log(index.length)
    console.log(document.getElementsById("taskSubmission").innerHTML)
    // var org_div = document.getElementsById("taskSubmission<%= index %>").innerHTML;
    for (check = 0; check < 5 ; check++) {
      console.log("fdsa")
      if (check.checked = true) {
        console.log("check")
      }
    }
  })


  update.addEventListener('click', () => {
    taskSubmission.setAttribute("contentEditable", "true");
      taskSubmission.addEventListener('keypress', function (e) {
        // console.log('works')
      var key = e.which || e.keyCode;
      if (key === 13) {
        taskSubmission.setAttribute("contentEditable", "false")
        fetch('/todoList/1', {
          method: 'PUT',
          body: JSON.stringify({
            task: "Blah"
          })
          // headers: {'Content-Type': 'application/json'},
          // body: JSON.stringify({
          //   'task': taskSubmission})
          // .then(res => {
          //   if (res.ok) return res.json()
          // })
          // // .then(data => {
          //   console.log(data)
          // })
        })
      }
    })
  })
}
  // fetch('todoList',
  //   method: 'put',
    // headers: {'Content-Type': 'application/json'},
    // body: JSON.stringify({
    //   'name': 'Darth Vader'
    // })
