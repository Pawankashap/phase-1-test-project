document.getElementById("loadBtn").addEventListener("click", loadData);

function loadData() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("list");
            list.innerHTML = "";

            data.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.name} - $${item.price}`;
                list.appendChild(li);
            });
        })
        .catch(error => console.error(error));
}