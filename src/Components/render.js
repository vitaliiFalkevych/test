let render = (data) => {
    let taskContainer = document.getElementById('todoTask');
    taskContainer.innerHTML = '';
    data.map((item, idx) => (
        taskContainer.innerHTML += `<li>
                    <span class="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" class="custom-control-input" id="check${idx}">
                        <label class="custom-control-label" for="check${idx}"></label>
                    </span>
<span>${item.task}</span><span id="remove${idx}" class="delete">x</span></li>`
    ));
};

export default render;