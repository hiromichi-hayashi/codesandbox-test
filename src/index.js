const onClickAdd = () => {
  //テキストボックスの値を取得・初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストの関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //buttonタグ
  //完了ボタンの実装
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    deleteFromIncompleteList(completebutton.parentNode);

    const completeTaret = completebutton.parentNode;
    const text = completeTaret.firstChild.innerText;

    completeTaret.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    const backbutton = document.createElement("button");
    backbutton.innerText = "戻る";

    //戻るボタン
    backbutton.addEventListener("click", () => {
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backbutton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    completeTaret.appendChild(li);
    completeTaret.appendChild(backbutton);

    document.getElementById("complete-list").appendChild(div);
  });

  //削除ボタンの実装
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    deleteFromIncompleteList(deletebutton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//完了リストに追加
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
