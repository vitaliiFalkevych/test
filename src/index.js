import render from './Components/render';
import './styles/styles.scss';

let tasks = [];
const getElement = (idElement) => document.getElementById(idElement);

let todoTask = getElement('todoTask');
/*Click Event listener*/
todoTask.onclick = (e) => {
    if (e.target.className === 'custom-control-label') {
        e.target.parentNode.nextSibling.nextSibling.style = "text-decoration: line-through;";
    }
    if (e.target.className === 'delete') {
        deleteTasks((e.target.id).slice(6));
    }
};
/*Delete tasks*/
const deleteTasks = (taskId) => {
    console.log("Here is a task id: ", taskId);
    console.log(tasks);
    tasks.splice(taskId, 1);
    console.log(tasks);
    render(tasks);
};

/*Async function*/
async function getTasks(rootElement) {
    try {
        let result = await fetch('http://my-json-server.typicode.com/vitaliiFalkevych/part1/tasks');
        let data = await result.json();
        tasks = data;
        render(data);
    } catch (err) {
        console.log('error is: ', err)
    }
}

/*Get tasks from server*/
getTasks(todoTask);

