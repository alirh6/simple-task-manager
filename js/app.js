const modal = document.querySelector(".modal")
const addTask = document.querySelector(".add-task")
const taskManagers = document.querySelector(".task-manager")
const cancel = document.querySelector(".cancel")
const add = document.querySelector(".add")
const all = document.querySelector(".all")
const addTaskInput = document.querySelector(".add-task-input")
const selectStatus = document.querySelector(".select-status")
const articleTodo = document.querySelectorAll(".todo")
const todoData = document.querySelector(".todo-data")



//! add task modal

add.addEventListener("click" , function(){
  modal.classList.remove("hidden")
})

cancel.addEventListener("click" , function(){
  modal.classList.add("hidden")
})

document.body.addEventListener("keydown" , function(e){
  if (e.key === "Escape"){
    modal.classList.add("hidden")
  }
})









//! add task

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

  const todoShowDetails = document.createElement("p")
  todoShowDetails.className = "todo_show-details"

  const todoShowStatDate = document.createElement("p")
  todoShowStatDate.className = "todo_show-startdate"
  const todoShowEndDate = document.createElement("p")
  todoShowEndDate.className = "todo_show-enddate"

  const todo_showDateWrapper = document.createElement("div")
  todo_showDateWrapper.className = "todo_showdate-wrapper"

  const todoWrapper = document.createElement("div")
  todoWrapper.className = "todo-wrapper"

  status.append(optionTodo)
  status.append(optionProgress)
  status.append(optionDone)
  todoWrapper.append(status)
  todoWrapper.append(articleData)
  articleButton.append(articleButtonBtn)
  todoWrapper.append(articleButton)
  article.append(todoWrapper)
  todo_showDateWrapper.append(todoShowStatDate)
  todo_showDateWrapper.append(todoShowEndDate)
  article.append(todoShowDetails)
  article.append(todo_showDateWrapper)
 

  taskManager.append(article)

  modal.classList.add("hidden")

})



//! details task

const taskManager = document.querySelector(".task-manager");

taskManager.addEventListener("click", function (e) {
  const item = e.target.closest(".todo-data");
  if (!item) return;

  const todoArticle = item.closest(".todo");

  const existingDetails = todoArticle.nextElementSibling;
  if (existingDetails && existingDetails.classList.contains("details-wrapper")) {
    existingDetails.remove();
    return;
  }

  const detailsWrapper = document.createElement("div");
  detailsWrapper.className = "details-wrapper";

  const todoCaption = document.createElement("h2");
  todoCaption.className = "todo-caption";
  todoCaption.textContent = "what task";
  detailsWrapper.append(todoCaption);

  const todoDescription = document.createElement("textarea");
  todoDescription.className = "todo-description";
  todoDescription.name = "todo-description";
  todoDescription.placeholder = "Enter detailed description...";
  
  detailsWrapper.append(todoDescription);

  const todoDetails = document.createElement("p");
  todoDetails.className = "todo-details";
  detailsWrapper.append(todoDetails);

  const dateWrapper = document.createElement("div");
  dateWrapper.className = "date-wrapper";
  detailsWrapper.append(dateWrapper);

  const startWrapper = document.createElement("div");
  startWrapper.className = "start-wrapper";
  dateWrapper.append(startWrapper);

  const dataStartLabel = document.createElement("label");
  dataStartLabel.className = "date-start-label";
  dataStartLabel.textContent = "date start";
  startWrapper.append(dataStartLabel);

  const dateStart = document.createElement("input");
  dateStart.type = "date";
  dateStart.className = "date-start";
  startWrapper.append(dateStart);

  const endWrapper = document.createElement("div");
  endWrapper.className = "end-wrapper";
  dateWrapper.append(endWrapper);

  const dataEndLabel = document.createElement("label");
  dataEndLabel.className = "date-end-label";
  dataEndLabel.textContent = "date end";
  endWrapper.append(dataEndLabel);

  const dateEnd = document.createElement("input");
  dateEnd.type = "date";
  dateEnd.className = "date-end";
  endWrapper.append(dateEnd);
  

  const setBtn = document.createElement("div");
  setBtn.className = "set-btn";
  detailsWrapper.append(setBtn);

  const setDetails = document.createElement("button");
  setDetails.className = "set-details";
  setDetails.textContent = "set details";
  setBtn.append(setDetails);

  const cancelDetails = document.createElement("button");
  cancelDetails.className = "cancel-details";
  cancelDetails.textContent = "cancel details";
  setBtn.append(cancelDetails);

  todoArticle.insertAdjacentElement("afterend", detailsWrapper);





setDetails.addEventListener("click", function (e) {
  const detailsWrapper = e.target.closest(".details-wrapper");
  const todoArticle = detailsWrapper.previousElementSibling;
  const todoData = todoArticle.querySelector(".todo-data");

  const textareaValue = todoDescription.value;
  const dateStartValue = dateStart.value;
  console.log(dateStartValue);
  
  const dateEndValue = dateEnd.value;
  console.log(dateEndValue);
  

  const todoShowDetails = todoArticle.querySelector(".todo_show-details");
const todoShowStartdate = todoArticle.querySelector(".todo_show-startdate");
const todoShowEnddate = todoArticle.querySelector(".todo_show-enddate");

  
  
  todoShowDetails.textContent = `details: ${textareaValue}`
  todoShowStartdate.textContent  = `start : ${dateStartValue}`
  todoShowEnddate.textContent  = `end : ${dateEndValue}`

  todoData.insertAdjacentElement("afterend", todoShowDetails);
  // todoArticle.appendChild(todoShowDetails);
  
  todoArticle.insertBefore(todoShowDetails, todoArticle.querySelector(".todo_showdate-wrapper")
);

  detailsWrapper.classList.add("hidden");
});




});


//! add task

const setDetails = document.querySelector(".set-details")
const cancelDetails = document.querySelector(".cancel-details")





//! delete task

taskManager.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-todo")) {

    const todoArticle = e.target.closest(".todo");
    const nextEl = todoArticle.nextElementSibling;

    // حذف details-wrapper اگر وجود داشت
    if (nextEl && nextEl.classList.contains("details-wrapper")) {
      nextEl.remove();
    }

    // حذف خود todo
    todoArticle.remove();
  }
});


const menu = document.getElementById('context-menu');

// show custom menu
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  menu.style.display = 'block';
  menu.style.left = `${e.pageX}px`;
  menu.style.top = `${e.pageY}px`;
});

// hide menu on click
document.addEventListener('click', () => {
  menu.style.display = 'none';
});

// hide with ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    menu.style.display = 'none';
  }
});

// handle menu actions
menu.addEventListener('click', (e) => {
  const action = e.target.dataset.action;
  if (!action) return;

  switch (action) {
    case 'edit':
      alert('edit clicked');
      break;
    case 'delete':
      alert('delete clicked');
      break;
    case 'share':
      alert('share clicked');
      break;
    case 'info':
      alert('info clicked');
      break;
  }

  menu.style.display = 'none';
});
