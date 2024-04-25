const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const submit = document.getElementById("submit");
const list = document.getElementById("list");
const clear = document.getElementById("clear");

let isEdit = false;
// display data
const displayItems = () => {
  const items = getLocalItems();
  items.forEach((item) => addItem(item));
  checkInterface();
};

// submit item
const onItemSubmit = (event) => {
  event.preventDefault();

  const item = fullname.value;

  if (item == "") {
    alert("please add item");
    return;
  }

  const items = getLocalItems();
  if (items.includes(item)) {
    alert("this item already exists");
    return;
  }

  // edit item
  if (isEdit) {
    const editItem = list.querySelector(".edit");
    removeItemFromStorage(editItem.textContent);
    editItem.classList.remove(".edit");
    editItem.remove();
    isEdit = false;
  }

  // add item in DOM
  addItem(item);
  fullname.value = "";

  // add item in localstorage
  addItemInLocalStorage(item);
  checkInterface();
};

// remove item from localstorage
const removeItemFromStorage = (item) => {
  let items = getLocalItems();
  items = items.filter((i) => i != item?.replace("X", ""));

  localStorage.setItem("dotolist", JSON.stringify(items));
};
// add item in storage
const addItemInLocalStorage = (item) => {
  const items = getLocalItems();
  items.push(item);

  //   convert to json string and set in local storage
  localStorage.setItem("dotolist", JSON.stringify(items));
};
// add item in DOM
const addItem = (item) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn remove";
  deleteBtn.textContent = "X";

  li.appendChild(deleteBtn);

  list.appendChild(li);
};

// get data from local storage
const getLocalItems = () => {
  let data;
  if (localStorage.getItem("dotolist") == null) {
    data = [];
  } else {
    data = JSON.parse(localStorage.getItem("dotolist"));
  }

  return data;
};

const checkInterface = () => {
  const items = list.querySelectorAll("li");
  if (!items.length) {
    clear.style.display = "none";
  } else {
    clear.style.display = "block";
  }
};

// update item
const editItem = (item) => {
  isEdit = true;

  list.querySelectorAll("li").forEach((val) => val.classList.remove("edit"));
  item.classList.add("edit");
  fullname.value = item.textContent.replace("X", "");
};

// remove item
const removeItem = (item) => {
  item.remove();
  removeItemFromStorage(item.textContent);
  checkInterface();
};
// on click update item
const onClickItem = (event) => {
  console.log(event.target.parentElement);
  if (event.target.classList.contains("remove")) {
    removeItem(event.target.parentElement);
  } else {
    editItem(event.target);
  }
};

// clear all items
const clearItems = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  localStorage.removeItem("dotolist");
  checkInterface();
};

document.addEventListener("submit", onItemSubmit);
list.addEventListener("click", onClickItem);
clear.addEventListener("click", clearItems);
document.addEventListener("DOMContentLoaded", displayItems);
