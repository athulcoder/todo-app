const addButtonElement = document.querySelector("#add-btn");
const todoNameElement = document.querySelector("#todoname");
const todoDateElement = document.querySelector("#duedate");

//  get list element

const todolist = document.getElementById("todolist");
let list = [];

if (localStorage.getItem("mytodo")) {
  list = JSON.parse(localStorage.getItem("mytodo"));
}

const renderListHTML = () => {
  if (list.length >= 1) {
    todolist.innerHTML = list
      .map((item, index) => {
        return `<li>
            <span>${item.name}</span>
            <span>${item.date}</span>
            <button style="width: 100px;
                            height: 30px;
                            background-color: #ee0833;
                            border: none;
                            color: white;
                            border-radius: 6px;
                            height: 38px;"
                    Onclick=" list.splice(${index}, 1);
                     localStorage.setItem('mytodo', JSON.stringify(list));
                              renderListHTML();

                    ">Delete</button>
          </li>`;
      })
      .join("");
  } else {
    todolist.innerHTML = "No data found";
  }
};

addButtonElement.addEventListener("click", () => {
  let todoname = todoNameElement.value;
  let duedate = todoDateElement.value;

  if (todoname && duedate) {
    list.push({ name: todoname, date: duedate });

    localStorage.setItem("mytodo", JSON.stringify(list));
    todoDateElement.value = "";
    todoNameElement.value = "";
    renderListHTML();
  }
});

renderListHTML();
