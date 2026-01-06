const modal = document.querySelector(".newtask_modal")
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


function newTaskModalHidden (){
  modal.classList.add("hidden")
}
function newTaskModal (){
  modal.classList.remove("hidden")
}

add.addEventListener("click" , newTaskModal)

cancel.addEventListener("click" , newTaskModalHidden)

document.body.addEventListener("keydown" , function(e){
  if (e.key === "Escape"){
    newTaskModalHidden()
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
let clickedElement = null;

// show custom menu
document.addEventListener('contextmenu', (e) => {
  // e.preventDefault();
  clickedElement = document.elementFromPoint(e.clientX, e.clientY);
  console.log(clickedElement);
  
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



const infoModal = document.querySelector(".info_modal")
const infoClose = document.querySelector(".info_close")
const infoAdd = document.querySelector(".info_add")


// handle menu actions
menu.addEventListener('click', (e) => {
  const item = e.target.closest('[data-action]');
  if (!item) return;

  const action = item.dataset.action;

  switch (action) {
    case 'open':
      clickedElement.click();
      break;

    case 'delete':
      alert('delete clicked');
      break;

    case 'new-task':
      modal.classList.remove("hidden");
      break;

    case 'copy':
      navigator.clipboard.writeText(clickedElement.textContent);
      break;

    case 'info':
      infoModal.classList.remove("hidden")
      break;
  }

  menu.style.display = 'none';
});

infoClose.addEventListener("click" , function(e){
  infoModal.classList.add("hidden")
})

const infoAddQuestion = document.querySelector(".info_add-question")
const questionModal = document.querySelector(".question_modal")
const questionCancel = document.querySelector(".question_cancel")

infoAddQuestion.addEventListener("click" , function(e){
  infoModal.classList.add("hidden")
  questionModal.classList.remove("hidden")
})
questionCancel.addEventListener("click" , function(e){
  questionModal.classList.add("hidden")
})


//!!!!! test

const captch = document.querySelector(".captch")
const showCaptcha = document.querySelector(".show_captcha")
let enterCaptcha = document.querySelector(".enter_captcha")
const change = document.querySelector(".change")
const check = document.querySelector(".check")
const flag = document.querySelector(".flag")
const flags = document.querySelector(".flags")

let text = "1234567890qwertyuiopasdfghjklzxcvbnm" ;
let captcha = "";
let random ;

change.addEventListener("click" , function(e){
  captcha = ""
  flags.classList.add("hidden")
  flag.classList.add("hidden")
  for(let i = 0 ; i < 5 ; i++ ){
  random = Math.floor(Math.random() * text.length )
  captcha += text[random]
}
showCaptcha.textContent = captcha

  check.addEventListener("click" , function(e){
    
    let value = enterCaptcha.value
    if(value === captcha){
      flag.classList.remove("hidden")
      flags.classList.add("hidden")
    }else{
      flags.classList.remove("hidden")
      flag.classList.add("hidden")
    }
    
  })
  
  enterCaptcha.value = ""
})

  

function a(){
    
} 


const max = document.querySelector(".max")
const res = document.querySelector(".res")
const remain = +max.getAttribute("maxlength")

max.addEventListener("keyup" , function(){
  res.textContent = remain - max.value.length
})


change.addEventListener("click" , function(e){
  console.log(e.target.dataset);
  console.log(e.target.dataset.name);
  console.log(e.target.dataset.price);
  let a = e.target.dataset.price;
  let b = e.target.dataset.name;
  console.log(typeof a);
  console.log(typeof b);
  let c = `${a}${b}`
  console.log(c);
  console.log(typeof c);
  
  let d = e.target.dataset
  console.log(d);
  
  console.log(typeof d);
  
  
})

//!!!! note modal

const notePad = document.querySelector(".notepad")
const addNote = document.querySelector(".add_note")
const notepadModal = document.querySelector(".notepad_modal")
const notepadArea = document.querySelector(".notepad_area")
const notepadColors = document.querySelector(".notepad_colors")
const notepadColor = document.querySelectorAll(".notepad_color")
const noteAdd = document.querySelector(".note_add")
const noteCancel = document.querySelector(".note_cancel")

addNote.addEventListener("click" , function(e){
  notepadModal.classList.remove("hidden")
})




let chooseColor ;
notepadColor.forEach(function(color){
  color.addEventListener("click" , function(e){
    chooseColor = e.target.dataset.color
    console.log(chooseColor);
    
  })
})

noteAdd.addEventListener("click" , function(e){
  let notepadAreaValue = notepadArea.value

  const noteParent = document.createElement("div")
  noteParent.classList.add("notepad_item")
  noteParent.style.backgroundColor = chooseColor

  const noteDelete = document.createElement("span")
  noteDelete.classList.add("notepad_delete")

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("xmlns", svgNS);
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("class", "size-6");
 
  const path = document.createElementNS(svgNS, "path");

  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute(
    "d",
    "m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
  );

  

  const notepadCaption = document.createElement("p")
  notepadCaption.classList.add("notepad_caption")
  notepadCaption.textContent = notepadAreaValue

  noteParent.append(notepadCaption)

  
  svg.appendChild(path);
  noteDelete.append(svg)
  noteParent.append(noteDelete)

  notePad.append(noteParent)
  notepadModal.classList.add("hidden")
  
})

noteCancel.addEventListener("click" , function(){
  notepadModal.classList.add("hidden")
})



const audio = document.querySelector(".audio")
// const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const time = document.querySelector(".time")

function play(){
  audio.play()
  // document.body.classList.add("hidden")
}
function pausee(){
  audio.pause()
}
// function play() {
//   audio.addEventListener("canplay", () => {
//     audio.play()
//   }, { once: true })
// }
function show(){
  setInterval(function(){
    console.log(`played ${audio.currentTime}`);
    
  },1000)
}
time.addEventListener("click" , function(){
  audio.playbackRate = 1
  console.log(audio.playbackRate);
  
})
function duration(){
  console.log(audio.duration);
  
}




// function show(){
//   setInterval(function(){
//     console.log(`played ${audio.currentTime}`);
    
//   },1000)
// }
// pause.addEventListener("click" , function(){
//   audio.pause()
// })


const ebi = document.querySelector(".ebi")
const pl = document.querySelector(".pl")
const jolo = document.querySelector(".jolo")
const aqab = document.querySelector(".aqab")
const dah = document.querySelector(".dah")
const dahqabl = document.querySelector(".dahqabl")
const back = document.querySelector(".back")
const forr = document.querySelector(".for")
const nam = document.querySelector(".name")
const musics =[
  {id : 1 , src: "/Ebi-Behet-Goftam-128(1).mp3" , 
    singer: "ebi" , name : "goftam"},
  {id : 2 , src: "/Amir Tataloo - Ajab (Maket).mp3" , 
    singer: "tataloo" , name : "ajab"},
  {id : 3 , src: "/Amir Tataloo - Man Bahat Ghahram [320].mp3" , 
    singer: "tataloo" , name : "qahram"},
  {id : 4 , src: "/Dariush - Age Ye Rooz~GuitarMusic.mp3" , 
    singer: "dariush" , name : "age ye roz"},
  {id: 5 , src: "/Dariush - Az Tou~GuitarMusic.mp3" ,
    singer : "dariush" , name: "az tou"
  }
]
let nowMusic = 0
let nowMusic2 = 5

forr.addEventListener("click" , function(){
  nowMusic++
  if(nowMusic > 4){
    nowMusic = 0
  }

  // ebi.pause()
  const mainMusic = musics[nowMusic]
  nam.innerHTML = `${mainMusic.name} - ${mainMusic.singer}`
  ebi.setAttribute("src" , mainMusic.src)
  ebi.play()
})
back.addEventListener("click", function() {
  nowMusic--;
  if (nowMusic < 0) {
    nowMusic = musics.length - 1; // آخرین موزیک
  }

  const mainMusic = musics[nowMusic];
  nam.innerHTML = `${mainMusic.name} - ${mainMusic.singer}`;
  ebi.setAttribute("src", mainMusic.src);
  ebi.play();
});


pl.addEventListener("click" , function(){
  if(ebi.paused){
    ebi.play()
    pl.textContent = "⏸"
  }else if (ebi.played){
    ebi.pause();
    pl.textContent = "▶️";
  }
})

dah.addEventListener("click" , function(){
  ebi.currentTime += 10
  
})
dahqabl.addEventListener("click" , function(){
  ebi.currentTime -= 10
})

const body = document.querySelector(".body")

body.insertAdjacentHTML("afterend" ,
  `<article class="todo">
      <div class="todo-wrapper">
        <select class="select-status" name="status">
          <option class="todo_status-todo" value="todo" style="background-color:#f8d7da;">To Do</option>
          <option class="todo_status-progress" value="in-progress" style="background-color:#fff3cd;">In Progress</option>
          <option class="todo_status-done" value="done" style="background-color:#d4edda;">Done</option>
        </select>
      <div class="todo-data">learn js</div>
      <div class="todo-button">
        <button type="button" class="delete-todo">delete</button>
      </div>
      </div>
            <p class="todo_show-details">details: i want learn java script and learn react after 2 month</p>
            <div class="todo_showdate-wrapper">
              <p class="todo_show-startdate">start: 2025-12-08</p>
              <p class="todo_show-enddate">end: 2025-12-16</p>
            </div>

    </article>`
)