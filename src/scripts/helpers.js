import {render} from "./render.js";


export function addTask(event, {tasks}){
    if (event.key === 'Enter'){
        tasks.push({
            id: getId(tasks),
            name: event.target.value,
            status: false,
        })
        render()
    }
}

function getId(tasks){
   const ids = tasks.map((task) => task.id)

    if (ids.length === 0){

        return 1
    }

    return Math.max(...ids) + 1;
}

export function deleteTask(id, {tasks}) {
    const task = tasks.filter((task) => task.id === id)[0]
    const idx = tasks.indexOf(task)
    tasks.splice(idx, 1)

    render()
}

export function changeStatus (id, {tasks}){
    tasks.forEach((task) => {
        if(task.id === id){

            task.status = !task.status
        }
    })
   render()
}


export function setFilter(filter, {filters}) {
    filters.forEach((item) => {
        if(item === filter){
            item.isActive = true;
        }else {
            item.isActive = false;

        }
    })
  render()
}