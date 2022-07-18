export function enter_key_handler(){
    if (page_elements.new_task_input_box.value){
        task_array.push({"task": page_elements.new_task_input_box.value, "completed": false, "uid": generateUID()})
        page_elements.new_task_input_box.value = ""
        add_tasks_to_window(task_array)   
    }
}

export function all_tasks_link_handler(){
    set_active_task_group("all")
    add_tasks_to_window(task_array)
}
export function active_tasks_link_handler(){
    set_active_task_group("active")
    add_tasks_to_window(task_array.filter(task => task.completed === false))
}

export function completed_tasks_link_handler(){
    set_active_task_group("completed")
    add_tasks_to_window(task_array.filter(task => task.completed === true))
}

export function select_all_handler(){
    if (select_all_bool){
        switch_task_completion(select_all_bool)
    } else{
        switch_task_completion(select_all_bool)
    }
}
