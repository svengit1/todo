function create_element(tag_name, attributes_of_element){
    let element = document.createElement(tag_name)
    for (let attribute of attributes_of_element){
        element.setAttribute(attribute[0], attribute[1])
    }
    return element
}
export function create_input_group_div(task){
    let div = create_element("div", [["class", "input-group mb-3"], ["title", "task_list_item"], ["id", "group-" + task.uid.toString()]])
    return div
}

export function create_input_group_text_div(){
    let div = create_element("div", [["class", "input-group-text"]])
    return div
}

export function create_input_check_box(task){
    let check_box = create_element("input", [["class", "form-check-input mt-0"], ["type", "checkbox"], ["id", "checkbox-" + task.uid.toString()]])
    if (task.completed === true){
        check_box.setAttribute("checked", true)
    }
    
    return check_box
}

export function create_input_text(task){
    let text = create_element("input", [["class", "form-control"], ["type", "text"], ["value", task.task], ["id", "text-" + task.uid.toString()]])
    return text

}

export function create_delete_btn(task){
    let btn = create_element("button", [["class", "btn btn-outline-secondary"], ["id", "button-" + task.uid.toString()]])
    btn.style.display = "none"
    btn.innerHTML = "Delete"
    return btn
}