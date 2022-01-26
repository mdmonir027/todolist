const submitBtn = document.querySelector('#submitBtn');
const todoList = document.querySelector('#todoList');
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const value = document.querySelector('#inputText').value;
  const newListItem = `
    <li class="todoItem">
        <div class="todoItemWrapper">
        <div class="checkWrapper">
            <input type="checkbox" class="check" name="" id="" />
        </div>
        <p class="todoText">${value}</p>
        <div class="buttons">
            <button id="a" class="deleteBtn btn btn-danger">
            Delete
            </button>
        </div>
        </div>
    </li>
`;
  const previousItems = todoList.innerHTML;
  const newItems = previousItems + newListItem;
  todoList.innerHTML = newItems;
});
