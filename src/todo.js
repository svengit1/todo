import {generateUID} from ".//generate_uid.js"
import { add_tasks_to_window } from ".//adding_tasks_to_window.js";
import { set_active_task_group } from "./set_active_task_group.js";
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

export function remove_task_from_task_array(id){
    task_array.splice(task_array.indexOf(task_array.find(o => o.uid === get_uniqe_id_part(id)), 0), 1)
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


export function get_uniqe_id_part(id){
    return id.split('-')[1]
}

