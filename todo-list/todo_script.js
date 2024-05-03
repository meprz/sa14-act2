
const list = document.getElementById("list");
const item = document.getElementById("item");
const name = document.getElementById("name");
const details = document.getElementById("details");

item.addEventListener("submit", function (e) {
    e.preventDefault();
    const nameInfo = name.value;
    const detailsInfo = details.value;
    
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span class="name-info">${nameInfo}</span>
                            <span class="details-info">${detailsInfo}</span>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>`;
    
    list.appendChild(listItem);
    name.value = "";
    details.value = "";
});

list.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-btn")) {
        const listItem = e.target.parentNode;
        const nameInfo = listItem.querySelector(".name-info").textContent;
        const detailsInfo = listItem.querySelector(".details-info").textContent;
        name.value = nameInfo;
        details.value = detailsInfo;
        list.removeChild(listItem);
    }
});

list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        const listItem = e.target.parentNode;
        list.removeChild(listItem);
    }
});
