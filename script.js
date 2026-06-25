// todolist
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('button');
const list = document.getElementById('taskList');
const clearBtn = document.getElementById('clearButton');

// event listener untuk tombol add
addBtn.addEventListener('click', function() {
  const task = input.value;
  if (task) {
    const li = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
    
    li.appendChild(taskText);


    const checkbtn = document.createElement('button');
    checkbtn.textContent = 'Check';
    checkbtn.classList.add('btn-centang');
    li.appendChild(checkbtn);

    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.classList.add('btn-hapus');
    li.appendChild(deletebtn);

    list.appendChild(li);
    input.value = '';

  
    // event listener untuk tombol check
    checkbtn.addEventListener('click', function() {
      if (taskText.style.textDecoration === 'line-through') {
        taskText.style.textDecoration = 'none';
      } else {
        taskText.style.textDecoration = 'line-through';
      }

    });
// event listener untuk tombol delete
    deletebtn.addEventListener('click', function() {
      list.removeChild(li);
    });
  }
  else {
    alert('Please enter a task!');
  }

    // event listener untuk tombol clear
    clearBtn.addEventListener('click', function() {
      list.innerHTML = '';
    });

});