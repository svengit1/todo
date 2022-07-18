const page_elements = {}
page_elements.new_task_input_box = document.getElementById("new_task_input_box");
page_elements.select_all_btn = document.getElementById("select_all_btn")
page_elements.all_tasks_link = document.getElementById("all_tasks")
page_elements.active_tasks_link = document.getElementById("all_active_tasks")
page_elements.completed_tasks_link = document.getElementById("all_completed_tasks")

let task_array = []
let select_all_bool = true

page_elements.select_all_btn.addEventListener("click", select_all_handler)
page_elements.all_tasks_link.addEventListener("click", all_tasks_link_handler)
page_elements.active_tasks_link.addEventListener("click", active_tasks_link_handler)
page_elements.completed_tasks_link.addEventListener("click", completed_tasks_link_handler)
const el = document.getElementById("task_list")

page_elements.new_task_input_box.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) { // key code of the keybord key
      event.preventDefault();
    enter_key_handler()
    }
  });

function enter_key_handler(){
    if (page_elements.new_task_input_box.value){
        task_array.push({"task": page_elements.new_task_input_box.value, "completed": false, "uid": generateUID()})
        page_elements.new_task_input_box.value = ""
        add_tasks_to_window(task_array)   
    }
}

function all_tasks_link_handler(){
    set_active_task_group("all")
    add_tasks_to_window(task_array)
}
function active_tasks_link_handler(){
    set_active_task_group("active")
    add_tasks_to_window(task_array.filter(task => task.completed === false))
}

function completed_tasks_link_handler(){
    set_active_task_group("completed")
    add_tasks_to_window(task_array.filter(task => task.completed === true))
}

function select_all_handler(){
    if (select_all_bool){
        switch_task_completion(select_all_bool)
    } else{
        switch_task_completion(select_all_bool)
    }
}

function switch_task_completion(bool){
    let elements1 = document.querySelectorAll('input[type="checkbox"]');
    elements1.forEach(element => {
        element.checked = bool;
        });
    task_array.forEach(task => {
        task.completed = bool
    })
    select_all_bool = !bool
    if (bool){
        page_elements.select_all_btn.innerHTML = "Unselect"
    } else{
        page_elements.select_all_btn.innerHTML = "Select all"
    }
    
}
function uidPart(){
    var part = (Math.random() * 46656) | 0;
    part = ("000" + part.toString(36)).slice(-3);
    return part
}

function generateUID() {
    return uidPart() + uidPart();
}

function set_active_task_group(group){
    document.getElementById("all_completed_tasks").setAttribute("class", "nav-link")
    document.getElementById("all_active_tasks").setAttribute("class", "nav-link")
    document.getElementById("all_tasks").setAttribute("class", "nav-link")
    if (group === "completed"){
        document.getElementById("all_completed_tasks").setAttribute("class", "nav-link active")
    } else if (group === "active"){
        document.getElementById("all_active_tasks").setAttribute("class", "nav-link active")
    } else{
        document.getElementById("all_tasks").setAttribute("class", "nav-link active")
    }
}

function get_uniqe_id_part(id){
    return id.split('-')[1]
}
function create_element(tag_name, attributes_of_element){
    let element = document.createElement(tag_name)
    for (attribute of attributes_of_element){
        element.setAttribute(attribute[0], attribute[1])
    }
    return element
}
function create_input_group_div(task){
    div = create_element("div", [["class", "input-group mb-3"], ["title", "task_list_item"], ["id", "group-" + task.uid.toString()]])
    return div
}

function create_input_group_text_div(){
    let div = create_element("div", [["class", "input-group-text"]])
    return div
}

function create_input_check_box(task){
    let check_box = create_element("input", [["class", "form-check-input mt-0"], ["type", "checkbox"], ["id", "checkbox-" + task.uid.toString()]])
    if (task.completed === true){
        check_box.setAttribute("checked", true)
    }
    
    return check_box
}

function create_input_text(task){
    let text = create_element("input", [["class", "form-control"], ["type", "text"], ["value", task.task], ["id", "text-" + task.uid.toString()]])
    return text

}

function create_delete_btn(task){
    let btn = create_element("button", [["class", "btn btn-outline-secondary"], ["id", "button-" + task.uid.toString()]])
    btn.style.display = "none"
    btn.innerHTML = "Delete"
    return btn
}

function add_tasks_to_window(tasks){
    el.textContent = ""
    for (task of tasks){
        const input_group_div = create_input_group_div(task)
        const input_group_text_div = create_input_group_text_div() 
        const input_check_box = create_input_check_box(task)
        input_group_text_div.appendChild(input_check_box)
        input_group_div.appendChild(input_group_text_div)
        const input_text = create_input_text(task)
        const delete_btn = create_delete_btn(task)
        input_group_div.appendChild(input_text)
        input_group_div.appendChild(delete_btn)
        el.appendChild(input_group_div)
        input_check_box.addEventListener("change", 
        function() {
            if (input_check_box.checked === true){
                for (task of task_array){
                    if (task.uid === get_uniqe_id_part(input_check_box.id)){
                        task.completed = true
                    }
                }
            } else{
                for (task of task_array){
                    if (task.uid === get_uniqe_id_part(input_check_box.id)){
                        task.completed = false
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