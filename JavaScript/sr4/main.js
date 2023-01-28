function ShowModal(id){
    document.getElementById(id).classList.add(`show`);
    
}
function HideModal(id){
    document.getElementById(id).classList.remove(`show`);
    
}
function getTasks(){
  let tasks = localStorage.getItem(`tasks`);
  if(tasks === null){
   tasks = []
  }
  return tasks;
}
function SaveTask(){
    let TaskDescribe = document.getElementById(`Task-describe`).value;
    let formSelect = document.getElementById(`form-select`).value;
    let task = {
        describe: TaskDescribe,
        status: formSelect,
    }
    let tasks = getTasks();
      tasks.push(task);
      localStorage.setItem(`tasks`.JSON.stringify());
}
function DrawTasks(){
    let tasks = getTasks()
    let string = ``;
    tasks.forEach(function(task,index){
      let status = `` 
        if(task.status == `Провалено`)      {status =`<b class="red">Провалено</b>`}
        if(task.status == `Виконується`)    {status =`<b class="orange">Виконується</b>`}
        if(task.status == `Виконано`)       {status =`<b class="green">Виконано</b>`}
          tasks += `<thead>
			  <tr>
				<th scope="col">${index}</th>
				<th scope="col">${task.describe}</th>
				<th scope="col">${task.status}</th>
				<th scope="col" class="text-center">Edit task</th>
				<th scope="col" class="text-center">Видалити</th>

			  </tr>
			</thead>`
    });
          tasks.innerHTML = string;   
}
   function DeleteTasks(index){
    let tasks = getTasks();
    removeProduct();
   }
   function EditTasks(index){
    let tasks = getTasks();
   }