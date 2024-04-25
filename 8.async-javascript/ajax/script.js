const xml = new XMLHttpRequest();

// endpoints
// api, json

xml.open("GET", "https://www.boredapi.com/api/activity");

// 5 values of read state

xml.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    const div = document.createElement("div");
    div.className = "result";
    div.innerHTML = `<strong>Activity</strong> - ${data.activity} <br/> <strong>Type</strong> - ${data.type} `;
    document.getElementById("ajax").appendChild(div);
  }
};

xml.send();
