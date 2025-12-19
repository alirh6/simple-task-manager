const modal = document.querySelector(".modal")
const addTask = document.querySelector(".add-task")
const taskManager = document.querySelector(".task-manager")
const cancel = document.querySelector(".cancel")
const add = document.querySelector(".add")
const all = document.querySelector(".all")
const addTaskInput = document.querySelector(".add-task-input")
const selectStatus = document.querySelector(".select-status")
const articleTodo = document.querySelector(".todo")

add.addEventListener("click" , function(){
  modal.classList.remove("hidden")
})
cancel.addEventListener("click" , function(){
  modal.classList.add("hidden")
})

addTask.addEventListener("click" , function(){
  const status = document.createElement("select")
  status.className = "select-status"
  status.name = "status"

  const optionTodo = document.createElement("option")
  optionTodo.value = "todo"
  optionTodo.textContent = "To Do"
  const optionProgress = document.createElement("option")
  optionProgress.value = "In Progress"
  optionProgress.textContent = "in-progress"
  const optionDone = document.createElement("option")
  optionDone.value = "done"
  optionDone.textContent = "Done"


  const inputValue = addTaskInput.value

  const article = document.createElement("article")
  article.className = "todo"

  const articleData = document.createElement("div")
  articleData.className = "todo-data"
  articleData.textContent = inputValue

  addTaskInput.value = ""

  const articleButton = document.createElement("div")
  articleButton.className = "todo-button"
  
  const articleButtonBtn = document.createElement("button")
  articleButtonBtn.className = "delete-todo"
  articleButtonBtn.textContent = "delete"
  articleButtonBtn.type = "button"

  status.append(optionTodo)
  status.append(optionProgress)
  status.append(optionDone)
  article.append(status)
  article.append(articleData)
  articleButton.append(articleButtonBtn)
  article.append(articleButton)
  taskManager.append(article)

  modal.classList.add("hidden")

})

document.body.addEventListener("keydown" , function(e){
  if (e.key === "Escape"){
    modal.classList.add("hidden")
  }
})
taskManager.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-todo")) {
    e.target.closest(".todo").remove();
  }
});
