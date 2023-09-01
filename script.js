'use strict'

// 今日の日付を表示
let date = new Date();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let day = date.getDate();

document.getElementById("today").textContent = `${year}年${month}月${day}日`;

const todoList = ["toDoリストの作成","リーダブルコードを読む"];

// ToDoリストに新しいタスクを追加する
let parentElement = document.getElementsByClassName("toDo")[0];

function addTodo (parentElement) {
    const newList = document.createElement("li");
    const newTodo = document.getElementById("form").word.value;
    // テキストをspanタグ内に挿入
    const todoSpan = document.createElement("span");
    todoSpan.textContent = newTodo;
    newList.appendChild(todoSpan);

    const check = document.createElement("input");
    check.type = 'checkbox';
    check.className = 'checkbox';
    check.value = newTodo;
    newList.textContent = newTodo;

    const button = document.createElement("button");
    button.type = 'submit';
    button.textContent = "削除";
    button.name = 'delete_btn';
    button.value = newTodo;
    newList.prepend(check);
    newList.appendChild(button);

// 削除ボタンにイベントリスナーを追加
    button.addEventListener("click", function() {
        let listItem = button.parentNode;
        listItem.parentNode.removeChild(listItem);
    });
    parentElement.appendChild(newList);

    return parentElement;
};

// 「追加」ボタンで新しいタスクを追加する
document.getElementById("form").onsubmit = function(event){
    event.preventDefault();
    return addTodo(parentElement);
};

//　削除ボタンの制御
let buttons = document.getElementsByName("delete_btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let listItem = button.parentNode;
        listItem.parentNode.removeChild(listItem);
    });
});

// ToDoリスト → 完了リスト
let checkboxes = document.querySelectorAll(".toDo input[type='checkbox']");

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        if (checkbox.checked === true) {
            const target = document.querySelector(".done ul");
            let listItem = checkbox.parentNode;
            target.appendChild(listItem.parentNode);
        } 
    });
});
