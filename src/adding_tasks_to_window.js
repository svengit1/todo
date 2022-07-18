import {create_input_group_div} from ".//element_creation.js"
import {create_input_group_text_div} from ".//element_creation.js"
import {create_input_check_box} from ".//element_creation.js"
import {create_input_text} from ".//element_creation.js"
import {create_delete_btn} from ".//element_creation.js"
import { get_uniqe_id_part } from "./todo.js"
import { remove_task_from_task_array } from "./todo.js"
const el = document.getElementById("task_list")

export function add_tasks_to_window(tasks){
    el.textContent = ""
    console.log(tasks)
    for (let task of tasks){
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
                for (let task of tasks){
                    if (task.uid === get_uniqe_id_part(input_check_box.id)){
                        task.completed = true
                    }
                }
            } else{
                for (let task of tasks){
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
        delete_btn.addEventListener("click", 
        function(){
            remove_task_from_task_array(delete_btn.id)
            input_group_div.remove()
        })
    }
}