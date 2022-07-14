let addtodo=document.querySelector(".addTodo");
let inputField=document.querySelector(".input");
let task=document.querySelector(".tasks");
let actions=document.querySelector('.action');
let newtask=document.querySelector('.newtask');

addtodo.addEventListener('click',function()
{
    const value=inputField.value;
    if(value)
    {
        let para=document.createElement('p');
        let childdiv=document.createElement('div');
        childdiv.classList.add("newtask");

        let task_content = document.createElement('div');
		task_content.classList.add('content');

		childdiv.appendChild(task_content);

		let task_input = document.createElement('inputField');
		task_input.classList.add('text');
		task_input.type = 'text';
		task_input.value = value;
		task_input.setAttribute('readonly', 'readonly');

		task_content.appendChild(task_input);
        const task_actions = document.createElement('div');
		task_actions.classList.add('actions');

        


        
        let actionEdit=document.createElement('button');
        actionEdit.classList.add("DoneTask");
        let edit=document.createElement('button');
        edit.classList.add("editta");
        let actionDelete = document.createElement('button');
        actionDelete.classList.add("deleteTask");
        para.innerText=inputField.value;
        actionEdit.innerText="Done";
        edit.innerText="Edit";

        actionDelete.innerText="Delete";
        task_actions.appendChild(actionEdit);
		task_actions.appendChild(edit);
        task_actions.appendChild(actionDelete);



        childdiv.appendChild(para);
        childdiv.appendChild(task_actions);
        task.appendChild(childdiv);
        
        edit.addEventListener('click',function()
        {
            if (edit.innerText.toLowerCase() == "edit") {
				edit.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				edit.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}

        })
        var c=0;
        inputField.value="";

        actionEdit.addEventListener('click',function()
        {
            if(c==0)
            {
                let checked=document.createElement('span');
                checked.classList.add("check");
                checked.innerHTML = '<div id="tick-mark"></div>';
                para.appendChild(checked);
                c++;
            }


        })
        actionDelete.addEventListener('click',function()
        {
            task.removeChild(childdiv);
        })




    }
    else{
        alert("pls enter a value");
    }
})
inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addtodo.click();
    }
});
