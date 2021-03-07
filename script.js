let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let res = JSON.parse(xhttp.responseText);
    showcard(res);
  }
};
xhttp.open("GET", "list.json", true);
xhttp.send();

const container = document.querySelector("#container");

function showcard(list) {
  list.map((obj) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="inner">
            ${obj.name}<br/>
            ${obj.semester} Semester, ${obj.branch}
        </div>
    `;
    container.appendChild(card);
  });
}