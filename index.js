const new_task_input_box = document.getElementById("new_task_input_box");
let task_array = []
const select_all_btn = document.getElementById("select_all_btn")
select_all_btn.addEventListener("click", select_all_handler)
let select_all_bool = true
const all_tasks_link = document.getElementById("all_tasks")
const active_tasks_link = document.getElementById("all_active_tasks")
const completed_tasks_link = document.getElementById("all_completed_tasks")
all_tasks_link.addEventListener("click", all_tasks_link_handler)
active_tasks_link.addEventListener("click", active_tasks_link_handler)
completed_tasks_link.addEventListener("click", completed_tasks_link_handler)
const el = document.getElementById("task_list")
new_task_input_box.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) { // key code of the keybord key
      event.preventDefault();
    enter_key_handler()
    }
  });

function enter_key_handler(){
    if (new_task_input_box.value){
        task_array.push({"task": new_task_input_box.value, "compleated": false, "uid": generateUID()})
        new_task_input_box.value = ""
        add_tasks_to_window(task_array)   
    }
}

function find_tasks(finished_bool){
    let task_list = []
    let tasks = document.querySelectorAll('input[type="checkbox"]')
    tasks.forEach(element => {
        if (element.checked === finished_bool){
            task_list.push(element.id[element.id.length - 1])
        }
      });
    return task_list
}
function all_tasks_link_handler(){
    document.getElementById("all_completed_tasks").setAttribute("class", "nav-link")
    document.getElementById("all_active_tasks").setAttribute("class", "nav-link")
    document.getElementById("all_tasks").setAttribute("class", "nav-link active")
    add_tasks_to_window(task_array)
}
function active_tasks_link_handler(){
    document.getElementById("all_completed_tasks").setAttribute("class", "nav-link")
    document.getElementById("all_active_tasks").setAttribute("class", "nav-link active")
    document.getElementById("all_tasks").setAttribute("class", "nav-link")
    add_tasks_to_window(task_array.filter(task => task.compleated === false))
}

function completed_tasks_link_handler(){
    document.getElementById("all_completed_tasks").setAttribute("class", "nav-link active")
    document.getElementById("all_active_tasks").setAttribute("class", "nav-link")
    document.getElementById("all_tasks").setAttribute("class", "nav-link")
    add_tasks_to_window(task_array.filter(task => task.compleated === true))
}

function select_all_handler(){
    let elements1 = document.querySelectorAll('input[type="checkbox"]');
    if (select_all_bool){
        elements1.forEach(element => {
            element.checked = true;

            });
        task_array.forEach(task => {
            task.compleated = true
        })
        select_all_bool = false
        select_all_btn.innerHTML = "Unselect"
    } else{
        console.log("unselect")
        elements1.forEach(element => {
            element.checked = false;
            });
        task_array.forEach(task => {
            task.compleated = false
        })
        select_all_bool = true
        select_all_btn.innerHTML = "Select all"
    }
}

function generateUID() {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}


function checkbox_event_handler(id){
    checkbox = document.getElementById(id)
    if (checkbox.checked === true){
        for (task of task_array){
            if (task.uid === get_uniqe_id_part(id)){
                task.compleated = true
            }
        }
    } else{
        for (task of task_array){
            if (task.uid === get_uniqe_id_part(id)){
                task.compleated = false
            }
        }
    }
}

function get_uniqe_id_part(id){
    unique_part = ""
    store = false
    for (var i = 0; i < id.length; i++) {
        if (id.charAt(i) === "-"){
            store = true
        }
        if (store){
            if (id.charAt(i) !== "-"){
                unique_part += id.charAt(i)
            }
        }
      }
    return unique_part
}

function add_tasks_to_window(tasks){
    el.textContent = ""
    for (task of tasks){
        const input_group_div = document.createElement("div");
        input_group_div.setAttribute("class", "input-group mb-3")
        input_group_div.setAttribute("title", "task_list_item")
        input_group_div.setAttribute("id", "group-" + task.uid.toString())
    
        const input_group_text_div = document.createElement("div")
        input_group_text_div.setAttribute("class", "input-group-text")
    
        const input_check_box = document.createElement("input")
        input_check_box.setAttribute("class", "form-check-input mt-0")
        input_check_box.setAttribute("type", "checkbox")

        if (task.compleated === true){
            input_check_box.setAttribute("checked", true)
        }
        input_check_box.setAttribute("id", "checkbox-" + task.uid.toString())
        input_group_text_div.appendChild(input_check_box)
        input_group_div.appendChild(input_group_text_div)
    
        const input_text = document.createElement("input")
        input_text.setAttribute("class", "form-control")
        input_text.setAttribute("type", "text")
        input_text.setAttribute("value", task.task)
        input_text.setAttribute("id", "text-" + task.uid.toString())
        const delete_btn = document.createElement("button")
        delete_btn.setAttribute("class", "btn btn-outline-secondary")
        delete_btn.style.display = "none"
        delete_btn.setAttribute("id", "button-" + task.uid.toString())
        delete_btn.innerHTML = "Delete"
        input_group_div.appendChild(input_text)
        input_group_div.appendChild(delete_btn)
        el.appendChild(input_group_div)

        input_check_box.addEventListener("change", 
        function() {
            if (input_check_box.checked === true){
                for (task of task_array){
                    if (task.uid === get_uniqe_id_part(input_check_box.id)){
                        task.compleated = true
                    }
                }
            } else{
                for (task of task_array){
                    if (task.uid === get_uniqe_id_part(input_check_box.id)){
                        task.compleated = false
                    }
                }
            }
        })

        input_group_div.addEventListener("mouseenter", 
        function(event){
            delete_btn.style.display = "block"
        })
        input_group_div.addEventListener("mouseleave", 
        function(event){
            delete_btn.style.display = "none"
        })  
        console.log(task_array, "before doing anything")
        delete_btn.addEventListener("click", 
        function(){
            task_array.splice(task_array.indexOf(task_array.find(o => o.uid === get_uniqe_id_part(delete_btn.id)), 0), 1)
            input_group_div.remove()
        })
    }
}