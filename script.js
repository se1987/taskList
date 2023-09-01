'use strict'

// 今日の日付を表示
let date = new Date();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let day = date.getDate();

document.getElementById("today").textContent = `${year}年${month}月${day}日`;

//　削除ボタンの制御
let buttons = document.getElementsByName("delete_btn");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let listItem = button.parentNode;
        listItem.parentNode.removeChild(listItem);
    });
});

// ToDoリスト → 完了リスト
let checkbox = document.querySelector('input[type="checkbox"]');
    
checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        const target = document.getElementsByClassName("done")[0];
        let listItem = checkbox.parentNode;
        target.appendChild(listItem);
    }
});

// ToDoリストに新しいタスクを追加する
let parentElement = document.getElementsByClassName("toDo")[0];

function addTodo (parentElement) {
    const newList = document.createElement("li");
    const newTodo = document.getElementById("form").word.value;
    // テキストをspanタグ内に挿入
    const todoSpan = document.createElement("span");
    todoSpan.textContent = newTodo;
    newList.appendChild(todoSpan);

// チェックボックス設定
    const check = document.createElement("input");
    check.type = 'checkbox';
    check.className = 'checkbox';
    check.value = newTodo;
    newList.textContent = newTodo;
// チェックボックスにイベントリスナーを追加
    check.addEventListener("change", function () {
        if (check.checked) {
            const target = document.getElementsByClassName("done")[0];
            let listItem = check.parentNode;
            target.appendChild(listItem);
        }
    });
// 削除ボタン設定
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


