import "./style.css";

interface Todo{
  readonly id: string;
  title: string;
  isCompleted: boolean;
}

const todos: Array<Todo> = [];

const todosContainer = document.querySelector('.todoContainer') as HTMLDivElement;

const todoInput = document.getElementsByName('title')[0] as HTMLInputElement;

const myForm = document.getElementById('myForm') as HTMLFormElement

myForm.onsubmit = (e:SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    id: String(Date.now()),
isCompleted:false
  }
  
  todos.push(todo);
  todoInput.value=''
  console.log(todos);
  renderTodo(todos);
}

const generateTodoItem = (todoss:Todo) => {
  const todo: HTMLDivElement = document.createElement('div');
  todo.className = 'todo';

  //       creating a checkbox  
  const checkBox: HTMLInputElement = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.className = 'isCompleted';
  checkBox.checked = todoss.isCompleted;
  checkBox.onchange = () => {
    todos.find((item) => {
      if (item.id === todoss.id) {
        item.isCompleted = checkBox.checked;
      }
})
    paragraph.className = checkBox.checked ? "textCut" : "";

}
  //      creating p for title 

  const paragraph: HTMLParagraphElement = document.createElement('p');
  paragraph.innerText = todoss.title;
    paragraph.className = todoss.isCompleted ? "textCut" : "";


  //     creating delete button

  const btn:HTMLButtonElement = document.createElement('button');
  btn.innerText = "X";
  btn.className = 'deleteBtb';
  btn.onclick = () => {
    deleteTodo(todoss.id);
}

  //     appending all to TodoItem
  todo.append(checkBox, paragraph, btn);

  todosContainer.append(todo);

}

const deleteTodo = (id:string) => {
  const idx = todos.findIndex((item => item.id == id));
  todos.splice(idx, 1)
  renderTodo(todos)
}
const renderTodo = (todos: Todo[]) => {
  todosContainer.innerText = '';
  todos.forEach((item) => {
    generateTodoItem(item);
  })
}