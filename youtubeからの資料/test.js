//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

//関数(メソッド)
function addList(user) {
  const list = document.createElement("li");
  list.innerText = user.name;
  lists.appendChild(list);
}

async function getUsers() {
    //データのやりとり
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}

async function listUsers() {
  const users = await getUsers();
  //DOM操作
  //forEachを使うことでユーザ１０個分を全部表示
  users.forEach(addList);
}

//イベント
window.addEventListener("load", listUsers);

button.addEventListener("click", listUsers);