class Todo{
    constructor(){
        this.totalTasks = document.querySelectorAll('.task').length
    }

    addTask(tasktitle){
        let template = document.querySelector('.task').cloneNode(true);
        let templateText = template.querySelector('.task-title')
        let list = document.querySelector('#task-container')
        template.classList.remove('hide');
        templateText.textContent = tasktitle
        list.appendChild(template)
        this.checkTasks('add')
        this.addEvents(templateText)
    }

    removeTask(task){
        let parentEl = task.parentElement
        parentEl.remove()

        this.checkTasks('remove')
    }


    doneTask(taskDone, taskTitle){  
        taskDone.classList.toggle('done')
        // taskTitle.classList.toggle('task-title-done')
    }


    taskMarked(taskTitle){
        taskTitle.classList.toggle('task-title-done')
    }

     checkTasks(comand){
        let mensagem = document.querySelector('#empty-tasks')

        if(comand === 'add'){
            
            this.totalTasks += 1;
        }else if(comand === 'remove'){
          
           this.totalTasks -= 1;
        }
        

        if(this.totalTasks == 1){
            mensagem.classList.remove('hide')
        }else{
            mensagem.classList.add('hide')
        }


     }

    addEvents(taskTitle){
        let removeBtns = document.querySelectorAll('.fa-trash')
        let removeBtn = removeBtns[removeBtns.length - 1]
      
        let doneBtns = document.querySelectorAll('.fa-check')
        let doneBtn = doneBtns[doneBtns.length - 1]
        

       

        removeBtn.addEventListener('click', function() {
            todo.removeTask(this)
        })


        doneBtn.addEventListener('click', function() {
            todo.taskMarked(taskTitle)
          
            todo.doneTask(this)
        })
    }
}


let todo = new Todo();



// eventos
let addBtn = document.querySelector('#add')

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let taskText = document.querySelector('#task').value;
    if(taskText != ''){
        
    todo.addTask(taskText);
    }

    taskText.value = '';


})