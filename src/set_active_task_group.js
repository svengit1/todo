export function set_active_task_group(group){
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