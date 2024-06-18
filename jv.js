let editInput = document.getElementById("editInput");
let editItemButton = document.getElementById("editItemButton");
let nameList = document.getElementById("nameList");
//Mỗi khi nhất vào nút Eddit thì hiện thỉ ô input và điền giá trị từ li vào
nameList.addEventListener("click", (event) => {
  if (event.target.classList.contains("editButton")) {
    let li = event.target.parentNode;
    let name = li.firstChild.textContent.trim(); //Lấy tên từ li
    //Hiển thị oong Input và button
    editInput.style.display = "block";
    editItemButton.style.display = "block";
    //sử lý sự kiện click vào nút Edit item
    editItemButton.onclick = () => {
      let newName = editInput.value.trim(); //Lấy giá trị từ �
      if (newName !== "") {
        li.firstChild.textContent = newName; // cập  nhật lại tên trong li
        //ẩn lại ô input và button
        editInput.value = "";
        editInput.style.display = "none";
        editItemButton.style.display = "none";
      }
    };
  }
});
